---
title: Vue 笔记
sidebar: auto
date: 2022-12-29
tags:
  - 笔记
  - Vue
categories:
  - 居家篇
---

## 本地存储 获取和添加

```js
      localStorage.setItem("listSelect", val)
```

```js
mounted() {
    this.act = this.$route.name
    this.listSelect= localStorage.getItem('listSelect')
},
```

## **路由传参的三种基本方式**

下面我来说下vue自带的路由传参的三种基本方式

先有如下场景 点击当前页的某个按钮跳转到另外一个页面去，并将某个值带过去



```js
<div class="examine" @click="insurance(2)">查看详情</div>
```

第一种方法 页面刷新数据不会丢失

```jsp
methods：{
  insurance(id) {
       //直接调用$router.push 实现携带参数的跳转
        this.$router.push({
          path: `/particulars/${id}`,
        })
}
```

需要对应路由配置如下：

```css
{
     path: '/particulars/:id',
     name: 'particulars',
     component: particulars
   }
```

可以看出需要在path中添加/:id来对应 $router.push 中path携带的参数。在子组件中可以使用来获取传递的参数值
另外页面获取参数如下

```js
this.$route.params.id
```

第二种方法 **页面刷新数据会丢失**

通过路由属性中的name来确定匹配的路由，通过params来传递参数。

```js
methods：{
  insurance(id) {
       this.$router.push({
          name: 'particulars',
          params: {
            id: id
          }
        })
  }
```

对应路由配置: 注意这里不能使用:/id来传递参数了，因为组件中，已经使用params来携带参数了。

```css
 {
     path: '/particulars',
     name: 'particulars',
     component: particulars
   }
```

子组件中: 这样来获取参数

```js
this.$route.params.id
```

第三种方法
使用path来匹配路由，然后通过query来传递参数
这种情况下 query传递的参数会显示在url后面?id=？

```js
methods：{
  insurance(id) {
        this.$router.push({
          path: '/particulars',
          query: {
            id: 123456
          }
        })
  }
```

对应路由配置：

```css
{
     path: '/particulars',
     name: 'particulars',
     component: particulars
   }
```

对应子组件: 这样来获取参数

```js
this.$route.query.id
```

特别注意哦，
组件中 获取参数的时候是![route.params 而不是](https://math.jianshu.com/math?formula=route.params%20%E8%80%8C%E4%B8%8D%E6%98%AF)router 这很重要~~~

## 自定义指令用法实例

> ### **本节主要解决异常图片情况**

**`目标`**： 通过自定义指令的形式解决异常图片的处理

> ### **自定义指令**

首先定义第一个自定义指令  **`v-imagerror`**

```js
export const imagerror = {
  // 指令对象 会在当前的dom元素插入到节点之后执行
  inserted(dom, options) {
    // options是 指令中的变量的解释  其中有一个属性叫做 value
    // dom 表示当前指令作用的dom对象
    // dom认为此时就是图片
    // 当图片有地址 但是地址没有加载成功的时候 会报错 会触发图片的一个事件 => onerror
    dom.onerror = function() {
      // 当图片出现异常的时候 会将指令配置的默认图片设置为该图片的内容
      // dom可以注册error事件
      dom.src = options.value // 这里不能写死
    }
  }
}

```

> ### **在main.js完成自定义指令全局注册**

然后，在**`main.js`**中完成对于该文件中所有指令的全局注册 

```js
import * as directives from '@/directives'
// 注册自定义指令
// 遍历所有的导出的指令对象 完成自定义全局注册
Object.keys(directives).forEach(key => {
  // 注册自定义指令
  Vue.directive(key, directives[key])
})
```

针对上面的引入语法  **`import *  as  变量`**  得到的是一个对象**`{ 变量1：对象1，变量2： 对象2 ...   }`**, 所以可以采用对象遍历的方法进行处理

指令注册成功，可以在**`navbar.vue`**中直接使用了

```vue
<img v-imageerror="defaultImg" :src="staffPhoto" class="user-avatar">
```

```js
 data() {
    return {
      defaultImg: require('@/assets/common/head.jpg')
    }
  },
```

## vue声明一个全局的对象

**首先将所要声明的对象封装到一个`init.js`中,然后默认导出**

```js
const app = cloudbase.init({
    env: 'guoguo-6666-123555511444'
})
var db = app.database()
export default db
```

**在`main.js`中引入并挂载到原型链上**

```js
import _db from '@/tools/init.js'
Vue.prototype.$db = _db
```

**最后在文件中使用 `this.$db` 就可以访问了**

```js
  this.$db.collection('guoguoBox')
      .get()
      .then(function (res) {
        console.log(res, 'res')
      })
```

