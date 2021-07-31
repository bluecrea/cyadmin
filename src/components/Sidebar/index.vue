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
          <div class="avatar wrapper" style="width: 32px; height: 32px;">
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
  </div>
</template>

<script lang="ts">
import Menubar from '../Menu/index.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Sidebar',
  components: { Menubar },
  props: {
    collapsed: Boolean
  }
})
</script>