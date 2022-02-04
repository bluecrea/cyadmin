<template>
  <div class="page-table">
    <a-button class="editable-add-btn" @click="showModal(null)" style="margin-bottom: 8px">
      添加食材
    </a-button>
    <a-table :columns="columns" :data-source="dataSource" bordered>
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
<script lang="ts" setup>
import { getIng, addIng, editIng, upload } from '@/utils/api'
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { message } from "ant-design-vue"
import { onMounted, reactive, ref } from 'vue'

interface DataItem {
  key: number
  ingId: number
  ingImg: string
  ingLabel: string
}

const columns = [
  {
    title: '序号',
    dataIndex: 'ingId',
    width: '10%',
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
const modalTit = ref<string>('')
const uploadName = ref<string>('')

onMounted(async () => {
  await getData()
})
const getData = () => {
  getIng().then(r => {
    dataSource.value = r.result
    dataSource.value.forEach((item, id) => {
      item.key = id
    })
  })
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
@tabBarColor: var(--background-tertiary);
.editable-row-operations a {
  margin-right: 8px;
}
//border: 1px solid var(--background-tertiary);
.page-table {
  padding-right: 12px;
  .ant-table-wrapper {
    .ant-table,.ant-table-thead > tr > th {
      background: var(--background-secondary);
      color: var(--header-secondary);
      .ant-table-thead > tr > th {
        padding: 8px 10px;
        background: @tabBarColor;
        border-right-color: @tabBarColor;
        border-bottom-color: @tabBarColor;
      }
      .ant-table-tbody > tr > td {
        padding: 10px;
        border-bottom-color: @tabBarColor;
      }
    }

    .ant-table-bordered .ant-table-thead > tr > th,
    .ant-table-bordered .ant-table-tbody > tr > td {
      border-right-color: @tabBarColor;
    }
    .ant-table-bordered .ant-table-header > table,
    .ant-table-bordered .ant-table-body > table,
    .ant-table-bordered .ant-table-fixed-left table,
    .ant-table-bordered .ant-table-fixed-right table {
      border-color: @tabBarColor;
    }
    .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
    .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
    .ant-table-thead > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
    .ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td {
      background-color: var(--background-modifier-selected);
    }

    .ant-pagination-prev .ant-pagination-item-link,
    .ant-pagination-next .ant-pagination-item-link {
      color: var(--interactive-normal);
      background-color: var(--channeltextarea-background);
    }
    .ant-pagination-disabled a,
    .ant-pagination-disabled:hover a,
    .ant-pagination-disabled:focus a,
    .ant-pagination-disabled .ant-pagination-item-link,
    .ant-pagination-disabled:hover .ant-pagination-item-link,
    .ant-pagination-disabled:focus .ant-pagination-item-link {
      border-color: @tabBarColor;
    }
    .ant-pagination-item-active {
      background-color: @tabBarColor;
      border-color: transparent;
    }
  }
}
.ant-btn {
  cursor: pointer;
  &.editable-add-btn {
    cursor: pointer;
    padding: 5px 16px;
    color: var(--interactive-normal);
    background-color: var(--channeltextarea-background);
  }
}
.ant-modal-body {
  .ant-form {
    margin: 20px;
    background-color: var(--background-secondary);
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 12px 16px;
    .ing-upload {
      width: 78px;
      height: 68px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .ant-upload {
        width: 78px;
        height: 68px;
        background-color: #36393f;
        border-radius: 6px;
      }
      span.ant-upload {
        color: var(--interactive-normal);
        > div {
          width: 78px;
          height: 68px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          svg {
            fill: white;
            width: 20px;
            height: 20px;
          }
        }
      }
      .ant-upload-list {
        display: none;
        .ant-upload-list-item {
          display: none;
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .ant-input {
      margin-left: 20px;
      width: 320px;
      border-radius: 3px;
      color: var(--text-normal);
      background-color: var(--deprecated-text-input-bg);
      border: 1px solid var(--deprecated-text-input-border);
    }
  }
}

</style>
