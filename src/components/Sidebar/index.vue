<template>
  <div class="sidebar">
    <nav class="private">
      <div class="container-clickable">
        <div class="search-bar">
          <button>查询</button>
        </div>
        <div class="scroller-base">

        </div>
      </div>
    </nav>
    <section class="panels">
      <div class="visible"/>
      <div class="container">
        <div class="avatar-wrapper">
          <div class="avatar wrapper" style="width: 32px; height: 32px;">
            <svg width="40" height="32" viewBox="0 0 40 32" class="mask-1l8v16 svg-2V3M55" aria-hidden="true">
              <mask id="1d2ae3f5-ca4c-4a92-98a9-18e6824c80e2" width="32" height="32">
                <circle cx="16" cy="16" r="16" fill="white"></circle>
                <rect color="black" x="19" y="19" width="16" height="16" rx="8" ry="8"></rect></mask>
              <foreignObject x="0" y="0" width="32" height="32" mask="url(#1d2ae3f5-ca4c-4a92-98a9-18e6824c80e2)">
                <div class="avatarStack-2Dr8S9">
                  <img src="/assets/6f26ddd1bf59740c536d2274bb834a05.png" alt=" " class="avatar-VxgULZ" aria-hidden="true"></div>
              </foreignObject>
              <svg x="14.5" y="17" width="25" height="15" viewBox="0 0 25 15">
                <mask id="d1f5a911-7b2e-43dc-96a1-8fd0a41e784f">
                  <rect x="7.5" y="5" width="10" height="10" rx="5" ry="5" fill="white"></rect>
                  <rect x="12.5" y="10" width="0" height="0" rx="0" ry="0" fill="black"></rect>
                  <polygon points="-2.16506,-2.5 2.16506,0 -2.16506,2.5" fill="black" transform="scale(0) translate(13.125 10)" style="transform-origin: 13.125px 10px;"></polygon>
                  <circle fill="black" cx="12.5" cy="10" r="0"></circle>
                </mask>
                <rect fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" width="25" height="15" mask="url(#d1f5a911-7b2e-43dc-96a1-8fd0a41e784f)"></rect>
              </svg>
              <rect x="22" y="22" width="10" height="10" fill="transparent" aria-hidden="true" class="pointerEvents-2zdfdO"></rect>
            </svg>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Sidebar',
  props: {
    collapsed: Boolean
  }
})
</script>