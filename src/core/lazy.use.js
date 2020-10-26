import { createApp } from 'vue'
import App from '@/App.vue'

import {
  Alert,
  Button,
  ConfigProvider,
  Checkbox,
  Form,
  Input,
  Menu,
  Layout
} from "ant-design-vue"


const app = createApp(App)

app.use(Button)
app.use(Alert)
app.use(Button)
app.use(ConfigProvider)
app.use(Checkbox)
app.use(Form)
app.use(Input)
app.use(Menu)
app.use(Layout)
