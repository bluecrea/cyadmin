<template>
  <div class="work-place">
    <Header-bar bar-name="添加菜谱" first-menu="控制台"/>
    <div class="panel-body">
      <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-card>
          <div class="flex">
            <div class="flex-left">
              <a-form-item label="标题">
                <a-input v-model:value="form.title" />
              </a-form-item>
              <a-form-item label="类型">
                <a-radio-group v-model:value="form.tag" button-style="solid">
                  <a-radio-button :value="1">早餐</a-radio-button>
                  <a-radio-button :value="2">午餐</a-radio-button>
                  <a-radio-button :value="3">晚餐</a-radio-button>
                  <a-radio-button :value="4">其他</a-radio-button>
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
                    style="width: 20% margin-right: 2px"
                /> :
                <a-input
                    v-model:value="domain.value"
                    placeholder="分量"
                    style="width: 15% margin-right: 5px"
                />
                <a-select v-model:value="domain.img" style="width: 20%margin-right: 8px" placeholder="图片" option-label-prop="label">
                  <a-select-option v-for="ing in ingImg" :key="ing.id" :value="ing.ing_img" :label="ing.ingr_name">
                    {{ ing.ingr_name }}
                  </a-select-option>
                </a-select>
                <a-icon
                    v-if="form.ing.length > 1"
                    class="dynamic-delete-button"
                    type="minus-circle-o"
                    disabled="form.ing.length === 1"
                    @click="() => removeDomain(domain)"
                />
              </a-form-item>
              <a-form-item>
                <a-button type="dashed" style="width: 100%" @click="addIng">
                  <a-icon type="plus" /> 添加食材
                </a-button>
              </a-form-item>
            </div>
          </div>
        </a-card>
        <a-card style="margin-top:10px">
          <div class="flex">
            <div class="flex-left">
              <a-form-item label="主图">
                <a-input v-model:value="form.covImg"/>
              </a-form-item>
            </div>
            <div class="flex-right">
              <a-form-item
                  v-for="(domain, index) in form.step"
                  :key="index"
                  :label="`步骤${index + 1}`">
                <div class="flex">
                  <a-upload
                      name="stepImg"
                      list-type="picture-card"
                      class="avatar-uploader"
                      :show-upload-list="false"
                      accept="image/*"
                      action="https://api.goxianguo.com/admin/uploadCookImg"
                      :before-upload="beforeUpload"
                      @change="handleChange"
                  >
                    <img v-if="domain.img" :src="domain.img" alt="img" />
                    <div v-else>
                      <a-icon :type="loading ? 'loading' : 'plus'" />
                      <div class="ant-upload-text">
                        上传图片
                      </div>
                    </div>
                  </a-upload>
                  <a-icon
                      v-if="form.step.length > 1"
                      class="dynamic-delete-button"
                      type="minus-circle-o"
                      disabled="form.step.length === 1"
                      @click="() => removeStep(domain)"
                  />
                </div>
                <a-input v-model:value="domain.tit" placeholder="步骤名"/>
                <a-textarea :auto-size="{ minRows: 2, maxRows: 6 }" v-model:value="domain.txt" placeholder="名称" />
              </a-form-item>
              <a-button type="dashed" style="width: 100%" @click="addStep">
                <a-icon type="plus"/> 添加步骤
              </a-button>
            </div>
          </div>
        </a-card>
      </a-form>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import { getCookSort,getCookIngImg, uploadImg } from '@/api'
import { sign } from '@/utils'

export default {
  name: 'addRecipes',
  components: {
    HeaderBar
  },
  data() {
    return {
      labelCol: { span: 5 },
      wrapperCol: { span: 15 },
      nonce_str: Date.parse(new Date()) / 1000,
      sortList: [],
      ingImg: [],
      loading: false,
      form: {
        name: '',
        covImg: '',
        pid: [],
        author: '',
        difficult: 1,
        score: 0,
        cuisine: '',
        ing: [],
        times: '',
        story: '',
        tag: 2,
        step:[],
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
    addIng() {
      this.form.ing.push({
        value: '',
        tit: '',
        img: ''
      })
    },
    addStep() {
      this.form.step.push({
        tit: '',
        img: '',
        txt: ''
      })
    },
    removeDomain(item) {
      let index = this.form.ing.indexOf(item)
      if (index !== -1) {
        this.form.ing.splice(index, 1)
      }
    },
    removeStep(item) {
      let index = this.form.step.indexOf(item)
      if (index !== -1) {
        this.form.step.splice(index, 1)
      }
    },
    uploadCookImg(option) {
      let data = {
        stepImg: option
      }
      uploadImg(data).then(res => {
        console.log(res)
      })
    },
    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' ||
          file.type === 'image/png' ||
          file.type === "image/jpg"
      if (!isJpgOrPng) {
        this.$message.error('图片格式错误')
      }
      return isJpgOrPng
    },
    handleChange(info) {
      if (info.file.status !== 'uploading') {
        this.loading = true
        console.log(info.file)
        return
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
    },
  }
}
</script>