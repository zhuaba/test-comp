import { prefix } from './event'

const CLONE_NODE_CLASS = 'v-swipe__clone'

export default class {
  constructor(opts) {
    this.wrap = opts.wrap
    this.loop = opts.loop
    this.index = opts.index
    this.animated = opts.animated
    this.duration = opts.duration
    this.callback = opts.callback
    this._calcCssPrefix()
    this._setupConst()
    this._useAnimate()
    this._cloneShadow()
    this._bindEvents()
    return this
  }

  slide(index, report = false) {
    if (index === this.index || this.move) {
      return
    }
    this._lockEvent(1.2)
    this._animateSlide(index, this.index, report)
  }

  next(timeout = 0) {
    const { length } = this.slides
    if (length === 1 || this.touching || this.move || (this.index === length - 1 && !this.loop)) {
      return
    }
    if (timeout && Date.now() - this.lastNextAt < timeout) {
      return
    }
    this.slide(this.index + 1, true)
  }

  destroy() {
    const { el, events } = this
    if (!el) {
      return
    }
    el.removeEventListener('touchstart', events.touchstart)
    el.removeEventListener('touchmove', events.touchmove)
    el.removeEventListener('touchend', events.touchend)
    window.removeEventListener('orientationchange', events.screenChange)
    window.removeEventListener('resize', events.screenChange)
  }

  _updateEvents(index) {
    this.destroy()
    this.el = this.slides[index]
    this.index = index
    this.events = {}
    this._bindEvents()
  }

  _setupConst() {
    this.slides = [...[].map.call(this.wrap.children, (_) => _)]
    this.startAt = 0
    this.lastNextAt = 0
    this.move = false
    this.touching = false
    this.isMoveSlide = false
    this.maxDeltaPoint = {
      x: 0,
      y: 0
    }
    this.deltaPoint = {
      x: 0,
      y: 0
    }
    this.el = this.slides[this.index]
    this.events = {}
  }

  _cloneShadow() {
    const { slides, index, offsetWidth, wrap } = this
    if (!this.loop || slides.length === 1) {
      return
    }
    const items = wrap.querySelectorAll(`.${CLONE_NODE_CLASS}`)
    if (items.length) {
      ;[].forEach.call(items, (item) => {
        wrap.removeChild(item)
      })
    }
    const beforeShadow = slides[slides.length - 1].cloneNode(true)
    const afterShadow = slides[0].cloneNode(true)
    beforeShadow.classList.add(CLONE_NODE_CLASS)
    afterShadow.classList.add(CLONE_NODE_CLASS)
    this.wrap.appendChild(beforeShadow)
    this.wrap.appendChild(afterShadow)
    beforeShadow.style.transform = `translateX(${(-1 - index) * offsetWidth}px)`
    afterShadow.style.transform = `translateX(${(slides.length - index) * offsetWidth}px)`
    this.beforeShadow = beforeShadow
    this.afterShadow = afterShadow
  }

  _removeClone() {
    const { slides, wrap } = this
    if (!this.loop || slides.length === 1) {
      return
    }
    const list = wrap.querySelectorAll(`.${CLONE_NODE_CLASS}`)
    ;[].forEach.call(list, (item) => {
      wrap.removeChild(item)
    })
  }

  _useAnimate() {
    const { wrap } = this
    const { offsetWidth } = wrap
    if (!offsetWidth) {
      setTimeout(() => {
        this._useAnimate()
      }, 100)
    }
    this.offsetWidth = offsetWidth
    if (!this.animated) {
      return
    }
    const { slides, index } = this
    ;[].forEach.call(slides, (item, i) => {
      item.style.transform = `translateX(${(i - index) * offsetWidth}px)`
    })
  }

