// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import VueResources from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Routes from './routes'
Vue.use(BootstrapVue)
Vue.use(VueResources)
Vue.use(VueRouter)
/* eslint-disable no-new */
// Vue.filter('to-uppercase', function (value) {
//   return value.toUpperCase()
// })
const routerz = new VueRouter({
  routes: Routes,
  mode: 'history'
})
Vue.filter('snippet', function (value) {
  return value.slice(0, 10) + '..'
})
Vue.directive('pelangi', {
  bind (el) {
    el.style.color = '#' + Math.random().toString().slice(2, 8)
  }
})
Vue.directive('tema', {
  bind (el, binding) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '1200px'
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '560px'
    }
    if (binding.arg === 'column') {
      el.style.background = '#ddd'
      el.style.padding = '30px'
    }
  }
})
new Vue({
  el: '#app',
  components: { App },
  router: routerz,
  template: '<App/>'
})
