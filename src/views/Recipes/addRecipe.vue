<template>
  <div class="work-place">
    <Header-bar bar-name="添加菜谱" first-menu="控制台"/>
    <div class="panel-body">
      <a-form-model ref="ruleForm" :model="form" :label-col="labelCol" :rules="rules" :wrapper-col="wrapperCol">
        <a-card>
          <div class="form-flex">
            <div class="flex-left">
              <a-form-model-item label="标题" prop="title">
                <a-input v-model:value="form.title" />
              </a-form-model-item>
              <a-form-model-item label="类型" prop="tag">
                <a-radio-group v-model:value="form.tag" button-style="solid">
                  <a-radio-button :value="1">早餐</a-radio-button>
                  <a-radio-button :value="2">午餐</a-radio-button>
                  <a-radio-button :value="3">晚餐</a-radio-button>
                  <a-radio-button :value="4">其他</a-radio-button>
                </a-radio-group>
              </a-form-model-item>
              <a-form-model-item label="推荐">
                <a-checkbox v-model:value="form.isIndexHot">热门</a-checkbox>
                <a-checkbox v-model:value="form.indexChoice">精选</a-checkbox>
              </a-form-model-item>
              <a-form-model-item label="分类" prop="pid">
                <a-cascader
                    v-model:value="form.pid"
                    :options="sortList"
                    placeholder="请选择分类"
                    @change="onChange"
                />
              </a-form-model-item>
              <a-form-model-item label="作者">
                <a-input v-model="form.author"/>
              </a-form-model-item>
              <a-form-model-item label="难度" prop="difficult">
                <a-slider v-model:value="form.difficult" :min="1" :step="0.1" :max="5" :marks="{ 1: '易', 3: '中', 5: '难'}" />
              </a-form-model-item>
              <a-form-model-item label="菜系" prop="cuisine">
                <a-input v-model="form.cuisine"/>
              </a-form-model-item>
              <a-form-model-item label="耗时" prop="times">
                <a-input v-model:value="form.times" />
              </a-form-model-item>
              <a-form-model-item label="菜谱介绍" prop="story">
                <a-input v-model:value="form.story" />
              </a-form-model-item>
              <a-form-model-item label="wiki">
                <a-input v-model="form.wiki"/>
              </a-form-model-item>
              <a-form-model-item label="wikiList">
                <a-input v-model="form.wikiList"/>
              </a-form-model-item>
              <a-form-model-item
                  v-for="(domain, index) in form.ingArr"
                  :key="`ing-${index}`"
                  :label="`食材${index + 1}`"
                  :rules="{
                  required: true,
                  message: '不能为空',
                  trigger: 'change',
                  }">
                <a-input
                    v-model:value="domain.tit"
                    placeholder="名称"
                    style="width: 30%;margin-right: 2px"
                /> :
                <a-input
                    v-model:value="domain.value"
                    placeholder="分量"
                    style="width: 20%;margin-right: 5px"
                />
                <a-select v-model="domain.img" style="width: 30%;margin-right: 8px" placeholder="图片" option-label-prop="label">
                  <a-select-option v-for="ing in ingImg" :key="index + ing.id" :value="ing.ingr_img" :label="ing.ingr_name">
                    {{ ing.ingr_name }}
                  </a-select-option>
                </a-select>
                <a-icon
                    v-if="form.ingArr.length > 1"
                    class="dynamic-delete-button"
                    type="minus-circle-o"
                    disabled="form.ingArr.length === 1"
                    @click="() => removeDomain(domain)"
                />
              </a-form-model-item>
              <a-form-model-item label="食材" prop="ingArr">
                <a-button type="dashed" style="width: 100%" @click="addIng">
                  <a-icon type="plus" /> 添加食材
                </a-button>
              </a-form-model-item>
              <a-form-model-item label="主图图片">
                <a-upload
                    name="stepImg"
                    action="https://api.goxianguo.com/admin/uploadCookImg"
                    list-type="picture"
                    accept="image/*"
                    @change="uploadCovImg"
                    :default-file-list="fileList"
                >
                  <a-button> <a-icon type="upload" /> 上传图片 </a-button>
                </a-upload>
              </a-form-model-item>
              <a-form-model-item
                  v-for="(domain, index) in form.stepArr"
                  :key="`step${index}`"
                  :label="`步骤${index + 1}`">
                <div class="step">
                  <div class="step-img">
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
                  </div>
                  <div class="step-input">
                    <a-input v-model:value="domain.tit" placeholder="步骤名"/>
                    <a-textarea :auto-size="{ minRows: 2, maxRows: 6 }" v-model:value="domain.txt" placeholder="制作方法" />
                  </div>
                  <div class="step-icon">
                    <a-icon
                        v-if="form.stepArr.length > 1"
                        class="dynamic-delete-button"
                        type="minus-circle-o"
                        disabled="form.stepArr.length === 1"
                        @click="() => removeStep(domain)"
                    />
                  </div>
                </div>
              </a-form-model-item>
              <a-form-model-item label="制作步骤">
                <a-button type="dashed" style="width: 100%" @click="addStep">
                  <a-icon type="plus"/> 添加步骤
                </a-button>
              </a-form-model-item>
              <a-form-model-item label="提示" prop="tips">
                <a-input v-model:value="form.tips"/>
              </a-form-model-item>
            </div>
            <div class="flex-right">
              <div class="code-txt">

              </div>
            </div>
          </div>
          <a-divider />
          <div class="form-btn">
            <a-button type="primary" @click="onSubmit">提交</a-button>
          </div>
        </a-card>
      </a-form-model>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import { getCookSort,getCookIngImg, addRecipe } from '@/api'
