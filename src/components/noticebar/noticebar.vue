<template>
  <div role="alert" :class="barClass" :style="barStyle">
    <!-- todo 等需求 -->
    <i v-if="leftIcon" class="icon icon-edit"></i>

    <div ref="wrap" :class="`${prefix}__wrap`">
      <div
        ref="content"
        role="marquee"
        :class="contentClass"
        :style="contentStyle"
        @transitionend="onContentTransitionEnd"
      >
        <template v-if="hasSlot">
          <slot></slot>
        </template>

        <!-- 多组 -->
        <template v-else-if="isMulti">
          <!-- 非垂直翻页一律多组水平滚动 -->
          <template v-if="!(verticalScroll && verticalScrollInterval)">
            <template v-for="t in text">{{ t }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</template>
          </template>

          <!-- 垂直翻页 -->
          <template v-else>
            <p :style="paragraphStyle" @transitionend="onParagraphTransitionEnd">{{ text[active] }}</p>
            <p :style="paragraphStyle">{{ text[after] }}</p>
            <p :style="paragraphStyle">{{ text[prepare] }}</p>
          </template>
        </template>

        <!-- 单组 -->
        <template v-else>{{ text }}</template>
      </div>
    </div>

    <!-- todo 等需求 -->
    <i v-if="rightIcon" class="icon icon-edit"></i>
  </div>
</template>

<script>
import '../../theme/noticebar.scss'
import { doubleRaf } from '../../utils/dom'

const PREFIX = 'v-notice-bar'

export default {
  name: 'VNoticebar',
  props: {
    text: {
      type: [String, Array],
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    },
    // todo
    leftIcon: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    verticalScroll: {
      type: Boolean,
      default: false
    },
    wrapable: {
      type: Boolean,
      default: false
    },
    // todo
    mode: {
      type: String,
      default: '' // closeable\link
    },
    delay: {
      type: [Number, String],
      default: 1
    },
    verticalScrollInterval: {
      type: [Number, String],
      default: 0
    },
    speed: {
      type: [Number, String],
      default: 50
    }
  },
  data() {
    return {
      visible: true,
      prefix: PREFIX, // readonly
      offset: 0,
      duration: 0,
      wrapWidth: 0,
      contentWidth: 0,

      count: 0,
      active: 0
    }
  },
  computed: {
    // 多组
    isMulti() {
      return Array.isArray(this.text)
    },
    isMultiVerticalScrollParagraph() {
      return this.isMulti && this.verticalScroll && !!this.verticalScrollInterval
    },
    after() {
      if (!this.text.length) {
        return 0
      }
      return (this.active + 1) % this.text.length
    },
    prepare() {
      if (!this.text.length) {
        return 0
      }
      return (this.active + 2) % this.text.length
    },
    barClass() {
      return {
        [this.prefix]: true,
        [`${this.prefix}--wrapable`]: !this.verticalScroll && this.wrapable,
        [`${this.prefix}--vertical`]: this.verticalScroll && this.wrapable
      }
    },
    barStyle() {
      if (!this.color && !this.background) {
        return null
      }
      return {
        color: this.color,
        background: this.background
      }
    },
    hasSlot() {
      return !!this.$slots.default
    },
    contentClass() {
      return {
        [`${this.prefix}__content`]: true,
        [`${this.prefix}__content--ellipsis`]: !this.scrollable && !this.wrapable,
        [`${this.prefix}__content--vertical-interval`]:
          this.scrollable && this.verticalScroll && !!this.verticalScrollInterval
      }
    },
    contentStyle() {
      if (this.isMultiVerticalScrollParagraph) {
        return ''
      }
      return {
        transform: this.offset ? `translate${this.verticalScroll ? 'Y' : 'X'}(${this.offset}px)` : '',
        transitionDuration: this.duration + 's'
      }
    },
    paragraphStyle() {
      return {
        transform: this.offset ? `translateY(${this.offset}px)` : '',
        transitionDuration: this.duration + 's'
      }
    }
  },
  watch: {
    scrollable: 'start',
    text: {
      handler: 'start',
      immediate: true
    }
  },
  methods: {
    start() {
      const delay = this.delay && Number(this.delay) && !isNaN(Number(this.delay)) ? Number(this.delay) * 1000 : 0
      this.reset()
      setTimeout(() => {
        const { wrap, content } = this.$refs
        if (!wrap || !content || this.scrollable === false) {
          return
        }

        const wrapWidth = wrap.getBoundingClientRect()[this.verticalScroll ? 'height' : 'width']
        const contentWidth = content.getBoundingClientRect()[this.verticalScroll ? 'height' : 'width']
        if (this.scrollable || contentWidth > wrapWidth) {
          doubleRaf(() => {
            this.offset = -contentWidth
            this.duration = contentWidth / this.speed
            this.wrapWidth = wrapWidth
            this.contentWidth = contentWidth
          })
        }
      }, delay)
    },
    // 重设
    reset() {
      this.offset = 0
      this.duration = 0
      this.wrapWidth = 0
      this.contentWidth = 0
    },
    onContentTransitionEnd() {
      if (this.isMultiVerticalScrollParagraph) {
        return
      }
      // set content to right side
      this.offset = this.wrapWidth
      this.duration = 0

      // wait for Vue to render offset
      this.$nextTick(() => {
        // use double raf to ensure animation can start
        setTimeout(() => {
          doubleRaf(() => {
            this.offset = -this.contentWidth
            this.duration = (this.contentWidth + this.wrapWidth) / this.speed
            this.$emit('replay')
          })
        }, 0)
      })
    },
    onParagraphTransitionEnd() {
      // 垂直多组段落滚动
      ++this.count // 记录周期内滚动次数

      // 滚筒为3个槽，及时更换数据
      if (this.count % 2 === 0) {
        this.duration = 0
        this.offset = 0
        this.active = (this.active + 2) % this.text.length

        // 归零（可选）
        if (this.active === 0) {
          this.count = 0
        }
      }

      setTimeout(() => {
        doubleRaf(() => {
          this.offset = -this.contentWidth + this.offset
          this.duration = this.wrapWidth / this.speed
          if ((this.count + 1) % this.text.length === 0) {
            this.$emit('replay')
          }
        })
      }, this.verticalScrollInterval)
    }
  }
}
</script>
