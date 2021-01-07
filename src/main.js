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
  Collapse,
  Card,
  Cascader,
  Dropdown,
  Form,
  Input,
  Radio,
  Select,
  Slider,
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
  .use(Card)
  .use(Cascader)
  .use(ConfigProvider)
  .use(Collapse)
  .use(Checkbox)
  .use(Dropdown)
  .use(Form)
  .use(Input)
  .use(Radio)
  .use(Select)
  .use(Slider)
  .use(Menu)
  .use(Layout)
  .use(Tooltip)
  .use(router).mount('#app')
