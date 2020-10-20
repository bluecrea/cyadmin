import { createApp } from 'vue'
import {
  Button
} from "ant-design-vue"
import router from "@/router";

const app = createApp({})

app.use(Button)
  .use(router).mount('#app')
