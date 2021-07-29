import router from './index'
import NProgress from "nprogress"
import store from '@/store'
import '@/components/NProgress/nprogress.less'

router.beforeEach((to,form,next) => {
  document.title = to.meta.title + ''
  NProgress.start()
  if (to.path !== '/login' && store.getters['userInfo/token'] === '') {
    next({ name: 'login'})
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})