<template>
  <div class="page">
    <a-form :model="addRecipes" layout="vertical">
      <a-input
          v-model:value="addRecipes.title"
          :bordered="false"
          size="large"
          placeholder="请输入标题"
      />
      <div class="fm-zy">
        <h3>封面和摘要</h3>
        <div class="detail">
          <a-upload
              v-model:file-list="fileList"
              name="avatar"
              list-type="picture-card"
              class="avatar-uploader"
              :show-upload-list="false"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              @change="handleChange"
          >
            <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
            <div v-else>
              <loading-outlined v-if="loading"></loading-outlined>
              <plus-outlined v-else></plus-outlined>
              <div class="ant-upload-text">拖拽或选择封面</div>
            </div>
          </a-upload>
          <a-textarea v-model:value="addRecipes.subText" show-count :maxlength="120" />
        </div>
      </div>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue'
import type { UploadChangeParam, UploadProps } from 'ant-design-vue';



const addRecipes = reactive({
  title: '',
  subText: ''
})

const fileList = ref([]);
const loading = ref<boolean>(false);
const imageUrl = ref<string>('');

const handleChange = ({ file, fileList }: UploadChangeParam) => {
  if (file.file.status === 'uploading') {
    loading.value = true;
    return;
  }
  if (file.file.status === 'done') {
    // Get this url from response in real world.
    console.log(file,fileList)
  }
  if (file.file.status === 'error') {
    loading.value = false;
  }
};
</script>

<style lang="less">
.page {
  color: var(--channels-default);
  background-color: var(--channeltextarea-background);
  border-radius: 8px;
  padding: 16px 35px;
  margin-right: 16px;
  .ant-input {
    font-size: 20px;
    border: none;
  }
  .fm-zy {
    color: var(--channels-default);
    h3 {
      color: var(--interactive-hover);
      padding: 12px;
      font-size: 16px;
    }
    .detail {
      display: flex;
      justify-content: space-evenly;
      .ant-upload-picture-card-wrapper {
        width: 30%;
      }
      .avatar-uploader > .ant-upload {
        width: 220px;
        height: 115px;
        background-color: transparent;
      }
      .ant-upload-select-picture-card i {
        color: var(--channels-default);
        font-size: 32px;
      }
      .anticon-plus {
        color: var(--channels-default);
        svg {
          width: 20px;
          height: 20px;
        }
      }

      .ant-upload-select-picture-card .ant-upload-text {
        color: var(--channels-default);
        margin-top: 8px;
      }

      .ant-input-textarea {
        border: 1px solid var(--channels-default);
        width: 90%;
        height: 115px;
        textarea {
          resize: none;
          color: var(--header-primary);
          font-size: 14px;
          &.ant-input {
            height: 90px;
          }
          &:hover,&:focus {
            border: none;
            box-shadow: none;
          }
        }
      }
      .ant-input-textarea-show-count::after {
        color: var(--channels-default);;
        padding-right: 10px;
      }
    }

  }
}
</style>