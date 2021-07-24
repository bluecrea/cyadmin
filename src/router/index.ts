import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/About.vue'),
    meta: { title: '中台管理系统' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/User/Login.vue'),
    meta: { title: '登录' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
