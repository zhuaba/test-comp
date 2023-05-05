<script>
import 'intersection-observer'
import '../../theme/navbar.scss'
import { isArray } from '../../utils/types'

export default {
  name: 'VNavbar',
  props: {
    color: {
      type: [String, Array],
      default: '#fff'
    },
    backgroundColor: {
      type: [String, Array],
      default: '#FB7299'
    },
    backgroundImage: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    fixed: {
      type: Boolean,
      default: true
    },
    showBack: {
      type: Boolean,
      default: true
    },
    showBorder: {
      type: Boolean,
      default: false
    },
    showShadow: {
      type: Boolean,
      default: true
    },
    fluid: {
      type: Boolean,
      default: true
    },
    threshold: {
      type: Number,
      default: 20
    },
    scroll: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      fade: {
        observer: null,
        isIntersecting: true
      },
      blur: {
        observer: null,
        intersectionRatio: 1
      },
      height: 0
    }
  },
  computed: {
    hasBackground() {
      return !!this.backgroundImage
    },
    showColor() {
      if (!this.isFadeMode && !isArray(this.color)) {
        return this.color
      }

      return this.color[this.fade.isIntersecting ? 0 : 1]
    },
    showBg() {
      if (!this.isFadeMode && !isArray(this.backgroundColor)) {
        return this.backgroundColor
      }

      return this.backgroundColor[this.fade.isIntersecting ? 0 : 1]
    },
    isBlurMode() {
      return this.fixed && !!this.backgroundImage
    },
    isFadeMode() {
      return this.fixed && (isArray(this.backgroundColor) || isArray(this.color))
    },
    fixedBodyStyle() {
      if (this.isBlurMode || this.hasBackground) {
        return {
          position: 'absolute',
          backgroundColor: 'transparent',
          color: this.showColor
        }
      }

      return {
        backgroundColor: this.showBg,
        color: this.showColor
      }
    },
    blurBodyStyle() {
      return {
        opacity: 1 - this.blur.intersectionRatio,
        backgroundColor: this.showBg,
        color: this.showColor
      }
    },
    backgroundStyle() {
      return {
        opacity: this.blur.intersectionRatio,
        backgroundColor: this.showBg,
        backgroundImage: `url(${this.backgroundImage})`
      }
    },
    crossStyle() {
      return {
        top: `${this.height}px`,
        bottom: `${this.height}px`
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initFadeObserver()
      this.initBlurObserver()
    })
  },
  beforeDestroy() {
    this.fade.observer && this.fade.observer.disconnect()
    this.fade.observer = null
    this.blur.observer && this.blur.observer.disconnect()
    this.blur.observer = null
  },
  methods: {
    back() {
      this.$emit('back')
    },
    stop(e) {
      e.preventDefault()
      e.stopPropagation()
    },
    initFadeObserver(loop) {
      if (!this.isFadeMode) {
        return
      }

      if (!this.$refs.nav || !this.$refs.shim) {
        if (loop > 10) {
          return
        }

        setTimeout(() => {
          this.initFadeObserver(loop + 1)
        }, 200)
        return
      }

      const callback = (entries) => {
        entries.forEach(({ isIntersecting }) => {
          this.fade.isIntersecting = isIntersecting
        })
      }

      this.fade.observer = new IntersectionObserver(callback, { threshold: [0] })
      this.fade.observer.observe(this.$refs.shim)
    },
    initBlurObserver(loop) {
      if (!this.isBlurMode) {
        return
      }

      if (!this.$refs.nav || !this.$refs.cross) {
        if (loop > 10) {
          return
        }

        setTimeout(() => {
          this.initFadeObserver(loop + 1)
        }, 200)
        return
      }

      const callback = (entries) => {
        entries.forEach(({ intersectionRatio }) => {
          this.blur.intersectionRatio = intersectionRatio
          this.scroll && this.scroll(intersectionRatio)
        })
      }

      this.height = this.$refs.nav.clientHeight
      const threshold = new Array(this.threshold).fill(0).map((_, index) => index / this.threshold)
      threshold.push(1)

      this.blur.observer = new IntersectionObserver(callback, { threshold })
      this.blur.observer.observe(this.$refs.cross)
    }
  },
  render() {
    const navBody = (style, ref) => {
      const noBorder = ref && (this.isBlurMode || this.hasBackground)
      return (
        <div ref={ref} style={style} class={['v-navbar__body', { 'no-border': noBorder }]} onClick={this.stop}>
          <div class="v-navbar__wrap">
            <div class="v-navbar__wrap__title">{this.$slots.title || this.title}</div>
            <div class="v-navbar__wrap__before">
              {this.showBack && <div class="v-navbar__back" onClick={this.back} />}
              {this.$slots.before}
            </div>
            <div class="v-navbar__wrap__after">{this.$slots.after}</div>
          </div>
        </div>
      )
    }

    return (
      <div
        class={[
          'v-navbar__outer',
          {
            'v-navbar--fluid': this.fluid
          }
        ]}
      >
        <div
          class={[
            'v-navbar',
            {
              'v-navbar--border': this.showBorder,
              'v-navbar--shadow': this.showShadow && this.hasBackground
            }
          ]}
        >
          {navBody(this.fixedBodyStyle, 'nav')}
          {this.isBlurMode && navBody(this.blurBodyStyle)}
        </div>
        {this.hasBackground ? (
          <div class="v-navbar__background">
            <div style={this.backgroundStyle} class="v-navbar__background__shim" />
            <div ref="cross" style={this.crossStyle} class="v-navbar__background__cross" />
            <div class="v-navbar__background__wrap">
              <div class="v-navbar__shim" ref="shim" />
              {this.$slots.default}
            </div>
          </div>
        ) : (
          <div class="v-navbar__shim" ref="shim" />
        )}
      </div>
    )
  }
}
</script>
