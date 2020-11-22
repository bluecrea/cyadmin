import { createRouter, createWebHistory } from 'vue-router'
import {BasicLayout} from '@/views/layouts'

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
        path: '/dashboard/workplace',
        name: 'Workplace',
        component: () => import('@/views/Dashboard/Workplace'),
        meta:{ title: '首页'}
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
