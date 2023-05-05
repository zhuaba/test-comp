<template>
  <div v-lazyload:[event]="handleRender" class="v-lazy">
    <transition v-if="transition" :name="transition">
      <slot v-if="display" />
    </transition>
    <slot v-else-if="display" />
    <div v-if="!display" :class="placeholder">
      <slot name="placeholder" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VLazy',
  props: {
    never: {
      type: Boolean,
      default: false
    },
    // eslint-disable-next-line
    event: {
      type: [String, Array]
    },
    placeholder: {
      type: String,
      default: 'v-lazy__placeholder'
    },
    transition: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      display: this.never
    }
  },
  mounted() {
    this.touchEventListen()
  },
  methods: {
    touchEventListen(remove = false) {
      if (!this.event) {
        return
      }
      const events = typeof this.event === 'string' ? [this.event] : this.event
      const action = remove ? 'removeEventListener' : 'addEventListener'
      events.forEach((eventName) => {
        this.$el[action](eventName, this.handleRender, {
          capture: true,
          once: true,
          passive: true
        })
      })
    },
    handleRender() {
      /**
       * 如果已经渲染了，就只是曝光
       */
      if (this.display) {
        this.$emit('show')
        return
      }
      /**
       * 执行函数
       */
      const doAction = () => {
        this.display = true
        this.$emit('show')
        this.touchEventListen(true)
      }
      /**
       * 如果不支持调度，那就直接渲染并曝光
       */
      if (!(`requestIdleCallback` in window) || !(`requestAnimationFrame` in window)) {
        doAction()
        return
      }
      /**
       * 支持调度，那就走调度
       * 1. 依靠浏览器的空闲时段内调用的函数排队能力，超时设为 2s
       * 2. 在浏览器下一次重绘之前执行
       */
      const id = requestIdleCallback(
        () => {
          requestAnimationFrame(() => {
            doAction()
            cancelIdleCallback(id)
          })
        },
        { timeout: 2000 }
      )
    }
  }
}
</script>
