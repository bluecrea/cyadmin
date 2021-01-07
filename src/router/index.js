import { createRouter, createWebHistory } from 'vue-router'
import { BasicLayout, RouteView } from '@/layouts'

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
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
