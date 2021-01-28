import Vue from 'vue'
import App from './App.vue'
import router from './routes/routers'
import store from './vuex/store'
import Snotify, { SnotifyPosition } from 'vue-snotify'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-snotify/styles/material.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const options = {
  toast: {
    position: SnotifyPosition.rightTop,
    showProgressBar:false
  }
}

Vue.use(Snotify, options)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
