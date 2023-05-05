import 'intersection-observer'
import { throttle } from 'throttle-debounce'
import { checkInView, getScrollParent } from '../utils/dom'

export default {
  install(Vue, config = {}) {
    if (Vue.prototype.$isServer) {
      return
    }

    const opts = {
      preload: 0,
      ...config
    }

    const list = []
    const useObserve = typeof window.IntersectionObserver === 'function'
    const observer =
      window.IntersectionObserver &&
      new window.IntersectionObserver((entries) => {
        entries.forEach(({ intersectionRatio, target, isIntersecting }) => {
          if (intersectionRatio < 0 || !target) {
            return
          }
          if (!isIntersecting) {
            return
          }
          target.__lazy_handler__ && target.__lazy_handler__()
          delete target.__lazy_handler__
          observer.unobserve(target)
        })
      })

    const actionLazy = (el) => {
      if (useObserve || !checkInView(el, opts.preload)) {
        return
      }

      el.__lazy_handler__ && el.__lazy_handler__()
      removeList(el)
    }

    const batchHandler = throttle(200, () => {
      list.map(actionLazy)
    })

    const appendList = (el) => {
      if (useObserve) {
        observer.observe(el)
        return
      }

      list.push(el)
      const parent = getScrollParent(el)
      parent.addEventListener('scroll', batchHandler)
      window.addEventListener('resize', batchHandler)
    }

    const removeList = (el) => {
      if (useObserve) {
        observer.unobserve(el)
        return
      }

      for (let i = 0, len = list.length; i < len; i++) {
        if (list[i] === el) {
          list.splice(i, 1)
          delete el.__lazy_handler__
          break
        }
      }
    }

    Vue.directive('lazyload', {
      bind(el, binding) {
        if (binding.arg) {
          return
        }
        el.__lazy_handler__ = binding.value
      },
      inserted(el, binding) {
        if (binding.arg) {
          el.__lazyer__ = false
          return
        }
        appendList(el)
        actionLazy(el)
        el.__lazyer__ = true
      },
      update(el, binding) {
        if (el.__lazyer__ && binding.arg) {
          removeList(el)
          el.__lazyer__ = false
        }

        if (!el.__lazyer__ && !binding.arg) {
          appendList(el)
          actionLazy(el)
          el.__lazyer__ = true
        }
      },
      unbind(el) {
        el.__lazyer__ && removeList(el)
      }
    })
  }
}
