<template>
  <div class="main">
    <div class="login-main">
      <div class="container">
        <a-form
            class="user-layout-login"
            :model="formState"
            :rules="rules"
            @finish="handleFinish">
          <div class="login-box">
            <div class="login-logo">
              <img src="https://preview.pro.antdv.com/assets/logo.b36f7a7f.svg" alt="logo" class="logo">
              <span class="title">Vue3 + Ant.D</span>
            </div>
            <div class="login-con">
              <div class="desc">
                <h1><span>登录</span></h1>
              </div>
              <div class="tips">
                <a-alert v-if="isLoginError" type="error" showIcon style="margin-bottom: 24px;" message="账户或密码错误（admin/ant.design )" />
              </div>
              <div class="form-login">
                <a-form-item>
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
                <a-form-item name="password">
                  <a-input size="large" v-model:value="formState.password" type="password" placeholder="请输入密码">
                    <template #prefix>
                      <LockOutlined />
                    </template>
                  </a-input>
                </a-form-item>
                <a-form-item>
                  <!--<a-checkbox v-model:checked="checked" @change="onChange">自动登录</a-checkbox>-->
                  <a style="font-size: 14px;float: right;">忘记密码</a>
                  <a>短信快捷登录</a>
                </a-form-item>
              </div>
              <div class="login-footer">
                <div class="right">
                  <a-button
                      size="large"
                      type="primary"
                      htmlType="submit"
                      :disabled="formState.userName === '' || formState.password === ''"
                      style="font-size: 15px; width: 95px">登录</a-button>
                </div>
                <div class="left">
                  <a href="#">创建账号</a>
                </div>
              </div>
            </div>
          </div>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { UserOutlined,LockOutlined } from '@ant-design/icons-vue'
import { defineComponent, reactive, ref, UnwrapRef } from "vue"

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
    const formState: UnwrapRef<FormState> = reactive({
      userName: '',
      password: ''
    })
    const rules = {
      userName: [
        { required: true, message: '用户名不能为空！', trigger: 'blur' },
      ],
      password: [
        { min: 6, max: 18, message: '密码必须大于6位！', trigger: 'blur' },
      ]
    }
    const handleFinish = (values: FormState) => {
      if (values) {
        console.log(formState)
      }
    }
    return {
      isLoginError,formState, handleFinish, rules
    }
  }
})


</script>