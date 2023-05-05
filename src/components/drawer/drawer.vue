<template>
  <div v-if="rendered" :class="`v-drawer--${from}`" :style="drawerStyle" class="v-drawer">
    <transition name="v-drawer--transition" @after-enter="$emit('opened')" @after-leave="$emit('closed')">
      <div v-show="showBox" ref="wrap" :style="wrapStyle" class="v-drawer__wrap">
        <div v-if="hasHeader" class="v-drawer__header" :class="{ 'has-header': hasHeader }">
          <slot name="header" />
        </div>
        <div ref="body" class="v-drawer__body" @touchmove.stop @touchend.stop>
          <template v-if="count">
            <div v-for="(item, index) in count" :key="item" :class="{ strict }" class="v-drawer__item">
              <slot :name="`${index}`" />
            </div>
          </template>
          <slot v-else />
          <template v-if="cancel">
            <div class="v-drawer__line" />
            <div class="v-drawer__cancel" @click="close" v-text="cancel" />
          </template>
        </div>
        <div class="v-drawer__footer">
          <slot name="footer" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import '../../theme/drawer.scss'
import popup from '../../mixins/popup'

export default {
  name: 'VDrawer',
  mixins: [popup],
  props: {
    value: {
      type: Boolean,
      required: true
    },
    count: {
      type: Number,
      default: 0,
      validator: (val) => val >= 0
    },
    strict: {
      type: Boolean,
      default: false
    },
    cancel: {
      type: String,
      default: ''
    },
    from: {
      type: String,
      default: 'bottom',
      validator: (val) => ~['left', 'right', 'top', 'bottom'].indexOf(val)
    },
    size: {
      type: String,
      default: '60%'
    },
    dropdown: {
      type: Boolean,
      default: false
    },
    offset: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      offsetVal: 0
    }
  },
  computed: {
    hasHeader() {
      return !!this.$slots.header
    },
    drawerStyle() {
      const style = {}
      const { offsetVal, from, offset } = this
      const result = offset >= 0 ? offset : offsetVal
      switch (from) {
        case 'top':
          style.top = `${result}px`
          break
        case 'bottom':
          style.bottom = `${result}px`
          break
        case 'left':
          style.left = `${result}px`
          break
        case 'right':
          style.right = `${result}px`
          break
      }
      return style
    },
    wrapStyle() {
      const style = {}
      const { from, strict } = this
      if (~['top', 'bottom'].indexOf(from)) {
        style.width = '100%'
        style.left = 0
        if (from === 'top') {
          style.top = 0
        } else {
          style.bottom = 0
        }
        if (strict) {
          return style
        }
        style.height = this.size
      } else {
        style.height = '100%'
        style.bottom = 0
        if (from === 'left') {
          style.left = 0
        } else {
          style.right = 0
        }
        if (strict) {
          return style
        }
        style.width = this.size
      }
      return style
    },
    overlayOpts() {
      return {
        el: this.$refs.wrap,
        show: this.mask,
        lock: this.lock,
        style: this.drawerStyle,
        unlock: [this.$el, this.$refs.body],
        click: this.maskClose
          ? () => {
              this.close()
            }
          : null
      }
    }
  },
  watch: {
    value(val) {
      if (this.dropdown && val) {
        this.calcParentRect()
        return
      }
      val ? this.open() : this.close()
    }
  },
  mounted() {
    if (this.value) {
      this.open()
    }
    if (!this.dropdown) {
      document.body.appendChild(this.$el)
    }
  },
  destroyed() {
    if (!this.dropdown && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  methods: {
    calcParentRect() {
      if (this.offset >= 0) {
        this.open()
        return
      }
      const rect = this.$el.parentNode.getBoundingClientRect()
      switch (this.from) {
        case 'top':
          this.offsetVal = rect.top + rect.height
          break
        case 'bottom':
          this.offsetVal = document.documentElement.clientHeight - rect.top
          break
        case 'left':
          this.offsetVal = rect.left + rect.width
          break
        case 'right':
          this.offsetVal = document.documentElement.clientWidth - rect.left
          break
      }
      this.open()
    }
  }
}
</script>