  _bindEvents() {
    if (this.slides.length === 1) {
      return
    }
    const { el, events } = this
    if (!el) {
      return
    }
    events.touchstart = this._start.bind(this)
    events.touchmove = this._move.bind(this)
    events.touchend = this._end.bind(this)
    events.screenChange = this._screenChange.bind(this)
    el.addEventListener('touchstart', events.touchstart)
    el.addEventListener('touchmove', events.touchmove)
    el.addEventListener('touchend', events.touchend)
    window.addEventListener('orientationchange', events.screenChange)
    window.addEventListener('resize', events.screenChange)
  }

  _screenChange() {
    setTimeout(() => {
      this._useAnimate()
      this._removeClone()
      this._cloneShadow()
    }, 50)
  }

  _start(evt) {
    this.touching = true
    const point = evt.touches[0]
    this.startPoint = {
      x: point.pageX,
      y: point.pageY
    }
    this.startAt = +new Date()
  }

  // TODO：解决闪现撞墙的 bug
  _move(evt) {
    if (evt.touches.length > 1) {
      return
    }
    const point = evt.touches[0]
    if (point.pageX < 0) {
      return
    }
    const start = this.startPoint
    const max = this.maxDeltaPoint
    const delta = {
      x: point.pageX - start.x,
      y: point.pageY - start.y
    }
    this.maxDeltaPoint = {
      x: Math.max(max.x, Math.abs(delta.x)),
      y: Math.max(max.y, Math.abs(delta.y))
    }
    this.deltaPoint = delta
    this.isMoveSlide = true
    if (this._isVerticalScroll(this.maxDeltaPoint)) {
      return
    }
    evt.preventDefault()
    evt.stopPropagation()
    if (!this.animated || this._isEnded(delta)) {
      return
    }
    const changeX = delta.x
    const isPrev = changeX > 0
    const { slides, index, offsetWidth } = this
    this._translate(slides[index], changeX)
    if (isPrev) {
      this._translate(slides[index - 1], changeX - offsetWidth)
    } else {
      this._translate(slides[index + 1], offsetWidth + changeX)
    }
    this._loopAdjust(isPrev, index, changeX)
  }

  // TODO：2，0，3，1，4，2 会出现的一个 bug（非必现）
  _end() {
    this.touching = false
    if (!this.startAt || !this.isMoveSlide) {
      return
    }
    this.isMoveSlide = false
    const { maxDeltaPoint, deltaPoint, offsetWidth } = this
    const isPrev = deltaPoint.x > 0
    this.maxDeltaPoint = {
      x: 0,
      y: 0
    }
    if (this._isVerticalScroll(maxDeltaPoint) || this._isEnded(deltaPoint) || !this._isValidSlide(deltaPoint)) {
      if (!this.animated) {
        return
      }
      const { slides, index, duration } = this
      this._translate(slides[index], 0, duration)
      if (isPrev) {
        this._translate(slides[index - 1], -offsetWidth, duration)
        this._translate(slides[index + 1], offsetWidth)
      } else {
        this._translate(slides[index + 1], offsetWidth, duration)
        this._translate(slides[index - 1], -offsetWidth)
      }
      if (this.loop) {
        if (isPrev && index === 0) {
          this._translate(this.beforeShadow, -offsetWidth, duration)
        } else if (!isPrev && index === slides.length - 1) {
          this._translate(this.afterShadow, offsetWidth, duration)
        }
      }
      this._lockEvent()
      return
    }
    let newIndex = isPrev ? this.index - 1 : this.index + 1
    if (this.animated) {
      const { slides, index, duration } = this
      this._translate(slides[index], isPrev ? offsetWidth : -offsetWidth, duration)
      this._translate(slides[index - 1], isPrev ? 0 : -offsetWidth, isPrev ? duration : 0)
      this._translate(slides[index + 1], isPrev ? offsetWidth : 0, isPrev ? 0 : duration)
      if (this.loop) {
        newIndex = this._loopJump(isPrev, index, newIndex)
      }
    }
    this.callback && this.callback(newIndex)
    this._updateEvents(newIndex)
    this._lockEvent()
  }

