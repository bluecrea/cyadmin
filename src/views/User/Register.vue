<template>
  <a-form
      class="user-layout-login"
      layout="vertical"
      :model="formState"
      :rules="rules"
      @finish="handleFinish">
    <div class="login-box">
      <router-link to="/login">注册</router-link>
    </div>
  </a-form>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, UnwrapRef} from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

interface FormState {
  userName: string;
  password: string;
}

export default defineComponent({
  name: 'login',
  setup() {
    const isLoginError = ref<boolean>(false)
    const codeUrl = ref<string>('')
    const router = useRouter()
    const formState: UnwrapRef<FormState> = reactive({
      userName: '',
      password: ''
    })
    const alertClose = () => {
      isLoginError.value = false
    }
    const rules = {
      userName: [
        { message: '用户名不能为空！', trigger: 'blur' },
      ],
      password: [
        { min: 6, max: 24, message: '密码必须大于6位！', trigger: 'blur' },
      ]
    }
    const store = useStore()
    const handleFinish = (values: FormState) => {
      if (values) {
        store.dispatch('userInfo/setUserInfo', JSON.stringify(formState))
        router.push('/')
      }
    }

    return {
      isLoginError,formState, handleFinish, rules, alertClose, codeUrl
    }
  }
})

</script>