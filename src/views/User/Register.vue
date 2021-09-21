<template>
  <a-form
      class="user-layout-register"
      layout="vertical"
      :rules="rules"
      :model="formState"
      @finish="registerFinish">
    <div class="reg-box">
      <div class="reg-con">
        <h3>创建账号</h3>
        <div class="tips">
          <a-alert
              v-if="resultErr"
              type="error"
              :message="resErrMsg"
              :after-close="closeAlertErr"
              banner
              closable>
            <template #icon>
              <FrownOutlined />
            </template>
          </a-alert>
        </div>
        <div class="form-login">
          <a-form-item name="phoneNumber" label="手机号码">
            <a-input
                size="large"
                type="text"
                :maxlength="11"
                onkeyup="value=value.replace(/[^\d]/g,'')"
                placeholder="手机号码用于登录"
                v-model:value="formState.phoneNumber">
              <template #prefix>
                <MobileOutlined />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item name="username" label="用户名">
            <a-input
              size="large"
              type="text"
              :maxlength="16"
              placeholder="用户名可用于登录"
              v-model:value="formState.username">
              <template #prefix>
                <RobotOutlined />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item name="password" label="密码">
            <a-input-password
                size="large"
                type="password"
                :maxlength="16"
                placeholder="请输入密码"
                v-model:value="formState.password">
              <template #prefix>
                <LockOutlined />
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item name="smsCode" label="验证码" style="display: flex;">
            <a-input
              size="large"
              type="text"
              :maxlength="6"
              class="code-input"
              palceholder="请输入验证码"
              onkeyup="value=value.replace(/[^\d]/g,'')"
              v-model:value="formState.smsCode">
              <template #prefix>
                <SafetyOutlined />
              </template>
              <template #addonAfter>
                <a-button type="primary" :disabled="formState.phoneNumber.length !== 11 || !codeDisable" style="min-width: 160px;" @click="sendCode">
                  <span v-if="codeDisable">获取验证码</span>
                  <span v-if="!codeDisable">{{countdown}} 秒后重新获取</span>
                </a-button>
              </template>
            </a-input>
          </a-form-item>
          <a-button class="reg-btn" type="primary" htmlType="submit">继续</a-button>
        </div>
        <div class="login-footer">
          <router-link to="/login">已经拥有账号？</router-link>
          <p class="sub-text">进行注册即表示您同意厨易的服务条款和隐私权政策。</p>
        </div>
      </div>
    </div>
  </a-form>
</template>

<script lang="ts">
import { defineComponent, reactive, UnwrapRef, ref } from 'vue'
import { MobileOutlined, RobotOutlined, LockOutlined, SafetyOutlined,FrownOutlined } from '@ant-design/icons-vue'
import { RuleObject } from "ant-design-vue/es/form/interface"
import { getSMSCode, register } from "@/utils/api"
import { signStr } from '@/utils/sign'
import { useRouter } from 'vue-router'

interface FormState {
  phoneNumber: string,
  username: string,
  password: string,
  smsCode: string
}

export default defineComponent({
  name: 'login',
  setup() {
    const resultErr = ref<boolean>(false)
    const resErrMsg = ref<string>('')
    const codeDisable = ref<boolean>(true)
    let countdown = ref<number>(60)
    const router = useRouter()
    const closeAlertErr = () => {
      resultErr.value = false
    }

    const formState: UnwrapRef<FormState> = reactive({
      phoneNumber: '',
      username: '',
      password: '',
      smsCode: ''
    })
    let phoneNotNull = async (rule: RuleObject, value: string) => {
      if (value === '') {
        return Promise.reject('请输入手机号码')
      }
    }
    let smsCode = async (rule: RuleObject, value: string) => {
      if (value === '') {
        return Promise.reject('请输入验证码')
      } else if (value.length !== 6) {
        return Promise.reject('手机验证码为6位数')
      }
    }
    let username = async (rule: RuleObject, value: string) => {
      if (value === '') {
        return Promise.reject('请输入用户名(账号)')
      }
    }
    let password = async (rule: RuleObject, value: string) => {
      if (value === '') {
        return Promise.reject('请设置密码')
      } else if (value.length < 8) {
        return Promise.reject('密码长度必须不低于8位')
      }
    }
    const rules = {
      // disable warnings on console: /node_modules/async-validator
      phoneNumber: [
        { validator: phoneNotNull, trigger: 'blur' },
        { message: '请输入正确的手机号码！',pattern: /^1[3456789]\d{9}$/, trigger: 'blur', min: 11, max: 11 }
      ],
      username: [
        { validator: username, trigger: 'blur' },
        { message: '用户名为5~16位字母、数字或下划线组成', pattern:/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/, trigger: 'blur' },
      ],
      password: [{ validator: password, trigger: 'change' }],
      smsCode: [{ validator: smsCode, trigger: 'change' }]
    }

    const sendCode = () => {
      const nonceStr: number = Date.parse(Date()) / 1000
      const data = {
        phoneNumber: formState.phoneNumber,
        nonceStr: nonceStr.toString(),
        sign: ''
      }
      data.sign = signStr(data)
      getSMSCode(data).then((res: any) => {
        if (res.code === 0) {
          let timeStep = setInterval(() => {
            countdown.value --
            if (countdown.value > 0) {
              codeDisable.value = false
            } else {
              countdown.value = 60
              clearInterval(timeStep)
              codeDisable.value = true
            }
          }, 1000)
        } else {
          resultErr.value = true
          resErrMsg.value = res.message
        }
      })
    }

    const registerFinish = (values: FormState) => {
      if (values) {
        register(values).then((res: any) => {
          if (res.code !== 0) {
            resultErr.value = true
            resErrMsg.value = res.message
          } else {
            resultErr.value = false
            router.push({path: '/'})
          }
        })
      }
    }
    return {
      formState,
      registerFinish,
      rules,
      resultErr,
      resErrMsg,
      closeAlertErr,
      sendCode,
      codeDisable,
      countdown
    }
  },
  components: {
    MobileOutlined,RobotOutlined,LockOutlined,SafetyOutlined,FrownOutlined
  },
})

</script>