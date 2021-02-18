<template>
  <div class="work-place">
    <Header-bar bar-name="菜谱管理" first-menu="菜谱管理"/>
    <div class="panel-body">
      <a-card>
        <div class="table-page-search">
          <a-form layout="inline">
            <a-row :gutter="48">
              <a-col :md="8" :sm="24">
                <a-form-item label="编号名称">
                  <a-input placeholder=""/>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="分类">
                  <a-cascader
                      v-model:value="queryParam.pid"
                      :options="sortList"
                      placeholder="请选择分类"
                      @change="onChange"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <span class="table-page-search-submitButtons">
                  <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                  <a-button style="margin-left: 8px" @click="() => queryParam = {}">重置</a-button>
                </span>
              </a-col>
            </a-row>
          </a-form>
        </div>

        <div class="table-operator">
          <a-button type="primary" icon="plus" @click="handleAdd()">新建</a-button>
          <a-button :disabled="!hasSelected" type="danger" icon="delete">删除</a-button>  <!-- v-if="selectedRowKeys.length > 0-->
        </div>

        <a-table
            :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
            :columns="columns"
            :data-source="dataList"
            :pagination="pagination"
            rowKey="cok_id"
            bordered>
          <template slot="imgSrc" slot-scope="text, row, index">
            <span>
              <img :src="row.cov_img" alt="" style="width: 30px;height: 30px;" @click="showPic(row.cov_img)" />
              {{text}}
            </span>
          </template>
          <template slot="action" slot-scope="text, record">
            <a @click="handleEdit(record)">编辑</a>
            <a-divider type="vertical" />
            <a @click="handleDelete(record)">删除</a>
          </template>
        </a-table>

      </a-card>
    </div>
    <a-modal
        :visible="previewVisible"
        width="600px"
        :footer="null"
        @cancel="() => previewVisible = false">
      <img :src="previewImage" alt="" width="100%" height="100%" />
    </a-modal>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import { queryCookbookList } from '@/api'
import { sign } from '@/utils'

const columns = [
  {
    title: 'id',
    key: 'cok_id',
    dataIndex: 'cok_id'
  },
  {
    title: '标题',
    key: 'title',
    dataIndex: 'title',
    scopedSlots: { customRender: 'imgSrc' }
  },
  {
    title: '作者',
    key: 'nickname',
    dataIndex: 'nickname'
  },
  {
    title: '评分',
    key: 'score',
    dataIndex: 'score'
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]

export default {
  name: 'manageRecipe',
  components: {
    HeaderBar
  },
  data() {
    return {
      nonce_str: Date.now(),
      pageNo: 1,
      pageSize: 20,
      sortList: [],
      queryParam: {},
      columns,
      previewImage: '',
      selectedRowKeys: [],
      dataList: [],
      pagination: {
        total: 0, // 总条数
        pageSize: 20, // 默认每页显示数量
        showTotal: total => `共 ${total} 条`, // 显示总数
        onChange: ((pageNo, pageSize) => {
          this.pageNo = pageNo
          this.pageSize = pageSize
          this.getDataList()
        })
      },
      previewVisible: false,
    }
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0
    },
  },
  mounted() {
    this.getDataList()
  },
  methods: {
    onChange() {

    },
    handleAdd() {

    },
    handleEdit(row) {

    },
    handleDelete(row) {

    },
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys)
      this.selectedRowKeys = selectedRowKeys
    },
    async getDataList() {
      let data = {
        nonce_str: this.nonce_str,
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }
      data.sign = sign(data)
      await queryCookbookList(data).then(res => {
        if (res.code !== 1) {
          this.$message.error(res.message)
        } else {
          this.dataList = res.result.indexList
          this.pagination.total = 25
        }
      })
    },
    showPic(imgUrl) {
      this.previewImage = imgUrl
      this.previewVisible = true
    }
  }
}
</script>