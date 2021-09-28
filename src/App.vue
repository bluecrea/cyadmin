<script setup>
import storage from 'store'
import zhCN from 'ant-design-vue/es/locale/zh_CN'

const htmlClass = document.querySelector('html')
const theme = storage.get('theme')
const locale = zhCN
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

</script>

<template>
  <a-config-provider :locale="locale">
    <router-view/>
  </a-config-provider>
</template>
