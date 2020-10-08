import Vue from 'vue'

import store from './store'

// Bootstrap
import { 
  BootstrapVue, 
  IconsPlugin,
  CardPlugin,
  LayoutPlugin,
  ModalPlugin,
  VBScrollspyPlugin,
  DropdownPlugin,
  TablePlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(LayoutPlugin)
Vue.use(ModalPlugin)
Vue.use(CardPlugin)
Vue.use(VBScrollspyPlugin)
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

