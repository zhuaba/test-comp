<template>
  <div class="v-switcher" :class="{ 'v-switcher--fluid': fluid, 'v-switcher--flex': noPaddingShim }">
    <VAffix
      v-show="showHeader"
      :fixed-top="fixedTop"
      :disabled="fixedTop === undefined || headerCount <= 1"
      @on-fixed="_handleFixed"
    >
      <div ref="headerWrap" class="v-switcher__header">
        <div class="v-switcher__header__before">
          <slot name="header-before"></slot>
        </div>
        <div class="v-switcher__header__after">
          <slot name="header-after"></slot>
        </div>
        <div ref="tabWrap" class="v-switcher__header__tabs__wrap">
          <ul
            ref="header"
            :class="[`v-switcher__header--${align}`, { 'is-init': !anchorInitOK }]"
            class="v-switcher__header__tabs__list"
          >
            <component
              :is="_computeItemName(item)"
              v-for="(item, index) in formatHeaders"
              ref="tab"
              :key="index"
              v-bind="routeName ? (_computeItemName(item) === 'a' ? { href: item.path } : { to: item.path }) : ''"
              :class="{ 'is-active': index === focusIndex, 'is-disable': item.disable }"
              class="v-switcher__header__tabs__item"
              @click="_handleTabSwitch(index, item)"
            >
              <slot :name="`tab-${index}`">
                <i v-if="item.icon" :class="item.icon"></i>
                <span v-text="item.text"></span>
              </slot>
            </component>
            <div :style="anchorStyle" class="v-switcher__header__anchor">
              <slot name="anchor"></slot>
            </div>
          </ul>
        </div>
      </div>
      <div class="v-switcher__header__bottom">
        <slot name="header-bottom" />
      </div>
    </VAffix>
    <div
      v-if="!routeName && headerCount > 0"
      ref="content"
      :class="[`v-switcher__content--${contentMode}`, { 'v-switcher__content--multi': headerCount > 1 }]"
      class="v-switcher__content"
    >
      <div ref="contentWrap" class="v-switcher__content__wrap">
        <div
          v-for="(item, index) in formatHeaders"
          :key="index"
          :class="[{ 'is-active': ~displayContent.indexOf(index) }, { 'is-current': index === focusIndex }]"
          class="v-switcher__content__item"
        >
          <slot
            v-if="
              lazyMode === 'none'
                ? true
                : lazyMode === 'single'
                ? ~matchedIndex.indexOf(index)
                : ~matchedIndex.indexOf(index) || ~displayContent.indexOf(index)
            "
            :name="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../theme/switcher.scss'
import { on, off } from '../../utils/event'
import { getMatchedRouteIndex } from '../../utils/dom'
import VAffix from '../affix/affix'
import Slide from '../../utils/slide'
import Scroll from '../../utils/scroll'

const anchorPadding = 16

