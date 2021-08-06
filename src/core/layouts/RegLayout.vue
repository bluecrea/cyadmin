<template>
  <div class="reg-wrap">
    <div>
      <div class="signup-bg-stars"/>
      <div class="signup-bg-stars-2"/>
      <div class="signup-bg-stars-3"/>
    </div>
    <div class="reg-container">
      <router-view v-slot="{ Component }">
        <transition name="bounce" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

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