<template>
  <div class="page-table">
    <a-button
        class="editable-add-btn"
        style="margin-bottom: 8px"
        @click="edit(null)">
      添加标签</a-button>
    <a-table
        :columns="columns"
        :data-source="dataSource"
        :pagination="pagination"
        @change="changeTable"
        bordered>
      <template #tags="{ record }">
        <a-input
          v-if="tagData[record.key]"
          v-model:value="tagData[record.key].tagName"
        />
        <template v-else>
          {{ record.tagName }}
        </template>
      </template>
      <template #operation="{ record }">
        <div class="editable-row-operations">
          <span v-if="tagData[record.key]">
            <a @click="save(record.key)">保存</a>
            <a @click="cancel(record.key)">取消</a>
          </span>
          <span v-else>
            <a @click="edit(record.key)">编辑</a>
          </span>
        </div>
      </template>
    </a-table>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'TagManage'
  }
</script>
<script lang="ts" setup>
import { cloneDeep } from 'lodash-es'
import { signStr } from '@/utils/sign'
import {computed, onMounted, reactive, ref, UnwrapRef} from "vue"
import {TableState} from "ant-design-vue/es/table/interface"
import {addTag, getTag, editTag} from "@/utils/api"

interface DataItem {
  key: number
  tagId?: number
  tagName: string
}
type Pagination = TableState['pagination']

const columns = [
  {
    title: '序号',
    dataIndex: 'tagId',
    key: 'tagId',
    width: '25%',
  },
  {
    title: '名称',
    dataIndex: 'tagName',
    key: 'tabName',
    width: '50%',
    slots: { customRender: 'tags' }
  },
  {
    title: '管理',
    dataIndex: 'operation',
    slots: { customRender: 'operation' },
  }
]
const dataSource = ref<DataItem[]>([])
const tagData:UnwrapRef<Record<string, DataItem>> = reactive({})
const pages = reactive({
  total: 0,
  pageSize: 15,
  pageNo: 1
})
const pagination = computed(() => ({
  total: pages.total,
  current: pages.pageNo,
  pageSize: pages.pageSize
}))

onMounted(async () => {
  await getTableData()
})
const getTableData = () => {
  const data = {
    pageNo: pages.pageNo,
    pageSize: pages.pageSize,
    nonceStr: Date.parse(Date()) / 1000,
    sign: ''
  }
  data.sign = signStr(data)
  getTag(data).then(res => {
    pages.total = res.total
    dataSource.value = res.result
    dataSource.value.forEach((item, id) => {
      item.key = id
    })
  })
}
const edit = (key: number) => {
  if (key || key === 0) {
    tagData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0])
  } else {
    key = dataSource.value.length
    dataSource.value.push({
      key: key,
      tagName: ''
    })
    tagData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0])
  }
}
const save = (key: number) => {
  Object.assign(dataSource.value.filter(item => key === item.key)[0], tagData[key])
  if (dataSource.value[key].tagId) {
    editTag(tagData[key]).then(res => {
      if (!res.code) {
        getTableData()
        delete tagData[key]
      }
    })
  } else {
    addTag(tagData[key]).then(res => {
      if (!res.code) {
        getTableData()
        delete tagData[key]
      }
    })
  }
}
const cancel = (key: number) => {
  delete tagData[key]
}
const changeTable = (pag: Pagination) => {
  pages.pageNo = pag?.current
  getTableData()
}
</script>