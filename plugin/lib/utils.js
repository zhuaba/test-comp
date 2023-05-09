const { buildEnv } = require('./constants')

const getFileType = str => {
  str = str.replace(/\?.*/, '')
  const split = str.split('.')
  let ext = split.pop()
  if (/^(gz|map)$/i.test(ext)) {
    ext = split.pop() + '.' + ext
  }
  return ext
}

const convertPath = (assetsprefix, url) => {
  url = url.startsWith('//') ? `https:${url}` : url

  if (!assetsprefix) {
    return url
  }

  if (buildEnv === 'uat' && !url.startsWith('https://uat-')) {
    url = url.replace('https://', 'https://uat-')
  }

  if (buildEnv === 'pre' && !url.startsWith('https://pre-')) {
    url = url.replace('https://', 'https://pre-')
  }

  return url
}

module.exports = {
  getFileType,
  convertPath,
}
