<template>
  <div class="main">
    <div class="login-main">
      <div class="container">
        <a-form class="user-layout-login">
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
                <a-form-item v-bind="validateInfos.username">
                  <a-input size="large" v-model:value="modelRef.username" type="text" placeholder="请输入用户名/手机号码">
                    <template v-slot:prefix><UserOutlined style="color:rgba(0,0,0,.25)"/></template>
                  </a-input>
                </a-form-item>
                <a-form-item v-bind="validateInfos.password">
                  <a-input size="large" v-model:value="modelRef.password" type="password" placeholder="请输入密码">
                    <template v-slot:prefix><LockOutlined style="color:rgba(0,0,0,.25)"/></template>
                  </a-input>
                </a-form-item>
                <a-form-item>
                  <!--<a-checkbox v-model:checked="checked" @change="onChange">自动登录</a-checkbox>-->
                  <router-link :to="{ name: 'Login', params: { user: 'aaa'} }" style="font-size: 14px;float: right;">忘记密码</router-link>
                  <router-link to="/">短信快捷登录</router-link>
                </a-form-item>
              </div>
              <div class="login-footer">
                <div class="right">
                  <a-button size="large" type="primary" style="font-size: 15px; width: 95px" @click="onSubmit">
                    登录
                  </a-button>
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
import { reactive, toRaw } from 'vue';
import { useForm } from '@ant-design-vue/use';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

export default {
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const modelRef = reactive({
      username: '',
      password: '',
    });
    const rulesRef = reactive({
      username: [
        {
          required: true,
          message: '请输入用户名',
        },
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
        },
      ],
    });
    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef);
    const onSubmit = e => {
      e.preventDefault();
      validate()
          .then(() => {
            console.log(toRaw(modelRef));
          })
          .catch(err => {
          });
    };
    return {
      validateInfos,
      resetFields,
      modelRef,
      onSubmit,
    };
  },
  data() {
    return {
      isLoginError: false,
      checked: false,
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      const { form: { validateFields }} = this
      validateFields({ force: true },(err, values) => {

      })
    },
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
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
