---
title: Vue3+Element Plus
sidebar: auto
date: 2022-12-29
tags:
 - Vue3.0
 - Element Plus
 - 笔记
categories:
 -  居家篇
---

## 1.获取单行中的一个字段值

```html
  <el-table :data="formData" stripe style="width: 100%">
    <el-table-column fixed="right" label="Operations">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="deleteData(scope.row._id)">删除</el-button>
        <el-button link type="primary" size="small">修改</el-button>
      </template>
    </el-table-column>
  </el-table>
```

## 2.获取单行中的 index 当前行的下标值

```html
  <el-table :data="formData" stripe style="width: 100%">
    <el-table-column fixed="right" label="Operations">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="deleteData(scope.$index)">删除</el-button>
        <el-button link type="primary" size="small">修改</el-button>
      </template>
    </el-table-column>
  </el-table>
```

## 3.消息提示框

```js
import { ElMessage } from 'element-plus'

ElMessage({
    message: '删除成功！',
    type: 'success',
})
```

## 4.自定义表单校验

### ---确认密码

```js
var validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请再次输入密码'))
        // password 是表单上绑定的字段
    } else if (ruleForm.passward !== ruleForm.passward2) {
        callback(new Error('两次输入密码不一致!'))
    } else {
        callback()
    }
}


const rules = reactive<FormRules>({
    userName: [
        { required: true, message: '请输入账号', trigger: 'blur' },
    ],
    passward: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 18, message: '密码最小6位,最大18位!', trigger: 'blur' },
    ],
    passward2: [
        { required: true, validator: validatePass, trigger: 'blur' },
    ]
})
```

### ---验证手机号

```js
phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/, message: '请输入正确的号码格式', trigger: 'blur' }
],
```



## 5.全局配置Dialog点击遮罩层不关闭对话框

```ts
//plugins/element.ts
import ElementPlus from 'element-plus'
//import '../assets/style/element-variables.scss'
import 'element-plus/dist/index.css'
export default (app:any) => {
  console.log(app._context)
  app.use(ElementPlus, {size:'small' })
  app._context.components.ElDialog.props.closeOnClickModal.default = false
}



//main.js
....
import installElementPlus from './plugins/element'
...
 
const app = createApp(App)
installElementPlus(app)
```

## 图片 点击可以放大预览

```html
<el-image style="width: 100px; height: 100px" :src="ruleForm.imgUrl" :preview-src-list="Array(ruleForm.imgUrl)" :initial-index="0"

```

## 表格设置表头居中

```html
<el-table  :header-cell-style="{'text-align':'center'}"> </el-table>
```

## 图片嵌套在表格中放大预览 背后层级出现问题

> 增加这条代码

```
:preview-teleported='true'
```

> 完整代码

```html
<el-table-column prop="imgUrl" label="封面" width="180">
    <template #default="scope">
        <!-- :initial-index="scope.$index" -->
        <el-image style="width: 100px; height: 100px" :preview-src-list="imageUrls" :initial-index="scope.$index"
                  :src="scope.row.imgUrl" fit="contain" :z-index='9999'  :preview-teleported='true' />
    </template>
</el-table-column>
```



## 











# 小程序 联系我













