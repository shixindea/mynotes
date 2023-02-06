---
title: Uni-App 笔记
sidebar: auto
date: 2022-08-04
tags:
 - uniapp
 - 笔记
categories:
 -  飞码篇
---

# Uni-App 笔记

## 1. 使用系统默认的导航栏样式

> 在page.json 中将对应的`navigationStyle`改为  `custom`

```vue
"navigationStyle": "custom"
```

## 2. pages.json 中 将级联文件夹指定到本文件夹中

```vue
{
    "root": "card",
    "name": "card",
    "pages": [
				// 首页
                {
                    "path": "index/index",
                    "style": {
                    "navigationBarTitleText": "卡券服务",
                    "navigationBarTextStyle": "black"
                		}
                }, // 个人中心
                {
                "path": "me/me",
                "style": {
                "navigationStyle": "custom"
               			 }
                }, 
            ]
}
```

## 3. uni-app 路由跳转

> 注意：
>
> navigateTo, redirectTo 只能打开非 tabBar 页面。
> switchTab 只能打开 tabBar 页面。
> reLaunch 可以打开任意页面。
> 页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。
> 不能在 App.vue 里面进行页面跳转

>  1.navigateTo（保留当前页面，跳转到其他页面，使用navigateTo可以返回上一页）

```
uni.navigateTo({
	url:'./straSettings'
});
```

> 2.reLaunch（关闭所有页面，跳转到其他页面）

```
uni.reLaunch({
	url:'./straSettings'
})
```

> 3.redirectTo（关闭当前页面，跳转到其他页面）

```
uni.redirectTo({
	url:'./straSettings'
})
```

> 4.switchTab（适用于底部导航栏之间的跳转，或者跳转到底部导航栏）

```
uni.switchTab({
	url: '../strategy/strategy'
});
```

> 5.location.href（适用于跳转到外部链接）

``` 
location.href ='https://blog.csdn.net/weixin_50606255/article/details/118391274';
```

## 4.textarea框怎么设置输入字数和显示用户所输入的字数

示例图片：

