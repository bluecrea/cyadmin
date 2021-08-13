<template>
  <router-view/>
</template>

<script>
import {defineComponent, onMounted} from "vue"
import storage from 'store'

export default defineComponent({
  setup() {
    const htmlClass = document.querySelector("html")
    const theme = storage.get('theme')
    if (!theme || theme === 'auto') {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        htmlClass.className = 'theme-dark'
      } else {
        htmlClass.className = 'theme-light'
      }
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const systemScheme = e.matches ? "dark" : "light"
        htmlClass.className = `theme-${systemScheme}`
      })
    } else {
      htmlClass.className = `theme-${theme}`
    }
  }
})
</script>

<style lang="less">
@import "assets/style/theme";
</style>
