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
              name="file"
              list-type="picture-card"
              class="avatar-uploader"
              :show-upload-list="false"
              :multiple="false"
              accept="image/*"
              :before-upload="beforeUpload"
              @change="handleChange"
              action="https://api.xiachuyi.com/admin/upload"
          >
            <img v-if="addRecipes.thumb" :src="`${addRecipes.thumb}?x-oss-process=image/resize,h_115,m_lfit`" alt="avatar" />
            <div v-else>
              <loading-outlined v-if="loading"></loading-outlined>
              <plus-outlined v-else></plus-outlined>
              <div class="ant-upload-text">拖拽或选择封面</div>
            </div>
          </a-upload>
          <a-textarea v-model:value="addRecipes.subText" show-count :maxlength="120" />
        </div>
      </div>
      <div class="tag-cate">
        <h3>分类和标签</h3>
        <div class="tag-input">
          <a-select mode="tags" v-model="addRecipes.tagArr" :maxTagCount="3" style="width: 100%" :token-separators="[',']" placeholder="添加或选择分类英文逗号分隔" @change="tagChange">
            <a-select-option v-for="(item, index) in addRecipes.tagArr" :key="index">
              {{ item }}
            </a-select-option>
          </a-select>
        </div>
      </div>
      <div class="ingredient">
        <h3>食材</h3>
        <div class="in-box" v-for="(options, index) in addRecipes.ingredient" :key="index">
          <a-select
              style="width: 190px"
              v-model:value="options.id"
              :options="ingredientOptions"
              @change="selectIngredient">
          </a-select>
          <a-input size="small"  v-model:value="options.count"/>
          <a-checkbox v-model:value="options.isForemost">主料</a-checkbox>
        </div>
        <a-button type="dashed" style="width: 60%" @click="addList(1)">
          <PlusOutlined />
          添加食材
        </a-button>
      </div>
      <dl class="setup">
        <dt>制作步骤</dt>
        <dd v-for="(setup, index) in addRecipes.setup" :key="index">
          <div class="setup-img">
            <a-upload
                v-model:file-list="fileList"
                name="avatar"
                list-type="picture-card"
                class="avatar-uploader"
                :show-upload-list="false"
                action="https://api.xiachuyi.com/admin/upload"
                :before-upload="beforeUpload"
                @change="updateSetupImg(index, $event)"
            >
              <img v-if="setup.img" :src="setup.img" alt="avatar" />
              <div v-else>
                <loading-outlined v-if="loading"></loading-outlined>
                <plus-outlined v-else></plus-outlined>
                <div class="ant-upload-text">上传图片</div>
              </div>
            </a-upload>
          </div>
          <a-textarea v-model:value="setup.text" show-count :maxlength="120" />
          <div class="remove">
            <MinusCircleOutlined
                v-if="addRecipes.setup.length > 1"
                class="dynamic-delete-button"
                :disabled="addRecipes.setup.length === 1"
                @click="removeSetup(setup)"
            />
          </div>
        </dd>
        <a-button type="dashed" style="width: 60%" @click="addList(0)">
          <PlusOutlined />
          添加步骤
        </a-button>
      </dl>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
import { PlusOutlined, LoadingOutlined, MinusCircleOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import type { UploadChangeParam, UploadProps, SelectProps } from 'ant-design-vue'

const addRecipes = reactive({
  title: '',
  subText: '',
  thumb: '',
  tagArr: [],
  setup: [],
  ingredient: []
})

interface Setup {
  img: string,
  txt: string
}

const fileList = ref([])
const loading = ref<boolean>(false)
const imageUrl = ref<string>('')

// 获取食材
const ingredientOptions = ref<SelectProps['options']>([
  {
    value: 'jack',
    label: 'Jack'
  },
  {
    value: 'lucy',
    label: 'Lucy'
  },
  {
    value: 'disabled',
    label: 'Disabled'
  }
])

const handleChange = (info: UploadChangeParam) => {
  if (info.file.status === 'uploading') {
    loading.value = true
    return
  }
  if (info.file.status === 'done') {
    addRecipes.thumb = info.file.response.result
    loading.value = false
  }
  if (info.file.status === 'error') {
    loading.value = false
  }
}

const updateSetupImg = (index: number, file: UploadChangeParam) => {

}

const beforeUpload = (file: UploadProps['fileList']) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  const isLt300Kb = file.size / 1024 / 1024 < 0.3;
  if (!isJpgOrPng) {
    message.error('格式错误，请上传图片!')
  }
  if (!isLt300Kb) {
    message.error('图片大小300Kb以内！')
  }
  return isJpgOrPng && isLt300Kb
}

const selectIngredient = (value: string) => {
  console.log(value)
}

const tagChange = (value: any) => {
  addRecipes.tagArr = value
  if (addRecipes.tagArr.length > 3) {
    return
  }
}

const removeSetup = (item: Setup) => {
  let index = addRecipes.setup.indexOf(item);
  if (index !== -1) {
    addRecipes.setup.splice(index, 1)
  }
}

const addList = (type: number) => {
  switch (type) {
    case 0:
      addRecipes.setup.push({
        imgList: [],
        img: '',
        txt: ''
      })
      break
    case 1:
      addRecipes.ingredient.push({
        id: '',
        count: '',
        isForemost: 0
      })
      break
  }
}

</script>