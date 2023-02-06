---
title: Vue3 笔记
sidebar: auto
date: 2022-12-29
tags:
 - Vue3.0
 - 笔记
categories:
 -  居家篇
---



[Vue3.2的setup语法糖和Hook函数 (强烈推荐) - 掘金 (juejin.cn)](https://juejin.cn/post/7041038709906472974)

## toRaw 和 markRaw（取消响应式）

●toRaw:
。作用:将一个由reactive生成的响应式对象转为普通对象。
D使用场景:用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。
●markRaw:
。作用:标记一个对象，使其永远不会再成为响应式对象。
。应用场景:
1.有些值不应被设置为响应式的，例如复杂的第三方类库等。
2.当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。

## provide() 和 inject()

```
import { ref, provide } from 'vue'

const foo = ref('hello')
// 提供静态值
provide('foo', foo)


------------子组件

const bar = inject('foo')
return{bar}

```

## watch监听函数

```js
	const obj = reactive({
      msg: '奇奇怪怪可可爱爱'
    })
    
	watch(() => obj.msg,(v1, v2) => {
        // v1 就是被监听数据的最新值
        // v2 就是被监听数据的原有值
        console.log(v1, v2)
        // 总结：如果侦听对象中当个属性，需要使用箭头函数的方式
        // 侦听更少的数据有利于提高性能
      }
    )
```

## 路由跳转

1.首先在需要跳转的页面引入API---useRouter

```typescript
import { useRouter } from 'vue-router'
```

2.在跳转页面定义router变量

```javascript
 const router = useRouter()
```

3.用`router.push跳转页面`

```javascript
// 字符串
router.push('home')
// 对象
router.push({ path: 'home' })
// 命名的路由
router.push({ name: 'user', params: { userId: '123' }})
// 带查询参数，变成 /register?userId=123
router.push({ path: 'register', query: { userId: '123' }})
```

4.如果有参数的话，在接收页面引入API--useRoute

```typescript
import { useRoute } from 'vue-router'
```

5.在接收页面定义变量route，获取传过来的变量

```javascript
//query
let userId=route.query.userId;
//params
let userId=route.params.userId;
```

## 值存入缓存

- `sessionStorage`

  也称会话缓存，当用户关闭浏览器窗口后，数据就会被删除；

  ```js
  sessionStorage.setItem("key","value");//存储
  sessionStorage.getItems("key");//按可以进行取值
  sessionStorage.removeItems("key");//按key单个删除
  sessionStorage.clear();//删除全部数据
  sessionStorage.length;//获取数据的数量
  sessionStorage.valueOf();//获取全部值
  123456
  ```

- `localstorage`

  储存的数据没有时间限制，只要不删除，都会存在

  ```js
  localstorage.setItem("key","value");//保存数据
  localstorage.getItem("key");//读取数据
  localstorage.removeItem("key",);//删除单个数据
  localstorage.clear();//删除所有数据
  localstorage.key(index);//得到某个索引的key
  key和value都必须为字符串，web Storage的API只能操作字符串
  ```

  

## TS报错 `绑定元素“id”隐式具有“any”类型 `

```js
方案一，修改tsconfig
是修改tsconfig.json，加下面这行参数屏蔽检查，从而不报错。

"suppressImplicitAnyIndexErrors":true,
```

## TS报错 `类型“never”上不存在属性“name”`

> 将他的类型转为 ` null as any` 即可

```js
   subDataForm:{}   //修改之前
   subDataForm: null as any  //修改之后
```

## TS报错 `类型“any”的参数不能赋给类型“never”的参数`

```js
this.formData.push(newUser as never);
```

## 勾起整个页面刷新

```js
location.reload()   // 相当于F5

location.replace(location)   // 刷新并且清除上一页缓存
```

## 使用命令跳转链接 （本窗口、新窗口）

> 新窗口跳转

```js
     window.open('https://www.baidu.com/')
```

> 本窗口跳转

```js
 window.location.href = 'https://www.baidu.com/'
```

## 









# 多选有问题