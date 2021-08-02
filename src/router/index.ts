import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { BasicLayout } from '@/core/layouts'

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
    component: () => import('@/views/User/Login.vue'),
    meta: { title: '登录', keepAlive: false }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
