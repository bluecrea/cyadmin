import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import { BasicLayout, RegLayout, RouteView } from '../core/layouts'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    redirect: '/Recipes/index',
    children: [
      {
        path: '/Recipes',
        name: 'recipes',
        component: RouteView,
        meta: { title: '菜谱管理', keepAlive: true },
        children: [
          {
            path:'/Recipes/index',
            name: 'RecipesList',
            component: () => import('@/views/Recipes/index.vue'),
            meta: {title: '菜谱列表', keepAlive: true}
          },
          {
            path: '/Recipes/add',
            name: 'addRecipes',
            component: () => import('@/views/Recipes/add.vue'),
            meta: { title: '添加菜谱', keepAlive: true }
          }
        ]
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
