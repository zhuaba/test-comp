import { addClass, removeClass } from '../utils/dom'

export default {
  name: 'VCollapseTransition',
  functional: true,
  render(h, { props, children }) {
    const data = {}
    const use = props.use !== false
    if (use) {
      data.on = {
        beforeEnter(el) {
          addClass(el, 'v-transition--collapse')
          if (!el.dataset) el.dataset = {}
          const distance = Date.now() - el.dataset.startTime
          if (isNaN(distance) || distance > 300) {
            el.dataset.oldPaddingTop = el.style.paddingTop
            el.dataset.oldPaddingBottom = el.style.paddingBottom
          }
          el.style.height = '0'
          el.style.paddingTop = 0
          el.style.paddingBottom = 0
          el.dataset.startTime = Date.now()
        },

        enter(el) {
          el.dataset.oldOverflow = el.style.overflow
          if (el.scrollHeight !== 0) {
            el.style.height = `${el.dataset.targetHeight || el.scrollHeight}px`
            el.style.paddingTop = el.dataset.oldPaddingTop
            el.style.paddingBottom = el.dataset.oldPaddingBottom
          } else {
            el.style.height = ''
            el.style.paddingTop = el.dataset.oldPaddingTop
            el.style.paddingBottom = el.dataset.oldPaddingBottom
          }

          el.style.overflow = 'hidden'
        },

        afterEnter(el) {
          // for safari: remove class then reset height is necessary
          removeClass(el, 'v-collapse-transition')
          el.style.height = ''
          el.style.overflow = el.dataset.oldOverflow
          el.dataset.endTime = Date.now()
        },

        beforeLeave(el) {
          if (!el.dataset) el.dataset = {}
          // fix lose class by quick click.
          if (!el.className.includes('v-transition--collapse')) {
            addClass(el, 'v-transition--collapse')
          }
          const distance = el.dataset.endTime - el.dataset.startTime
          // full time get full height once.
          if (!isNaN(distance) && distance > 0) {
            if (!el.dataset.targetHeight) {
              el.dataset.targetHeight = el.offsetHeight
            }
            // todo: other case..
          }
          el.dataset.oldPaddingTop = el.style.paddingTop
          el.dataset.oldPaddingBottom = el.style.paddingBottom
          el.dataset.oldOverflow = el.style.overflow
          el.style.height = el.scrollHeight + 'px'
          el.style.overflow = 'hidden'
        },

        leave(el) {
          if (el.scrollHeight !== 0) {
            // for safari: add class after set height, or it will jump to zero height suddenly, weired
            addClass(el, 'v-collapse-transition')
            el.style.height = 0
            el.style.paddingTop = 0
            el.style.paddingBottom = 0
          }
          el.dataset.startTime = Date.now()
        },

        afterLeave(el) {
          removeClass(el, 'v-collapse-transition')
          el.style.height = ''
          el.style.overflow = el.dataset.oldOverflow
          el.style.paddingTop = el.dataset.oldPaddingTop
          el.style.paddingBottom = el.dataset.oldPaddingBottom
        }
      }
    }
    return h('transition', data, children)
  }
}
