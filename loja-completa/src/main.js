import Vue from 'vue'
import App from './App.vue'
import router from './routes/routers'
import store from './vuex/store'
import Snotify, { SnotifyPosition } from 'vue-snotify'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vodal from 'vodal';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-snotify/styles/material.css'

import "vodal/common.css"
import "vodal/rotate.css"

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component(Vodal.name, Vodal);

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

//carregar categorias automaticamente
store.dispatch('loadCategories')
