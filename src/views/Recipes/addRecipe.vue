<template>
  <div class="work-place">
    <Header-bar bar-name="添加菜谱" first-menu="控制台"/>
    <div class="panel-body">
      <a-card >
        <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-item label="标题">
            <a-input v-model:value="form.title" />
          </a-form-item>
          <a-form-item label="分类">
            <a-select v-model:value="form.pid" placeholder="选择分类">
              <a-select-option value="shanghai">
                Zone one
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-form>
      </a-card>

    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import { getCookSort } from '@/api'
import { sign } from '@/utils'

export default {
  name: 'addRecipes',
  components: {
    HeaderBar
  },
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 7 },
      nonce_str: Date.parse(new Date()) / 1000,
      sortList: [],
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    }
  },
  mounted () {
    this.getStore()
  },
  methods: {
    async getStore() {
      const dataObj = {
        nonce_str: this.nonce_str
      }
      dataObj.sign = sign(dataObj)
      await getCookSort(dataObj).then(res => {
        if (res.code === 1) {
          let arr = [
            { label: '场景', value: 1, children: [] },
            { label: '菜系', value: 2, children: [] },
            { label: '西餐', value: 3, children: [] },
            { label: '烘培', value: 4, children: [] },
          ]
          let resArr = Object.values(res.result)

          console.log(resArr)
        }
      })
    }
  }
}
</script>