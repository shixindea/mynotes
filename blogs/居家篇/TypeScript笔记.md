---
title: TypeScript笔记
date: 2022-08-17
tags:
 - TypeScript
 - 笔记
categories:
 -  居家篇
---

## 初始化定义

> 从编程语言的动静来区分，TypeScript 属于静态类型的编程语言，JS 属于动态类型的编程语言。
> 静态类型:编译期做类型检查;动态类型:执行期做类型检查。
> 代码编译和代码执行的顺序: 1编译2执行。
> 对于JS来说:需要等到代码真正去执行的时候才能发现错误(晚)。
> 对于TS来说:在代码编译的时候(代码执行前)就可以发现错误(早)。
> 并且，配合VSCode等开发工具, TS可以提前到在编写代码的同时就发现代码中的错误，减少找Bug、改Bug时间。



## [TS --> JS] 转换

> ###  eg:   tsc .\hello.ts



## 简化转换步骤

> 2.3简化运行TS的步骤
> 问题描述:每次修改代码后，都要重复执行两个命令,才能运行TS代码，太繁琐。
> 简化方式:使用ts-node包，直接在Node.js中执行TS代码。
> 安装命令: npm i -g ts-node (ts-node 包提供了ts-node命令)。
> 使用方式: ts-node hello.ts。
> 解释: ts-node 命令在内部偷偷的将TS->JS,然后，再运行JS代码。

## TypeScript 基础类型

TypeScript 包含的数据类型如下表:

| 数据类型   | 关键字    | 描述                                                         |
| :--------- | :-------- | :----------------------------------------------------------- |
| 任意类型   | any       | 声明为 any 的变量可以赋予任意类型的值。                      |
| 数字类型   | number    | 双精度 64 位浮点值。它可以用来表示整数和分数。`let binaryLiteral: number = 0b1010; // 二进制 let octalLiteral: number = 0o744;    // 八进制 let decLiteral: number = 6;    // 十进制 let hexLiteral: number = 0xf00d;    // 十六进制` |
| 字符串类型 | string    | 一个字符系列，使用单引号（**'**）或双引号（**"**）来表示字符串类型。反引号（**`**）来定义多行文本和内嵌表达式。`let name: string = "Runoob"; let years: number = 5; let words: string = `您好，今年是 ${ name } 发布 ${ years + 1} 周年`;` |
| 布尔类型   | boolean   | 表示逻辑值：true 和 false。`let flag: boolean = true;`       |
| 数组类型   | 无        | 声明变量为数组。`// 在元素类型后面加上[] let arr: number[] = [1, 2]; // 或者使用数组泛型 let arr: Array = [1, 2];` |
| 元组       | 无        | 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。`let x: [string, number]; x = ['Runoob', 1];    // 运行正常 x = [1, 'Runoob'];    // 报错 console.log(x[0]);    // 输出 Runoob` |
| 枚举       | enum      | 枚举类型用于定义数值集合。`enum Color {Red, Green, Blue}; let c: Color = Color.Blue; console.log(c);    // 输出 2` |
| void       | void      | 用于标识方法返回值的类型，表示该方法没有返回值。`function hello(): void {    alert("Hello Runoob"); }` |
| null       | null      | 表示对象值缺失。                                             |
| undefined  | undefined | 用于初始化变量为一个未定义的值                               |
| never      | never     | never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。 |

**注意：**TypeScript 和 JavaScript 没有整数类型。



## 类型注解 let age： number = 18

> ## 变量加类型

 注意：

数组类型也要写类型注解

下面这两种方法都可以，一般使用上面的这种写法

``` typescript
let numbers: number[] = [1, 2, 3]
let numbers2: Array<number> =[1,2,3]
```

如果数组需要多个类型的话，可以使用下面的这种写法 

```typescript
let numbers3: (number | string)[] = [1, 2, 3,'15']
```

> ## 函数加类型 function|const

> ### function 方式

```typescript
function add(num1: number, num2: number): number{
    return num1+num2
}
console.log(add(1,2));
```

> ### const 方式

```typescript
const add(num1: number, num2: number): number{
    return num1+num2
}
console.log(add(1,2));

//第二种方法
const add2: (num1: number, num2: number) => number = (num1, num2) => {
    return num1+num2
}
```

> 如果函数返回值没有类型的话 可以是用void

```typescript
function add(num1: number, num2: number): void{
   console.log(66666);
}
```

> 特殊类型 元组(一个可以指定数量的数组)

可以用来存储一些类似于经纬度等只有几个参数的数组

## 类型别名 type  定义

> ### 数组对象使用类型别名  type  定义

首先定义一个变量 ，是这个变量指向一个类型，然后将这个类型加以引用即可

