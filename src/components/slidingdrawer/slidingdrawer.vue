<template>
  <div v-if="rendered" class="v-sliding-drawer">
    <transition name="v-sliding-drawer--transition" @after-enter="$emit('opened')" @after-leave="$emit('closed')">
      <div
        v-show="showBox"
        ref="wrap"
        class="v-sliding-drawer__wrap"
        :class="{
          'v-sliding-drawer__wrap--cancel': cancelClose
        }"
        :style="style"
        @transitionend="animated"
      >
        <div class="v-sliding-drawer__widget" @touchstart="touchDown">
          <div class="v-sliding-drawer__bar" />
        </div>
        <div class="v-sliding-drawer__header">
          <slot name="header" />
        </div>
        <div ref="body" class="v-sliding-drawer__content">
          <slot />
        </div>
        <div class="v-sliding-drawer__footer">
          <slot name="footer" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import popup from '../../mixins/popup'
import { dragDown } from './utils'
import '../../theme/slidingdrawer.scss'

export default {
  name: 'VSlidingDrawer',
  mixins: [popup],
  props: {
    value: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: '80%'
    }
  },
  data() {
    return {
      offset: {
        top: 0,
        left: 0
      },
      cancelClose: true
    }
  },
  computed: {
    style() {
      return {
        height: this.height,
        transform: `translateY(${this.offset.top}px)`
      }
    },
    overlayOpts() {
      return {
        el: this.$refs.wrap,
        show: this.mask,
        lock: this.lock,
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
      val ? this.open() : this.close()
    }
  },
  mounted() {
    if (this.value) {
      this.open()
    }
    document.body.appendChild(this.$el)
  },
  methods: {
    animated() {
      this.cancelClose = false
    },
    touchDown(e) {
      if (this.cancelClose) {
        return
      }
      dragDown(
        e,
        (obj) => {
          this.offset = obj
        },
        this.offset,
        {
          top: 0
        }
      ).then(() => {
        if (this.offset.top > 150) {
          this.$nextTick(() => this.close())
        } else if (this.offset.top !== 0) {
          this.cancelClose = true
        }
        setTimeout(() => {
          this.offset = {
            top: 0,
            left: 0
          }
        }, 100)
      })
    }
  }
}
</script>
