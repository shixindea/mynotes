---
title: React 笔记
sidebar: auto
date: 2022-12-29
tags:
 - React
 - 笔记
categories:
 -  居家篇
---

## 调用接口  配置代理

> #### 方法一、只能配置一个   3000==>5000端口数据 

1.在page.json中添加    这个地址 是 请求路径

```js
  "proxy": "http://localhost:5000"
```

2.调用接口  注意，这个地址 是  该为当前路径

```js
  getStudentData = () => {
    axios.get('http://localhost:3000/students').then(
      response => { console.log('成功', response.data); },
      error => { console.log('失败了', error); }
    )
  }
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）

> 方法二，高级配置

在src目录下创建文件 `setupProxy.js`,  并写入以下代码

```js

const { createProxyMiddleware } = require("http-proxy-middleware")
module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api1", {
            target: "http://localhost:5000", //配置转发目标地址(能返回数据的服务器地址)
            changeOrigin: true, //控制服务器接收到的请求头中host字段的值
            pathRewrite: { "^/api1": "" },//去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
        }),
           /*
      	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
      	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
      	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
      */
        createProxyMiddleware("/api2", {
            target: "http://localhost:5001", //配置转发目标地址(能返回数据的服务器地址)
            changeOrigin: true, //控制服务器接收到的请求头中host字段的值
            pathRewrite: { "^/api2": "" },
        })
    )
}
```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。

