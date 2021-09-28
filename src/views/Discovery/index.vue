<template>
  <section class="guild-list-section">
    <h3 class="base">精选社区</h3>
    <div class="guild-list">
      <div class="loaded">
        <card partner="verified"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import card from '../../components/Card/index.vue'
</script>

<style lang="less">
.guild-list-section {
  width: 100%;
  margin-bottom: 32px;
  min-width: 580px;
  .base {
    font-family: var(--font-display);
    font-weight: 600;
    color: var(--header-primary);
  }
  .guild-list {
    display: grid;
    grid-gap: 16px;
    margin-top: 16px;
    grid-template-columns: repeat(auto-fill, minmax(248px, 1fr));
  }
}
.loaded {
  .splash {
    opacity: 1;
  }
}
</style>