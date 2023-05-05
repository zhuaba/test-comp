<template>
  <button :class="classList" :disabled="disabled || loading" @click="handle">
    <em v-if="delayLoading" class="loading" />
    <slot />
  </button>
</template>

<script>
import '../../theme/button.scss'

export default {
  name: 'VButton',
  props: {
    text: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'primary',
      validator: (val) => ~['primary', 'success', 'info', 'warning', 'danger'].indexOf(val)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (val) => ~['small', 'medium', 'large'].indexOf(val)
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      delayLoading: this.loading
    }
  },
  computed: {
    classList() {
      const prefix = 'v-btn'
      return {
        [prefix]: true,
        [`${prefix}--text`]: !!this.text,
        [`${prefix}--icon`]: !!this.icon,
        [`${prefix}--plain`]: !!this.plain,
        [`${prefix}--block`]: !!this.block,
        [`${prefix}--round`]: !!this.round,
        [`${prefix}--loading`]: !!this.delayLoading,
        [`${prefix}--disabled`]: !!this.disabled,
        [`${prefix}--${this.theme}`]: !!this.theme,
        [`${prefix}--${this.size}`]: !!this.size
      }
    }
  },
  watch: {
    loading(val) {
      if (this.delay <= 0 || !val) {
        this.delayLoading = val
        return
      }
      setTimeout(() => {
        if (this.loading) {
          this.delayLoading = true
        }
      }, this.delay)
    }
  },
  methods: {
    handle() {
      if (this.loading || this.disabled) {
        return
      }
      this.$emit('click')
    }
  }
}
</script>
