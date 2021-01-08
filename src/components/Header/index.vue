<template>
  <header class="global-header">
    <div class="bar-utilities">
      <span class="bar-icon">
        <a-tooltip placement="bottom">
          <template #title>
            通知
          </template>
          <a-icon type="bell" style="font-size: 18px;" />
        </a-tooltip>
      </span>
      <span class="bar-icon">
        <a-tooltip>
          <template #title>
            帮助
          </template>
          <a-icon type="question-circle" style="font-size: 18px;" />
        </a-tooltip>
      </span>
    </div>
    <a-dropdown>
      <span class="account-avatar">
        <a-avatar style="backgroundColor: #fde3cf" @click="e => e.preventDefault()" class="global-header-avatar">
          <template v-slot:icon><a-icon type="user" /></template>
        </a-avatar>
        <span>Username</span>
      </span>
      <template v-slot:overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1"><a-icon type="user" />个人中心</a-menu-item>
          <a-menu-item key="2"><a-icon type="solution" />个人设置</a-menu-item>
          <a-menu-divider />
          <a-menu-item key="3"><a-icon type="logout" />退出登录</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>

  </header>
</template>
<script>

export default {
  data() {
    return {}
  },
  mounted () {

  },
  methods: {
    handleMenuClick(e) {
      if (e.key === '3') {
        sessionStorage.removeItem('userInfo')
        this.$router.push('/login')
      }
    }
  }
}
</script>
