import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let router = new Router({
  //mode:'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [{
      path: '',
      redirect: 'Login'
    },
    {
      path: '/login',
      name: 'Login',
      component: () =>
        import ('@/view/login/login'),
      meta: { title: '知乎-有问题上知乎', requireAuth: false }
    },
    {
      path: '/home',
      name: 'Home',
      component: () =>
        import ('@/view/home/home'),
      meta: { title: '知乎', requireAuth: true },
      children: [{
        path: '/homePage',
        name: 'HomePage',
        component: () =>
          import ('@/view/home/homePage'),
        meta: { title: '知乎', requireAuth: true },
      }]
    }
  ]
})

//路由钩子函数
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { //如果下一个页面的requireAuth是true,则验证token是否存在
    if (sessionStorage.getItem("userName")) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router
