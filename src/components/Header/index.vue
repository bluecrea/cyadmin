<template>
  <header class="global-header">
    <div class="bar-utilities">
      <span class="bar-icon">
        <a-tooltip placement="bottom">
          <template #title>
            通知
          </template>
<!--          <a-icon type="bell" style="font-size: 18px;" />-->
        </a-tooltip>
      </span>
      <span class="bar-icon">
        <a-tooltip>
          <template #title>
            帮助
          </template>
<!--          <a-icon type="question-circle" style="font-size: 18px;" />-->
        </a-tooltip>
      </span>
    </div>
    <a-dropdown>
      <span class="account-avatar">
        <a-avatar style="backgroundColor: #fde3cf" @click="e => e.preventDefault()" class="global-header-avatar">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
        <span>Username</span>
      </span>
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1">
            <UserOutlined/>
            个人中心
          </a-menu-item>
          <a-menu-item key="2">
            <SettingOutlined />
            个人设置
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="3">
            <LogoutOutlined />
            退出登录
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </header>
</template>
<script lang="ts">
import { UserOutlined, SettingOutlined, LogoutOutlined  } from '@ant-design/icons-vue'
import { defineComponent } from "vue"
import { useStore } from "vuex"

export default defineComponent({
  name: 'Header',
  components: {
    UserOutlined,
    SettingOutlined,
    LogoutOutlined
  },
  setup() {
    const store = useStore()
    const handleMenuClick = (e:any) => {
      if (e.key === '3') {
        store.dispatch('userInfo/delUserInfo')
      }
    }
    return {
      handleMenuClick
    }
  }
})
</script>