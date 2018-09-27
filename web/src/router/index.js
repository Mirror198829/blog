import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  //mode:'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '',
      redirect: 'Login'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/view/login/login'),
      meta: {title: '知乎-有问题上知乎'}
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/view/home/home'),
      meta: {title: '知乎'}
    }
  ]
})
