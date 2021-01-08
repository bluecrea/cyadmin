<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" width="256px">
    <div class="logo" />
    <a-menu
        theme="light"
        mode="inline"
        :openKeys="openKeys"
        :default-selected-keys="['/dashboard']"
        :selectedKeys="[$route.path]"
        @openChange="onOpenChange"
    >
      <a-sub-menu key="/dashboard">
        <span slot="title">
          <a-icon type="dashboard" />
          <span>控制台</span>
        </span>
        <a-menu-item key="/dashboard/workplace">
          <router-link to="/dashboard/workplace">
            <span>概览</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="/dashboard/addRecipes">
          <router-link to="/dashboard/addRecipes">
            <span>添加菜谱</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">option3</a-menu-item>
        <a-menu-item key="4">option4</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="book" />
          <span>菜谱管理</span>
        </span>
        <a-menu-item key="5">option5</a-menu-item>
        <a-menu-item key="6">option6</a-menu-item>
        <a-menu-item key="7">option7</a-menu-item>
        <a-menu-item key="8">option8</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<script>

export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      rootSubmenuKeys: ['/dashboard', 'sub2'],
      openKeys: ['/dashboard'],
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
