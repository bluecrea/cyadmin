<template>
  <div class="page-table">
    <a-button class="editable-add-btn" @click="showModal(null)" style="margin-bottom: 8px">
      {{ tableManage }}
    </a-button>
    <a-table
        :columns="columns"
        :data-source="dataSource"
        :pagination="pagination"
        :loading="tableLoading"
        @change="changeTable"
        bordered>
      <template #operation="{ record }">
        <div class="editable-row-operations">
          <span>
            <a @click="showModal(record)">编辑</a>
          </span>
        </div>
      </template>
    </a-table>
  </div>
</template>