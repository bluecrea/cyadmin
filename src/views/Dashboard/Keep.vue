<template>
  <div class="keep">
    <Header-bar bar-name="待办事项" first-menu="控制台"></Header-bar>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'

export default {
  name: 'Keep',
  components: {
    HeaderBar
  }
}
</script>