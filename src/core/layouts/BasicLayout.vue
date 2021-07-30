<template>
  <div class="layout">
    <nav-bar/>
    <div class="base">
      <div class="content">
        <sidebar/>
        <div class="content-view">
          <header-bar/>
          <div class="page-wrapper">
            <main class="scroller-base page-scroller">
              <div class="main-wrapper">
                <router-view/>
              </div>
            </main>
            <footer>123123</footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar/index.vue'
import Sidebar from '@/components/Sidebar/index.vue'
import HeaderBar from '@/components/Header/index.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'BasicLayout',
  components: { NavBar, Sidebar, HeaderBar },
  setup() {
    return {
      collapsed: ref<boolean>(false)
    }
  }
})
</script>