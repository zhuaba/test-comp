<template>
  <div
    class="v-range"
    :class="[[vertical ? 'v-range--ver' : 'v-range--hoz'], { 'is-disabled': disabled }]"
    @click="_handleClick"
  >
    <div ref="subway" class="v-range__subway">
      <div class="v-range__over" :style="overStyle" />
    </div>
    <div ref="dot" class="v-range__dot">
      <transition v-if="tip" name="v-range__popup">
        <div v-show="isFocus" class="v-range__tip" v-text="current" />
      </transition>
      <div class="v-range__core"></div>
    </div>
  </div>
</template>

<script>
import '../../theme/range.scss'
import Scroll from '../../utils/scroll'

const DURATION = 200

/**
 * TODO
 * 1. 分度
 * 2. 双指示器
 */

export default {
  name: 'VRange',
  props: {
    value: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    tip: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      init: false,
      scale: 0,
      current: 0,
      scroller: null,
      isFocus: false
    }
  },
  computed: {
    overStyle() {
      const result = {}
      if (!this.init) {
        result.transitionDuration = `${DURATION}ms`
      }
      if (this.vertical) {
        result.transform = `scaleY(${this.scale})`
      } else {
        result.transform = `scaleX(${this.scale})`
      }
      return result
    }
  },
  watch: {
    current(val) {
      this.$emit('input', val)
    },
    value(val) {
      this.current = val
    },
    disabled(val) {
      this.scroller && this.scroller.disable(val)
    }
  },
  mounted() {
    this._initScroller()
  },
  methods: {
    _handleClick(evt) {
      if (this.disabled) {
        return
      }
      let offset
      let maxOffset
      const rect = evt.currentTarget.getBoundingClientRect()
      this.init = false
      this.isFocus = true
      if (this.vertical) {
        maxOffset = rect.height
        offset = evt.pageY - rect.top - maxOffset
      } else {
        maxOffset = rect.width
        offset = evt.pageX - rect.left
      }
      const val = Math.abs((offset / maxOffset) * (this.max - this.min)) | 0
      this.scale = parseFloat(Math.abs(offset / maxOffset)).toFixed(2)
      this.current = val - (val % this.step) + this.min
      this.scroller.scroll(offset, DURATION)
      setTimeout(() => {
        this.init = true
        this.isFocus = false
      }, DURATION)
    },
    _initScroller() {
      const subway = this.$refs.subway
      const { vertical, step, max, min, value } = this
      const maxOffset = vertical ? subway.offsetHeight : subway.offsetWidth
      this.scroller = new Scroll({
        el: this.$refs.dot,
        maxOffset: vertical ? 0 : maxOffset,
        minOffset: vertical ? maxOffset : 0,
        vertical,
        disabled: this.disabled,
        startCallback: () => {
          this.isFocus = true
        },
        moveCallback: (offset) => {
          const val = Math.abs((offset / maxOffset) * (max - min)) | 0
          this.scale = parseFloat(Math.abs(offset / maxOffset)).toFixed(2)
          this.current = val - (val % step) + min
        },
        endCallback: () => {
          this.isFocus = false
        }
      })
      if (value <= min) {
        this.current = min
        this.init = true
        return
      }
      if (value >= max) {
        this.current = max
        this.scale = 1
        this.scroller.scroll(maxOffset, DURATION)
      } else {
        const offset = maxOffset * ((value - min) / (max - min))
        this.current = value
        this.scale = parseFloat(offset / maxOffset).toFixed(2)
        this.scroller.scroll(vertical ? -offset : offset, DURATION)
      }
      setTimeout(() => {
        this.init = true
      }, DURATION)
    }
  }
}
</script>
