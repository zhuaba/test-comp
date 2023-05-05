import '../../theme/overlay.scss'
import { lock, unlock } from '../../utils/scroll-lock'

export default {
  show(opts = {}) {
    const id = `v-overlay-${Math.random().toString(36).substring(3, 6)}`
    const div = document.createElement('div')
    const md = typeof opts.md === 'undefined' ? /android/.test(window.navigator.userAgent.toLocaleLowerCase()) : opts.md
    div.id = id
    div.classList.add('v-overlay', md ? 'v-overlay--md' : 'v-overlay--ios')
    if (opts.click) {
      div.addEventListener('click', () => {
        opts.click()
      })
    }
    if (opts.zIndex) {
      div.style.zIndex = opts.zIndex
    }
    if (opts.lock !== false) {
      setTimeout(() => {
        opts.unlock ? lock(opts.unlock) : lock()
      }, 0)
    }
    if (opts.style) {
      let objStr = ''
      Object.keys(opts.style).forEach((key) => {
        objStr += `${key}:${opts.style[key]};`
      })
      div.setAttribute('style', objStr)
    }
    opts.el ? opts.el.parentNode.insertBefore(div, opts.el) : document.body.appendChild(div)
    if (opts.show === false) {
      return id
    }
    setTimeout(() => {
      div.classList.add('v-overlay--show')
    }, 0)
    return id
  },

  hide(id, opts = {}) {
    const overlay = id ? document.getElementById(id) : document.querySelector('.v-overlay')
    if (!overlay) {
      return
    }
    overlay.classList.remove('v-overlay--show')
    if (opts.lock !== false) {
      unlock(opts.unlock)
    }
    setTimeout(() => {
      overlay && overlay.parentNode && overlay.parentNode.removeChild(overlay)
    }, 200)
  }
}
