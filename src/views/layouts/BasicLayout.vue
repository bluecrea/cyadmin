<template>
  <a-layout>
    <left-sider :collapsed="collapsed"/>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content style="height: 100%; margin:10px 15px;">
        <router-view />
      </a-layout-content>
      <global-footer />
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: 'BasicLayout',
  components: {

  },
  data() {
    return {
      collapsed: false
    }
  }
}
</script>
