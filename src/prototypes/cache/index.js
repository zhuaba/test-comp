import { isServer } from '../../utils/helper'

const cache = {
  set(key, value, timeout) {
    if (isServer) {
      return
    }
    try {
      localStorage.setItem(key, JSON.stringify(value))
      if (timeout) {
        localStorage.setItem(`${key}-timeout`, Date.now() + timeout * 1000)
      }
    } catch (e) {}
  },

  get(key, def = null) {
    if (isServer) {
      return def
    }
    try {
      const value = localStorage.getItem(key)
      if (!value) {
        return def
      }
      const timeout = localStorage.getItem(`${key}-timeout`)
      if (timeout && parseInt(timeout) < Date.now()) {
        localStorage.removeItem(key)
        localStorage.removeItem(`${key}-timeout`)
        return def
      }
      return JSON.parse(value)
    } catch (e) {
      return def
    }
  },

  del(key) {
    if (isServer) {
      return
    }
    try {
      localStorage.removeItem(key)
    } catch (e) {
      // do nothing
    }
  },

  has(key) {
    if (isServer) {
      return false
    }
    try {
      const timeout = localStorage.getItem(`${key}-timeout`)
      if (timeout && /^\d+$/.test(timeout) && parseInt(timeout) < Date.now()) {
        return false
      }
      return !!localStorage.getItem(key)
    } catch (e) {
      return false
    }
  }
}

export default cache
