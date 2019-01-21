import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Open from './pages/open.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      meta: {
        index: 0
      },
      component: Open
    },
    {
      path: '/search',
      name: 'search',
      meta: {
        index: 2
      },
      component: () => import('./pages/search.vue')
    },
    {
      path: '/home1',
      name: 'home1',
      meta: {
        index: 3
      },
      component: () => import('./pages/home.vue')
    },
    {
      path: '/open1',
      name: 'open1',
      meta: {
        index: 4
      },
      component: () => import('./pages/open.vue')
    },
    {
      path: '/opened1',
      name: 'opened1',
      meta: {
        index: 5
      },
      component: () => import('./pages/opened.vue')
    },
    {
      path: '/forward1',
      name: 'forward1',
      meta: {
        index: 6
      },
      component: () => import('./pages/forward.vue')
    },
    {
      path: '/form1',
      name: 'form1',
      meta: {
        index: 7
      },
      component: () => import('./pages/form.vue')
    },
    {
      path: '/poster',
      name: 'poster',
      meta: {
        index: 7
      },
      component: () => import('./pages/poster.vue')
    }
  ]
})
