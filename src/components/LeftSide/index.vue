<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" width="256px">
    <div class="logo" />
    <a-menu
        theme="light"
        mode="inline"
        :openKeys="openKeys"
        :default-selected-keys="['1']"
        :selectedKeys="[$route.path]"
        @openChange="onOpenChange"
    >
      <a-sub-menu key="/dashboard">
        <template v-slot:title>
          <ControlOutlined />
          <span>控制台</span>
        </template>
        <a-menu-item key="/dashboard/workplace">
          <router-link to="/dashboard/workplace">
            <span>账户管理</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">option2</a-menu-item>
        <a-menu-item key="3">option3</a-menu-item>
        <a-menu-item key="4">option4</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template v-slot:title>
          <VideoCameraOutlined />
          <span>subnav 2</span>
        </template>
        <a-menu-item key="5">option5</a-menu-item>
        <a-menu-item key="6">option6</a-menu-item>
        <a-menu-item key="7">option7</a-menu-item>
        <a-menu-item key="8">option8</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import { ControlOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';

export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    }
  },
  components: {
    ControlOutlined,
    VideoCameraOutlined,
    UploadOutlined
  },
  data() {
    return {
      rootSubmenuKeys: ['/dashboard', 'sub2'],
      openKeys: [],
      selectedKeys: []
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
  },
}
</script>
