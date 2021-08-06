import { Avatar, Button, Form, Alert, Dropdown, Tooltip, Input, Menu
} from 'ant-design-vue'

const ant = {
    /* eslint-disable */
    install(Vue: any) {
        Vue.component(Avatar.name, Avatar)
        Vue.component(Button.name, Button)
        Vue.use(Input)
        Vue.use(Form)
        Vue.component(Alert.name, Alert)
        Vue.component(Dropdown.name, Dropdown)
        Vue.component(Tooltip.name, Tooltip)
        Vue.use(Menu)
    }
}

export default ant