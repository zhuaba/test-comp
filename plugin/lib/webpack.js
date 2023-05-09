const JSZip = require('jszip')
const RawSource = require('webpack-sources').RawSource
const { getCompilerHooks, WebpackManifestPlugin } = require('webpack-manifest-plugin')
const assert = require('assert')

const { FILE_NAME, PROJECT_NAME, IMAGE_EXT, FONT_EXT } = require('./constants')
const { getFileType, convertPath } = require('./utils')
const { updateConf } = require('./sven')

const filters = {
  assetsFilter: filepath => !/.(map|ico)$/.test(filepath),
  jsFilter: () => true,
  cssFilter: () => true,
  fontFilter: () => true,
  htmlFilter: filepath => !(filepath.endsWith('degrade.html') || filepath.endsWith('template.html')),
  imageFilter: () => true,
}
const zip = new JSZip()

class GSRWebpackPlugin extends WebpackManifestPlugin {
  constructor(options = {}) {
    // TODO: 运行时格式校验
    super({
      fileName: options.filename || FILE_NAME,
      filter: options.assetsFilter || filters.assetsFilter,
      generate: (seed, files) => {
        return files.reduce((man, file) => {
          const path = convertPath(options.assetsprefix, file.path)
          const type = [ 'js', 'css', 'html', ...IMAGE_EXT, ...FONT_EXT ]

          type.forEach(type => {
            const reg = new RegExp(`.${type}$`)
            let key
            if (IMAGE_EXT.includes(type)) {
              key = 'image'
            } else if (FONT_EXT.includes(type)) {
              key = 'font'
            } else {
              key = type
            }

            const filterFunc = options[`${key}Filter`] || filters[`${key}Filter`]
            const result = filterFunc(path)

            if (result) {
              if (reg.test(path)) {
                if (man[key]) {
                  man[key].push(path)
                } else {
                  man[key] = [path]
                }
              }
            }
          })
          return man
        }, seed)
      },
    })

    this.svenPushName = options.svenPushName || PROJECT_NAME
    this.assetsprefix = options.assetsprefix || false
    this.config = options.config
    if (this.config.rules) {
      assert.ok(Array.isArray(this.config.rules), new Error('[GSR规则]: 如启用 `rules` 字段，请以对象数组格式传入多个GSR配置'))
    }
    this.hash = options.hash || Date.now()
    this.folderName = options.foloderName || 'package'
    this.dryRun = options.dryRun || false
    if (!this.svenPushName) {
      throw new Error('need a PROJECT_NAME ...')
    }
  }

