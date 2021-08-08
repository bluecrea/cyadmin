<template>
  <router-view/>
</template>

<script>
const htmlClass = document.querySelector("html")
// htmlTags = document.getElementsByTagName("html")[0]
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  const systemScheme = e.matches ? "dark" : "light"
  htmlClass.className = `theme-${systemScheme}`
})
/*if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // dark mode
}*/
</script>

<style lang="less">
@import "assets/style/theme";
.ant-tooltip-inner {
  color: var(--header-primary) !important;
  background-color: var(--background-primary) !important;
}
.ant-tooltip-arrow-content {
  background-color: var(--background-primary) !important;
}
</style>
