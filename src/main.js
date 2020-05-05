import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'materialize-css/sass/materialize.scss'
import 'material-design-icons/iconfont/material-icons.css'

// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'

// Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  router,
  poll: true,
  store,
  render: h => h(App)
}).$mount('#app')