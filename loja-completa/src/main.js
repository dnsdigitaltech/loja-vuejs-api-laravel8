import Vue from 'vue'
import App from './App.vue'
import router from './routes/routers'
import store from './vuex/store'
import Snotify from 'vue-snotify'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-snotify/styles/material'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(Snotify, {toast: {showProgressBar:false}})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
