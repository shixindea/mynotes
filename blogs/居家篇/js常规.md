---
title: Js 常规
sidebar: auto
date: 2022-12-29
tags:
 - Javascript
categories:
 -  居家篇
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

> ###  **1、数组的属性**

在Array对象中有3个属性，分别是length、constructor和prototype。在初学者阶段，我们仅仅掌握length这个属性就可以了。

> ###  2、数组的方法

| 方法       | 说明                     |
| :--------- | :----------------------- |
| slice()    | 获取数组中的某段数组元素 |
| unshift()  | 在数组开头添加元素       |
| push()     | 在数组末尾添加元素       |
| shift()    | 删除数组中第一个元素     |
| pop()      | 删除数组最后一个元素     |
| toString() | 将数组转换为字符串       |
| join()     | 将数组元素连接成字符串   |
| concat()   | 多个数组连接为字符串     |
| sort()     | 数组元素正向排序         |
| reverse()  | 数组元素反向排序         |

> ###  **数值对象**

下面都是这一章所讲解到的Math对象比较重要的方法：

| 方法     | 说明                       |
| :------- | :------------------------- |
| max(x,y) | 返回x和y中的最大值         |
| min(x,y) | 返回x和y中的最小值         |
| pow(x,y) | 返回x的y次幂               |
| abs(x)   | 返回数的绝对值             |
| round(x) | 把数四舍五入为最接近的整数 |
| random() | 返回0~1之间的随机数        |
| ceil(x)  | 对一个数进行上舍入         |
| floor(x) | 对一个数进行下舍入         |

## 2. 正则

```js
regularexpression=/pattern/[switch]
```

这个switch就有三种值 g: 全局匹配 i: 忽略大小写 gi: 全局匹配 + 忽略大小写 JScript 语言参考

## 3. Object  转换为 JSON 数据     JSON.stringify(OBJ对象数组)

> ##### JSON.stringify(this.sign_time)
>
> ##### JSON.parse( JSON.stringify(OBJ对象数组))

### 3.2 数组传值使用JSON解析出现错误

![  ](https://img-blog.csdnimg.cn/074749fca7f941a28b15f26d8915f5e1.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6L6w5Lmd5Lmd,size_20,color_FFFFFF,t_70,g_se,x_16)



> **编码：** encodeURIComponent(JSON.stringify(item))

> **解码：** JSON.parse(decodeURIComponent(options.formData))

## 4. 强制刷新视图层  **this.$forceUpdate();**

​			**this.$forceUpdate();**

## 5. 四舍五入为指定小数位数 toFixed() 

> ## 定义和用法

toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。

> ## 语法

```js
NumberObject.toFixed(num)
```

| 参数 | 描述                                                         |
| :--- | :----------------------------------------------------------- |
| num  | 必需。规定小数的位数，是 0 ~ 20 之间的值，包括 0 和 20，有些实现可以支持更大的数值范围。如果省略了该参数，将用 0 代替。 |

## 6. 对象转数组 Object.keys

**示例代码**

```js
// simple array
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
var myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
```

## 8.生成随机数

**上限  999999999  下限1**

```js
parseInt(Math.random()*(999999999-1+1)+1,10); 
```

## 9.去除字符串左右空格

> `str`为字符串

```js
str.replace(/^\s+|\s+$/g,"")
```

