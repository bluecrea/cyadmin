<template>
  <div class="work-place">
    <div class="header-wrap">
      <div class="grid-content">
        <div class="page-header">
          <a-breadcrumb>
            <a-breadcrumb-item href="">
              <home-outlined />
            </a-breadcrumb-item>
            <a-breadcrumb-item>控制台</a-breadcrumb-item>
            <a-breadcrumb-item>账户管理</a-breadcrumb-item>
          </a-breadcrumb>
          <div class="header-heading">
            <p>账户管理</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { HomeOutlined } from '@ant-design/icons-vue';

export default {
  components: {
    HomeOutlined,
  },
};
</script>
