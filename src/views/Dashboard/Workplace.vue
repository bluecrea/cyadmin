<template>
  <div class="work-place">
    <Header-bar bar-name="概览" first-menu="控制台"></Header-bar>
    <div class="panel-body">
      <div class="card-collapse">
        <a-collapse expand-icon-position="right" :activeKey="[1]" :bordered="false">
          <a-collapse-panel key="1" header="用户总览">
            <p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p>
          </a-collapse-panel>
        </a-collapse>
      </div>

    </div>
  </div>
</template>
<script>

import HeaderBar from '@/components/HeaderBar'

export default {
  components: {
    HeaderBar
  }
};
</script>
