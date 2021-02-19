<template>
  <div class="work-place">
    <header-bar bar-name="概览" first-menu="控制台"/>
    <div class="panel-body">
      <div class="card-collapse">
        <a-collapse expand-icon-position="right" v-model:activeKey="activeKey" :bordered="false">
          <a-collapse-panel key="1" header="总体情况">
            <div class="collapse-content">
              <div class="scorecard-cell">
                <dl>
                  <dt><a-icon type="team" /> 用户总数</dt>
                  <dd>{{ userTotal }}</dd>
                </dl>
              </div>
              <div class="scorecard-cell">
                <dl>
                  <dt><a-icon type="usergroup-add" /> 新增用户数</dt>
                  <dd>1024</dd>
                </dl>
              </div>
              <div class="scorecard-cell">
                <dl>
                  <dt><a-icon type="file-text" /> 菜谱总数</dt>
                  <dd>1024</dd>
                </dl>
              </div>
              <div class="scorecard-cell">
                <dl>
                  <dt><a-icon type="pay-circle" /> 积分总消耗</dt>
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
import { sign } from '@/utils'
import { getUserCount } from '@/api'

export default {
  name: 'workplace',
  components: {
    HeaderBar
  },
  data() {
    return {
      activeKey: [1],
      nonceStr: Date.now(),
      userTotal: 0,
    }
  },
  mounted () {
    this.getUserTotal()
  },
  methods: {
    async getUserTotal() {
      let data = {
        nonceStr: this.nonceStr
      }
      data.sign = sign(data)
      await getUserCount(data).then(res => {
        if (res.code === 1) {
          this.userTotal = res.result.total
        } else {
          this.$message.error(res.message)
        }
      })
    }
  }
};
</script>
