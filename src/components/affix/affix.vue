<template>
  <div class="v-affix">
    <div v-show="showFixedShim" :style="fixedShimStyle" />
    <div ref="wrap" :class="{ 'v-affix--fixed': !disabled && isFixed }" :style="fixedSlotStyle">
      <slot />
    </div>
  </div>
</template>

<script>
import '../../theme/affix.scss'
import { on, off } from '../../utils/event'
import { getScroll, getOffset, getScrollParent } from '../../utils/dom'

export default {
  name: 'VAffix',
  props: {
    fixedTop: { // eslint-disable-line
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isFixed: false,
      showFixedShim: false,
      fixedShimStyle: {},
      fixedSlotStyle: {}
    }
  },
  mounted() {
    if (this.fixedTop === undefined) {
      return
    }
    const target = getScrollParent(this.$el)
    on(target, 'scroll', this.handleScroll)
    on(window, 'resize', this.handleScroll)
    this.$nextTick(() => {
      if (this.$refs.wrap && this.$el && this.$el.offsetWidth) {
        this.handleScroll()
      }
    })
  },
  beforeDestroy() {
    if (this.fixedTop === undefined) {
      return
    }
    const target = getScrollParent(this.$el)
    off(target, 'scroll', this.handleScroll)
    off(window, 'resize', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (this.disabled) {
        this.isFixed = false
        this.showFixedShim = false
        this.fixedSlotStyle = null
        return
      }
      const isFixed = this.isFixed
      const scrollTop = getScroll(window, true)
      const elOffset = getOffset(this.$el)
      // Fixed Top
      if (elOffset.top - this.fixedTop <= scrollTop && !isFixed) {
        this.isFixed = true
        const { wrap } = this.$refs
        this.fixedShimStyle = {
          width: `${wrap.clientWidth}px`,
          height: `${wrap.clientHeight}px`
        }
        this.showFixedShim = true
        this.fixedSlotStyle = {
          top: `${this.fixedTop}px`,
          left: `${elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
        }
        this.$emit('on-fixed', true)
      } else if (elOffset.top - this.fixedTop > scrollTop && isFixed) {
        this.showFixedShim = false
        this.fixedShimStyle = {}
        this.isFixed = false
        this.fixedSlotStyle = null
        this.$emit('on-fixed', false)
      }
    }
  }
}
</script>
