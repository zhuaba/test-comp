<script>
import 'intersection-observer'
import { throttle as throttleFn } from 'throttle-debounce'
import scrollToY, { scrollX as scrollToX } from '../../prototypes/scrolly'
import fixedIOS from './fixedIOS'
import '../../theme/scroller.scss'

const REFRESHER_HEIGHT = 70

export default {
  name: 'VScroller',
  props: {
    isScrollX: {
      type: Boolean,
      default: false
    },
    preload: {
      type: Number,
      default: 50
    },
    preloadTop: {
      type: Number,
      default: 0
    },
    preloadBottom: {
      type: Number,
      default: 0
    },
    useRefresh: {
      type: Boolean,
      default: false
    },
    useInfinite: {
      type: Boolean,
      default: false
    },
    scrollThrottle: {
      type: Number,
      default: -1
    },
    fixedScroll: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      /**
       * touch-start 的 Y
       */
      startTouchY: 0,
      /**
       * touch-start 的 X
       */
      startTouchX: 0,
      /**
       * 列表顶部是否在视口内
       */
      canRefresh: false,
      /**
       * 列表底部是否在视口内
       */
      canLoadMore: false,
      /**
       * 是否正在下拉刷新
       */
      pullDowning: false,
      /**
       * 是否正在关闭下拉刷新
       */
      runningRefresh: false,
      /**
       * 是否触发了下拉刷新动画
       */
      loadingRefresh: false,
      /**
       * 下拉刷新的 offset
       */
      pullDownOffset: 0,
      /**
       * 是否正在上拉加载更多
       */
      pullUpping: false,
      /**
       * 是否正在关闭上拉加载
       */
      runningLoadMore: false,
      /**
       * 是否触发了上拉刷新动画
       */
      loadingLoadMore: false,
      /**
       * 上拉刷新的 offset
       */
      pullUpOffset: 0,
      /**
       * observer
       */
      observer: null,
      /**
       * 距离顶部的高度
       */
      lastScrollTop: 0,
      /**
       * 距离左边框的距离
       */
      lastScrollLeft: 0,
      /**
       * 在 start 的时候判断能不能 pull-down
       */
      canPullDown: false,
      /**
       * 在 start 的时候判断能不能 pull-up
       */
      canPullUp: false,
      /**
       * lock 之后就不能刷新或加载更多了
       */
      locked: false
    }
  },
  computed: {
    dragStyle() {
      if (this.isScrollX) {
        return {}
      }
      if (this.runningRefresh) {
        return {
          transform: `translateY(${this.pullDownOffset}px)`
        }
      }

      if (this.runningLoadMore) {
        return {
          transform: `translateY(${-this.pullUpOffset}px)`
        }
      }

      if (!this.pullDowning && !this.pullUpping) {
        return {}
      }

      const limit = REFRESHER_HEIGHT * 2
      const translate = (offset) => {
        return offset < REFRESHER_HEIGHT
          ? offset
          : Math.log10((offset - REFRESHER_HEIGHT) / limit + 1) * limit + REFRESHER_HEIGHT
      }

      if (this.pullDowning) {
        return {
          transform: `translateY(${translate(this.pullDownOffset)}px)`
        }
      }

      return {
        transform: `translateY(${-translate(this.pullUpOffset)}px)`
      }
    },
    isDefRefresh() {
      return !this.$slots.refresh
    },
    isDefInfinite() {
      return !this.$slots.infinite
    }
  },
  beforeMount() {
    !this.isScrollX && this.fixedScroll && fixedIOS.open()
  },
  mounted() {
    this._initObserver()
  },
  beforeDestroy() {
    this._removeObserve()
    !this.isScrollX && this.fixedScroll && fixedIOS.close()
  },
  methods: {
    lock() {
      this.locked = true
    },
    unlock() {
      this.locked = false
    },
    openFix() {
      fixedIOS.open()
    },
    closeFix() {
      fixedIOS.close()
    },
    scrollY(offset = 0, time = 400) {
      scrollToY(offset, {
        dom: this.$refs.wrap,
        time
      })
    },
    scrollX(offset = 0, time = 400) {
      scrollToX(offset, {
        dom: this.$refs.wrap,
        time
      })
    },
    close() {
      if (this.pullDowning) {
        this.pullDowning = false
        this.loadingRefresh = false
        this.pullDownOffset = 0
      }
      if (this.pullUpping) {
        this.pullUpping = false
        this.loadingLoadMore = false
        this.pullUpOffset = 0
      }
    },
    _initObserver() {
      const callback = (entries) => {
        entries.forEach((evt) => {
          if (evt.intersectionRatio < 0) {
            return
          }
          evt.target && evt.target.__lazy_handler__ && evt.target.__lazy_handler__(evt.isIntersecting)
        })
      }
      this.observer = new IntersectionObserver(callback)
      this.observer.USE_MUTATION_OBSERVER = false
      const { shimRef, shimTop, shimBtm, shimGet } = this.$refs

      if (this.useRefresh && shimRef) {
        shimRef.__lazy_handler__ = (isIntersecting) => {
          this.canRefresh = isIntersecting
        }
        this.observer.observe(shimRef)
      }

      if (this.useInfinite && shimGet) {
        shimGet.__lazy_handler__ = (isIntersecting) => {
          this.canLoadMore = isIntersecting
        }
        this.observer.observe(shimGet)
      }

      if (shimTop) {
        shimTop.__lazy_handler__ = (isIntersecting) => {
          isIntersecting && this.$emit('top')
        }
        this.observer.observe(shimTop)
      }

      if (shimBtm) {
        shimBtm.__lazy_handler__ = (isIntersecting) => {
          isIntersecting && this.$emit('bottom')
        }
        this.observer.observe(shimBtm)
      }
    },
    _removeObserve() {
      this.observer.disconnect()
    },
    _handleStart(event) {
      const point = event.touches[0]
      this.startTouchX = point.pageX
      this.startTouchY = point.pageY
      this.canPullDown = this.canRefresh
      this.canPullUp = this.canLoadMore
    },
    _handleMove(event) {
      if (this.locked) {
        return
      }
      /**
       * 如果列表处于视口中间，不在顶部也不在底部，则 return
       */
      if (!this.canRefresh && !this.canLoadMore) {
        return
      }

      /**
       * 正在关闭的过程中
       */
      if (this.runningRefresh || this.runningLoadMore) {
        return
      }

      const point = event.touches[0]
      /**
       * 根据偏移量计算是否是横向滚动
       */
      const isHozScroll = Math.abs(point.pageY - this.startTouchY) < Math.abs(point.pageX - this.startTouchX) * 2
      /**
       * 如果正在横向滚动，并且不处于下拉，不处于上状态，则 return
       */
      if (isHozScroll && !this.pullDowning && !this.pullUpping) {
        return
      }
      /**
       * 如果处于顶部
       * 不是正在上拉
       */
      if (this.canRefresh && !this.pullUpping && this.canPullDown) {
        const offsetTop = point.pageY - this.startTouchY
        if (offsetTop < 0) {
          return
        }
        if (!this.pullDownOffset) {
          this.$emit('pull-down-start')
        }
        this.pullDownOffset = offsetTop
        if (offsetTop > REFRESHER_HEIGHT) {
          this.loadingRefresh = true
        }
        this.pullDowning = true
        this.runningRefresh = false
      }

      /**
       * 如果处于底部
       * 不是正在下拉
       */
      if (this.canLoadMore && !this.pullDowning && this.canPullUp) {
        const offsetBottom = this.startTouchY - point.pageY
        if (offsetBottom < 0) {
          return
        }
        if (!this.pullUpOffset) {
          this.$emit('pull-up-start')
        }
        this.pullUpOffset = offsetBottom
        if (offsetBottom > REFRESHER_HEIGHT) {
          this.loadingLoadMore = true
        }
        this.pullUpping = true
        this.runningLoadMore = false
      }
    },
    _handleEnd() {
      if (this.isScrollX) {
        return
      }
      if (this.pullDowning && !this.runningRefresh) {
        this.runningRefresh = true
        if (this.pullDownOffset < REFRESHER_HEIGHT) {
          this.close()
          return
        }
        this.pullDownOffset = REFRESHER_HEIGHT
      }
      if (this.pullUpping && !this.runningLoadMore) {
        this.runningLoadMore = true
        if (this.pullUpOffset < REFRESHER_HEIGHT) {
          this.close()
          return
        }
        this.pullUpOffset = REFRESHER_HEIGHT
      }
    },
    _handleScroll(event) {
      if (this.isScrollX) {
        const offsetLeft = event.target.scrollLeft
        const isRight = this.lastScrollLeft - offsetLeft > 0
        this.lastScrollLeft = offsetLeft
        this.$emit('scroll', { offsetLeft, isRight })
      } else {
        const offsetTop = event.target.scrollTop
        const isUp = this.lastScrollTop - offsetTop > 0
        this.lastScrollTop = offsetTop
        this.$emit('scroll', { offsetTop, isUp })
      }
    },
    _animationEnd() {
      if (this.runningRefresh) {
        if (this.pullDowning) {
          this.$emit('refresh')
          return
        }
        this.runningRefresh = false
        this.$emit('pull-down-end')
      }

      if (this.runningLoadMore) {
        if (this.pullUpping) {
          this.$emit('infinite')
          return
        }
        this.runningLoadMore = false
        this.$emit('pull-up-end')
      }
    }
  },
  render() {
    const events = {}
    const wrapEvents = {}
    if (this.useRefresh || this.useInfinite) {
      events['&touchstart'] = this._handleStart
      events['&touchmove'] = this._handleMove
      events['&touchend'] = this._handleEnd
      wrapEvents['&transitionend'] = this._animationEnd
    }
    if (this.scrollThrottle >= 0) {
      if (this.scrollThrottle > 0) {
        events['&scroll'] = throttleFn(this.scrollThrottle, this._handleScroll)
      } else {
        events['&scroll'] = this._handleScroll
      }
    }
    return (
      <div class="v-scroller">
        <div
          class={[
            'v-scroller__move',
            {
              'is-refresh-running': this.isScrollX ? false : this.runningRefresh,
              'is-infinite-running': this.isScrollX ? false : this.runningLoadMore
            }
          ]}
          style={this.dragStyle}
          on={wrapEvents}
        >
          {this.useRefresh && !this.isScrollX && (
            <div
              class={[
                'v-scroller__pull__down',
                {
                  'is-loading': this.loadingRefresh,
                  'is-default': this.isDefRefresh
                }
              ]}
            >
              {this.$slots.refresh}
            </div>
          )}
          <div
            class={[
              'v-scroller__wrap',
              {
                'is-loading': this.isScrollX ? false : this.pullDowning || this.pullUpping,
                'is-hoz': this.isScrollX
              }
            ]}
            on={events}
            ref="wrap"
          >
            <div
              class={[
                'v-scroller__body',
                {
                  'is-hoz': this.isScrollX
                }
              ]}
            >
              {this.useRefresh && !this.isScrollX && <div class="v-scroller__shim__ref" ref="shimRef" />}
              <div
                class={this.isScrollX ? 'v-scroller__shim__left' : 'v-scroller__shim__top'}
                style={{
                  [this.isScrollX ? 'width' : 'height']: `${this.preloadTop || this.preload}px`
                }}
                ref="shimTop"
              />
              <div class="v-scroller__shim__list">{this.$slots.default}</div>
              <div
                class={this.isScrollX ? 'v-scroller__shim__right' : 'v-scroller__shim__btm'}
                style={{
                  [this.isScrollX ? 'width' : 'height']: `${this.preloadBottom || this.preload}px`
                }}
                ref="shimBtm"
              />
              {this.useInfinite && !this.isScrollX && <div class="v-scroller__shim__get" ref="shimGet" />}
            </div>
          </div>
          {this.useInfinite && !this.isScrollX && (
            <div
              class={[
                'v-scroller__pull__up',
                {
                  'is-loading': this.loadingLoadMore,
                  'is-default': this.isDefInfinite
                }
              ]}
            >
              {this.$slots.infinite || '上拉加载更多'}
            </div>
          )}
        </div>
      </div>
    )
  }
}
</script>
