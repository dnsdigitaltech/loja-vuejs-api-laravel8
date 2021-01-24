import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueRecource from 'vue-resource'
import routes from './routes/index'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter)
Vue.use(VueRecource)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
