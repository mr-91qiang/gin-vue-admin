
<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-form-item label="标题:" prop="title">
          <el-input v-model="formData.title" :clearable="true"  placeholder="请输入标题" />
       </el-form-item>
        <el-form-item label="跳转链接:" prop="jumpUrl">
          <el-input v-model="formData.jumpUrl" :clearable="true"  placeholder="请输入跳转链接" />
       </el-form-item>
        <el-form-item label="发布时间:" prop="released">
          <el-date-picker v-model="formData.released" type="date" placeholder="选择日期" :clearable="true"></el-date-picker>
       </el-form-item>
        <el-form-item label="图片:" prop="img">
          <upload-common
              :image-common="formData.img"
          />
<!--          <el-input v-model="formData.img" :clearable="true"  placeholder="请输入图片" />-->
       </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">保存</el-button>
          <el-button type="primary" @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import {
  createBanner,
  updateBanner,
  findBanner
} from '@/api/strategy/banner'

defineOptions({
    name: 'BannerForm'
})

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'


const route = useRoute()
const router = useRouter()

const type = ref('')
const stateOptions = ref([])
const formData = ref({
            title: '',
            jumpUrl: '',
            released: new Date(),
            img: '',

        })
// 验证规则
const rule = reactive({
               title : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               jumpUrl : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               released : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
})

const elFormRef = ref()

// 初始化方法
const init = async () => {
 // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (route.query.id) {
      const res = await findBanner({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data
        type.value = 'update'
      }
    } else {
      type.value = 'create'
    }
    stateOptions.value = await getDictFunc('state')
}

init()
// 保存按钮
const save = async() => {
      elFormRef.value?.validate( async (valid) => {
         if (!valid) return
            let res
           switch (type.value) {
             case 'create':
               res = await createBanner(formData.value)
               break
             case 'update':
               res = await updateBanner(formData.value)
               break
             default:
               res = await createBanner(formData.value)
               break
           }
           if (res.code === 0) {
             ElMessage({
               type: 'success',
               message: '创建/更改成功'
             })
           }
       })
}

// 返回按钮
const back = () => {
    router.go(-1)
}

</script>

<style>
</style>
