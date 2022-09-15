import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/Sourcejs/flexible'
import ajax from './common/axios.config'
import VueCookies from 'vue-cookies'
import * as echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.use(VueCookies)


Vue.prototype.ajax = ajax
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')