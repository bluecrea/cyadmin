<template>
  <a-layout>
    <left-side :collapsed="collapsed"/>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      <Header />
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue'
import LeftSide from '@/components/LeftSide'
import Header from '@/components/Header'

export default {
  name: 'BasicLayout',
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
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
