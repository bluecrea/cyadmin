import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './router/config'

import {
  Alert,
  Avatar,
  Button,
  Breadcrumb,
  ConfigProvider,
  Checkbox,
  Dropdown,
  Form,
  Input,
  Menu,
  Layout,
  Tooltip
} from "ant-design-vue"

const app = createApp(App)

app.use(store)
  .use(Alert)
  .use(Avatar)
  .use(Button)
  .use(Breadcrumb)
  .use(ConfigProvider)
  .use(Checkbox)
  .use(Dropdown)
  .use(Form)
  .use(Input)
  .use(Menu)
  .use(Layout)
  .use(Tooltip)
  .use(router).mount('#app')
