// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios'
import $ from 'jquery'
import store from './store'

import 'font-awesome/css/font-awesome.css'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8081/'
Vue.prototype.$http = axios

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
