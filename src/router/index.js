import Vue from 'vue'
import Router from 'vue-router'
import Vueindex from '@/components/vueindex'
import vuescg from '@/components/vuescg'
import Vueresume from '@/components/vueresume'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Vueindex', component: Vueindex },
    { path: '/SCG', name: 'Vueindex', component: Vueindex },
    { path: '/search', name: 'vuescg', component: vuescg },
    { path: '/resume', name: 'Vueresume', component: Vueresume }
  ]
})
