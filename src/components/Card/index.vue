<template>
  <div class="card" role="button" tabindex="0">
    <div class="card-header">
      <div class="splash">
        <img src="https://cdn.discordapp.com/discovery-splashes/522681957373575168/c73d6929db8fc3362b51f0f08cfd5cff.jpg?size=640" alt="" class="splash-image">
      </div>
      <div class="guild-icon">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <foreignObject x="0" y="0" width="48" height="48" overflow="visible" mask="url(#svg-mask-squircle)">
            <div class="icon-mask">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <foreignObject x="0" y="0" width="40" height="40" overflow="visible" mask="url(#svg-mask-squircle)">
                  <img src="https://cdn.discordapp.com/icons/522681957373575168/ff41f19c2234fa86c2a6acee8b718051.png?size=128" alt="" class="avatar"></foreignObject>
              </svg>
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
    <div class="guild-info">
      <div class="title">
        <a-tooltip v-if="props.partner">
          <template #title>{{ props.partner === 'verified' ? '已验证 &amp; 已合作' : '合作伙伴'}}</template>
          <div class="flower-star-container guild-badge" :class="props.partner">
            <svg aria-label="已验证 &amp; 已合作" class="flowerStar-1GeTsn" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2">
              <path fill="currentColor" fill-rule="evenodd" d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"></path>
            </svg>
            <div class="child-container">
              <svg v-if="props.partner === 'verified'" class="icon" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2">
                <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor"></path>
              </svg>
              <svg v-if="props.partner === 'partnered'" class="icon" aria-hidden="false" width="16" height="16" viewBox="0 0 16 16">
                <path d="M10.5906 6.39993L9.19223 7.29993C8.99246 7.39993 8.89258 7.39993 8.69281 7.29993C8.59293 7.19993 8.39317 7.09993 8.29328 6.99993C7.89375 6.89993 7.5941 6.99993 7.29445 7.19993L6.79504 7.49993L4.29797 9.19993C3.69867 9.49993 2.99949 9.39993 2.69984 8.79993C2.30031 8.29993 2.50008 7.59993 2.99949 7.19993L5.99598 5.19993C6.79504 4.69993 7.79387 4.49993 8.69281 4.69993C9.49188 4.89993 10.0912 5.29993 10.5906 5.89993C10.7904 6.09993 10.6905 6.29993 10.5906 6.39993Z" fill="currentColor"></path><path d="M13.4871 7.79985C13.4871 8.19985 13.2874 8.59985 12.9877 8.79985L9.89135 10.7999C9.29206 11.1999 8.69276 11.3999 7.99358 11.3999C7.69393 11.3999 7.49417 11.3999 7.19452 11.2999C6.39545 11.0999 5.79616 10.6999 5.29674 10.0999C5.19686 9.89985 5.29674 9.69985 5.39663 9.59985L6.79499 8.69985C6.89487 8.59985 7.09463 8.59985 7.19452 8.69985C7.39428 8.79985 7.59405 8.89985 7.69393 8.99985C8.09346 8.99985 8.39311 8.99985 8.69276 8.79985L9.39194 8.39985L11.3896 6.99985L11.6892 6.79985C12.1887 6.49985 12.9877 6.59985 13.2874 7.09985C13.4871 7.39985 13.4871 7.59985 13.4871 7.79985Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
        </a-tooltip>
        <div class="guild-name">佛跳墙</div>
      </div>
      <div class="description color-secondary">The VALORANT Discord server, in collaboration with Riot Games. We offer the latest news and various chats.</div>
      <div class="member-info">
        <div class="member-count">
          <div class="dot-online"/>
          <div class="size12 color-secondary">5000 条状态</div>
        </div>
        <div class="member-count">
          <div class="dot-online dot-offline"/>
          <div class="size12 color-secondary">5000 位粉丝</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  partner: String
})
</script>

<style lang="less" scoped>
img[alt] {
  text-indent: -9999px;
}
.size12 {
  font-size: 12px;
  line-height: 16px;
}
.color-secondary {
  color: var(--header-secondary);
}
.card {
  &:focus, &:hover {
    transform: translateY(-1px);
  }
  &:hover .splash {
    transform: scale(1.01) translateZ(0);
  }
}
.card-header {
  height: 143px;
  position: relative;
  display: block;
  overflow: visible;
  margin-bottom: 32px;
}
.splash {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity .2s,transform .2s ease-out,-webkit-transform .2s ease-out;
  transform: scale(1);
}
.splash, .splash-image {
  width: 100%;
  height: 100%;
}
.splash-image {
  object-fit: cover;
}
.guild-icon {
  position: absolute;
  bottom: -21px;
  left: 12px;
  .icon-mask {
    padding: 4px;
    background-color: var(--activity-card-background);
    transition: box-shadow .2s ease-out,transform .2s ease-out,background .2s ease-out,-webkit-box-shadow .2s ease-out,-webkit-transform .2s ease-out;
  }
  .avatar {
    width: 100%;
    height: 100%;
  }
}
.guild-info, .title {
  display: flex;
}
.guild-info {
  flex: 1 1 auto;
  position: relative;
  flex-direction: column;
  align-content: stretch;
  padding: 0 16px 16px;
  overflow: hidden;
}
.title {
  align-items: center;
  width: 100%;
  font-weight: 600;
  .flower-star-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}
.guild-badge {
  flex: 0 0 16px;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  margin-left: -2px;
}
.verified {
  color: hsl(139,calc(1*47.3%),43.9%);
}
.partnered {
  color: #FF9028;
}
.child-container {
  position: absolute;
  top: -.05px;
  left: .05px;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  .icon {
    width: 100%;
    height: 100%;
    color: #fff;
  }
}
.guild-name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
  line-height: 20px;
  color: var(--header-primary);
}
.description {
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  overflow: hidden;
  margin: 4px 0 16px;
  display: -webkit-box;
  font-size: 14px;
  line-height: 18px;

}
.member-count, .member-info {
  display: flex;
  align-items: center;
}
.member-info {
  flex: 0 0 auto;
}
.member-count {
  font-size: 0.75rem;
  line-height: 1rem;
  margin-right: 16px;
  .dot-online {
    border-radius: 50%;
    width: 8px;
    height: 8px;
    margin-right: 4px;
    flex-shrink: 0;
    background-color: hsl(139,calc(1*47.3%),43.9%);
  }
  .dot-offline {
    background-color: #b9bbbe;
  }
}
</style>