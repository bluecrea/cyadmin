<template>
  <div class="main">
    <div class="login-main">
      <div class="container">
        <a-form class="user-layout-login" :form="form" @submit="onSubmit">
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
                      v-decorator="[
                        'username',
                        {rules: [{ required: true, message: '用户名不能为空' }], validateTrigger: 'blur'}
                      ]"
                  >
                    <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                  </a-input>
                </a-form-item>
                <a-form-item>
                  <a-input-password
                      size="large"
                      placeholder="请输入密码"
                      v-decorator="[
                        'password',
                        {rules: [{ required: true, message: '密码不能为空' }], validateTrigger: 'blur'}
                      ]"
                  >
                    <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                  </a-input-password>
                </a-form-item>
                <a-form-item>
                  <!--<a-checkbox v-model:checked="checked" @change="onChange">自动登录</a-checkbox>-->
                  <router-link :to="{ name: 'Login', params: { user: 'aaa'} }" style="font-size: 14px;float: right;">忘记密码</router-link>
                  <router-link to="/">短信快捷登录</router-link>
                </a-form-item>
              </div>
              <div class="login-footer">
                <div class="right">
                  <a-button
                      size="large"
                      type="primary"
                      htmlType="submit"
                      :loading="state.loginBtn"
                      :disabled="state.loginBtn"
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
<script>

export default {
  data() {
    return {
      form: this.$form.createForm(this),
      state: {
        time: 60,
        loginBtn: false,
        loginType: 0,
        smsSendBtn: false
      },
      isLoginError: false,
      checked: false,
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      const {
        form: { validateFields },
        state,
      } = this

      state.loginBtn = true
      const validateFieldsKey = ['username', 'password']
      validateFields(validateFieldsKey, { force: true }, (err, values) => {
        if (!err) {
          console.log('login form', values)
          sessionStorage.setItem('userInfo', JSON.stringify(values))
          state.loginBtn = false
          this.$router.push({path: '/dashboard/workplace'})
        } else {
          setTimeout(() => {
            state.loginBtn = false
          }, 600)
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.user-layout-login {
  label {
    font-size: 14px;
  }
}
</style>
