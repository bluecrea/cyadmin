import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { BasicLayout, RouteView } from '@/core/layouts'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    redirect: '/dashboard/workplace',
    meta: { title: '菜谱管理' },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: RouteView,
        meta: { title: '监控中心', keepAlive: true },
        children: [
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            component: () => import('@/views/Dashboard/Workplace.vue'),
            meta: { title: '概览', keepAlive: true }
          }
        ]
      }
    ]
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