![](https://s1.ax1x.com/2022/06/14/Xhl0r4.png)

> 思路讲解
>
> 这其实就是一个`textarea框` 右下角加入了一个用于显示字符的占位框
>
> 使用上 `uni.app` 自带的 `@input` 方法里面的 `detail` 就可以获取到文本框的字数了
>
> **注意**在调用这个函数的的时候 `@input="getLength"`  一定不要自己传参数了  @input="getLength(e) "

```vue

<textarea maxlength=100 rows="6" placeholder="更多不爽？必须吐槽" @input="getLength" />
<text class="right-bottom-text">{{textlength}}/100</text>

 // 定义一个变量

data(){
    return{
    	textlength:0,
    }
}

//使用这个方法来调用，
methods: {
    getLength(e) {
    this.textlength=e.detail.cursor
},

```

## 5.查看更多/收起  不单单可以使用显示隐藏来做还可以使用overflow: hidden



```vue
<view class="item">
    <view class="label "><text class="w4em">身份证</text>：</view>
    <view class="value" :class="{heightHidden:!istravelHeight}">
            <view class=""> 张强|1306**********4814 </view>
            <view class=""> 张强|1306**********4814 </view>
            <view class=""> 张强|1306**********4814 </view>
            <view class=""> 张强|1306**********4814 </view>
            <view class=""> 张强|1306**********4814 </view>
            <view class=""> 张强|1306**********4814 </view>
            <view class=""> 张强|1306**********4814 </view>
            <view class=""> 张强|1306**********4814 </view>
            <view class=""> 张强|1306**********4814 </view>
        </view>
    </view>
    <view class="centertext" @click="travelHeight" v-if="!istravelHeight">
        查看更多 <text class="cuIcon-unfold" ></text>
    </view>
    <view class="centertext" @click="travelHeight" v-else>
        收起<text class="cuIcon-up"></text>
    </view>
</view>

--------------------------------------------------------------------------

 // 定义一个变量

data(){
    return{
    	istravelHeight:false,//是否点击了 `出行信息` 的查看更多
    }
}

//使用这个方法来调用，
methods: {
   travelHeight(){
		this.istravelHeight=!this.istravelHeight
	},
},

--------------------------------------------------------------------------
// css 样式
.heightHidden{
    height: 100upx;
    overflow: hidden;
}
.centertext{
    margin: 0 auto;
    font-size: 26upx;
    color: #999;
    height: 40upx;
    display: flex;
    line-height: 1;
    align-items: center;
    justify-content: center;
    margin-top: 20upx;
}

```

## 6. 对于uni-app来说，设置整屏的背景

> 让这个屏幕最小高度为1屏，如果多的话，他会自适应

```css
	.container {
		width: 100%;
		background-color: #f7f7f7;
		min-height: 100vh;
		}
```

## 7.带参数跳转路由

> 示例数据

```js
	data(){
		return{
			datalist:[
				{id:1,title:"餐饮美食商家入驻",data:"到店堂食吸引新客..."},
				{id:2,title:"民宿商家入驻",data:"在家创业，即刻触达..."},
				{id:3,title:"客运车企商家入驻",data:"信息覆盖全国..."},
				{id:4,title:"景区景点商家入驻",data:"助力景区商家数字化..."},
				{id:5,title:"生活服务商家入驻",data:"到店堂食吸引新客..."},
				{id:6,title:"旅游服务商家入驻",data:"海量旅游产品直达..."},
				{id:7,title:"导游人员入驻",data:"新模式新机遇..."},
				{id:8,title:"景区景点商家入驻",data:"助力景区商家数字化... "},
			]
		}
	},
```

> 使用这个方法跳转的时候带上参数
>
> `父元素传参`

```js
<view class="list" v-for="item in datalist" :key="item.id" @click="gotoItem(item.title)">
    <view class="top flex space-between">
        {{item.title}} <text class="cuIcon-right"></text>
</view>
<view class="bottom nowrap">
    {{item.data}}
        </view>
</view>
				
---------------------------------------------------------------------------
   //  方法在这里
	gotoItem(title){
			uni.navigateTo({
				url:"business-item?title="+title,
			})
		}
```

> `子元素接收`在`onLoad ` 中进行接收数据

```js
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.title
		})
		// console.log(e.title);
	},
```

## 8.uni-app 方法之呼叫电话



```js
callPhone(){
    uni.makePhoneCall({
    	phoneNumber: "15512555998"
    });
},
```

## 9. 路由跳转

				// 跳转tabbar中的页面
				uni.switchTab({
					url:"pages/index/index",
				})
				// 关闭当前页面跳转到下一个页面
				uni.redirectTo({
					url:"pages/index/index",
				})
				//guanbi 当前所有页面 再跳转
				uni.reLaunch({
					url:"pages/index/index",
				})
				 // 保留当前跳转到下一个页面
				uni.navigateTo({ 
					url:"pages/index/index",
					fail(e) {
						console.log(e);
					}
				})


​				

## 10.验证方法是否出错，或者错误在哪里

> 使用下面这个方法来排查

		 // 保留当前跳转到下一个页面
			uni.navigateTo({ 
				url:"pages/index/index",
				fail(e) {
					console.log(e);
				}
			})

## 11.跳转到微信客服

>  **前提：**
>
> 1. 必须是`button` 按钮 
> 2. 加上命令行` open-type="contact"`

```vue
<button class="item flex align-center space-between " open-type="contact">
	点击跳转
</button>
```

## 12.清除缓存

>  init() 为初始化数据，在onload页面初始化加载中就初始化数据，
>
> clearStorage() 方法是清除缓存的数据
>
> **加载的命令行**
>
> ```js
> uni.showLoading({
> 				title:'正在清除缓存...',
> 			});
> ```
>
>  **清除缓存的命令行**
>
> ```js
> uni.setStorageSync('token','');
> ```
>
> **加载结束的提示行**
>
> ```js
> this.init();
> // 重新初始化页面
> setTimeout(()=>{
>     uni.showToast({
>         title:'清除成功',
>         icon:'none'
>     })
> },1000)
> ```
>
> 

```js
	onload(){
		this.init();
	},
	methods: {
		init(){
			// 获取头像,
			
		},
		clearStorage() {
			uni.showLoading({
				title:'正在清除缓存...',
			});
			uni.setStorageSync('token','');
			this.init();
			// 重新初始化页面
			setTimeout(()=>{
				uni.showToast({
					title:'清除成功',
					icon:'none'
				})
			},1000)
		},
    }
```

## 13.  修改上一个页面的值

```js
addOK() {
    // 获取上一个页面的数据,
    // 获取当前开着的所有的页面对象,array,  item =>  所有的参数和方法
    var pages = getCurrentPages();
    // 获取数组的倒数第二个对象
    var prePage = pages[pages.length - 2];
    console.log("pages:",pages);
	console.log("prePage:",prePage);
    // 修改
    prePage.$vm.btnText.push({
        title:this.title,
        type:'radio',
        content:['value1','value2']
    });
    // 返回上一个页面		
	uni.navigateBack({})
}
```

## 14.生命周期

| 函数名               | 说明                                                         |
| :------------------- | :----------------------------------------------------------- |
| onLaunch             | 当`uni-app` 初始化完成时触发（全局只触发一次）               |
| onShow               | 当 `uni-app` 启动，或从后台进入前台显示                      |
| onHide               | 当 `uni-app` 从前台进入后台                                  |
| onError              | 当 `uni-app` 报错时触发                                      |
| onUniNViewMessage    | 对 `nvue` 页面发送的数据进行监听，可参考 [nvue 向 vue 通讯(opens new window)](https://uniapp.dcloud.io/tutorial/nvue-api?id=communication) |
| onUnhandledRejection | 对未处理的 Promise 拒绝事件监听函数（2.8.1+）                |
| onPageNotFound       | 页面不存在监听函数                                           |
| onThemeChange        | 监听系统主题变化                                             |

## 15. 富文本转为文本  富文本解析



![](https://s1.ax1x.com/2022/06/28/jemSG8.png)

### 方法一    rich-text


> 使用这一行命令 可以将 :nodes="你所填的数据" 转换为正常文本
> 如果需要定义样式的话，可以在请求的时候，通过正则，将<p>改为<p style="padding:10upx> 
```html
<rich-text :nodes="data.content"></rich-text>
```

### 方法二 使用 hubildx 插件 可定制

[uParse 富文本解析 - DCloud 插件市场](https://ext.dcloud.net.cn/plugin?id=183)

## 16. 所有的wx.方法 ，都可以直接写成 uni.方法

## 17.获取上一个页面的方法，或者值

				if (flag === 1) {
					console.log('ok');
					// 获取上一个页面的数据,
					// 获取当前开着的所有的页面对象,array,  item =>  所有的参数和方法
					var pages = getCurrentPages();
					// 获取数组的倒数第二个对象
					var prePage = pages[pages.length - 2];
					console.log('prePage', prePage)
					if(this.listSelect==9){this.listSelect=10}
					// 修改
					//创建的情况
					prePage.$vm.btnText.push({
						title: this.title,
						form_data_type: this.listSelect+1,
						options: this.optionVal,
						is_check: true,
						is_required: 1, //如果已选中，利用这个判断是必填（红色）还是选填（蓝色）
					});
					prePage.$vm.isMust()
					// prePage.$vm.btnStylels=prePage.$vm.btnText.length
					uni.navigateBack({})
				}

## 18 图片没加载的时候有提示，图片加载完成隐藏

```js
uni.showLoading({
    title: '正在加载···'
})
getImage({
    data: {
        code: this.code,
    }
}).then(res => {
    if (res.code == 1) {
        console.log(res.data);
        this.img = res.data.images;
        uni.hideLoading()
    }
})
```

## 19.防止事件冒泡 @tap.stop

> 使用[uniapp](https://so.csdn.net/so/search?q=uniapp&spm=1001.2101.3001.7020)开发小程序的时候，@click.stop来做事件冒泡没有作用。
> 需要把@click.stop改成@tap.stop就可以实现了。
