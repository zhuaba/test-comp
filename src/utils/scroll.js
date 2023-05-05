import { prefix } from './event'

export default class {
  constructor(opts) {
    this.el = opts.el
    this.trigger = opts.trigger || opts.el
    this.vertical = opts.vertical || false
    this.disabled = opts.disabled || false
    this.maxOffset = Math.abs(opts.maxOffset || 0)
    this.minOffset = -Math.abs(opts.minOffset || 0)
    this.startCallback = opts.startCallback || null
    this.moveCallback = opts.moveCallback || null
    this.endCallback = opts.endCallback || null
    this.lastOffset = 0
    this.offset = 0
    this.delta = 0
    this.prefix = prefix()
    this.events = {}
    this._bind()
    return this
  }

  disable(value) {
    this.disabled = value
  }

  scroll(offset = 0, duration = 0) {
    let move = offset
    if (offset > this.maxOffset) {
      move = this.maxOffset
    } else if (offset < this.minOffset) {
      move = this.minOffset
    }
    this.el.style[`${this.prefix}transition-duration`] = duration ? `${duration}ms` : ''
    this.el.style[`${this.prefix}transform`] = this.vertical ? `translateY(${move}px)` : `translateX(${move}px)`
    this.offset = move
    if (duration) {
      this.lastOffset = move
    }
  }

  destroy() {
    const { trigger, events } = this
    if (!trigger) {
      return
    }
    trigger.removeEventListener('touchstart', events.touchstart)
    trigger.removeEventListener('touchmove', events.touchmove)
    trigger.removeEventListener('touchend', events.touchend)
  }

  _bind() {
    const { trigger, events } = this
    if (!trigger) {
      return
    }
    events.touchstart = this._start.bind(this)
    events.touchmove = this._move.bind(this)
    events.touchend = this._end.bind(this)
    trigger.addEventListener('touchstart', events.touchstart)
    trigger.addEventListener('touchmove', events.touchmove)
    trigger.addEventListener('touchend', events.touchend)
  }

  _start(evt) {
    evt.stopPropagation()
    if (this.disabled) {
      return
    }
    const point = evt.touches[0]
    this.delta = this.vertical ? point.pageY : point.pageX
    if (this.startCallback) {
      this.startCallback()
    }
  }

  _move(evt) {
    evt.stopPropagation()
    if (this.disabled) {
      return
    }
    const point = evt.touches[0]
    const delta = (this.vertical ? point.pageY : point.pageX) - this.delta
    const offset = this.lastOffset + delta
    this.scroll(offset)
    if (this.moveCallback) {
      this.moveCallback(this.offset)
    }
  }

  _end(evt) {
    evt.stopPropagation()
    if (this.disabled) {
      return
    }
    this.lastOffset = this.offset
    if (this.endCallback) {
      this.endCallback(this.offset)
    }
  }
}
