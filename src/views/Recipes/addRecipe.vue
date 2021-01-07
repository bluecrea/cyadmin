<template>
  <div class="work-place">
    <Header-bar bar-name="添加菜谱" first-menu="控制台"/>
    <div class="panel-body">
      <a-card>
        <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
          <div class="flex-left">
            <a-form-item label="标题">
              <a-input v-model:value="form.title" />
            </a-form-item>
            <a-form-item label="类型">
              <a-radio-group v-model:value="form.tag" button-style="solid">
                <a-radio-button :value="1">早餐</a-radio-button>
                <a-radio-button :value="2">午餐/晚餐</a-radio-button>
                <a-radio-button :value="3">水果零食</a-radio-button>
              </a-radio-group>
            </a-form-item>
            <a-form-item label="分类">
              <a-cascader
                  v-model:value="form.pid"
                  :options="sortList"
                  placeholder="请选择分类"
                  @change="onChange"
              />
            </a-form-item>
            <a-form-item label="作者">
              <a-input v-model="form.author"/>
            </a-form-item>
            <a-form-item label="难度">
              <a-slider v-model:value="form.difficult" :min="1" :step="0.1" :max="5" />
            </a-form-item>
            <a-form-item label="菜系">
              <a-input v-model="form.cuisine"></a-input>
            </a-form-item>
            <a-form-item label="耗时">
              <a-input v-model:value="form.times" />
            </a-form-item>
            <a-form-item label="菜谱介绍">
              <a-input v-model:value="form.story" />
            </a-form-item>
          </div>
          <div class="flex-right">
            <a-form-item
                v-for="(domain, index) in form.ing"
                :key="index"
                :label="`食材${index + 1}`"
                :rules="{
                  required: true,
                  message: '不能为空',
                  trigger: 'change',
                }">
              <a-input
                  v-model:value="domain.tit"
                  placeholder="名称"
                  style="width: 20%; margin-right: 2px"
              /> :
              <a-input
                  v-model:value="domain.value"
                  placeholder="分量"
                  style="width: 15%; margin-right: 5px"
              />
              <a-select v-model:value="domain.img" style="width: 20%;margin-right: 8px" placeholder="图片">
                <a-select-option v-for="ing in ingImg" :key="ing.id" :value="ing.ing_img">
                  {{ ing.ingr_name }}
                </a-select-option>
              </a-select>
              <MinusCircleOutlined
                  v-if="form.ing.length > 1"
                  class="dynamic-delete-button"
                  :disabled="form.ing.length === 1"
                  @click="removeDomain(domain)"
              />
            </a-form-item>
            <a-form-item>
              <a-button type="dashed" style="width: 60%" @click="addDomain">
                <PlusOutlined /> 添加食材
              </a-button>
            </a-form-item>
          </div>
        </a-form>
      </a-card>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue'
import { getCookSort,getCookIngImg } from '@/api'
import { sign } from '@/utils'

export default {
  name: 'addRecipes',
  components: {
    HeaderBar,
    MinusCircleOutlined,
    PlusOutlined,
  },
  data() {
    return {
      labelCol: { span: 5 },
      wrapperCol: { span: 15 },
      nonce_str: Date.parse(new Date()) / 1000,
      sortList: [],
      ingImg: [],
      form: {
        name: '',
        pid: [],
        author: '',
        difficult: 1,
        score: 0,
        cuisine: '',
        ing: [],
        times: '',
        story: '',
        tag: 2,
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
          arr.map((item, i) => {
            arr[i].children = resArr[i]
            item.children.forEach(list => {
              list.label = list.sort_name
              list.value = list.id
            })
          })
          this.sortList = [...arr]
        }
      })
      await getCookIngImg(dataObj).then(res => {
        if (res.code === 1) {
          this.ingImg = res.result
        }
      })
    },
    onChange(value) {
      this.form.pid = value
    },
    addDomain() {
      this.form.ing.push({
        value: '',
        tit: '',
        img: ''
      });
    },
    removeDomain(item) {
      let index = this.form.ing.indexOf(item);
      if (index !== -1) {
        this.form.ing.splice(index, 1);
      }
    },
  }
}
</script>