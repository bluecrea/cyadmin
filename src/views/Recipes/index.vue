<template>
  <div class="page-table">
    <a-button class="editable-add-btn" @click="addRecipe" style="margin-bottom: 8px">
      添加菜谱
    </a-button>
    <a-table
        :columns="column"
        border>

    </a-table>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue"
import { useRouter } from "vue-router"

const column = [
  {
    title: '序号',
    dataIndex: 'recipesId',
    width: '8%'
  },
  {
    title: '标题',
    dataIndex: 'title',
    width: '20%',
  },
  {
    title: '主图',
    dataIndex: 'thumbImg',
    width: '15%',
    slots: { customRender: 'thumbImg'}
  },
  {
    title: '难度',
    dataIndex: 'difficult',
    width: '8%',
  },
  {
    title: '耗时',
    dataIndex: 'completionTime',
    width: '8%'
  },
  {
    title: '分类(标签)',
    dataIndex: 'tag',
    width: '25%'
  },
  {
    title: '管理',
    dataIndex: 'operation',
    slots: { customRender: 'operation' }
  },
]
const router = useRouter()

const addRecipe = () => {
  router.push('addRecipe')
}

</script>

<style lang="less">
.guild-list-section {
  width: 100%;
  margin-bottom: 32px;
  min-width: 580px;
  .base {
    font-family: var(--font-display);
    font-weight: 600;
    color: var(--header-primary);
  }
  .guild-list {
    display: grid;
    grid-gap: 16px;
    margin-top: 16px;
    grid-template-columns: repeat(auto-fill, minmax(248px, 1fr));
  }
}
.loaded {
  .splash {
    opacity: 1;
  }
}
</style>