
<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-form-item label="神器名称:" prop="name">
          <el-input v-model="formData.name" :clearable="true"  placeholder="请输入神器名称" />
       </el-form-item>
        <el-form-item label="神器id:" prop="equipment_id">
          <el-input v-model.number="formData.equipment_id" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="星级:" prop="starLevel">
          <el-input v-model.number="formData.starLevel" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="图片:" prop="img">
          <el-input v-model="formData.img" :clearable="true"  placeholder="请输入图片" />
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
  createArtifact,
  updateArtifact,
  findArtifact
} from '@/api/strategy/artifact'

defineOptions({
    name: 'ArtifactForm'
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
            name: '',
            equipment_id: undefined,
            starLevel: undefined,
            img: '',
        })
// 验证规则
const rule = reactive({
               name : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               equipment_id : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               starLevel : [{
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
      const res = await findArtifact({ ID: route.query.id })
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
               res = await createArtifact(formData.value)
               break
             case 'update':
               res = await updateArtifact(formData.value)
               break
             default:
               res = await createArtifact(formData.value)
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
