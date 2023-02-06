---
title: uView 代码片段
sidebar: auto
date: 2022-08-04
tags:
 - uniapp
 - uView
 - 代码片段
categories:
 -  飞码篇
---

## Toast消息提示

```
<u-toast ref="uToast"></u-toast>
```

```
this.$refs.uToast.show({
					type: 'success',
					title: '成功主题(带图标)',
					message: "庄生晓梦迷蝴蝶",
					iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png'
				})
				
```

```
this.$u.toast(261)
```



## 页面加载

```html
<view class="pageloading" v-if="isloading">
    <u-loading-page :loading="isloading" loading-text="loading..." bgColor="#ff0000"></u-loading-page>
</view>
```

```js
isloading: true
```

```css
.pageloading{
		position: fixed;
		top:0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 3;
	}
```