  _animateSlide(newIndex, oldIndex, report) {
    if (!this.animated) {
      return
    }
    const { offsetWidth, slides, duration } = this
    const isPrev = newIndex < oldIndex
    this._loopAdjust(isPrev, newIndex)
    this._translate(slides[newIndex], isPrev ? -offsetWidth : offsetWidth)
    let result = newIndex
    setTimeout(() => {
      this._translate(slides[newIndex], 0, duration)
      this._translate(slides[oldIndex], isPrev ? offsetWidth : -offsetWidth, duration)
      if (oldIndex !== newIndex + 1) {
        this._translate(slides[newIndex + 1], offsetWidth)
      }
      if (oldIndex !== newIndex - 1) {
        this._translate(slides[newIndex - 1], -offsetWidth)
      }
      if (this.loop) {
        result = this._loopJump(isPrev, oldIndex, newIndex)
      }
      this._updateEvents(result)
      if (report) {
        setTimeout(() => {
          this.callback && this.callback(result)
        }, this.duration)
      }
    }, 0)
  }

  _loopJump(isPrev, oldIndex, newIndex) {
    const { slides, duration, offsetWidth } = this
    let result
    if (isPrev && oldIndex === 0) {
      result = slides.length - 1
      this._translate(this.beforeShadow, 0, duration)
      this._translate(this.afterShadow, offsetWidth)
      this._loopReset(true)
    } else if (!isPrev && oldIndex === slides.length - 1) {
      result = 0
      this._translate(this.afterShadow, 0, duration)
      this._translate(this.beforeShadow, -offsetWidth)
      this._loopReset(false)
    } else {
      result = newIndex
    }
    return result
  }

  _loopAdjust(isPrev, index, changeX = 0) {
    if (!this.loop) {
      return
    }
    const { offsetWidth, slides } = this
    if (isPrev && index === 0) {
      this._translate(this.beforeShadow, changeX - offsetWidth)
    } else if (!isPrev && index === slides.length - 1) {
      this._translate(this.afterShadow, offsetWidth + changeX)
    }
  }

  _loopReset(jumpToEnd) {
    const { offsetWidth, slides } = this
    setTimeout(() => {
      if (jumpToEnd) {
        this._translate(slides[slides.length - 1], 0, 0)
        this._translate(slides[slides.length - 2], -offsetWidth, 0)
        this._translate(this.beforeShadow, offsetWidth, 0)
      } else {
        this._translate(slides[0], 0, 0)
        this._translate(slides[1], offsetWidth, 0)
        this._translate(this.afterShadow, -offsetWidth, 0)
      }
    }, this.duration)
  }

  _lockEvent(scale = 1) {
    this.lastNextAt = Date.now()
    this.move = true
    setTimeout(() => {
      this.move = false
    }, this.duration * scale)
  }

  _isVerticalScroll(delta) {
    return Math.abs(delta.x) < Math.abs(delta.y) * 1.5
  }

  _isValidSlide(delta) {
    const x = Math.abs(delta.x)
    const result = (Number(+new Date() - this.startAt) < 250 && x > 20) || x > this.offsetWidth / 2
    this.startAt = 0
    return result
  }

  _translate(dom, left, duration = 0) {
    if (!dom) {
      return
    }
    dom.style[`${this.cssPrefix}transition-duration`] = duration ? `${duration}ms` : ''
    requestAnimationFrame(() => {
      dom.style[`${this.cssPrefix}transform`] = `translateX(${left}px)`
    })
  }

  _isEnded(delta) {
    if (this.loop) {
      return false
    }
    const isPrev = delta.x > 0
    return (isPrev && this.index === 0) || (!isPrev && this.index === this.slides.length - 1)
  }

  _calcCssPrefix() {
    if (!this.animated) {
      return
    }
    this.cssPrefix = prefix()
  }
}
