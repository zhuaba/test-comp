import { isArray } from '../../utils/types'

const getCookie = (name) => {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  const r = document.cookie.match(reg)
  return r ? unescape(r[2]) : null
}

export function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader()

    reader.onload = (event) => {
      resolve(event.target.result)
    }

    reader.readAsDataURL(file)
  })
}

export function formatResp(res) {
  if (res && res.code === 0) {
    return {
      url: res.data.location,
      data: res.data
    }
  }
  return res
}

export function formatReq(data) {
  data.csrf = getCookie('bili_jct')

  return data
}

export function formatData(value) {
  if (!value) {
    return []
  }

  const format = (data) => {
    let result = {}

    if (typeof data === 'string') {
      result.url = data
      result.status = 'success'
    } else {
      if (data.id && data.url && data.status) {
        return data
      }
      if (data.id) {
        result.id = data.id
      }
      if (data.url) {
        result.url = data.url
      }
      if (data.url && data.url.startsWith('http')) {
        result.status = 'success'
        result.data = data
      } else {
        result = {
          ...result,
          ...data
        }
      }
    }

    const obj = {
      id: Math.random().toString(36).substring(3, 6),
      url: '',
      status: '',
      message: '',
      data: null,
      file: null
    }

    return {
      ...obj,
      ...result
    }
  }

  if (isArray(value)) {
    return value.map(format)
  }

  return format(value)
}

export function convertReactivityData(value, limit) {
  let fileList
  let fileType
  if (!value) {
    fileList = []
    fileType = limit > 1 ? 'array' : typeof value === 'string' ? 'string' : 'object'
  } else if (limit > 1) {
    fileType = 'array'
    if (isArray(value)) {
      fileList = formatData(value.slice(0, limit))
    } else {
      fileList = [formatData(value)]
    }
  } else if (typeof value === 'string') {
    fileType = 'string'
    if (value) {
      fileList = [formatData(value)]
    } else {
      fileList = []
    }
  } else if (value.url) {
    fileType = 'object'
    fileList = [formatData(value)]
  } else {
    fileType = 'object'
    fileList = []
  }
  return {
    fileType,
    fileList
  }
}
