import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from './core/Ant'
import 'ant-design-vue/dist/antd.less'
import '@/assets/style/theme.less'
import '@/router/config'

const app = createApp(App)
app.use(Antd)
app.use(store).use(router).mount('#app')