import { sign } from '@/utils'

export default {
  name: 'addRecipes',
  components: {
    HeaderBar
  },
  data() {
    return {
      labelCol: { span: 5 },
      wrapperCol: { span: 11 },
      nonce_str: Date.parse(new Date()) / 1000,
      sortList: [],
      ingImg: [],
      fileList: [],
      loading: false,
      form: {
        title: '',
        pid: [],
        author: '872b0966ed95c7d5',
        difficult: 1,
        score: 0,
        cuisine: '',
        ingArr: [],
        stepArr:[],
        tips: '',
        times: '',
        story: '',
        wiki: '',
        wikiList: '',
        covImg: '',
        isIndexHot: false,
        indexChoice: false,
        tag: 2
      },
      rules:{
        title: [{ required: true, message: '标题不能为空' }],
        author: [{ required: true, message: '请输入用户id' }],
        pid: [{ required: true, message: '请选择分类' }],
        cuisine: [{ required: true, message: '请输入菜系' }],
        story: [{ required: true, message: '请输入美食描述' }]
      }
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
      this.form.ingArr.push({
        value: '',
        tit: '',
        img: ''
      })
    },
    addStep() {
      this.form.stepArr.push({
        tit: '',
        img: '',
        txt: ''
      })
    },
    removeDomain(item) {
      let index = this.form.ingArr.indexOf(item)
      if (index !== -1) {
        this.form.ingArr.splice(index, 1)
      }
    },
    removeStep(item) {
      let index = this.form.stepArr.indexOf(item)
      if (index !== -1) {
        this.form.stepArr.splice(index, 1)
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
        this.form.stepArr[index].img = info.file.response.result
        this.$message.success(`图片上传成功`)
      } else if (info.file.status === 'error') {
        this.$message.error(`图片上传失败`)
      }
    },
    uploadCovImg(info) {
      console.log(info.fileList)
      this.fileList = info.fileList
      if (info.file.status === 'done') {
        this.form.covImg = info.file.response.result
        this.$message.success(`图片上传成功`)
      } else if (info.file.status === 'error') {
        this.$message.error(`图片上传失败`)
      }
    },
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (!valid) {
          return false
        } else {
          let data = this.form
          data.ingr = JSON.stringify(this.form.ingArr).replace(/\[|]/g, '')
          data.step = JSON.stringify(this.form.stepArr).replace(/\[|]/g, '')
          data.pid = this.form.pid.pop()
          console.log(data)
          if (this.form.isIndexHot) {
            data.isIndexHot = 1
          } else {
            data.isIndexHot = 0
          }
          data.indexChoice = this.form.indexChoice ? 1: 0
          data.nonce_str = this.nonce_str
          data.sign = sign(data)
          addRecipe(data).then(res => {
            if (res.code === 1) {
              this.$message.success(res.message)
            } else {
              this.$message.error(res.message)
            }
          })
        }
      })
    }
  }
}
</script>