  apply(compiler) {
    const { name, version } = require('../package.json')
    console.log(`${name}@${version} is running at ${compiler.name}`)
    if (!this.dryRun && !process.env.GITLAB_CI) {
      compiler.hooks.emit.tap('GSRWebpackPlugin', () => {
        console.warn('[CI] GSRWebpackPlugin 现只支持 Gitlab CI 中生效，请使用 jinkela-cli ci 发布')
        process.exit(1)
      })
      return
    }

    let publicPath = convertPath(this.assetsprefix, compiler.options.output.publicPath)
    if (!publicPath.endsWith('/')) {
      publicPath += '/'
    }

    compiler.hooks.emit.tapAsync('GSRWebpackPlugin', (compilation, callback) => {
      const folder = zip.folder(this.folderName)
      for (const filename in compilation.assets) {
        if (!compilation.assets.hasOwnProperty(filename)) {
          continue
        }

        const ext = getFileType(filename)
        const fileTypes = [ 'js', 'css', 'html', ...IMAGE_EXT, ...FONT_EXT ]
        const source = compilation.assets[filename].source()

        if (!fileTypes.includes(ext)) {
          continue
        }

        const assetFilter = this.options.assetsFilter || filters.assetsFilter
        if (!assetFilter(filename)) {
          continue
        }

        const jsFilter = this.options.jsFilter || filters.jsFilter
        if (ext === 'js' && !jsFilter(filename)) {
          continue
        }

        const cssFilter = this.options.cssFilter || filters.cssFilter
        if (ext === 'css' && !cssFilter(filename)) {
          continue
        }

        const htmlFilter = this.options.htmlFilter || filters.htmlFilter
        if (ext === 'html' && !htmlFilter(filename)) {
          continue
        }

        const imageFilter = this.options.imageFilter || filters.imageFilter
        if (IMAGE_EXT.includes(ext) && (!this.config.deadline || !imageFilter(filename))) {
          continue
        }

        const fontFilter = this.options.fontFilter || filters.fontFilter
        if (FONT_EXT.includes(ext) && !fontFilter(filename)) {
          continue
        }

        if (filename.endsWith('inline.html')) {
          continue
        }

        folder.file(filename, source)
      }

      zip
        .generateAsync({
          type: 'nodebuffer',
          streamFiles: true,
          compression: 'DEFLATE',
          compressionOptions: { level: 9 },
        })
        .then(content => {
          compilation.assets[`${this.folderName}.${this.hash}.zip`] = new RawSource(content)
          callback()
        })
    })

    super.apply(compiler)

    const { beforeEmit, afterEmit } = getCompilerHooks(compiler)

    const configCompletion = (config, inlineHTML, manifest) => {
      assert.ok(config.pv, new Error('[GSR规则]: 配置缺少必填字段 `pv`'))
      assert.ok(config.url, new Error('[GSR规则]: 配置缺少必填字段 `url`'))
      config.url = convertPath(this.assetsprefix, config.url)
      config.hash = this.hash
      if (config.prefetch && Array.isArray(config.prefetch) && config.prefetch.length > 0) {
        const isUrlPattern = config.url.includes('*')
        config.prefetch = config.prefetch.map(item => {
          if (!isUrlPattern && item.entry) throw new Error('[GSR规则]: 当 url 是路由通配符时才可填写字段 `prefetch[].entry`')
          item.method = 'get'
          item.headers = {
            'Content-Type': 'application/json',
            ...(item.headers || {}),
          }
          item.cookieParams = {
            csrf: 'bili_jct',
            ...(item.cookieParams || {}),
          }

          return item
        })
      }

      if (inlineHTML) {
        if (manifest.html.length !== 2) {
          throw new Error('GSRWebpackPlugin：manifest 生成的 html 数量不对', manifest.html)
        }
        config.preload = `${inlineHTML}?hash=${this.hash}`
      }

      // 增加 zip 包到 manifest
      config.resource = {
        publicPath,
        htmlName: 'index.html',
        package: `${publicPath}${this.folderName}.${this.hash}.zip`,
      }
    }

    beforeEmit.tap('GSRWebpackPlugin', manifest => {
      if (this.config) {
        const inlineHTML = manifest.html.find(_ => _.endsWith('inline.html'))

        // 预加载过期时间（ms），过期后就下线预加载
        this.config.deadline = this.config.deadline ? new Date(this.config.deadline).getTime() : ''

        // 配置信息补全
        if (this.config.rules) {
          for (const singleRule of this.config.rules) {
            configCompletion(singleRule, inlineHTML, manifest)
          }
        } else {
          configCompletion(this.config, inlineHTML, manifest)
        }

        // 去掉原有的资源文件链接
        delete manifest.js
        delete manifest.css
        delete manifest.font
        delete manifest.html
        delete manifest.image

        manifest = {
          ...this.config,
          ...manifest,
        }
      }

      return manifest
    })

    afterEmit.tap('GSRWebpackPlugin', manifest => {
      if (process.env.PUSH_CONFIG_ALLOW) {
        updateConf(
          `${this.svenPushName}-gsr`,
          `${this.svenPushName} gsr manifest`,
          JSON.stringify(manifest, '', 2),
        )
      }
    })
  }
}

module.exports = GSRWebpackPlugin
