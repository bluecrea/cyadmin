<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" width="256px">
    <div class="logo" />
    <a-menu mode="inline" v-model:selectedKeys="selectedKeys">
      <a-menu-item key="1">
        <user-outlined />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import { UserOutlined, LaptopOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';

export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    }
  },
  components: {
    UserOutlined,
    LaptopOutlined,
    VideoCameraOutlined,
    UploadOutlined
  },
  data() {
    return {
      rootSubmenuKeys: ['sub1', 'sub2'],
      selectedKeys: ['1'],
      openKeys: [],
    }
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  }
}
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
