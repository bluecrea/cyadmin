import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { BasicLayout } from '@/core/layouts'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '菜谱管理' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/Login.vue'),
    meta: { title: '登录' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
