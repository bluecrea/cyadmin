import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { BasicLayout, RegLayout } from '@/core/layouts'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    redirect: '/discovery',
    children: [
      {
        path: '/discovery',
        name: 'discovery',
        component: () => import('@/views/Discovery/index.vue'),
        meta: { title: '发现美食', keepAlive: true },
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: RegLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/User/Login.vue'),
        meta: { title: '登录' },
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/views/User/Register.vue'),
        meta: { title: '注册' }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
