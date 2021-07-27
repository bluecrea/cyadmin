<template>
  <a-layout-sider :collapsed="collapsed" :trigger="null" width="256px">
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
        <template #title>
          <span>
            <DashboardOutlined />
            控制台
          </span>
        </template>
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
      <a-sub-menu key="/recipes">
        <template #title>
          <span>
            <BookOutlined />
            菜谱管理
          </span>
        </template>
        <a-menu-item key="/recipes/manageRecipe">
          <router-link to="/recipes/manageRecipe">
            <span>菜谱管理</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="6">option6</a-menu-item>
        <a-menu-item key="7">option7</a-menu-item>
        <a-menu-item key="8">option8</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { BookOutlined, DashboardOutlined } from '@ant-design/icons-vue'
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from "vue-router"

export default defineComponent({
  name: 'LeftSide',
  components: { BookOutlined, DashboardOutlined },
  props: {
    collapsed: Boolean
  },
  setup() {
    const rootSubmenuKeys = ref<string[]>(['/dashboard', '/recipes'])
    const openKeys = ref<string[]>([])
    const selectedKeys = ref<string[]>([])
    const route = useRoute()

    onMounted(() => {
      const openKey:any = rootSubmenuKeys.value.find((key:any) => route.path.indexOf(key) !== -1)
      openKeys.value.push(openKey)
    })
    const onOpenChange = (keyList: string[] ) => {
      const latestOpenKey:any = keyList.find((key:any) => openKeys.value.indexOf(key) === -1)
      if (rootSubmenuKeys.value.indexOf(latestOpenKey) === -1) {
        openKeys.value = keyList
      } else {
        openKeys.value = latestOpenKey ? [latestOpenKey] : []
      }
    }
    return { openKeys, selectedKeys, onOpenChange }
  }
})
</script>