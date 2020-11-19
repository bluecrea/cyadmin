<template>
  <div class="work-place">
    <Header-bar bar-name="概览" first-menu="控制台"></Header-bar>
    <div class="panel-body">
      <div class="card-collapse">
        <a-collapse expand-icon-position="right" v-model:activeKey="activeKey" :bordered="false">
          <a-collapse-panel key="1" header="总体情况">
            <div class="collapse-content">
              <div class="scorecard-cell">
                <dl>
                  <dt><TeamOutlined /> 用户总数</dt>
                  <dd>1024</dd>
                </dl>
              </div>
              <div class="scorecard-cell">
                <dl>
                  <dt><UsergroupAddOutlined /> 新增用户数</dt>
                  <dd>1024</dd>
                </dl>
              </div>
              <div class="scorecard-cell">
                <dl>
                  <dt><FileTextOutlined /> 菜谱总数</dt>
                  <dd>1024</dd>
                </dl>
              </div>
              <div class="scorecard-cell">
                <dl>
                  <dt><PieChartOutlined /> 积分总消耗</dt>
                  <dd>1024</dd>
                </dl>
              </div>
            </div>
          </a-collapse-panel>
        </a-collapse>
      </div>

    </div>
  </div>
</template>
<script>

import HeaderBar from '@/components/HeaderBar'
import { TeamOutlined, UsergroupAddOutlined, FileTextOutlined, PieChartOutlined } from '@ant-design/icons-vue';

export default {
  components: {
    HeaderBar,
    TeamOutlined,
    UsergroupAddOutlined,
    FileTextOutlined,
    PieChartOutlined
  },
  data() {
    return {
      activeKey: [1]
    }
  }
};
</script>
