<template>
  <div class="v-alert">
    <div ref="wrap" :class="[md ? 'v-alert--md' : 'v-alert--ios']" class="v-alert__wrap">
      <transition :name="md ? 'v-transition--md' : 'v-transition--ios'">
        <div v-if="visible" :class="{ 'v-alert--vertical': vertical }" class="v-alert__box">
          <div class="v-alert__title">
            <p v-text="title"></p>
          </div>
          <div class="v-alert__message" v-text="message"></div>
          <div v-if="input" class="v-alert__input">
            <input ref="input" v-bind="input" spellcheck="false" />
          </div>
          <div class="v-alert__buttons">
            <div
              v-for="(item, index) in buttons"
              :key="index"
              :style="{ width: `${100 / buttons.length}%` }"
              @click="clickButton(index)"
              v-text="item"
            />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import '../../theme/alert.scss'
import overlay from '../../prototypes/overlay'

export default {
  name: 'VAlert',
  props: {
    md: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      title: '',
      message: '',
      buttons: [],
      input: null,
      callback: null,
      vertical: false,
      visible: false,
      overlayId: ''
    }
  },
  beforeDestroy() {
    this.hide()
  },
  methods: {
    show(options) {
      if (this.visible) {
        return
      }
      this.title = options.title || '提示'
      this.message = options.message || ''
      this.buttons =
        options.buttons === undefined
          ? ['确定']
          : (typeof options.buttons === 'string' ? [options.buttons] : options.buttons) || []
      this.input = options.input
        ? {
            ...options.input,
            placeholder: options.input.placeholder || '请输入',
            type: options.input.type || 'text'
          }
        : null
      this.vertical = options.vertical || false
      this.callback = options.callback || null
      this.overlayId = overlay.show({
        el: this.$refs.wrap,
        md: this.md,
        click: options.maskClose ? this.hide : null
      })
      this.visible = true
    },
    hide() {
      if (!this.visible) {
        return
      }
      this.visible = false
      overlay.hide(this.overlayId)
    },
    clickButton(index) {
      if (this.callback) {
        const value = this.input ? this.$refs.input.value : undefined
        this.callback(index, value)
      }
      this.hide()
    }
  }
}
</script>
