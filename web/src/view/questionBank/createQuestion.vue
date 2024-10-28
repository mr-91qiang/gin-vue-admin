
<template>
  <el-form
    ref="vForm"
    :model="formData"
    :rules="rules"
    label-position="left"
    label-width="150px"
    size="medium"
    @submit.prevent
  >
    <div class="static-content-item">
      <div>新增题目</div>
    </div>
    <div class="static-content-item">
      <el-divider direction="horizontal" />
    </div>
    <el-row>
      <el-col
        :span="24"
        class="grid-cell"
      />
      <el-col
        :span="24"
        class="grid-cell"
      >
        <el-form-item
          label="原始数据"
          prop="original"
          class="required label-right-align"
        >
          <el-input
            v-model="formData.original"
            type="textarea"
            rows="3"
          />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col
        :span="2"
        :offset="11"
        class="grid-cell"
      >
        <div class="static-content-item">
          <el-button @click="parse">解析</el-button>
        </div>
      </el-col>
    </el-row>
    <div class="static-content-item">
      <el-divider direction="horizontal" />
    </div>
    <el-row>
      <el-col
        :span="24"
        class="grid-cell"
      />
      <el-col
        :span="24"
        class="grid-cell"
      >
        <el-form-item
          label="题目"
          prop="title"
          class="required label-right-align"
        >
          <el-input
            v-model="formData.title"
            type="text"
            clearable
          />
        </el-form-item>
      </el-col>
    </el-row>
    <div class="static-content-item">
      <el-divider direction="horizontal" />
    </div>
    <el-row>
      <el-col
        :span="24"
        class="grid-cell"
      >
        <el-form-item
          label="标准答案"
          prop="answer"
          class="label-right-align"
        >
          <el-input
            v-model="formData.answer"
            type="textarea"
            rows="3"
          />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col
        :span="3"
        :offset="11"
        class="grid-cell"
      >
        <div class="static-content-item">
          <el-button>提交题目</el-button>
        </div>
      </el-col>
    </el-row>
  </el-form>

</template>

<script setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

defineOptions({
  name: 'SysDictionary',
})

const selectID = ref(1)

const formData = ref({
  name: null,
  type: null,
  status: true,
  desc: null,
})
const rules = ref({
  name: [
    {
      required: true,
      message: '请输入字典名（中）',
      trigger: 'blur',
    },
  ],
  type: [
    {
      required: true,
      message: '请输入字典名（英）',
      trigger: 'blur',
    },
  ],
  desc: [
    {
      required: true,
      message: '请输入描述',
      trigger: 'blur',
    },
  ],
})

const parse = () => {
  console.log(111)
}

</script>

<style lang="scss">
.el-input-number.full-width-input,
.el-cascader.full-width-input {
  width: 100% !important;
}

.el-form-item--medium {
.el-radio {
  line-height: 36px !important;
}

.el-rate {
  margin-top: 8px;
}
}

.el-form-item--small {
.el-radio {
  line-height: 32px !important;
}

.el-rate {
  margin-top: 6px;
}
}

.el-form-item--mini {
.el-radio {
  line-height: 28px !important;
}

.el-rate {
  margin-top: 4px;
}
}

.clear-fix:before,
.clear-fix:after {
  display: table;
  content: "";
}

.clear-fix:after {
  clear: both;
}

.float-right {
  float: right;
}

</style>

<style lang="scss" scoped>
div.table-container {
table.table-layout {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

td.table-cell {
  display: table-cell;
  height: 36px;
  border: 1px solid #e1e2e3;
}
}
}

div.tab-container {}

.label-left-align :deep(.el-form-item__label) {
  text-align: left;
}

.label-center-align :deep(.el-form-item__label) {
  text-align: center;
}

.label-right-align :deep(.el-form-item__label) {
  text-align: right;
}

.custom-label {}

.static-content-item {
  min-height: 20px;
  display: flex;
  align-items: center;

:deep(.el-divider--horizontal) {
  margin: 0;
}
}

</style>
