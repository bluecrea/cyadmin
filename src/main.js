import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './router/config'

import {
  Alert,
  Avatar,
  Button,
  ConfigProvider,
  Checkbox,
  Dropdown,
  Form,
  Input,
  Menu,
  Layout
} from "ant-design-vue"

const app = createApp(App)

app.use(store)
  .use(Alert)
  .use(Avatar)
  .use(Button)
  .use(ConfigProvider)
  .use(Checkbox)
  .use(Dropdown)
  .use(Form)
  .use(Input)
  .use(Menu)
  .use(Layout)
  .use(router).mount('#app')
