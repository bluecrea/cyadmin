import router from './index'
import NProgress from "nprogress"
import store from '@/store'
import storage from 'store'
import '@/components/NProgress/nprogress.less'

router.beforeEach((to,form,next) => {
  document.title = to.meta.title + ''
  const whiteList = ['/login', '/register']
  const token = storage.get('Access-Token')
  NProgress.start()
  if (whiteList.indexOf(to.path) !== -1) {
    if (token) {
      next({ path: '/' })
      return
    }
    next()
  } else {
    if (token) {
      next()
      const toDepth: number = to.path.split('/').length
      const formDepth: number = form.path.split('/').length
      const isPush = toDepth > formDepth || to.path === store.getters['routeKeep/pushPath']
      if (to.meta.keepAlive) {
        store.dispatch('routeKeep/addInclude', to.name)
      }
      if (form.meta.keepAlive && !isPush) {
        store.dispatch('routeKeep/delIncludes', form.name)
      }
      NProgress.done()
    } else {
      next({ path: '/login' })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})