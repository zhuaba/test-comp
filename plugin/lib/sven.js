const { ConfigAction } = require('@bilibili/config-sdk')
const { buildEnv } = require('./constants')

const svenConfig = {
  uat: {
    deployEnv: 'uat',
    token: 'c5525ef2be87e202f5bdf03f3802b754',
  },
  pre: {
    deployEnv: 'pre',
    token: 'bc62c5c6af7ee86685cf9655ffe1e059',
  },
  prod: {
    deployEnv: 'prod',
    token: 'f1309f6b643ed08c7d9b8abb3f78151c',
  },
  production: {
    deployEnv: 'prod',
    token: 'f1309f6b643ed08c7d9b8abb3f78151c',
  },
}

const updateConf = (filename, remark, body) => {
  const initParams = {
    appId: 'main.frontend.node-api',
    treeId: '210036',
    zone: 'sh001',
    ...svenConfig[buildEnv],
  }
  const action = new ConfigAction(initParams)

  const params = {
    filename,
    remark,
    body,
    build: 'docker-1',
    user: 'gsrwebpackplugin',
  }
  console.log(initParams, params)

  if (buildEnv !== 'production' || buildEnv !== 'prod') {
    action.publish(params).then(res => {
      if (res.code === 0) {
        console.log('update and publish gsr config successfully', initParams.token, initParams.zone, res)
      } else {
        console.log('update and publish gsr config failed', initParams.token, initParams.zone, res)
      }
    }).catch(err => {
      console.log('update and publish gsr config err', initParams.token, initParams.zone, err.stack)
    })
  } else {
    action.push(params).then(res => {
      if (res.code === 0) {
        console.log('update gsr successfully', initParams.token, initParams.zone, res)
      } else {
        console.log('update gsr failed', initParams.token, initParams.zone, res)
      }
    }).catch(err => {
      console.log('update gsr err', initParams.token, initParams.zone, err.stack)
    })
  }
}

module.exports = {
  updateConf,
}
