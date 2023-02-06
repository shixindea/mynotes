---
title: JS常规
date: 2022-08-04
tags:
 - JavaScript
categories:
 -  飞码篇
---


## 1. js数组操作

#### 【删】

> pop() 方法用于删除数组的**最后一个元素并返回删除的元素**。
>
> **注意：**此方法改变数组的长度！
>
> **提示：** 移除数组第一个元素，请使用 [shift()](https://www.w3cschool.cn/jsref/jsref-shift.html) 方法

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

*fruits* 结果输出：
Banana,Orange,Apple
```



> shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
>
> **注意：** 此方法改变数组的长度！
>
> **提示:** 移除数组末尾的元素可以使用 [pop()](https://www.w3cschool.cn/jsref/jsref-pop.html) 方法。



```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift()

*fruits*结果输出:
Orange,Apple,Mango
```

#### 【map】方法遍历数组

```js
  var map = [{  
             key : "百度",  
             value : "李彦宏"  },
            {
             key : "阿里巴巴",  
             value : "马云"  },
        ];  

for (var key in map) {  
            console.log(map[key]);  
        }
//输出结果
//Object {key : "百度", value : "李彦宏"}
//Object {key : "阿里巴巴", value : "马云"}

原文链接：https://blog.csdn.net/pang_da_xing/article/details/75676014
```



## 2. 正则

```js
regularexpression=/pattern/[switch]
```

这个switch就有三种值 g: 全局匹配 i: 忽略大小写 gi: 全局匹配 + 忽略大小写 JScript 语言参考

## 3. Object  转换为 JSON 数据     JSON.stringify(OBJ对象数组)

> ### JSON.stringify(this.sign_time)
>
> ### JSON.parse( JSON.stringify(OBJ对象数组))
>
> # Vue __ob__: Observer
>
> 网上有很多解决的方案：
>
> **第一种**：__ob__: Observer 是 Vue 对数据监控添加的属性，如果想去掉可以用赋值的方式。例如Object.assign({},this.owner)。 用这种方式也是可以解决。
>
> **第二种：**假设list里面存放的就是那些带有__ob__: Observer的可以用JSON.parse(JSON.stringify(this.list)）完美解决
>
> 
>
> 作者：无枉少年
> 链接：https://www.jianshu.com/p/d9a8029356ef
> 来源：简书
> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## 4.强制刷新视图层  **this.$forceUpdate();**

​			**this.$forceUpdate();**



