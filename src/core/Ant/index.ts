import {
    Avatar,
    ConfigProvider,
    Button,
    Form,
    Alert,
    Dropdown,
    Tooltip,
    Input,
    Select,
    Modal,
    Image,
    Upload,
  Spin,
  Checkbox
} from 'ant-design-vue'

const ant = {
    install(Vue: any) {
        Vue.component(Avatar.name, Avatar)
        Vue.component(Button.name, Button)
        Vue.use(ConfigProvider)
        Vue.use(Input)
        Vue.use(Form)
        Vue.use(Modal)
        Vue.use(Select)
        Vue.use(Upload)
        Vue.use(Checkbox)
        Vue.use(Spin)
        Vue.component(Alert.name, Alert)
        Vue.component(Dropdown.name, Dropdown)
        Vue.component(Tooltip.name, Tooltip)
        Vue.component(Image.name, Image)
    }
}

export default ant