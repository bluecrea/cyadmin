<template>
  <a-layout>
    <left-side :collapsed="collapsed"/>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
        />
      <Header />
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import LeftSide from '@/components/LeftSide'
import Header from '@/components/Header'

export default {
  name: 'BasicLayout',
  components: {
    LeftSide,
    Header,
  },
  data() {
    return {
      collapsed: false
    }
  }
}
</script>
