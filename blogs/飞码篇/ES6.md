---
title: ES6笔记
sidebar: auto
date: 2022-08-04
tags:
 - ES6
categories:
 -  飞码篇
---

## es6中 [...] 展开运算符

[展开运算符(spread operator)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)，作用是和字面意思一样，就是把东西展开。可以用在`array`和`object`上都行。
比如:

```
let a = [1,2,3];
let b = [0, ...a, 4]; // [0,1,2,3,4]

let obj = { a: 1, b: 2 };
let obj2 = { ...obj, c: 3 }; // { a:1, b:2, c:3 }
let obj3 = { ...obj, a: 3 }; // { a:3, b:2 }
```

[剩余操作符(rest operator)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)，是解构的一种，意思就是把剩余的东西放到一个`array`里面赋值给它。一般只针对`array`的解构，其他的没见过。。。
比如：

```csharp
let a = [1,2,3];
let [b, ...c] = a;
b; // 1
c; // [2,3]
// 也可以
let a = [1,2,3];
let [b, ...[c,d,e]] = a;
b; // 1
c; // 2
d; // 3
e; // undefined
// 也可以
function test(a, ...rest){
	console.log(a); // 1
    console.log(rest); // [2,3]
}
test(1,2,3)
参考网址：https://segmentfault.com/q/1010000008303593
```

## 默认全部导入方法

**全部导入**

```js
import * as directives from './directives'
```

## 对象转数组 Object.keys

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

