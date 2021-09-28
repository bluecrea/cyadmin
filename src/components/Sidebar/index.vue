<template>
  <div class="sidebar">
    <nav class="private">
      <div class="container-clickable">
        <div class="search-bar">
          <button>查询</button>
        </div>
        <Menubar/>
      </div>
    </nav>
    <section class="panels">
      <div class="visible"/>
      <div class="container">
        <div class="avatar-wrapper">
          <div class="avatar wrapper" @click="setUserStatus" style="width: 32px; height: 32px;">
            <svg width="40" height="32" viewBox="0 0 40 32" class="mask">
              <mask id="avatar" width="32" height="32">
                <circle cx="16" cy="16" r="16" fill="white"></circle>
                <rect color="black" x="20" y="15" width="17" height="17" rx="8" ry="8"></rect>
              </mask>
              <foreignObject x="0" y="0" width="32" height="32" mask="url(#avatar)">
                <div class="avatar-stack">
                  <img src="../../assets/images/6f26ddd1bf59740c536d2274bb834a05.png" alt=" ">
                </div>
              </foreignObject>
              <svg x="21" y="16" width="20" height="20" viewBox="0 0 20 20">
<!--                <path fill="#8b949e" fill-rule="evenodd" clip-rule="evenodd" d="M12.2512 2.00309C12.1677 2.00104 12.084 2 12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 11.916 21.999 11.8323 21.9969 11.7488C21.3586 11.9128 20.6895 12 20 12C15.5817 12 12 8.41828 12 4C12 3.31052 12.0872 2.6414 12.2512 2.00309ZM10 8C10 6.896 9.104 6 8 6C6.896 6 6 6.896 6 8C6 9.105 6.896 10 8 10C9.104 10 10 9.105 10 8ZM12 19C15.14 19 18 16.617 18 14V13H6V14C6 16.617 8.86 19 12 19Z"></path>-->
<!--                <path d="M21 3V0H19V3H16V5H19V8H21V5H24V3H21Z" fill="#8b949e"></path>-->
                <path fill="#8b949e" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"></path>
              </svg>
            </svg>
          </div>
        </div>
        <div class="name-tag">
          <div class="username-container">
            <span class="title">zzhjsan</span>
            <svg aria-label="VIP 会员" width="24" height="24" viewBox="0 0 16 16" class="owner-icon icon-svg">
              <path d="M13.6572 5.42868C13.8879 5.29002 14.1806 5.30402 14.3973 5.46468C14.6133 5.62602 14.7119 5.90068 14.6473 6.16202L13.3139 11.4954C13.2393 11.7927 12.9726 12.0007 12.6666 12.0007H3.33325C3.02725 12.0007 2.76058 11.792 2.68592 11.4954L1.35258 6.16202C1.28792 5.90068 1.38658 5.62602 1.60258 5.46468C1.81992 5.30468 2.11192 5.29068 2.34325 5.42868L5.13192 7.10202L7.44592 3.63068C7.46173 3.60697 7.48377 3.5913 7.50588 3.57559C7.5192 3.56612 7.53255 3.55663 7.54458 3.54535L6.90258 2.90268C6.77325 2.77335 6.77325 2.56068 6.90258 2.43135L7.76458 1.56935C7.89392 1.44002 8.10658 1.44002 8.23592 1.56935L9.09792 2.43135C9.22725 2.56068 9.22725 2.77335 9.09792 2.90268L8.45592 3.54535C8.46794 3.55686 8.48154 3.56651 8.49516 3.57618C8.51703 3.5917 8.53897 3.60727 8.55458 3.63068L10.8686 7.10202L13.6572 5.42868ZM2.66667 12.6673H13.3333V14.0007H2.66667V12.6673Z" fill="currentColor"></path>
            </svg>
          </div>
          <div class="subtext">
            <div class="hover-roll">
              <div class="hovered">#3168</div>
              <div class="default">
                <span>签名签名签名签名签名签名签名签名签名签名签名</span>
              </div>
            </div>
          </div>
        </div>
        <div class="setting">
          <a-tooltip placement="top">
            <template #title>
              <span>添加关注</span>
            </template>
            <button class="button look-blank">
              <svg width="20" height="20" viewBox="0 0 16 13">
                <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
                <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"></path>
                <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"></path>
              </svg>
            </button>
          </a-tooltip>
          <a-tooltip placement="top">
            <template #title>
              <span>用户设置</span>
            </template>
            <button class="button look-blank">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path>
              </svg>
            </button>
          </a-tooltip>
        </div>
      </div>
    </section>
    <a-modal
        width="440px"
        class="status-modal"
        v-model:visible="visible">
      <div class="header-container">
        <div class="art"/>
        <div class="header">
          <h4 class="header-text">设置自定义状态</h4>
        </div>
      </div>
      <status-form/>
    </a-modal>
    <template slot="footer">

    </template>
  </div>
