// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
// import Axios from 'axios'
// import VueResource from 'vue-resource'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'

Vue.use(ElementUI)
// Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
