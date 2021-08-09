<template>
  <div class="reg-wrap">
    <div>
      <div class="signup-bg-stars"/>
      <div class="signup-bg-stars-2"/>
      <div class="signup-bg-stars-3"/>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" class="home-hero-glow" fill="none" height="1602" viewBox="0 0 2769 1602" width="2769">
      <filter id="a" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="1044" width="1044" x="1682" y="558">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="100"/>
      </filter>
      <filter id="b" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="1044" width="1044" x="1725" y="0">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="100"/>
      </filter>
      <filter id="c" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="858" width="982" x="0" y="23">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="100"/>
      </filter>
      <filter id="d" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="646" width="982" x="279" y="58">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="100"/>
      </filter>
      <g filter="url(#a)" opacity=".34">
        <circle cx="2204" cy="1080" fill="#db469f" r="322"/>
      </g>
      <g filter="url(#b)" opacity=".7">
        <circle cx="2247" cy="522" fill="#043a8a" r="322"/>
      </g>
      <g filter="url(#c)" opacity=".9">
        <ellipse cx="491" cy="452" fill="#043a8a" rx="291" ry="229"/>
      </g>
      <g filter="url(#d)" opacity=".43">
        <ellipse cx="770" cy="381" fill="#043a8a" rx="291" ry="123"/>
      </g>
    </svg>
    <div class="reg-container">
      <div class="reg-block">
        <router-view v-slot="{ Component }">
          <transition name="bounce" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
    <div class="copyright">
      <p>© {{ date }} 厨易 粤 ICP 备 17027770 号 </p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue"

export default defineComponent({
  setup() {
    const date = ref(new Date().getFullYear())
    return {date}
  }
})
</script>

<style lang="less">
.bounce-enter-active {
  animation: bounce-in 0.2s;
}
.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(1.1) translateY(-75px);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

</style>