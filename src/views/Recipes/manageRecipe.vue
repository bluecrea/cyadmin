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
            bordered>

        </a-table>

      </a-card>
    </div>
  </div>

</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import { sign } from '@/utils'

const columns = [
  {
    title: 'id',
    key: 'id',
  },
  {
    title: '标题',
    key: 'title'
  }
]

export default {
  name: 'manageRecipe',
  components: {
    HeaderBar
  },
  data() {
    return {
      nonceStr: Date.now(),
      sortList: [],
      queryParam: {},
      columns,
      selectedRowKeys: [],
      dataList: []
    }
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0
    },
  },
  mounted() {

  },
  methods: {
    onChange() {

    },
    handleAdd() {

    },
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys)
      this.selectedRowKeys = selectedRowKeys
    },
  }
}
</script>