import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import bus from './bus'
import { Lazyload } from 'vant';
//事件总线（eventbus）
Vue.prototype.bus = bus;
Vue.use(Lazyload);
axios.defaults.baseURL="http://127.0.0.1:3000"
Vue.prototype.axios = axios;
//初始化页面样式
import './assets/styles/reset.css'
//解决移动端1px问题
import './assets/styles/border.css'

//VantUI组件库
import Vant from 'vant'
import 'vant/lib/index.css';
Vue.use(Vant);

//解决移动端点击300毫秒延迟的问题
import fastClick from 'fastclick'
fastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
