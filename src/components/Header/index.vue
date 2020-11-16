<template>
  <div class="global-header">
    <a-dropdown>
      <span class="account-avatar">
        <a-avatar style="backgroundColor: #fde3cf" @click="e => e.preventDefault()" class="global-header-avatar">
          <template v-slot:icon><UserOutlined /></template>
        </a-avatar>
        <span>Username</span>
      </span>
      <template v-slot:overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1"><UserOutlined />个人中心</a-menu-item>
          <a-menu-item key="2"><SettingOutlined />个人设置</a-menu-item>
          <a-menu-divider />
          <a-menu-item key="3"><ExportOutlined />退出登录</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>

  </div>
</template>
<script>
import { UserOutlined, SettingOutlined, ExportOutlined } from '@ant-design/icons-vue';
import { useRoute, useRouter } from 'vue-router'

export default {
  components: {
    UserOutlined,
    SettingOutlined,
    ExportOutlined
  },
  setup() {
    const router = useRouter()
    const handleMenuClick = e => {
      if (e.key === '3') {
        sessionStorage.removeItem('userInfo')
        router.push('/')
      }
    }
    return {
      handleMenuClick
    }
  },
}
</script>
