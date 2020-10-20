import router from "@/router/index";
import NProgress from 'nprogress'
import '@/components/NProgress/nprogress.less'

router.beforeEach((to, form, next) => {
  document.title = to.meta.title + '-协同管理中心'
  NProgress.start()
  if (!sessionStorage.getItem('userInfo')) {
    if (to.path !== '/login') {
      return next({path: '/login'});
    } else {
      next();
    }
  } else {
    next();
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
