<template>
  <div class="scroller-base">
<!--    <div class="sub-menu">
      <div class="menu-item select">
        <div class="menu">
          <div class="link">
            <div class="menu-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" class="icon-svg-menu">
                <path fill="currentColor" d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"></path>              </svg>
            </div>
            <div class="menu-name">
              菜谱管理
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <div class="sub-menu" v-for="(sub, index) in menuList" :key="index">
      <div class="menu-group">
        <h2>{{ sub.subTit }}</h2>
      </div>
      <div
        v-for="(menu,e) in sub.child"
        :key="e"
        class="menu-item"
        :class="{'select': isActive(menu.path)}"
      >
        <div class="menu">
          <router-link :to="menu.path" class="link">
            <div class="menu-icon"/>
            <div class="menu-name">
              {{ menu.name }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute()
const menuList = [
  {
    subTit: '菜谱管理',
    child:[
      {
        path: '/Recipes/recipesManage',
        name: '菜谱管理'
      },
      {
        path: '/Recipes/ingredientManage',
        name: '食材管理'
      },
      {
        path: '/Recipes/tagManage',
        name: '标签分类管理'
      },
      {
        path: '/Recipes/addRecipe',
        name: '添加菜谱'
      }
    ]
  }
]
const isActive = (path) => {
  return route.path === path
}
</script>

<style lang="less" scoped>
.scroller-base {
  position: relative;
  box-sizing: border-box;
  min-height: 0;
  flex: 1 1 auto;
  overflow: hidden scroll;
  z-index: 1;
  direction: ltr;
  unicode-bidi: isolate;
}
.sub-menu {
  position: relative;
  padding-top: 16px;
}
.menu-group {
  position: relative;
  box-sizing: border-box;
  height: 24px;
  padding-right: 8px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: default;
  color: var(--channels-default);
  h2 {
    box-sizing: border-box;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: .25px;
    font-family: var(--font-display);
    font-weight: 600;
    color: var(--channels-default);
  }
}
.menu-item {
  padding: 1px 0;
  overflow: visible;
  position: relative;
  cursor: pointer;
  transition: opacity .2s ease-in-out;
  .menu {
    position: relative;
    box-sizing: border-box;
    padding: 0 8px;
    margin-left: 8px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .link {
      color: var(--header-secondary);
      text-decoration: none;
      flex: 1 1 auto;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: center;
      min-width: 0;
      padding: 6px 0;
      cursor: pointer;
      &:before {
        content: "";
        display: block;
        position: absolute;
        top: -1px;
        right: 0;
        bottom: -1px;
        left: 0;
      }
      .menu-icon {
        position: relative;
        margin-right: 6px;
        background-color: var(--text-muted);
        display: block;
        width: 20px;
        height: 20px;
        flex: 0 0 auto;
        mask: url("../../assets/images/tag.svg");
        -webkit-mask: url("../../assets/images/tag.svg");
      }
      .menu-name {
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
        flex: 1 1 auto;
        white-space: normal;
        text-overflow: ellipsis;
        overflow: hidden;
        position: relative;
      }
    }
  }
  &:hover .menu {
    background-color: var(--background-modifier-hover);
    .menu-name {
      color: var(--interactive-hover);
    }
  }
  &.select {
    .menu {
      background-color: var(--background-modifier-selected);
      .menu-name {
        color: var(--interactive-hover);
      }
    }
  }
}
</style>