<template>
  <div class="layout">
    <nav-bar/>
    <div class="base">
      <div class="content">
        <sidebar/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar/index.vue'
import Sidebar from '@/components/Sidebar/index.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'BasicLayout',
  components: { NavBar, Sidebar },
  setup() {
    return {
      collapsed: ref<boolean>(false)
    }
  }
})
</script>