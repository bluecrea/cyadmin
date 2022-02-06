import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import { BasicLayout, RegLayout, RouteView } from '../core/layouts'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    redirect: '/Recipes/recipesManage',
    children: [
      {
        path: '/Recipes',
        name: 'recipes',
        component: RouteView,
        meta: { title: '菜谱管理', keepAlive: false },
        children: [
          {
            path:'/Recipes/recipesManage',
            name: 'RecipesList',
            component: () => import('@/views/Recipes/index.vue'),
            meta: {title: '菜谱管理', keepAlive: true}
          },
          {
            path: '/Recipes/ingredientManage',
            name: 'recipesIngredient',
            component: () => import('@/views/Recipes/ingredientManage.vue'),
            meta: { title: '食材管理', keepAlive: true }
          },
          {
            path: '/Recipes/tagManage',
            name: 'TagManage',
            component: () => import('@/views/Recipes/tagManage.vue'),
            meta: { title: '标签分类管理'}
          },
          {
            path: '/Recipes/addRecipe',
            name: 'addRecipes',
            component: () => import('@/views/Recipes/addRecipe.vue'),
            meta: { title: '添加菜谱', keepAlive: true }
          }
        ]
      },
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
