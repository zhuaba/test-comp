function getError(action, option, xhr) {
  let msg
  if (xhr.response) {
    msg = `${xhr.response.error || xhr.response}`
  } else if (xhr.responseText) {
    msg = `${xhr.responseText}`
  } else {
    msg = `fail to post ${action} ${xhr.status}`
  }

  const err = new Error(msg)
  err.status = xhr.status
  err.method = 'post'
  err.url = action
  return err
}

function getBody(xhr) {
  const text = xhr.responseText || xhr.response
  if (!text) {
    return text
  }

  try {
    return JSON.parse(text)
  } catch (e) {
    return text
  }
}

export default function upload(option) {
  if (typeof XMLHttpRequest === 'undefined') {
    return
  }

  const xhr = new XMLHttpRequest()
  const action = option.action

  xhr.onerror = function error(e) {
    option.onError(e)
  }

  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 400) {
      return option.onError(getError(action, option, xhr))
    }

    option.onSuccess(getBody(xhr))
  }

  xhr.open('POST', action, true)

  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true
  }

  const headers = {
    Accept: 'application/json, text/plain, */*'
  }

  if ('setRequestHeader' in xhr) {
    Object.keys(headers).forEach((key) => {
      xhr.setRequestHeader(key, headers[key])
    })
  }

  xhr.send(option.data)

  return xhr
}
