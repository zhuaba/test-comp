<template>
  <div :class="{ 'v-uploader--custom': hasSlot, 'v-uploader--single': limit === 1 }" class="v-uploader">
    <slot :list="fileList" name="list">
      <div v-if="fileList.length" class="v-uploader__files">
        <div v-for="(item, index) in fileList" :key="index + item.id" class="v-uploader__item">
          <template v-if="item.url">
            <slot name="display">
              <img :src="item.url" class="v-uploader__item__poster" />
            </slot>
          </template>
          <i
            v-if="item.status !== 'loading' && showClose"
            class="bili-font ic_input_close v-uploader__item__cancel"
            @click="remove(index)"
          />
          <div v-if="item.status === 'loading'" class="v-uploader__item__loading v-uploader__item__mask">
            <div />
          </div>
          <div v-if="item.status === 'success'" class="v-uploader__item__status is-success">
            <i class="bili-font ic_success" />
          </div>
          <div v-if="item.status === 'error'" class="v-uploader__item__mask">
            <span v-text="item.message" />
            <div class="v-uploader__item__status is-error">
              <i class="bili-font ic_error" />
            </div>
          </div>
        </div>
      </div>
    </slot>
    <div class="v-uploader__action" @click="_emitActionClick">
      <input
        ref="input"
        :multiple="limit !== 1"
        :disabled="isDisabled"
        :accept="fileAccept"
        type="file"
        name="file"
        @change="_handleInputSelect"
      />
      <div class="v-uploader__action__wrap">
        <slot name="action">
          <div class="v-uploader__btn">
            <i class="bili-font ic_add" />
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { readFile, formatData, formatResp, formatReq, convertReactivityData } from './utils'
import ajax from './ajax'
import '../../theme/uploader.scss'

export default {
  name: 'VUploader',
  props: {
    value: {
      type: [Array, Object, String],
      default: ''
    },
    url: {
      type: String,
      default: '//api.bilibili.com/x/upload/web/image'
    },
    bucket: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    accept: {
      type: [String, Array],
      default: 'image/*'
    },
    limit: {
      type: Number,
      default: 1,
      validator: (val) => val >= 1
    },
    oversize: {
      type: [String, Number],
      default: 0,
      validator: (val) => val >= 0
    },
    cookie: {
      type: Boolean,
      default: true
    },
    auto: {
      type: Boolean,
      default: true
    },
    http: {
      type: Function,
      default: ajax
    },
    required: {
      type: Boolean,
      default: false
    },
    transformRequest: {
      type: Function,
      default: formatReq
    },
    transformResponse: {
      type: Function,
      default: formatResp
    }
  },
  data() {
    return {
      ...convertReactivityData(this.value, this.limit)
    }
  },
  computed: {
    hasSlot() {
      return this.$slots.action || this.$slots.list
    },
    isDisabled() {
      return this.disabled || this.fileList.length > this.limit
    },
    showClose() {
      return !(this.required && this.fileList.length === 1)
    },
    fileAccept() {
      if (typeof this.accept === 'string') {
        return this.accept
      }
      return this.accept.join(', ')
    }
  },
  watch: {
    fileList: {
      handler(val) {
        const files = val.filter((_) => _.status === 'success')
        if (!files.length && this.required) {
          return
        }
        if (this.fileType === 'array') {
          this.$emit('input', files)
          return
        }
        if (this.fileType === 'object') {
          this.$emit('input', files[0] || {})
          return
        }
        return this.$emit('input', files[0] ? files[0].url : '')
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    set(value) {
      const { fileType, fileList } = convertReactivityData(value, this.limit)
      this.fileType = fileType
      this.fileList = fileList
    },
    upload() {
      this._updateToServer(this.fileList)
    },
    images() {
      return this.fileList.filter((_) => _.status === 'success')
    },
    remove(index) {
      this.fileList.splice(index, 1)
      this.$refs.input.value = ''
      this.$emit('change')
    },
    _readImage(files) {
      const callback = (fileList) => {
        if (this.limit === 1) {
          this.fileList = fileList.filter((_) => _)
        } else {
          this.fileList = this.fileList.concat(fileList.filter((_) => _))
        }

        if (this.auto) {
          this._updateToServer(fileList)
        }
      }

      Promise.all(files.map((file) => readFile(file))).then((contents) => {
        const fileList = files.map((file, index) => {
          const result = { file }

          if (contents[index]) {
            result.url = contents[index]
            if (this.oversize && this.oversize < file.size) {
              result.status = 'error'
              result.message = '图片体积过大'
            } else {
              result.status = 'preview'
            }
          } else {
            result.status = 'error'
            result.message = '图片读取失败'
          }

          return formatData(result)
        })

        callback(fileList)
      })
    },
    _emitActionClick() {
      this.$emit('click')
    },
    _updateImage(id, status, extra = null) {
      this.fileList.forEach((item) => {
        if (item.id === id) {
          item.status = status
          if (extra) {
            Object.keys(extra).forEach((key) => {
              item[key] = extra[key]
            })
          }
        }
      })
    },
    _updateToServer(list) {
      const upList = list.filter((_) => _.status === 'preview')
      if (!upList.length) {
        return
      }

      const dataList = upList.map((_) => {
        const form = {
          file: _.file
        }

        if (this.bucket) {
          form.bucket = this.bucket
        }

        return {
          id: _.id,
          form: this.transformRequest ? this.transformRequest(form) : form
        }
      })

      const formList = dataList.map((_) => {
        const form = new FormData()
        Object.keys(_.form).forEach((key) => {
          form.append(key, _.form[key])
        })

        return {
          ..._,
          form
        }
      })

      formList.forEach((data) => {
        this._updateImage(data.id, 'loading')
        const options = {
          withCredentials: this.cookie,
          data: data.form,
          action: this.url,
          onSuccess: (res) => {
            this._handleUploadSuccess(data, res)
          },
          onError: () => {
            this._handleUploadError(data)
          }
        }
        this.http(options)
      })
    },
    _handleInputSelect(e) {
      const { files } = e.target
      if (this.disabled || !files.length) {
        return
      }
      let postFiles = [].slice.call(files)
      postFiles = postFiles.slice(0, Math.max(this.limit - this.fileList.length, 1))
      this._readImage(postFiles)
    },
    _handleUploadError(source) {
      this._updateImage(source.id, 'error', {
        message: '上传失败'
      })
      this.$emit('change')
    },
    _handleUploadSuccess(source, res) {
      const resp = this.transformResponse ? this.transformResponse(res) : res
      const id = source.id
      if (resp.url) {
        this._updateImage(id, 'success', resp)
      } else {
        this._updateImage(id, 'error', {
          message: resp.message
        })
      }
      this.$emit('change')
    }
  }
}
</script>
