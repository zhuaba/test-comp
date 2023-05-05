<template>
  <div v-if="rendered" class="v-dialog">
    <transition :name="`v-transition--${transition}`" @after-enter="$emit('opened')" @after-leave="$emit('closed')">
      <div v-show="showBox" ref="wrap" class="v-dialog__wrap">
        <div class="v-dialog__core" :style="coreStyle">
          <div class="v-dialog__header">
            <slot name="header" />
          </div>
          <div ref="body" class="v-dialog__body">
            <slot />
          </div>
          <div class="v-dialog__footer">
            <slot name="footer" />
          </div>
        </div>
        <span v-if="hasOuter" class="v-dialog__outer">
          <slot name="outer" />
        </span>
      </div>
    </transition>
  </div>
</template>

<script>
import '../../theme/dialog.scss'
import popup from '../../mixins/popup'

export default {
  name: 'VDialog',
  mixins: [popup],
  props: {
    value: {
      type: Boolean,
      default: false,
      required: true
    },
    width: {
      type: String,
      default: '280px'
    },
    height: {
      type: String,
      default: '300px'
    },
    transition: {
      type: String,
      default: 'none'
    },
    background: {
      type: String,
      default: ''
    },
    radius: {
      type: String,
      default: '5px'
    },
    padding: {
      type: String,
      default: ''
    }
  },
  computed: {
    hasOuter() {
      return !!this.$slots.outer
    },
    overlayOpts() {
      return {
        el: this.$refs.wrap,
        show: this.mask,
        lock: this.lock,
        unlock: [this.$el, this.$refs.body],
        md: this.transition === 'md',
        click: this.maskClose
          ? () => {
              this.close()
            }
          : null
      }
    },
    coreStyle() {
      const result = {
        width: this.width,
        height: this.height,
        borderRadius: this.radius,
        padding: this.padding
      }

      if (!this.background) {
        return result
      }
      // eslint-disable-next-line
      if (/^#/.test(this.background)) {
        result.backgroundColor = this.background
      } else {
        result.backgroundColor = 'transparent'
        result.backgroundImage = `url(${this.background})`
      }

      return result
    }
  },
  watch: {
    value(val) {
      val ? this.open() : this.close()
    }
  },
  mounted() {
    if (this.value) {
      this.open()
    }
    document.body.appendChild(this.$el)
  },
  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
</script>
