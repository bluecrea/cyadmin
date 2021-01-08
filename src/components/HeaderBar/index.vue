<template>
  <div class="header-wrap">
    <div class="grid-content">
      <div class="page-header">
        <a-breadcrumb>
          <a-breadcrumb-item href="">
            <a-icon type="home" />
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

export default {
  name: 'HeaderBar',
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