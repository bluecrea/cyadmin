import router from './index'
import NProgress from "nprogress"
import store from '@/store'
import '@/components/NProgress/nprogress.less'

router.beforeEach((to,form,next) => {
  document.title = to.meta.title + ''
  NProgress.start()
  const toDepth: number = to.path.split('/').length
  const formDepth: number = form.path.split('/').length
  const isPush = toDepth > formDepth || to.path === store.getters['routeKeep/pushPath']
  if (to.meta.keepAlive) {
    store.dispatch('routeKeep/addInclude', to.name)
  }
  if (form.meta.keepAlive && !isPush) {
    store.dispatch('routeKeep/delIncludes', form.name)
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})