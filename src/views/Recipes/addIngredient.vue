<template>
  <div class="page">
    <a-form :model="addIngredient" layout="vertical" autocomplete="off" @finish="onFinish">
      <a-form-item
        label="食材图片"
        name="ingImg"
      >
        <a-upload
          v-model:file-list="fileList"
          name="file"
          :multiple="false"
          action="https://api.xiachuyi.com/admin/upload"
          accept="image/png, image/gif"
          @change="uploadFile"
        >
          <a-button>点击上传图片</a-button>
        </a-upload>
      </a-form-item>
      <a-form-item
          label="食材名称"
          name="ingLabel"
          :rules="[{ required: true, message: '请输入食材名称!' }]"
      >
        <a-input v-model:value="addIngredient.ingLabel" style="width: 200px"/>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue"
import { message } from 'ant-design-vue'
import type { UploadChangeParam } from "ant-design-vue"
import { addIng } from '@/utils/api'

const addIngredient = reactive({
  ingImg: 'https://img.xiachuyi.com/recipes/thumb/20220201193511.jpg',
  ingLabel: ''
})

const fileList = ref([])
const uploadFile = (info: UploadChangeParam) => {
  if (info.file.status === 'done') {
    addIngredient.ingImg = info.file.response.result
  } else if (info.file.status === 'error') {
    message.error(`${info.file.name}上传失败！`)
  }
}

const onFinish = (values: any) => {
  if (!values.ingImg) {
    message.error('请上传图片！')
  } else {
    addIng(values).then((res: any) => {
      console.log(res)
    })
  }
}

</script>

<style lang="less" scoped>
.page {
  .ant-form {
    .ant-form-item-label > label {
      color: var(--channels-default);
    }
  }

}
</style>