---
title: uniapp 引入组件库
sidebar: auto
date: 2022-08-04
tags:
 - uniapp
 - 组件
categories:
 -  飞码篇
---

# uni-app下使用vant组件

[uni-app下使用vant组件 - wines君 - 博客园 (cnblogs.com)](https://www.cnblogs.com/wines/p/14256507.html)

## 1. 创建uni-app

下载打开HbuilderX,注意这里下载app开发版的。然后创建新项目，创建的时候选择uni-app默认模板

![img](https://s1.ax1x.com/2022/08/04/veL9Qs.png)

## 2. 下载vant组件

[vant的GitHub下载地址](https://github.com/youzan/vant-weapp/releases)下载完成后解压，然后在项目更目录下创建文件夹`wxcomponents`，注意这里的`wxcomponents`目录级别和`pages`在同一级别，然后再该目录下创建`vant`目录。回到刚才解压的vant目录，找到`dist`文件夹，把它复制到`vant`目录下

![img](https://img2020.cnblogs.com/blog/2178912/202101/2178912-20210109211915077-1529817012.png)

## 3. 引用vant组件

#### 3.1 首先在`app.vue`文件内添加

```css
@import "/wxcomponents/vant/dist/common/index.wxss";
```

![img](https://img2020.cnblogs.com/blog/2178912/202101/2178912-20210109211930447-1387297735.png)

#### 3.2 在pages.json文件内添加组件引用

![img](https://img2020.cnblogs.com/blog/2178912/202101/2178912-20210109211945875-742009304.png)

你可以选择在一个页面的配置文件里面配置，但是只能在这个页面内使用，你也可以选择在globalStyle里面配置，是的所有页面都可以直接使用

```json
"usingComponents":{
			 "van-button": "/wxcomponents/vant/dist/button/index"
}
```

## 4. 使用组件

在你要使用的页面内添加你要使用的组件就可以了![img](https://img2020.cnblogs.com/blog/2178912/202101/2178912-20210109212004566-1193279790.png)

![img](https://img2020.cnblogs.com/blog/2178912/202101/2178912-20210109212013736-351430392.png)

## 5.重新编译【一定要重新编译】