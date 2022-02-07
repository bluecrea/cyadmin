<template>
  <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

</script>