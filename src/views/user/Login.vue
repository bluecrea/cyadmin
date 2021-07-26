<template>
  <div class="main">
    <div class="login-main">
      <div class="container">
        <a-form
            class="user-layout-login"
            layout="vertical"
            :model="formState"
            :rules="rules"
            @finish="handleFinish">
          <div class="login-box">
            <div class="login-con">
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
                <a-form-item name="userName" label="用户名或电话号码">
                  <a-input
                      size="large"
                      type="text"
                      placeholder="请输入用户名/手机号码"
                      v-model:value="formState.userName">
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
                    size="large"
                    type="primary"
                    htmlType="submit"
                    :disabled="formState.userName === '' || formState.password === ''">
                  登录
                </a-button>
              </div>
              <div class="login-footer">
                <span>没有账号？</span>
                <a href="#">创建账号</a>
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { UserOutlined,LockOutlined } from '@ant-design/icons-vue'
import {defineComponent, onMounted, reactive, ref, UnwrapRef} from "vue"
import { useRouter } from "vue-router"
import { mapGetters, useStore } from "vuex"
import QRCode from "qrcode"

interface FormState {
  userName: string;
  password: string;
}

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined
  },

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
        { min: 6, max: 18, message: '密码必须大于6位！', trigger: 'blur' },
      ]
    }
    const store = useStore()
    const handleFinish = (values: FormState) => {
      if (values) {
        store.dispatch('userInfo/setUserInfo', formState)
        router.push('/')
      }
    }
    onMounted(async () => {
      await QRCode.toDataURL('https://www.xiachuyi.com', {errorCorrectionLevel: 'Q', width: 170, margin: 1 },(err,url) => {
        if (!err) {
          codeUrl.value = url
        }
      })
    })

    return {
      isLoginError,formState, handleFinish, rules, alertClose, codeUrl
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'userInfo/userInfo'
    })
  }
})

</script>