<template>
  <div v-if="length" class="v-swipe" @touchstart.stop @touchmove.stop @touchend.stop>
    <div ref="wrap" class="v-swipe__wrap">
      <div v-for="(item, idx) in length" :key="item" class="v-swipe__item">
        <slot :name="`${idx}`" />
      </div>
    </div>
    <div v-if="length > 1 && indicator" class="v-swipe__indicator">
      <div
        v-for="(item, idx) in length"
        :key="item"
        :class="{ 'is-active': idx === active }"
        class="v-swipe__indicator__item"
      />
    </div>
  </div>
</template>

<script>
import '../../theme/swipe.scss'
import Slide from '../../utils/slide'

export default {
  name: 'VSwipe',
  props: {
    duration: {
      type: Number,
      default: 500
    },
    autoplay: {
      type: Number,
      default: 2000
    },
    index: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    },
    length: {
      type: Number,
      default: 0
    },
    indicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      active: this.index,
      timer: 0,
      slider: null,
      stats: [this.index]
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.slider && this.slider.destroy()
  },
  methods: {
    init(loop = 0) {
      const wrap = this.$refs.wrap
      if (!wrap || !wrap.children) {
        if (loop > 20) {
          return
        }
        setTimeout(() => {
          this.init(loop + 1)
        }, 100)
        return
      }
      this.slider = new Slide({
        wrap,
        loop: this.loop,
        index: this.active,
        animated: true,
        duration: this.duration,
        callback: (index) => {
          this.active = index
          this.$emit('change', index)
          if (!~this.stats.indexOf(index)) {
            this.stats.push(index)
            this.$emit('report', index)
          }
        }
      })
      this.play()
      this.$emit('change', this.active)
      this.$emit('report', this.active)
    },
    play() {
      if (!this.autoplay) {
        return
      }
      this.timer = setInterval(() => {
        if (!this.slider.offsetWidth) {
          return
        }
        this.slider.next(this.autoplay)
      }, this.autoplay)
    },
    reClone() {
      this.slider && this.slider._cloneShadow()
    },
    jump(index) {
      if (!this.slider) {
        return
      }
      this.slider.slide(index)
    }
  }
}
</script>
