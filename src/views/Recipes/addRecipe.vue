<template>
  <div class="page">
    <a-form :model="addRecipes" class="page-form-group">
      <div class="form-item">
        <h5>名称</h5>
        <a-input
            v-model:value="addRecipes.title"
            :bordered="false"
            size="large"
            placeholder="请输入标题"
        />
      </div>
      <div class="form-item">
        <h5>封面和摘要</h5>
        <div class="flex-upload">
          <a-upload
              v-model:file-list="fileList"
              name="thumb"
              list-type="picture-card"
              class="recipe-upload"
              :show-upload-list="false"
              :multiple="false"
              accept="image/*"
              :before-upload="beforeUpload"
              @change="handleChange"
              action="https://api.xiachuyi.com/admin/upload"
          >
            <img v-if="addRecipes.thumbImg" :src="`${addRecipes.thumbImg}?x-oss-process=image/resize,h_115,m_lfit`" alt="avatar" />
            <div v-else>
              <loading-outlined v-if="loading"></loading-outlined>
              <picture-outlined v-else/>
              <div class="ant-upload-text">512×512</div>
            </div>
          </a-upload>
          <a-textarea v-model:value="addRecipes.markdown" show-count :maxlength="120" />
        </div>
      </div>
      <div class="form-item">
        <h5>分类和标签</h5>
        <a-select
          v-model:value="addRecipes.tagArr"
          mode="multiple"
          placeholder="选择"
          :filter-option="false"
          :not-found-content="fetching ? undefined : null"
          :options="tagArrData"
          @search="fetchTag"
        >
          <template v-if="fetching" #notFoundContent>
            <a-spin size="small" />
          </template>
        </a-select>
      </div>
      <div class="form-item">
        <h5>食材清单</h5>
        <div class="divider"></div>
        <div class="direction-row">
          <h5 style="flex: 3 1 0">食材名称</h5>
          <h5 style="flex: 3 1 0px">数量</h5>
          <h5 style="flex: 2 1 0">单位</h5>
          <h5 style="flex: 1 1 0">主料</h5>
        </div>
        <div class="invite-row">
          <template v-for="(ing, index) in addRecipes.ingArr">
            <div class="horizontal" style="flex: 3 1 0;margin-left: 0;" v-if="ing.ingId">
              <div class="ing-flex">
                <a-button type="primary" shape="circle" v-if="index > 1" @clickre="removeIng(ing)">
                  <template #icon><MinusOutlined /></template>
                </a-button>
                <span class="ing-name">{{ ing.ingLabel }}</span>
              </div>
            </div>
            <div class="horizontal" style="flex: 3 1 0">
              <a-input style="width: 60%" v-model:value="ing.amount" type="text" placeholder="请输入数量"/>
            </div>
            <div class="horizontal" style="flex: 2 1 0">
              <a-input style="width: 60%" v-model:value="ing.unit" type="text" placeholder="请输入单位"/>
            </div>
            <div class="horizontal" style="flex: 1 1 0">
              <a-switch v-model:checked="ing.isForemost" />
            </div>
          </template>
          <div class="horizontal" style="flex: 3 1 0;margin-left: 0;">
            <div class="ing-flex">
              <a-button type="primary" shape="circle" @click="addIng">
                <template #icon><PlusOutlined /></template>
              </a-button>
              <span class="ing-name">添加食材</span>
            </div>
          </div>
        </div>
      </div>


<!--      <div class="tag-cate">
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
                <div class="ant-upload-text">建议512*512大小的图片</div>
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
      </dl>-->
    </a-form>
    <a-modal v-model:visible="visible" title="选择食材" @ok="selectIng">
      <a-table
          :row-selection="{ selectedRowKeys: ingArrData, onChange: onSelectChange }"
          :columns="columns"
          :data-source="ingTableData"
      />
    </a-modal>
  </div>

</template>

<script lang="ts" setup>
import {reactive, ref, toRefs} from "vue"
import {debounce} from "lodash-es"
import {LoadingOutlined, PictureOutlined, PlusOutlined, MinusOutlined} from '@ant-design/icons-vue'
import type {UploadChangeParam, UploadProps} from 'ant-design-vue'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
import {message} from 'ant-design-vue'
import {searchTag} from '@/utils/api'

interface Setup {
  img: string
  txt: string
}
type Key = ColumnProps['key']
interface TableType {
  key: Key
  ingId?: number
  ingLabel: string
  ingImg: string
}
const columns = [
  {
    title: '编号',
    dataIndex: 'ingId'
  },
  {
    title: '名称',
    dataIndex: 'ingLabel',
  },
  {
    title: '图片',
    dataIndex: 'ingImg',
  }
]
const fileList = ref([])
const loading = ref<boolean>(false)
const visible = ref<boolean>(false)

const addRecipes = reactive({
  title: '',
  thumbImg: '',
  markdown: '',
  ingArr: [],
  tagArr: [],
  setup: [],
})
const state = reactive({
  fetching: false,
  tagArrData: [],
  ingArrData: []
})
const {fetching, tagArrData, ingArrData} = toRefs(state)
let lastFetchId = 0
const ingTableData:TableType[] = []
const fetchTag = debounce((value:string) => {
  // 节流
  lastFetchId += 1
  const fetchId = lastFetchId
  const data = {keyword: value}
  state.fetching = true
  searchTag(data).then(res => {
    if (fetchId !== lastFetchId) {
      // for fetch callback order
      return
    }
    state.tagArrData = res.result.map(tag => ({
      label: `${tag.tagName}`,
      value: tag.tagId,
    }))
    state.fetching = false
  })
}, 800)

const addIng = () => {
  // show modal
  visible.value = true
  /*addRecipes.ingArr.push({

  })*/
}
const removeIng = (item) => {
  let index = addRecipes.ingArr.indexOf(item)
  if (index !== -1) {
    addRecipes.ingArr.splice(index, 1)
  }
}
const selectIng = () => {

}
const onSelectChange = (selectedRowKeys: Key[]) => {
  console.log('selectedRowKeys changed: ', selectedRowKeys);
};

const handleChange = (info: UploadChangeParam) => {
  if (info.file.status === 'uploading') {
    loading.value = true
    return
  }
  if (info.file.status === 'done') {
    addRecipes.thumbImg = info.file.response.result
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