export default {
  name: 'VSwitcher',
  components: {
    VAffix
  },
  props: {
    headers: {
      type: Array,
      required: true
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    routeName: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: 'start',
      validator: (val) => ~['around', 'start', 'center', 'end'].indexOf(val)
    },
    lazyMode: {
      type: String,
      default: 'none',
      validator: (val) => ~['none', 'single', 'siblings'].indexOf(val)
    },
    fixedTop: {
      // eslint-disable-line
      type: Number,
      default: undefined
    },
    swipe: {
      type: Boolean,
      default: true
    },
    sticky: {
      type: Boolean,
      default: true
    },
    fluid: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 300,
      validator: (val) => val >= 0
    },
    hiddenHeader: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const initIndex = this.routeName ? getMatchedRouteIndex(this.headers, this.$route.path) : this.defaultIndex
    return {
      focusIndex: initIndex,
      oldFocusIndex: -1,
      anchorStyle: {},
      slider: null,
      scroller: null,
      sizeCache: {
        tabs: [],
        header: null,
        tabsWrapWidth: 0,
        headerWrapWidth: 0,
        headerScrollMaxSize: 0
      },
      matchedIndex: [initIndex],
      anchorInitOK: false,
      initOK: false
    }
  },
  computed: {
    displayContent() {
      const { focusIndex } = this
      if (this.contentMode === 'swipe') {
        return [this.oldFocusIndex, focusIndex - 1, focusIndex, focusIndex + 1]
      }
      return [focusIndex]
    },
    formatHeaders() {
      const result = []
      this.headers.forEach((item, index) => {
        result.push({
          text: this._computeItemText(item, index),
          icon: this._computeItemIcon(item, index),
          path: this._computeItemPath(item),
          disable: this._computeItemDisable(item)
        })
      })
      return result
    },
    headerCount() {
      return this.headers.length
    },
    isDisableTabs() {
      // 检查是否有tab传入disable属性为ture，如果为真则禁用手势滑动
      if (this.formatHeaders.length) {
        const isDisable = this.formatHeaders.filter((_) => _.disable)
        return isDisable.length
      } else {
        return 0
      }
    },
    contentMode() {
      if (this.isDisableTabs > 0) {
        return 'click'
      }
      if (this.routeName) {
        return 'click'
      }
      if (this.sticky && this.duration && this.swipe) {
        return 'swipe'
      }
      if (this.swipe && (!this.sticky || !this.duration)) {
        return 'slide'
      }
      return 'click'
    },
    noPaddingShim() {
      return !!this.$slots['header-bottom'] || this.hiddenHeader
    },
    showHeader() {
      return this.headerCount > 0 && !this.hiddenHeader
    }
  },
  mounted() {
    const _initialize = () => {
      if (this.initOK) {
        return
      }

      if (this.headerCount && !this.$refs.tab.length) {
        return
      }

      this._setComponentSize()
      this._initSwipe()
      this._initScroller()
      this._computeAnchorStyle(this.focusIndex)
      this._computeHeaderStyle(0)
      this.initOK = true
    }

    this.$nextTick(() => {
      _initialize()
      this.$watch('headers', (newVal) => {
        this.$nextTick(() => {
          this.initOK = true
          _initialize()
          const beforeIndex = this.focusIndex
          this._setComponentSize()
          if (this.routeName) {
            this._handleTabSwitch(getMatchedRouteIndex(newVal, this.$route.path))
          }
          if (beforeIndex !== this.focusIndex) {
            this._computeAnchorStyle(this.focusIndex)
            this._computeHeaderStyle(beforeIndex)
          }
        })
      })
      this.$watch('focusIndex', (newVal, oldVal) => {
        this._computeAnchorStyle(newVal)
        this._computeHeaderStyle(oldVal)
        this.$emit('change', newVal)
      })
      if (this.routeName) {
        this.$watch('$route', (newVal) => {
          this._handleTabSwitch(getMatchedRouteIndex(this.headers, newVal.path))
        })
      }
      this.$emit('change', this.focusIndex)
      on(window, 'orientationchange', this._handleScreenChange)
      on(window, 'resize', this._handleScreenChange)
    })
  },
  beforeDestroy() {
    off(window, 'orientationchange', this._handleScreenChange)
    off(window, 'resize', this._handleScreenChange)
    this.slider && this.slider.destroy()
    this.scroller && this.scroller.destroy()
  },
  methods: {
    slide(index) {
      if (index < 0 || index > this.headerCount - 1) {
        return
      }
      this._handleTabSwitch(index)
    },
    calcHeader() {
      this._setComponentSize()
      this._computeAnchorStyle(this.focusIndex)
    },
    _initSwipe() {
      if (this.contentMode === 'click') {
        return
      }
      this.slider = new Slide({
        wrap: this.$refs.contentWrap,
        loop: false,
        index: this.focusIndex,
        animated: this.contentMode === 'swipe',
        duration: this.duration,
        callback: (index) => {
          this.focusIndex = index
          this._collectMatchedPage(index)
        }
      })
    },
    _initScroller() {
      if (this.align !== 'start') {
        return
      }
      this.scroller = new Scroll({
        el: this.$refs.header,
        trigger: this.$refs.tabWrap,
        minOffset: this.sizeCache.headerScrollMaxSize
      })
    },
    _computeItemName(item) {
      if (!this.routeName) {
        return 'li'
      }
      if (item.path && item.path.startsWith('http')) {
        return 'a'
      }
      return this.routeName || 'li'
    },
    _handleTabSwitch(nextIndex, item = { disable: false }) {
      if (item.disable) return
      if (this.slider) {
        if (this.slider.move) {
          return
        }
        this.oldFocusIndex = this.focusIndex
        this.slider.slide(nextIndex)
      }
      this.focusIndex = nextIndex
      this._collectMatchedPage(nextIndex)
      if (nextIndex < 0) {
        this.anchorStyle.transform = 'translateX(-100%)'
      }
    },
    _collectMatchedPage(nextIndex) {
      // eslint-disable-next-line
      if (this.matchedIndex.indexOf(nextIndex) === -1) {
        this.matchedIndex.push(nextIndex)
      }
    },
    _computeHeaderStyle(prevIndex) {
      /**
       * 只支持 align 是 start
       */
      if (this.sizeCache.headerScrollMaxSize === 0) {
        return
      }
      const index = this.focusIndex
      if (index < 0) {
        return
      }

      /**
       * left <= 0
       */
      let left = this.scroller ? this.scroller.offset : 0
      const max = 0
      const min = this.sizeCache.headerScrollMaxSize
      if (!index) {
        left = max
      } else if (index === this.headerCount - 1) {
        left = min
      } else {
        /**
         * 如果设置了 beforeHeader 则 tabs[0].left 不为 0
         */
        const baseLeft = this._getComponentSize('tabs', 0).left
        const curTabRect = this._getComponentSize('tabs', index)
        const resetRight = () => {
          /**
           * 向后切换
           * 取当前 focus 的后一个 tab 来 check
           * 如果 checkTab 的右边
           */
          const checkTabRect = this._getComponentSize('tabs', index + 1)
          const result = checkTabRect.right - baseLeft - this.sizeCache.tabsWrapWidth
          if (result > 0) {
            left = -result
          }
          /**
           * 如果上一个 tab 的宽度过大
           * 导致当前 tab 无法完全展示在屏幕内
           * 则重置 left 为当前 tab 的 left
           */
          const condition = curTabRect.left - baseLeft
          if (left + condition < 0) {
            left = -condition
          }
        }
        if (prevIndex > index) {
          /**
           * 向前切换
           * 取当前 focus 的前一个 tab 来 check
           * 如果 checkTab 的左边在视口外，则重置 left
           */
          const checkTabRect = this._getComponentSize('tabs', index - 1)
          if (checkTabRect.left + left < baseLeft) {
            left = baseLeft - checkTabRect.left
            /**
             * 如果下一个 tab 的宽度过大
             * 导致当前 tab 无法完全展示在屏幕内
             * 则重置 left
             */
            const condition = curTabRect.right - baseLeft - this.sizeCache.tabsWrapWidth
            if (condition > left > 0) {
              left = -condition
            }
          } else {
            resetRight()
          }
        } else {
          resetRight()
        }
      }
      if (left < min) {
        left = min
      } else if (left > max) {
        left = max
      }
      this.scroller && this.scroller.scroll(left, this.duration)
    },
    _computeAnchorStyle(index, loop = 0) {
      if (index < 0) {
        return
      }
      const tabSize = this._getComponentSize('tabs', index)
      if (!tabSize) {
        // 这个地方 DOM 可能还没渲染好，refs 不存在，循环 5 次来取值
        if (loop < 5) {
          setTimeout(() => {
            this._computeAnchorStyle(this.focusIndex, loop + 1)
          }, 200)
        }
        return
      }
      const header = this._getComponentSize('header')
      this.anchorStyle = {
        width: `${tabSize.width - anchorPadding * 2}px`,
        transform: `translateX(${tabSize.left - header.left + anchorPadding}px)`,
        transitionDuration: `${this.duration}ms`
      }
      this.anchorInitOK = true
    },
    _computeItemText(item, curIndex) {
      let result
      if (typeof item === 'string' || typeof item === 'number') {
        result = item
      } else {
        result = item.label || item.name || item.text
        if (this.focusIndex === curIndex) {
          const temp = item['label-active'] || item['name-active'] || item['text-active']
          if (temp) {
            result = temp
          }
        }
      }
      return result
    },
    _computeItemIcon(item, curIndex) {
      let result
      if (typeof item === 'string' || typeof item === 'number' || !item.icon) {
        result = ''
      } else {
        result = item.icon
        if (this.focusIndex === curIndex && item['icon-active']) {
          result = item['icon-active']
        }
      }
      return result
    },
    _computeItemPath(item) {
      if (typeof item === 'string' || typeof item === 'number') {
        return ''
      }
      return item.route || ''
    },
    _computeItemDisable(item) {
      if (typeof item === 'string' || typeof item === 'number') {
        return false
      }
      return item.disable || false
    },
    _setComponentSize(loop = 0) {
      const tabs = this.$refs.tab
      let hasZero = false
      if (tabs) {
        const tabSize = []
        tabs.forEach((tab) => {
          const rect = tab instanceof Element ? tab.getBoundingClientRect() : tab.$el.getBoundingClientRect()
          hasZero = rect.width === 0
          tabSize.push({
            top: rect.top,
            left: rect.left,
            right: rect.right,
            bottom: rect.bottom,
            width: rect.width,
            height: rect.height
          })
        })
        this.sizeCache.tabs = tabSize
      }
      const headerWrap = this.$refs.headerWrap
      if (headerWrap) {
        this.sizeCache.headerWrapWidth = headerWrap.clientWidth
      }
      const tabsWrap = this.$refs.tabWrap
      if (tabsWrap) {
        this.sizeCache.tabsWrapWidth = tabsWrap.clientWidth
      }
      const header = this.$refs.header
      if (header) {
        const headerRect = header.getBoundingClientRect()
        this.sizeCache.header = {
          top: headerRect.top,
          left: headerRect.left,
          right: headerRect.right,
          bottom: headerRect.bottom
        }
      }
      const delta = this.sizeCache.tabs[this.headerCount - 1].right - this.sizeCache.tabs[0].left
      this.sizeCache.headerScrollMaxSize =
        delta < this.sizeCache.tabsWrapWidth ? 0 : this.sizeCache.tabsWrapWidth - delta

      if (hasZero && loop < 5) {
        setTimeout(() => {
          this._setComponentSize(loop + 1)
          this._computeAnchorStyle(this.focusIndex)
        }, 100)
      }
    },
    _getComponentSize(type, index = -1) {
      const value = this.sizeCache[type]
      if (!value) {
        return null
      }
      if (index >= 0) {
        if (!value[index]) {
          return null
        }
        return value[index]
      }
      return value
    },
    _handleScreenChange() {
      setTimeout(() => {
        this.calcHeader()
      }, 50)
    },
    _handleFixed(val) {
      this.$emit('fixed', val)
    }
  }
}
</script>
