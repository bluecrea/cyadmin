<template>
  <a-form
      class="user-layout-register"
      layout="vertical"
      :rules="rules"
      :model="formState"
      @finish="registerFinish"
      @finishFailed="handleFinishFailed">
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
          <a-form-item name="userName" label="用户名">
            <a-input
              size="large"
              type="text"
              :maxlength="16"
              placeholder="用户名可用于登录"
              v-model:value="formState.userName">
              <template #prefix>
                <IdcardOutlined />
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
                <a-button class="get-code" :disabled="formState.phoneNumber.length !== 11 && codeDisable" type="text" style="min-width: 160px;" @click="sendCode">
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
        </div>
      </div>
    </div>
  </a-form>
</template>

<script lang="ts">
import { defineComponent, reactive, UnwrapRef, ref } from 'vue'
import { MobileOutlined, IdcardOutlined, LockOutlined, SafetyOutlined,FrownOutlined } from '@ant-design/icons-vue'
import { RuleObject, ValidateErrorEntity } from "ant-design-vue/es/form/interface"
import { getSMSCode } from "@/utils/api"

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
    const countdown = ref<number|null>(null)
    const closeAlertErr = () => {
      resultErr.value = false;
    };
    const formState: UnwrapRef<FormState> = reactive({
      phoneNumber: '',
      username: '',
      password: '',
      smsCode: ''
    })

    const sendCode = () => {
      const nonceStr: number = Date.parse(Date()) / 1000
      const data = {
        phoneNumbers: formState.phoneNumber,
        nonceStr: nonceStr.toString(),
        sign: ''
      }
      getSMSCode(data).then((res: any) => {
        console.log(res)
      })
    }

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
    let userName = async (rule: RuleObject, value: string) => {
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
      userName: [
        { validator: userName, trigger: 'blur' },
        { message: '用户名为5~16位字母、数字或下划线组成', pattern:/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/, trigger: 'blur' },
      ],
      password: [{ validator: password, trigger: 'change' }],
      smsCode: [{ validator: smsCode, trigger: 'change' }]
    }
    const registerFinish = (values: FormState) => {
      if (values) {
        resultErr.value = true
        resErrMsg.value = '用户已经存在'
      }
    }
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.warn(errors);
    }
    return {
      formState,
      registerFinish,
      handleFinishFailed,
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
    MobileOutlined,IdcardOutlined,LockOutlined,SafetyOutlined,FrownOutlined
  },
})

</script>