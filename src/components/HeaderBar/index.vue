<template>
  <div class="header-wrap">
    <div class="grid-content">
      <div class="page-header">
        <a-breadcrumb>
          <a-breadcrumb-item href="">
            <home-outlined />
          </a-breadcrumb-item>
          <a-breadcrumb-item>{{ firstMenu }}</a-breadcrumb-item>
          <a-breadcrumb-item>{{ barName }}</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="header-heading">
          <p>{{ barName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HomeOutlined } from '@ant-design/icons-vue';

export default {
  components: {
    HomeOutlined
  },
  props: {
    firstMenu: {
      type: String,
      default: ''
    },
    barName: {
      type: String,
      default: ''
    }
  }
}
</script>