```typescript
type CustomArray = (number | string)[] 
let numbers4: CustomArray = [123, '11']
let numbers5: CustomArray = [1, '11', '123']
```

> ### 只有接口可以使用两个方法来定义
>
> `interface  | type`

> ###  对象接口别名  interface  定义

```typescript
// 接口:
interface IPerson{
    name: string
    age: number
    sayHi():void
}
let person: IPerson = {
    name: '黎明',
    age: 18,
    sayHi(){}
}
let person1 IPerson = {
    name: '张三',
    age: 32,
    sayHi() { }
}
```

> ### 对象接口使用 类型别名  type  定义

```typescript
// 类型别名:
type IPerson{
    name: string
    age: number
    sayHi():void
}
let person: IPerson = {
    name: '黎明',
    age: 18,
    sayHi(){}
}
let person1 IPerson = {
    name: '张三',
    age: 32,
    sayHi() { }
}
```

## 接口继承  `extends` 

```typescript
interface Point2D { x: number; y: number }
interface Point3D extends Point2D { z: number }
let p3: Point3D = {
    x: 1,
    y: 2,
    z:3
}
console.log(p3);
```

## 让用户可以自己选择值 ，字面量类型

> 字面量类型 : 让用户从所给变量中选择一个值，如果选择其他的值就会报错
>
> 此案例用于定义函数

![](https://s1.ax1x.com/2022/08/11/v8GKk6.png)

```typescript
function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {
    
}
changeDirection('up')
```

>  提前声明 `命名常量`  枚举

```typescript
enum Direction{
    up,
    down,
    left,
    right
}
function changeDirection(direction: Direction) {
}
changeDirection(Direction.up)

```

> 使用`枚举法` 是有`值`的
>
> 如果不指定的话，`默认值`为0
>
> 当然可以指定值，指定值后，下面的值还是会自增长
>
> 如果指定值为字符串的话，将不会有自增长

```typescript
enum Direction{
    up=13,
    down,
    left=18,
    right
}
function changeDirection(direction: Direction) {
    console.log(direction);
    
}
changeDirection(Direction.down)
// 打印为 14 
```

## 类型上下文 typeof  的两个作用

> 用于测试 后面变量的类型

```typescript
console.log(typeof 'hello');   //String
```

>  用于引用上文中的类型，来限制下面的类型

```typescript
console.log(typeof 'hello');
let p = { x: 1, y: 2 }
function formtPoint(point: typeof p) {
    console.log(point);
}
formtPoint({ x: 111, y: 626 })
// string
// { x: 111, y: 626 }
```

## Class类  构造函数

```typescript
class person {
    age: number
    gender: string
    constructor(age: number, gender: string) {
        this.age = age
        this.gender = gender
    }
}
const p = new person(18, '男')
console.log(p.age,p.gender);
// 结果：  18 男
```

## Class类 实例方法

```typescript
class Point {
    x = 1
    y = 2
    scale123(n: number) {
        this.x *= n
        this.y *= n
    }
}
const p = new Point()
p.scale123(10)
console.log(p.x, p.y);
// 结果： 10 20
```

## Class类 继承

> ` extends `使用这个关键子
>
> `子类`就可以使用`父类`的所有的方法

```typescript
class Animal{
    move() {
        console.log('没事走两步');
    }
}
class Dog extends Animal{
    name= '二哈'
    back() {
        console.log('汪汪！！！');
    }
}
const d = new Dog()
console.log(d.name);
d.move()
d.back()
//结果: 
// 二哈
// 没事走两步
// 汪汪！！！
```

> ## 接口继承

```typescript
interface Single{
    sing():void
}

class Person implements Single {
    name='Jack'
    sing(): void {
       console.log('你是我的小可爱');
        
    }
}
const p = new Person()
console.log(p.name);
p.sing()
// 结果：
// Jack
// 你是我的小可爱
```

## Class类 可见性修饰符

> ### public 公共的 [ 默认 ]

> ### private 私有的

```typescript
class Animal {
    private move() {
        console.log('没事走两步');
    }
}
```

> ### protected 受保护的
>
> protected:表示`受保护的`，仅对其`声明所在类`和`子类`中(非实例对象)可见。
>
> 1. 对自己本身的子方法可以使用
> 2. 对于实例化的对象不可以使用

```typescript
class Animal {
    protected move() {
        console.log('没事走两步');
    }
}
```

> ### readonly 只读修饰符
>
> readonly 只能够修饰属性，不能够修饰方法

```typescript
class Dog extends Animal {
   readonly name = '二哈'
   protected back() {
        console.log('汪汪！！！');
    }
}
```

