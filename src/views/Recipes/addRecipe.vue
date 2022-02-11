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
          <h5 style="flex: 3 1 0">数量</h5>
          <h5 style="flex: 2 1 0">单位</h5>
          <h5 style="flex: 1 1 0">主料</h5>
        </div>
        <div class="invite-row" v-for="(ing, index) in addRecipes.ingArr" :key="index">
          <div class="horizontal" style="flex: 3 1 0;margin-left: 0;" v-if="ing.ingId">
            <div class="ing-flex">
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
          <div class="remove-ing default-keg button" @click="removeIng(ing)"/>
        </div>
        <div class="invite-row">
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
      <div class="form-item">
        <h5>步骤</h5>
      </div>


<!--  <dl class="setup">
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
    <a-modal
        v-model:visible="visible"
        width="768px"
        title="选择食材"
        :ok-button-props="{ disabled: !hasSelected }"
        @ok="selectIng">
      <div style="padding: 0 8px">
        <a-table
            :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
            :columns="columns"
            :data-source="ingTableData"
            :loading="tableLoading"
            bordered
        />
      </div>
    </a-modal>
  </div>

</template>

<script lang="ts" setup>
import {computed, reactive, ref, toRefs} from "vue"
import {debounce} from "lodash-es"
import {LoadingOutlined, PictureOutlined, PlusOutlined, MinusOutlined} from '@ant-design/icons-vue'
import type {UploadChangeParam, UploadProps} from 'ant-design-vue'
import type {AxiosResponse} from '@/axios'
import { ColumnProps } from 'ant-design-vue/es/table/interface'
import {message} from 'ant-design-vue'
import { getIng, searchTag } from '@/utils/api'
import { signStr } from "@/utils/sign"

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

const addRecipes = reactive({
  title: '',
  thumbImg: '',
  markdown: '',
  ingArr: [],
  tagArr: [],
  setup: [],
})
const state = reactive<{
  fetching: boolean,
  tagArrData:[],
  selectedRowKeys: Key[]
}>({
  fetching: false,
  tagArrData: [],
  selectedRowKeys: []
})
const pageData = reactive({
  total: 0,
  pageSize: 15,
  pageNo: 1
})
const {fetching, tagArrData, selectedRowKeys} = toRefs(state)
const fileList = ref([])
const loading = ref<boolean>(false)
const visible = ref<boolean>(false)
const tableLoading = ref<boolean>(true)
const hasSelected = computed(() => state.selectedRowKeys.length > 0)
const nonceStr: number = Date.parse(Date()) / 1000

let lastFetchId = 0
const ingTableData = ref<TableType[]>([])
const fetchTag = debounce((value:string) => {
  // 节流
  lastFetchId += 1
  const fetchId = lastFetchId
  const data = {keyword: value}
  state.fetching = true
  searchTag(data).then((res:AxiosResponse) => {
    if (fetchId !== lastFetchId) {
      // for fetch callback order
      return
    }
    state.tagArrData = res.result.map((tag: any) => ({
      label: `${tag.tagName}`,
      value: tag.tagId,
    }))
    state.fetching = false
  })
}, 800)

const addIng = () => {
  // show modal
  visible.value = true
  const data = {
    pageNo: pageData.pageNo,
    pageSize: pageData.pageSize,
    nonceStr: nonceStr,
    sign: ''
  }
  data.sign = signStr(data)
  getIng(data).then((res:AxiosResponse) => {
    if (!res.code) {
      pageData.total = res.total
      ingTableData.value = res.result
      ingTableData.value.forEach((item, id) => {
        item.key = id
      })
      tableLoading.value = false
    }
  })
}
const removeIng = (item: never) => {
  let index = addRecipes.ingArr.indexOf(item)
  if (index !== -1) {
    addRecipes.ingArr.splice(index, 1)
  }
}
const selectIng = () => {
  state.selectedRowKeys.map(key => {
    addRecipes.ingArr[key] = ingTableData.value[key]
  })
  visible.value = false
}
const onSelectChange = (selectedRowKeys: Key[]) => {
  state.selectedRowKeys = selectedRowKeys
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