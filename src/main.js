import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './router/config'

import {
  Alert,
  Button,
  ConfigProvider,
  Checkbox,
  Form,
  Input,
  Layout
} from "ant-design-vue"

const app = createApp(App)

app.use(store)
  .use(Alert)
  .use(Button)
  .use(ConfigProvider)
  .use(Checkbox)
  .use(Form)
  .use(Input)
  .use(Layout)
  .use(router).mount('#app')
