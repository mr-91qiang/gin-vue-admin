
<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-form-item label="主题:" prop="title">
          <el-input v-model="formData.title" :clearable="true"  placeholder="请输入主题" />
       </el-form-item>
        <el-form-item label="内容:" prop="content">
          <el-input v-model="formData.content" :clearable="true"  placeholder="请输入内容" />
       </el-form-item>
        <el-form-item label="举报人id:" prop="report_id">
          <el-input v-model.number="formData.report_id" :clearable="true" placeholder="请输入" />
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
  createReport,
  updateReport,
  findReport
} from '@/api/strategy/report'

defineOptions({
    name: 'ReportForm'
})

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
// 文件选择组件
import SelectFile from '@/components/selectFile/selectFile.vue'


const route = useRoute()
const router = useRouter()

const type = ref('')
const formData = ref({
            title: '',
            content: '',
            report_id: undefined,
        })
// 验证规则
const rule = reactive({
               title : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               content : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               report_id : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               report_name : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               accused_id : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               accused_name : [{
                   required: true,
                   message: '被举报人名称不可为空',
                   trigger: ['input','blur'],
               }],
               cause : [{
                   required: true,
                   message: '原因不可为空',
                   trigger: ['input','blur'],
               }],
               title : [{
                   required: true,
                   message: '被举报攻略标题不可为空',
                   trigger: ['input','blur'],
               }],
               strategy_id : [{
                   required: true,
                   message: '被举报攻略id不可为空',
                   trigger: ['input','blur'],
               }],
               img_list : [{
                   required: true,
                   message: '举报图片不可为空',
                   trigger: ['input','blur'],
               }],
})

const elFormRef = ref()

// 初始化方法
const init = async () => {
 // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (route.query.id) {
      const res = await findReport({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data
        type.value = 'update'
      }
    } else {
      type.value = 'create'
    }
}

init()
// 保存按钮
const save = async() => {
      elFormRef.value?.validate( async (valid) => {
         if (!valid) return
            let res
           switch (type.value) {
             case 'create':
               res = await createReport(formData.value)
               break
             case 'update':
               res = await updateReport(formData.value)
               break
             default:
               res = await createReport(formData.value)
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
