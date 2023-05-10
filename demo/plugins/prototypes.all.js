import Vue from 'vue'
import ItemFactory from '~/demo/utils/item-factory'
import lazyload from '~/src/directives/lazyload'
import '~/src/theme/global/base.scss'

Vue.use(lazyload)

export default ({ route }) => {
  Vue.use({
    install(Vue) {
      Vue.prototype.$sakura = {
        md: route.query.ios !== '1'
      }

      Vue.prototype.$factory = ItemFactory

      Vue.prototype.$ios = route.query.ios === '1'
    }
  })
}
