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
          <a-menu-item key="1"><UserOutlined />1st menu item</a-menu-item>
          <a-menu-item key="2"><UserOutlined />2nd menu item</a-menu-item>
          <a-menu-item key="3"><UserOutlined />3rd item</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>

  </div>
</template>
<script>
import { UserOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    UserOutlined
  },
  methods: {
    handleMenuClick(e) {
      console.log('click', e);
    },
  },
}
</script>
