---
title: axios 请求拦截器
sidebar: auto
date: 2022-12-29
tags:
 - vue
 - axios
categories:
 -  居家篇
---
```js
import axios from "axios";
// 创建实例
const Service = axios.create({
    timeout: 8000,
    baseURL: 'http://xxx.com',
    headers: {
        "content-type": "application/json;charset:utf-8"
    }
})


// 请求拦截
Service.interceptors.request.use((config) => {
    //启动  加载中的   样式
    return config
}, () => {

})

//响应拦截
Service.interceptors.response.use(response => {
     //清除加载中的样式
    return response
},err=>{
    //清除加载中的样式
})


// 暴露实例
export default Service

```

