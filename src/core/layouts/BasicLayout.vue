<template>
  <div class="layout">
    <svg-mask/>
    <nav-bar/>
    <div class="base">
      <div class="content">
        <sidebar/>
        <div class="content-view">
          <header-bar/>
          <div class="page-wrapper">
            <main class="scroller-base page-scroller">
              <div class="main-wrapper">
                <router-view v-slot="{ Component }">
                  <keep-alive :include="include">
                    <component :is="Component" />
                  </keep-alive>
                </router-view>
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
import svgMask from '@/components/SvgMask/index.vue'
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'BasicLayout',
  components: { NavBar, Sidebar, HeaderBar, svgMask },
  setup() {
    const store = useStore()
    const include = store.getters['routeKeep/include']
    return {
      include
    }
  }
})
</script>

<style lang="less">
.content {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  min-width: 0;
  min-height: 0;
  flex: 1 1 auto;
}
.content-view {
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background: var(--background-primary);
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  .container-themed {
    box-sizing: border-box;
    background: var(--background-primary);
    position: relative;
    flex: 0 0 auto;
    z-index: 100;
    display: flex;
    align-items: center;
    min-width: 0;
    width: 100%;
    height: 48px;
    padding: 0 8px;
    font-size: 16px;
    line-height: 20px;
    cursor: default;
    color: var(--text-normal);
    .icon-header-svg {
      display: block;
      width: 24px;
      height: 24px;
      color: var(--text-muted);
    }
    h3 {
      font-family: var(--font-display);
      font-weight: 600;
      color: var(--header-primary);
      font-size: 16px;
      line-height: 20px;
    }
    .title-base {
      box-sizing: border-box;
      -webkit-box-flex: 0;
      align-items: center;
      display: flex;
      flex: 0 0 auto;
      min-width: auto;
      overflow: hidden;
      white-space: nowrap;
      justify-content: flex-start;
      margin: 0 8px 0 0;
    }
    .children {
      position: relative;
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      min-width: 0;
      overflow: hidden;
      &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 8px;
        height: 100%;
        background: linear-gradient(90deg,hsla(0,0%,100%,0) 0,var(--background-primary));
      }
    }
    .toolbar{
      -webkit-box-flex: 0;
      display: flex;
      align-items: center;
      flex: 0 0 auto;
      min-width: 0;
      box-sizing: border-box;
    }
  }
  .page-wrapper {
    display: flex;
    height: 100%;
    position: relative;
    flex: 1 1 auto;
    flex-direction: column;
    &:before {
      content: "";
      position: absolute;
      display: block;
      top: -1px;
      left: 0;
      right: 0;
      height: 1px;
      box-shadow: var(--elevation-low);
      z-index: 1;
      pointer-events: none;
    }
    main.page-scroller {
      padding: 16px;
      height: 100%;
      padding-right: 0;
      footer {
        position: relative;
        flex-shrink: 0;
        padding-left: 16px;
        padding-right: 16px;
        margin-top: -8px;
      }
    }
  }
}
</style>