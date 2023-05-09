const FILE_NAME = 'gsr-manifest.json'

// const isUat = process.env.NODE_ENV === 'uat'
const PROJECT_NAME = process.env.PROJECT_NAME || ''
const buildEnv = process.env.PUSH_ENV || 'uat'

const IMAGE_EXT = [ 'png', 'jpg', 'jpeg', 'gif', 'svg' ]
const FONT_EXT = [ 'ttf', 'woff', 'woff2', 'eot' ]

module.exports = {
  FILE_NAME,
  PROJECT_NAME,
  buildEnv,
  IMAGE_EXT,
  FONT_EXT,
}
