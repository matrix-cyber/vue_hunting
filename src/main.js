import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/fonts/iconfont.css'
import './assets/css/global.css'
import axios from 'axios'
import echarts from 'echarts'

// 配置请求路径
axios.defaults.baseURL = 'http://127.0.0.1:8080/api/v1'
// 配置请求拦截器
axios.interceptors.request.use(config => {
  // 给请求头添加token的authorization
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
