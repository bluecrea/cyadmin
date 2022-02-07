<template>
  <a-modal
    v-model:visibl="showModal"
    :title="loginModelTitle"
    @ok="closeLoginModel">
    <p>服务条款</p>
  </a-modal>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  name: 'privacyModel',
  props: {
    loginModelTitle: String,
    showRegisterModel: Boolean,
  },
  setup(props) {
    const showModal = ref<boolean>(false)
    const closeLoginModel = (e: MouseEvent) => {
      console.log(e)
    }
    return {
      showModal,
      closeLoginModel
    }
  }
})
</script>