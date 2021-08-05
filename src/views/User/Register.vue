<template>
  <a-form
      class="user-layout-register"
      layout="vertical"
      :model="formState"
      :rules="rules"
      @finish="handleFinish">
    <div class="reg-box">
      <div class="reg-con">
        <h3>创建账号</h3>
        <div class="form-login">
          <a-form-item name="phoneNumber" label="手机号码">
            <a-input
                size="large"
                type="text"
                placeholder="请输入用户名/手机号码"
                v-model:value="formState.phoneNumber">
              <template #prefix>
                <user-outlined type="user" />
              </template>
            </a-input>
          </a-form-item>
        </div>
      </div>
    </div>
  </a-form>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, UnwrapRef} from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

interface FormState {
  phoneNumber: string;
  password: string;
}

export default defineComponent({
  name: 'login',
  setup() {
    const isLoginError = ref<boolean>(false)
    const codeUrl = ref<string>('')
    const router = useRouter()
    const formState: UnwrapRef<FormState> = reactive({
      phoneNumber: '',
      password: ''
    })
    const alertClose = () => {
      isLoginError.value = false
    }
    const rules = {
      phoneNumber: [
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