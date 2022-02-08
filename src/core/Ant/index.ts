import { Avatar, ConfigProvider, Button, Form, Alert, Dropdown, Tooltip, Input, Select, Modal, Image,
    Upload, Spin, Switch, Checkbox, Table, Popconfirm } from 'ant-design-vue'

const ant = {
    install(Vue: any) {
        Vue.use(ConfigProvider)
        Vue.use(Input)
        Vue.use(Form)
        Vue.use(Select)
        Vue.use(Upload)
        Vue.use(Checkbox)
        Vue.use(Spin)
        Vue.use(Table)
        Vue.use(Modal)
        Vue.component(Popconfirm.name, Popconfirm)
        Vue.component(Avatar.name, Avatar)
        Vue.component(Button.name, Button)
        Vue.component(Alert.name, Alert)
        Vue.component(Switch.name, Switch)
        Vue.component(Dropdown.name, Dropdown)
        Vue.component(Tooltip.name, Tooltip)
        Vue.component(Image.name, Image)
    }
}

export default ant