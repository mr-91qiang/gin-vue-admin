
<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-form-item label="英雄名称:" prop="name">
          <el-input v-model="formData.name" :clearable="true"  placeholder="请输入英雄名称" />
       </el-form-item>
        <el-form-item label="英雄id:" prop="hero_id">
          <el-input v-model.number="formData.hero_id" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="职业:" prop="profession">
           <el-select v-model="formData.profession" placeholder="请选择职业" style="width:100%" :clearable="true" >
              <el-option v-for="(item,key) in professionOptions" :key="key" :label="item.label" :value="item.value" />
           </el-select>
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
  createHero,
  updateHero,
  findHero
} from '@/api/strategy/hero'

defineOptions({
    name: 'HeroForm'
})

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'


const route = useRoute()
const router = useRouter()

const type = ref('')
const professionOptions = ref([])
const formData = ref({
            name: '',
            hero_id: undefined,
            profession: '',
            img: '',
        })
// 验证规则
const rule = reactive({
               name : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               hero_id : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               profession : [{
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
      const res = await findHero({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data
        type.value = 'update'
      }
    } else {
      type.value = 'create'
    }
    professionOptions.value = await getDictFunc('profession')
}

init()
// 保存按钮
const save = async() => {
      elFormRef.value?.validate( async (valid) => {
         if (!valid) return
            let res
           switch (type.value) {
             case 'create':
               res = await createHero(formData.value)
               break
             case 'update':
               res = await updateHero(formData.value)
               break
             default:
               res = await createHero(formData.value)
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
