<template>
  <a-alyout>
    <left-side :collapsed="collapsed"/>
    <a-alyout>
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
    </a-alyout>
  </a-alyout>
</template>

<script lang="ts">
import LeftSide from '@/components/LeftSide/index.vue'
import Header from '@/components/Header/index.vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'BasicLayout',
  components: { LeftSide, Header, MenuFoldOutlined, MenuUnfoldOutlined },
  setup() {
    return {
      collapsed: ref<boolean>(false)
    }
  }
})
</script>