import Vue from 'vue'
import toast from '~/src/prototypes/toast'
import alert from '~/src/prototypes/alert'
import '@vant/touch-emulator'
import '../assets/css/global.scss'

export default ({ route }) => {
  Vue.use({
    install(Vue) {
      Vue.prototype.$toast = toast()

      Vue.prototype.$alert = alert({
        md: route.query.ios !== '1'
      })
    }
  })
}
