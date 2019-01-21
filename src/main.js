import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/rem'
import './assets/css/base.less'
import './assets/css/scrollbar.less'
import api from './utils/api'
// import $wx from './utils/wx'
import storage from './utils/storage'
import toast from 'vue-mini-toast'
Vue.use(toast)

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.storage = storage._Storage

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
