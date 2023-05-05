<template>
  <transition name="v-toast__transition">
    <div v-if="visible" :class="{ 'v-toast__mask': type !== 'loading' }" class="v-toast__wrap">
      <div :class="`v-toast--${type}`" class="v-toast">
        <i class="v-toast__font bili-font"></i>
        <span class="v-toast__text" v-text="message" />
      </div>
    </div>
  </transition>
</template>

<script>
import '../../theme/toast.scss'

export default {
  name: 'VToast',
  data() {
    return {
      id: '',
      type: '',
      message: '',
      visible: false
    }
  },
  methods: {
    show(options) {
      this.message = options.message
      this.type = options.type
      const id = Math.random().toString(36).substring(3, 6)
      this.id = id
      this.visible = true

      if (options.type !== 'loading') {
        setTimeout(() => {
          this.hide(id)
        }, options.duration)
      }
    },
    hide(id) {
      if (id && id !== this.id) {
        return
      }
      this.visible = false
    }
  }
}
</script>
