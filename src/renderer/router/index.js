import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'login',
      component: require('@/pages/Login').default
    },
    {
      path: '/home',
      name: 'home',
      component: require('@/pages/Home').default
    },
  ]
})
