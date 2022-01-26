import {
    Avatar, ConfigProvider, Button, Form, Alert, Dropdown, Tooltip, Input, Select, Modal, Image, Upload
} from 'ant-design-vue'

const ant = {
    install(Vue: any) {
        Vue.component(Avatar.name, Avatar)
        Vue.component(Button.name, Button)
        Vue.use(ConfigProvider)
        Vue.use(Input)
        Vue.use(Form)
        Vue.component(Alert.name, Alert)
        Vue.component(Dropdown.name, Dropdown)
        Vue.component(Tooltip.name, Tooltip)
        Vue.component(Image.name, Image)
        Vue.use(Modal)
        Vue.use(Select)
        Vue.use(Upload)
    }
}

export default ant