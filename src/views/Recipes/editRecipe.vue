<template>
  <div class="work-place">
    <Header-bar bar-name="添加菜谱" first-menu="控制台"/>
    <div class="panel-body">
      <a-card>
        <a-form :form="form" :label-col="labelCol" :wrapper-col="wrapperCol" @submit="onSubmit">
          <div class="flex">
            <div class="flex-left">
              <a-form-item label="标题">
                <a-input
                    v-decorator="['title', {rules: [{ required: true, message: '标题不能为空' }] }]"
                />
              </a-form-item>
              <a-form-item label="类型">
                <a-radio-group
                    v-decorator="['tag', {initialValue: 2}]"
                    button-style="solid">
                  <a-radio-button :value="1">早餐</a-radio-button>
                  <a-radio-button :value="2">午餐</a-radio-button>
                  <a-radio-button :value="3">晚餐</a-radio-button>
                  <a-radio-button :value="4">其他</a-radio-button>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="分类">
                <a-cascader
                    :options="sortList"
                    placeholder="请选择分类"
                    v-decorator="['pid', {rules: [{ required: true, message: '请选择分类' }] }]"
                />
              </a-form-item>
              <a-form-item label="作者">
                <a-input v-decorator="['author', {initialValue: '872b0966ed95c7d5'}]"/>
              </a-form-item>
              <a-form-item label="难度">
                <a-slider v-decorator="['difficult']" :min="1" :step="0.1" :max="5" :marks="{ 1: '易', 3: '中', 5: '难'}" />
              </a-form-item>
              <a-form-item label="菜系">
                <a-input v-decorator="['cuisine']"/>
              </a-form-item>
              <a-form-item label="耗时">
                <a-input v-decorator="['times']"/>
              </a-form-item>
              <a-form-item label="菜谱介绍">
                <a-input  v-decorator="['story', {rules: [{ required: true, message: '请输入菜谱介绍' }]}]" />
              </a-form-item>
            </div>
            <div class="flex-right">
              <a-form-item
                  v-decorator="['ing']"
                  v-for="(domain, index) in ing"
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
                    style="width: 20%;margin-right: 2px"
                /> :
                <a-input
                    v-model:value="domain.value"
                    placeholder="分量"
                    style="width: 15%;margin-right: 5px"
                />
                <a-select v-model:value="domain.img" style="width: 20%;margin-right: 8px" placeholder="图片" option-label-prop="label">
                  <a-select-option v-for="ing in ingImg" :key="ing.id" :value="ing.ing_img" :label="ing.ingr_name">
                    {{ ing.ingr_name }}
                  </a-select-option>
                </a-select>
                <a-icon
                    v-if="ing.length > 1"
                    class="dynamic-delete-button"
                    type="minus-circle-o"
                    disabled="ing.length === 1"
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
          <a-divider />
          <div class="flex">
            <div class="flex-left">
              <a-form-item label="主图图片">
                <a-upload
                    v-decorator="['covImg']"
                    name="stepImg"
                    :show-upload-list="false"
                    accept="image/*"
                    action="https://api.goxianguo.com/admin/uploadCookImg"
                    :before-upload="beforeUpload"
                    @change="uploadCovImg"
                >
                  <a-button> <a-icon type="upload" /> 上传图片 </a-button>
                </a-upload>
              </a-form-item>
            </div>
            <div class="flex-right">
              <a-form-item
                  v-decorator="['step']"
                  v-for="(domain, index) in step"
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
                      @change="handleChange($event,index)"
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
                      v-if="step.length > 1"
                      class="dynamic-delete-button"
                      type="minus-circle-o"
                      disabled="form.step.length === 1"
                      @click="() => removeStep(domain)"
                  />
                </div>
                <a-input v-model:value="domain.tit" placeholder="步骤名"/>
                <a-textarea :auto-size="{ minRows: 2, maxRows: 6 }" v-model:value="domain.txt" placeholder="名称" />
              </a-form-item>
              <a-button type="dashed" style="width: 80%;" @click="addStep">
                <a-icon type="plus"/> 添加步骤
              </a-button>
            </div>
          </div>
          <a-divider />
          <div class="flex" style="justify-content: center;align-items: center">
            <a-button
                size="large"
                type="primary"
                htmlType="submit"
                style="font-size: 15px; width: 95px">提交</a-button>
          </div>
        </a-form>
      </a-card>
    </div>
  </div>
</template>
<script>
import HeaderBar from '@/components/HeaderBar'
import { sign } from '@/utils'
import { getCookIngImg, getCookSort } from '@/api'

export default {
  name: 'addRecipes',
  components: {
    HeaderBar
  },
  data() {
    return {
      labelCol: { span: 5 },
      wrapperCol: { span: 11 },
      form: this.$form.createForm(this),
      nonce_str: Date.parse(new Date()) / 1000,
      sortList: [],
      ing: [],
      step: [],
      covImg: '',
      loading: false,
      covImgLoading: false,
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
    addIng() {
      this.ing.push({
        value: '',
        tit: '',
        img: ''
      })
    },
    addStep() {
      this.step.push({
        tit: '',
        img: '',
        txt: ''
      })
    },
    removeDomain(item) {
      let index = this.ing.indexOf(item)
      if (index !== -1) {
        this.ing.splice(index, 1)
      }
    },
    removeStep(item) {
      let index = this.step.indexOf(item)
      if (index !== -1) {
        this.step.splice(index, 1)
      }
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
    handleChange(info,index) {
      if (info.file.status !== 'uploading') {
        this.loading = true
      }
      if (info.file.status === 'done') {
        this.loading = false
        this.step[index].img = info.file.response.result
        this.$message.success(`图片上传成功`)
      } else if (info.file.status === 'error') {
        this.$message.error(`图片上传失败`)
      }
    },
    uploadCovImg(info) {
      if (info.file.status !== 'uploading') {
        this.covImgLoading = true
      }
      if (info.file.status === 'done') {
        this.covImgLoading = false
        this.covImg = info.file.response.result
        this.$message.success(`图片上传成功`)
      } else if (info.file.status === 'error') {
        this.$message.error(`图片上传失败`)
      }
    },
    onSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values)
        }
      });
    }
  }
}
</script>