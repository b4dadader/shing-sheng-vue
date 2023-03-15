import Vue from 'vue'
import App from './App.vue'
//路由
import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter)
//vuex
import store from './store'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
