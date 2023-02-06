---
title: vueX笔记
sidebar: auto
date: 2022-08-04
tags:
 - vueX
 - 笔记
categories:
 -  飞码篇
---

## 概念

>一、Vuex的五个核心概念：state、getters、mutations、actions、modules
>1、state: vuex的基本数据，用来存储变量；
>2、getters: 从基本数据（state）派生的数据，相当于state的计算属性；
>3、mutations: 提交更新数据的方法，必须是同步的(如果需要异步使用action)。每个mution 都有一个字符串的事件类型（type）和一个回调函数（handler）。
>回调函数就是我们实际进行状态更改的地方，并且它会接受 state作为第一个参数，提交载荷作为第二个参数。
>4、action: 和mution的功能大致相同，不同之处在于 ①Action提交的是mution，而不是直接变更状态，②Action可以包含任意异步操作。
>5、modules: 模块化vuex，可以让每一个模块拥有自己的 state、mutation、action、 getters，使得结构非常清晰，方便管理。



## npm i vueX --save

## 引入vuex并访问存储在vuex中的数据

1、在vue项目中①：使用命令yarn add vuex安装vuex插件②：新建文件命名为store.js,在文件中引入vue和vuex并使用vuex③构建新的Vuex.store对象,传入作为参数的对象，对象中包含基本的state、getter、mutations、actions四个属性。

```jsx
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        x:0,
    },
    getters:{},
    mutations:{},
    actions:{},
})
```

2、将store.js文件引入到main.js文件中，将store作为子属性传入构建出vue对象。这样在全局都可以访问到store中存储的数据。

```jsx
import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
    store,
  render: h => h(App),
}).$mount('#app')
```

## 访问state  中的数据

3、这样就可以在任何vue文件中通过this.$store.state来访问数值了。

```xml
<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        {{a}}
    </div>
</template>

<script>

    export default {
        name: 'app',
        data(){
            return{
                a:1,
            }
        },
        created(){
            this.a = this.$store.state.x;
            console.log(this.a)
        }
    }
</script>
```

> 也可以使用 ES6 语法进行结构取值

```html
<nav>
    数据为{{$store.state.count}} {{count}}
</nav>
```

```js
export default {
  computed: {
    ...mapState(['count'])
  }
}
```

## mutations改变state 中的数据

vuex 中定义

```js
  mutations: {
    //修改state的mutation方法
    //每一个mutation方法都有对应的参数
    // state 指的就是当前vuex中的state对象
    // payload 载荷提交mutation的方法的时候传 递的参数它可以是任何形式的任何类型的值
    addcount(state,payload) {  //payload 是形参可以不写
      state.count += payload
    }
  },
```

> ## 原始方法调用 

```html
 <button @click="addcount">改变button</button>
```

```js
 addcount() {
      this.$store.commit('addcount')
    }
```

> ##  辅助函数

```
 <button @click="addcount(100)">改变button</button>
```

```
import { mapMutations } from 'vuex'
```

```
 methods: {
    ...mapMutations(['addcount'])
  }
```

