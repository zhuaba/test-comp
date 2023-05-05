import Vue from 'vue'
import VueAlert from './alert.vue'

const alert = (opts = {}) => {
  const el = document.createElement('div')

  document.body.appendChild(el)

  VueAlert.propsData = {
    md: typeof opts.md !== 'undefined' ? opts.md : /android/.test(window.navigator.userAgent.toLocaleLowerCase())
  }

  const _vm = new Vue(VueAlert).$mount(el)

  return _vm.show
}

export default alert
