<template>
  <div
      class="list-item"
      v-for="(router, index) in routeItem"
      :key="index"
      @mouseover="hover = index"
      @mouseleave="hover = -1"
  >
    <div class="pill pill-wrapper" aria-hidden="true">
      <span class="item" style="opacity: 1;transform: none;" :style="{height: `${action(index).height}px`}"/>
    </div>
    <div class="list-item-wrapper">
      <div class="wrapper">
        <a-tooltip placement="right">
          <template #title>
            <span>{{ router.name }}</span>
          </template>
          <svg width="48" height="48" viewBox="0 0 48 48" class="svg" overflow="visible">
            <defs>
              <path :id="`${router.id}_mask`" :d="action(index).d"/>
            </defs>
            <mask :id="router.id" fill="black" x="0" y="0" width="48" height="48">
              <use :href="`#${router.id}_mask`" fill="white"/>
            </mask>
            <foreignObject :mask="`url(#${router.id})`" x="0" y="0" width="48" height="48">
              <div class="wrapper-foreign selected" tabindex="-1">
                <div class="child-wrapper">
                  <svg
                      class="home-icon"
                      aria-hidden="false"
                      :width="width"
                      :height="height"
                      :viewBox="`0 0 ${width} ${height}`">
                    <path
                        fill="currentColor"
                        :d="router.icon"
                    />
                  </svg>
                </div>
              </div>
            </foreignObject>
          </svg>
        </a-tooltip>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import {useRoute} from 'vue-router'

const props = defineProps({
  routeItem: Object,
  width: {
    type: Number,
    default: 24
  },
  height: {
    type: Number,
    default: 24
  }
})

const bckPath = ref<string>('M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z')
const circle = ref<string>('M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z')
const hover = ref<number>(-1)
const route = useRoute()
const action = (index) => {
  if (route.path === props.routeItem[index].path) {
    return {
      d: circle.value,
      height: 40
    }
  }
  return {
    d: hover.value === index ? circle.value : bckPath.value,
    height: hover.value === index ? 20 : 0
  }
}


</script>

<style lang="less" scoped>
.list-item {
  .pill-wrapper {
    position: relative;
    overflow: hidden;
    width: 8px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    contain: layout size;
  }
  .pill {
    position: absolute;
    top: 0;
    left: 0;
    .item {
      position: absolute;
      display: block;
      width: 8px;
      border-radius: 0 4px 4px 0;
      margin-left: -4px;
      background-color: var(--header-primary);
    }
  }

  .list-item-wrapper {
    .wrapper {
      box-sizing: border-box;
      position: relative;
      width: 48px;
      height: 48px;
      cursor: pointer;
      &.selected .child-wrapper {
        color: #fff;
        background-color: hsl(235,calc(1 * 85.6%),64.7%);
      }
    }
    .svg {
      box-sizing: border-box;
      position: relative;
      width: 48px;
      height: 48px;
      cursor: pointer;
      .home-icon {
        display: block;
        width: 28px;
        height: 20px;
      }
    }
    .wrapper-foreign {
      display: flex;
      width: 48px;
      height: 48px;
      align-items: center;
      justify-content: center;
      transition: background-color .1s ease-out,color .1s ease-out;
      .child-wrapper {
        transition: background-color .15s ease-out,color .15s ease-out;
        background-color: var(--background-primary);
        color: var(--text-normal);
        display: flex;
        width: 48px;
        height: 48px;
        align-items: center;
        justify-content: center;
      }
    }
    .selected .child-wrapper, .wrapper-foreign:hover .child-wrapper {
      color: #fff;
      background-color: #FF9028;
    }
  }
}



</style>