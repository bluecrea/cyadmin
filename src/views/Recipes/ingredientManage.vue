<template>
  <div class="page-table">
    <a-button class="editable-add-btn" @click="showModal(null)" style="margin-bottom: 8px">
      添加食材
    </a-button>
    <a-table
        :columns="columns"
        :data-source="dataSource"
        :pagination="pagination"
        :loading="tableLoading"
        @change="changeTable"
        bordered>
<!--      <template v-for="col in ['ingId', 'ingImg', 'ingLabel']" #[col]="{ text, record }" :key="col">
        <div>
          <a-input
              v-if="editableData[record.key]"
              v-model:value="editableData[record.key][col]"
              style="margin: -5px 0"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>-->
      <template #operation="{ record }">
        <div class="editable-row-operations">
          <span>
            <a @click="showModal(record)">编辑</a>
          </span>
        </div>
      </template>
    </a-table>
  </div>
  <a-modal v-model:visible="visibleModal" :title="modalTit" @ok="onFinish" :destroyOnClose="true">
    <a-form :model="addIngredient" layout="vertical" autocomplete="off">
      <a-upload
          class="ing-upload"
          :name="uploadName"
          :multiple="false"
          action="https://api.xiachuyi.com/admin/upload"
          accept="image/png, image/gif"
          :customRequest="uploadFile"
          :before-upload="beforeUpload"
      >
        <img v-if="addIngredient.ingImg" :src="addIngredient.ingImg" alt="avatar" />
        <div v-else>
          <loading-outlined v-if="loading"></loading-outlined>
          <plus-outlined v-else></plus-outlined>
        </div>
      </a-upload>
      <a-input v-model:value="addIngredient.ingLabel" placeholder="食材名称" />
    </a-form>
  </a-modal>

</template>
<script lang="ts">
export default {
  name: 'ingredientManage'
}
</script>
<script lang="ts" setup>
import { getIng, addIng, editIng, upload } from '@/utils/api'
import { signStr } from '@/utils/sign'
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue'
import { message } from "ant-design-vue"
import { TableState } from "ant-design-vue/es/table/interface"
import {computed, onMounted, reactive, ref} from 'vue'

interface DataItem {
  key: number
  ingId: number
  ingImg: string
  ingLabel: string
}
type Pagination = TableState['pagination']

const columns = [
  {
    title: '序号',
    dataIndex: 'ingId',
    width: '8%',
    slots: { customRender: 'ingId' },
  },
  {
    title: '图片',
    dataIndex: 'ingImg',
    width: '45%',
    slots: { customRender: 'ingImg' },
  },
  {
    title: '名称',
    dataIndex: 'ingLabel',
    width: '20%',
    slots: { customRender: 'ingLabel' },
  },
  {
    title: '编辑',
    dataIndex: 'operation',
    slots: { customRender: 'operation' },
  }
]
const addIngredient = reactive({
  ingId: null,
  ingImg: '',
  ingLabel: ''
})
const dataSource = ref<DataItem[]>([])
const visibleModal = ref<boolean>(false)
const loading = ref<boolean>(false)
const tableLoading = ref<boolean>(true)
const modalTit = ref<string>('')
const uploadName = ref<string>('')
const pageData = reactive({
  total: 0,
  pageSize: 15,
  pageNo: 1
})

const pagination = computed(() => ({
  total: pageData.total,
  current: pageData.pageNo,
  pageSize: pageData.pageSize
}))

onMounted(async () => {
  await getData()
})
const getData = () => {
  const nonceStr: number = Date.parse(Date()) / 1000
  const data = {
    pageNo: pageData.pageNo,
    pageSize: pageData.pageSize,
    nonceStr: nonceStr,
    sign: ''}
  data.sign = signStr(data)
  getIng(data).then(r => {
    pageData.total = r.total
    dataSource.value = r.result
    dataSource.value.forEach((item, id) => {
      item.key = id
    })
    tableLoading.value = false
  })
}

// 切换分页
const changeTable = (pag: Pagination) => {
  tableLoading.value = true
  pageData.pageNo = pag?.current
  getData()
}

const showModal = (ingData: any) => {
  visibleModal.value = true
  if (ingData) {
    modalTit.value = '编辑食材'
    uploadName.value = 'change'
    addIngredient.ingImg = ingData.ingImg
    addIngredient.ingLabel = ingData.ingLabel
    addIngredient.ingId = ingData.ingId
  } else {
    modalTit.value = '添加食材'
    uploadName.value = 'file'
    addIngredient.ingImg = ''
    addIngredient.ingLabel = ''
    addIngredient.ingId = null
  }
}
const beforeUpload = (file: any) => {
  const isLt2K = file.size / 1024 / 1024 < 0.2;
  if (!isLt2K) {
    message.error('图片超出200K')
  }
  return isLt2K
}
const uploadFile = (e:any) => {
  const formData = new FormData()
  let fileName = e.file.fileName
  if (uploadName.value === 'change') {
    fileName = addIngredient.ingImg.substring(addIngredient.ingImg.lastIndexOf('/') + 1)
  }
  if (!addIngredient.ingLabel) {
    const index = e.file.name.indexOf('.')
    addIngredient.ingLabel = e.file.name.substring(0, index)
  }
  formData.append(uploadName.value, e.file, fileName)
  upload(formData).then(res => {
    addIngredient.ingImg = res.result
    e.onSuccess(res, e.file)
    if (uploadName.value === 'change') {
      editInit()
    }
  })
}

const editInit = () => {
  editIng(addIngredient).then(res => {
    if (res.status === 200) {
      visibleModal.value = false
      getData()
    }
  })
}

const onFinish = () => {
  if (uploadName.value === 'change') {
    editInit()
  } else {
    if (!addIngredient.ingImg) {
      message.error('请上传图片！')
    } else if (!addIngredient.ingLabel) {
      message.error('请输入食材名称！')
    } else {
      addIng(addIngredient).then(res => {
        if (!res.code) {
          visibleModal.value = false
          getData()
        }
      })
    }
  }

}
</script>
<style lang="less">


</style>
