import Vue from 'vue'
import Router from 'vue-router'
import { BasicLayout, RouteView } from '@/layouts'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/user/Login')
  },
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    redirect: '/dashboard/workplace',
    meta: { title: '监控中心' },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: RouteView,
        meta:{ title: '监控中心', keepAlive: true},
        children: [
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            component: () => import('@/views/Dashboard/Workplace'),
            meta: { title: '概览', keepAlive: true }
          },
          {
            path: '/dashboard/addRecipes',
            name: 'addRecipes',
            component: () => import('@/views/Recipes/addRecipe'),
            meta: { title: '添加菜谱', keepAlive: true }
          }
        ]
      },
      {
        path: '/dashboard/keep',
        name: 'Keep',
        component: () => import('@/views/Dashboard/Keep'),
        meta:{ title: '待办事项'}
      },
    ]
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})
