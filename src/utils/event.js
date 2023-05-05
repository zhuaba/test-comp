import { isServer } from '../utils/helper'

export const on = (function () {
  if (isServer) {
    return
  }
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

export const off = (function () {
  if (isServer) {
    return
  }
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()

export const prefix = () => {
  let result = ''
  const regex = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/
  const styleDeclaration = document.getElementsByTagName('script')[0].style
  for (const prop in styleDeclaration) {
    if (regex.test(prop)) {
      result = '-' + prop.match(regex)[0].toLowerCase() + '-'
    }
  }

  if (!result && 'WebkitOpacity' in styleDeclaration) {
    result = '-webkit-'
  }
  if (!result && 'KhtmlOpacity' in styleDeclaration) {
    result = '-khtml-'
  }
  return result
}
