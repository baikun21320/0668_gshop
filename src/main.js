import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'
import router from './router'
import store from './store'
import './mock/mockServer'
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
Vue.use(VueLazyload,{
  loading
})
import './fiters' // 加载过滤器

/* eslint-disable no-new */

Vue.component(Button.name, Button)
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
