import { isServer } from '../../utils/helper'

const debug = (opt = { js: false, css: false, isDev: false, version: '' }) => {
  if (!opt.isDev) {
    return
  }

  if (isServer) {
    return
  }

  if (opt.css) {
    ;[].forEach.call(document.querySelectorAll('*'), (a) => {
      a.style.outline = '1px solid #' + (~~(Math.random() * (1 << 24))).toString(16)
    })
  }

  if (opt.js) {
    window.__debug_sakura_js__ = true
  }

  const printer = (text, color) => {
    // eslint-disable-next-line
    console.log(
      `%c @bilibili/sakura %c ${text} %c`,
      `background:${color} ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff;border: 1px solid ${color}`,
      `background:transparent ; padding: 1px; border-radius: 0 3px 3px 0;border: 1px solid ${color}`,
      'background:transparent'
    )
  }

  const logger = {
    info: (msg) => {
      printer(msg, '#ADB5BD')
    },
    warn: (msg) => {
      printer(msg, '#faab48')
    },
    success: (msg) => {
      printer(msg, '#00a1d6')
    },
    error: (msg) => {
      printer(msg, '#FA5A57')
    }
  }

  const xhr = new XMLHttpRequest()
  const changeLog = 'http://fe-mng.bilibili.co/v/van/h5/guide/changes.html'
  xhr.open('GET', 'http://fe-mng.bilibili.co/v/van/h5', true)
  xhr.onload = () => {
    try {
      const latest = xhr.responseText.split('</title>')[0].split('sakura ').pop()
      if (!opt.version) {
        logger.info(`最新版为：${latest}`)
        return
      }
      if (opt.version === latest) {
        logger.success('现在是最新版~ so cool~！')
        return
      }
      const tmp1 = opt.version.split('.')
      const tmp2 = latest.split('.')
      if (tmp1[0] !== tmp2[0] || tmp1[1] !== tmp2[1]) {
        logger.error(`有大版本更新，请阅读更新日志！${changeLog}`)
        return
      }
      logger.warn(`有小版本更新，请阅读更新日志！${changeLog}`)
    } catch (e) {
      // do nothing
    }
  }
  xhr.send()
}

export default debug
