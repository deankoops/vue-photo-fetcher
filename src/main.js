// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'

import Vue from 'vue'

import App from '@/App'
import axios from 'axios'
import config from '@/config'

import CButton from '@/components/c-button'
import CSwitch from '@/components/c-switch'

import '@/assets/scss/main.scss'

Vue.prototype.$axios = axios.create({
  baseURL: config.API_BASE,
  withCredentials: false
})

Vue.component('c-button', CButton)
Vue.component('c-switch', CSwitch)

Vue.config.productionTip = false

// extend a Vue instance with important classes like i18n, router and store
// eslint-disable no-new
// const root = new Vue(Vue.util.extend({ router, store }, App))
const root = new Vue({
  el: '#app',
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
})

// mount the app in the appropriate target element when the DOM content has loaded
document.addEventListener('DOMContentLoaded', function () {
  root.$mount('#app')
})
