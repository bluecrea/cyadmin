<template>
  <a-form
      class="user-layout-login"
      layout="vertical"
      :model="formState"
      :rules="rules"
      @finish="handleFinish">
    <div class="reg-box">
      <div class="reg-con">
        <h3>登录</h3>
        <div class="tips">
          <a-alert
              v-if="isLoginError"
              type="error"
              showIcon
              closable
              :after-close="alertClose"
              style="margin-bottom: 24px;"
              message="账户或密码错误" />
        </div>
        <div class="form-login">
          <a-form-item name="username" label="用户名或电话号码">
            <a-input
                size="large"
                type="text"
                placeholder="请输入用户名/手机号码"
                v-model:value="formState.username">
              <template #prefix>
                <user-outlined type="user" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item name="password" label="密码">
            <a-input
                size="large"
                v-model:value="formState.password"
                type="password"
                placeholder="请输入密码">
              <template #prefix>
                <LockOutlined />
              </template>
            </a-input>
          </a-form-item>
          <div class="forget-password">忘记密码</div>
          <a-button
              class="reg-btn"
              type="primary"
              htmlType="submit"
              :loading="loading"
              :disabled="formState.username === '' && formState.password.length !== 8">
            登录
          </a-button>
        </div>
        <div class="login-footer">
          <span>没有账号？</span>
          <router-link to="/register">创建账号</router-link>
        </div>
      </div>
      <div class="vertical-separator"/>
      <div class="qr-login">
        <div class="qr-code">
          <img :src="codeUrl" alt="扫我！">
          <div class="qr-code-overlay">
            <img src="../../assets/images/logo.png" alt="">
          </div>
        </div>
        <h3>通过二维码登录</h3>
        <p>通过 <span>手机APP</span> 扫描二维码，便可即时登录。</p>
      </div>
    </div>
  </a-form>
</template>

<script lang="ts">
import { UserOutlined,LockOutlined } from '@ant-design/icons-vue'
import {defineComponent, onMounted, reactive, ref, UnwrapRef} from 'vue'
import QRCode from 'qrcode'
import { login } from '@/utils/api'
import store from '@/store'
import { useRouter } from 'vue-router'

interface FormState {
  username: string;
  password: string;
}

export default defineComponent({
  name: 'login',
  components: {
    UserOutlined,
    LockOutlined
  },
  setup() {
    const isLoginError = ref<boolean>(false)
    const loading = ref<boolean>(false)
    const codeUrl = ref<string>('')
    const router = useRouter()
    const formState: UnwrapRef<FormState> = reactive({
      username: '',
      password: ''
    })
    const alertClose = () => {
      isLoginError.value = false
    }
    const rules = {
      username: [
        { message: '用户名不能为空！', trigger: 'blur' },
      ],
      password: [
        { min: 8, max: 24, message: '密码必须大于8位！', trigger: 'blur' },
      ]
    }
    const handleFinish = (values: FormState) => {
      if (values) {
        loading.value = true
        login(values).then((res: any) => {
          if (res.code !== 0) {
            isLoginError.value = true
            isLoginError.value = res.message
            loading.value = false
          } else {
            store.dispatch('app/setLogin', res.result)
            loading.value = false
            router.push( '/')
          }
        }).finally(() => {
          loading.value = false
        })
      }
    }
    onMounted(async () => {
      await QRCode.toDataURL(
          'https://www.xiachuyi.com',
          {errorCorrectionLevel: 'Q', width: 170, margin: 1 },
          (err: any, url: string) => {
            if (!err) {
              codeUrl.value = url
            }
          }
      )
    })

    return {
      isLoginError,formState, handleFinish, rules, alertClose, codeUrl, loading
    }
  }
})

</script>