import Vue from 'vue'

import {
  Alert,
  Avatar,
  Button,
  Breadcrumb,
  Card,
  Cascader,
  Checkbox,
  ConfigProvider,
  Collapse,
  Dropdown,
  Divider,
  Radio,
  Select,
  Slider,
  Form,
  FormModel,
  Icon,
  Input,
  Menu,
  Modal,
  message,
  Layout,
  Tooltip,
  Upload,
} from "ant-design-vue"

Vue.use(Alert)
Vue.use(Avatar)
Vue.use(Button)
Vue.use(Breadcrumb)
Vue.use(Card)
Vue.use(Cascader)
Vue.use(ConfigProvider)
Vue.use(Collapse)
Vue.use(Checkbox)
Vue.use(Dropdown)
Vue.use(Divider)
Vue.use(Radio)
Vue.use(Select)
Vue.use(Slider)
Vue.use(Form)
Vue.use(FormModel)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Menu)
Vue.use(Modal)
Vue.use(Layout)
Vue.use(Tooltip)
Vue.use(Upload)

Vue.prototype.$message = message
Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning