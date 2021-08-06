import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from './core/Ant'
import '@/router/config'
import { message } from 'ant-design-vue'

const app = createApp(App)
app.config.globalProperties.$message = message
app.use(Antd)
app.use(store).use(router).mount('#app')
