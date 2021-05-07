import {
    Button,
    Form,
    Alert,
    Input
} from 'ant-design-vue'

const ant = {
    /* eslint-disable */
    install(Vue: any) {
        Vue.component(Button.name, Button)
        Vue.component(Input.name, Input)
        Vue.use(Form)
        Vue.component(Alert.name, Alert)
    }
}

export default ant