</template>

<script lang="ts" setup>
import Menubar from '../Menu/index.vue'
import StatusForm from '../StatusForm/index.vue'
import { ref } from 'vue'

const visible = ref<boolean>(false)
const setUserStatus = () => {
  visible.value = true
}
</script>

<style lang="less" scoped>
.sidebar {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  min-height: 0;
  width: 240px;
  flex: 0 0 auto;
  background: var(--background-secondary);
  .private {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    flex: 1 1 auto;
    min-height: 0;
    position: relative;
    background-color: var(--background-secondary);
    .header {
      position: relative;
      font-family: var(--font-display);
      font-weight: 500;
      padding: 0 16px;
      height: 48px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      z-index: 3;
      transition: background-color .1s linear;
      color: var(--header-primary);
      box-shadow: var(--elevation-low);
      h3 {
        font-size: 15px;
        font-weight: 600;
        line-height: 20px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-box-flex: 1;
        flex: 1;
      }
    }
    .search-bar {
      z-index: 2;
      flex: 0 0 auto;
      -webkit-box-flex: 0;
      padding: 0 10px;
      height: 48px;
      align-items: center;
      box-shadow: var(--elevation-low);
      position: relative;
      display: flex;
      button {
        cursor: pointer;
        width: 100%;
        height: 28px;
        overflow: hidden;
        border-radius: 4px;
        background-color: var(--background-tertiary);
        box-shadow: none;
        color: var(--text-muted);
        text-align: left;
        text-overflow: ellipsis;
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        white-space: nowrap;
      }
    }
  }
  .panels {
    flex: 0 0 auto;
    background-color: var(--background-secondary-alt);
    z-index: 1;
    .container {
      flex-shrink: 0;
      height: 52px;
      font-size: 14px;
      font-weight: 500;
      display: flex;
      align-items: center;
      padding: 0 8px;
      margin-bottom: 1px;
    }
    .avatar-wrapper {
      margin-right: 8px;
      .avatar {
        cursor: pointer;
        width: 32px;
        height: 32px;
        flex-shrink: 0;
        .avatar-stack {
          display: grid;
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
            grid-area: 1/1;
            display: block;
            object-fit: cover;
            pointer-events: none;
            &:before {
              content: "";
              display: block;
              width: 100%;
              height: 100%;
              background-color: var(--background-modifier-accent);
            }
          }
        }
      }
      .wrapper {
        position: relative;
        border-radius: 50%;
        .mask {
          pointer-events: none;
          position: absolute;
          display: block;
          height: 100%;
          width: auto;
        }
      }
    }
    .name-tag {
      cursor: pointer;
      user-select: text;
      margin-right: 4px;
      min-width: 0;
      flex: 1 1 auto;
      .username-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .title {
          display: block;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: var(--header-primary);
          line-height: 18px;
          font-weight: 600;
        }
        .icon-svg {
          flex: 0 0 auto;
          position: relative;
          top: 1px;
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }
      }
      .subtext {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: var(--header-secondary);
        line-height: 13px;
        font-size: 12px;
        .hover-roll {
          display: inline-block;
          vertical-align: top;
          cursor: default;
          text-align: left;
          box-sizing: border-box;
          position: relative;
          width: 100%;
          contain: paint;
          .default, .hovered {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            display: block;
            transition: all .22s ease;
            transform-style: preserve-3d;
            pointer-events: none;
            width: 100%;
          }
          .hovered {
            opacity: 0;
            transform: translate3d(0,107%,0);
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
          }
          .default {
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      &.force-hover:not(.disabled) .hovered, &:hover:not(.disabled) .hovered {
        transform: translateZ(0);
        opacity: 1;
      }
      &.force-hover:not(.disabled) .default, &:hover:not(.disabled) .default {
        transform: translate3d(0,-107%,0);
        opacity: 0;
        user-select: none;
      }
    }
    .setting {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: stretch;
      flex: 0 1 auto;
      .button {
        line-height: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        position: relative;
        color: var(--interactive-normal);
        box-sizing: border-box;
        font-size: 14px;
        font-weight: 500;
        user-select: none;
        cursor: pointer;
        &:hover {
          color: var(--interactive-hover);
          background-color: var(--background-modifier-selected);
        }
      }
    }
  }
}
.status-modal {
  .header-container {
    flex: 0 0 auto;
    padding: 16px;
    z-index: 1;
    border-radius: 5px 5px 0 0;
    overflow: visible;
    position: relative;
    .header {
      padding-top: 52px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .header-text {
        font-size: 20px;
        line-height: 24px;
        font-weight: 600;
        color: var(--interactive-active);
      }
    }
  }
  .art {
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 160px;
    height: 160px;
    background-image: url('../../assets/images/statusHeader.svg');
  }
}
</style>