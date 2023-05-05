import Vue from 'vue'
import VueToast from './toast.vue'

function newVue(parent = 'body') {
  const el = document.createElement('div')
  const parentEl = document.querySelector(parent)
  parentEl.appendChild(el)

  return new Vue(VueToast).$mount(el)
}

const toast = ({ duration, timeout } = {}) => {
  const _vm = newVue()
  const _duration = duration || 1500
  const _timeout = timeout || 1500
  const _promise = (duration) =>
    new Promise((resolve) => {
      setTimeout(resolve, duration)
    })
  const createEl = (parent) => {
    if (!parent || parent === 'body') {
      return _vm
    }
    return newVue(parent)
  }

  return {
    info(tip) {
      let text
      let time
      if (typeof tip === 'object') {
        text = tip.tip
        time = tip.time || _duration
      } else {
        text = tip
        time = _duration
      }

      const instance = createEl(tip?.el)
      instance.show({
        duration: time,
        message: text,
        type: 'info'
      })
      return _promise(_timeout)
    },

    error(tip) {
      let text
      let time
      if (typeof tip === 'object') {
        text = tip.tip
        time = tip.time || _duration
      } else {
        text = tip
        time = _duration
      }
      const instance = createEl(tip?.el)
      instance.show({
        duration: time,
        message: text || '操作失败',
        type: 'error'
      })
      return _promise(_timeout)
    },

    success(tip) {
      let text
      let time
      if (typeof tip === 'object') {
        text = tip.tip
        time = tip.time || _duration
      } else {
        text = tip
        time = _duration
      }
      const instance = createEl(tip?.el)
      instance.show({
        duration: time,
        message: text || '操作成功',
        type: 'success'
      })
      return _promise(_timeout)
    },

    loading(tip) {
      _vm.show({
        message: tip || '加载中…',
        type: 'loading'
      })
    },

    stop() {
      _vm.hide()
    }
  }
}

export default toast
