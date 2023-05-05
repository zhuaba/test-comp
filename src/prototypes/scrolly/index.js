/**
 * [ scrollToY 指定的 DOM 过度滚动到指定的 Y 轴 ]
 * @param targetY
 * @param dom
 * @param timer
 * @param callback 执行完回调
 */

const _scrollTo = (element, scrollY, scrollX = 0) => {
  if (!element.scrollTo || typeof element.scrollTo !== 'function') {
    element.scrollLeft = scrollX
    element.scrollTop = scrollY
  } else {
    element.scrollTo(scrollX, scrollY)
  }
}

export default (targetY, { dom, time, callback } = {}) => {
  let currentStep = 0
  const element = dom || window
  const scrollY = dom ? dom.scrollTop || dom.scrollY : window.scrollY
  const scrollTargetY = targetY || 0
  const speed = time || 400
  const stepPerFrame = (scrollTargetY - scrollY) / (speed / 1000) / 60
  const totalStep = ((speed / 1000) * 60) | 0
  if (!element.requestAnimFrame) {
    element.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60)
        }
      )
    })().bind(window)
  }
  function tick() {
    currentStep += 1
    if (currentStep < totalStep) {
      element.requestAnimFrame(tick)
      _scrollTo(element, scrollY + stepPerFrame * currentStep)
    } else {
      _scrollTo(element, scrollTargetY)
      typeof callback === 'function' && callback()
    }
  }
  if (speed) {
    tick()
  } else {
    _scrollTo(element, scrollTargetY)
    typeof callback === 'function' && callback()
  }
}

const scrollX = (targetX, { dom, time, callback } = {}) => {
  let currentStep = 0
  const element = dom || window
  const scrollX = dom ? dom.scrollLeft || dom.scrollX : window.scrollX
  const scrollTargetX = targetX || 0
  const speed = time || 400
  const stepPerFrame = (scrollTargetX - scrollX) / (speed / 1000) / 60
  const totalStep = ((speed / 1000) * 60) | 0
  if (!element.requestAnimFrame) {
    element.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60)
        }
      )
    })().bind(window)
  }
  function tick() {
    currentStep += 1
    if (currentStep < totalStep) {
      element.requestAnimFrame(tick)
      _scrollTo(element, 0, scrollX + stepPerFrame * currentStep)
    } else {
      _scrollTo(element, 0, scrollTargetX)
      typeof callback === 'function' && callback()
    }
  }
  if (speed) {
    tick()
  } else {
    _scrollTo(element, 0, scrollTargetX)
    typeof callback === 'function' && callback()
  }
}

export { scrollX }
