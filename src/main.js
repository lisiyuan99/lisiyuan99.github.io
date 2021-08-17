import Vue from 'vue'
import App from './App.vue'

import './assets/assets/css/bootstrap.min.css'
import './assets/assets/css/style.css'
import './assets/assets/css/ionicons.min.css'
import './assets/assets/css/magnific-popup.css'
import './assets/assets/css/nice-select.css'
import './assets/assets/css/Pe-icon-7-stroke.css'
import './assets/assets/css/slick.css'
import './assets/assets/css/animate.min.css'
import './assets/assets/css/default.css'

import router from './router'
import VueRouter from 'vue-router'
import axios from 'axios';

axios.defaults.withCredentials=true
axios.defaults.crossDomain=true
axios.defaults.baseURL='http://localhost:8083';
Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
