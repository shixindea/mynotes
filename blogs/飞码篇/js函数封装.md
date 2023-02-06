---
title: js函数封装
sidebar: auto
date: 2022-08-04
tags:
 - Javascript
 - 封装
categories:
 -  飞码篇
---

## 1. 时间戳转化为YYYY-MM-DD hh:mm:ss

>这个是获取时间戳的函数

```text
第一种
var timestamp = Date.parse(new Date());
输出：1640569738000
第二种
var timestamp=new Date().getTime()；
输出：1640569787716
第三种
var timestamp = (new Date()).valueOf() 
输出：1640569936666
```

> 这个是时间戳转换为时间 [ **YYYY-MM-DD hh:mm:ss **]的函数

```js
function timestampToTime(timestamp) {
        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1):date.getMonth()+1) + '-';
        var D = (date.getDate()< 10 ? '0'+date.getDate():date.getDate())+ ' ';
        var h = (date.getHours() < 10 ? '0'+date.getHours():date.getHours())+ ':';
        var m = (date.getMinutes() < 10 ? '0'+date.getMinutes():date.getMinutes()) + ':';
        var s = date.getSeconds() < 10 ? '0'+date.getSeconds():date.getSeconds();
        return Y+M+D+h+m+s;
    }
 timestampToTime(1403058804);
 console.log(timestampToTime(1403058804));//2020-06-18 10:33:24
```

> | 一小时的[时间戳]( | 3,600,000   |
> | ----------------- | ----------- |
> | 一天的时间戳      | 86400000    |
> | 一个月的时间戳    | 2592000000  |
> | 一年的时间戳      | 31104000000 |



## 2.  生成六位随机整数

```js
Math.trunc (Math.random()*(999999-100000)+100000)
```

## 3. 使用正则判断 手机号格式正不正确

```js
let myreg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
if (this.fromData[key].value && myreg.test(this.fromData[key].value)) {
    console.log("正确的电话号码")
} else {
    uni.showToast({
        title: "请输入正确的号码",
        icon: "none"
    })
    return
}
```

## 4.js去除数组对象中的重复对象

#### 1、根据数组对象中的id作比较，id相同的去掉。这种方法只会保留 id 第一个出现的数组

第一种：

```js
 var arr = [
    {id: 1, name: 'sli', year: 2012},
    {id: 2, name: 'ap', year: 2015},
    {id: 1, name: 'alslion', year: 2012},
    {id: 3, name: 'pose', year: 2012},
]

//删除arr中的重复对象
var newArr= [];
var arrId = [];
for(var item of arr){
    if(arrId.indexOf(item['id']) == -1){
        arrId.push(item['id']);
        newArr.push(item);
    }
}
console.log(arrId,newArr);
```

结果如下：

![](https://img-blog.csdnimg.cn/20200312104239269.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L25uYWF5Xw==,size_16,color_FFFFFF,t_70)



第二种：reduce()

```
var arr = [
    {name:'uzi',color:'blue'},
    {name:'pdd',color:'white'},
    {name:'mlxg',color:'orange'},
    {name:'uzi',color:'red'},
]

let hash = {};
var newArr = arr.reduce((item, next) => {
    hash[next.name] ? '' : hash[next.name] = true && item.push(next);
    return item
}, []);
console.log(newArr);
```


结果如下：

![](https://img-blog.csdnimg.cn/20200312105942845.png)

第三种：

```
let arr = [
	{name:'黎明',id:21111},
    {name:'王小二',id:1111},
    {name:'大小二',id:3222}
]

arr.splice(arr.findIndex(item => item.id === 3222), 1); 
```

结果如下：

![](https://img-blog.csdnimg.cn/20200312111108761.png)

#### 2、数组对象完全相同的去除

第一种：

			function delObj(obj) {
	            var uniques = [];
	            var stringify = {};
	            for (var i = 0; i < obj.length; i++) {
	                var keys = Object.keys(obj[i]);
	                keys.sort(function(a, b) {
	                    return (Number(a) - Number(b));
	                });
	                var str = '';
	                for (var j = 0; j < keys.length; j++) {
	                    str += JSON.stringify(keys[j]);
	                    str += JSON.stringify(obj[i][keys[j]]);
	                }
	                if (!stringify.hasOwnProperty(str)) {
	                    uniques.push(obj[i]);
	                    stringify[str] = true;
	                }
	            }
	            uniques = uniques;
	            return uniques;
	        }
	        var arr = [
	            {name:'uzi',color:'blue'},
	            {name:'pdd',color:'white'},
	            {name:'mlxg',color:'orange'},
	            {name:'uzi',color:'blue'},
	        ]
	        console.log('arr：',delObj(arr))
			
			var arr1 = [
	            {name:'uzi',color:'blue'},
	            {name:'pdd',color:'white'},
	            {name:'mlxg',color:'orange'},
	            {name:'uzi',color:'red'},
	        ]
	        console.log('arr1：',delObj(arr1))
![](https://img-blog.csdnimg.cn/20200312104840231.png)

![](https://img-blog.csdnimg.cn/20200312104733872.png)

## 5.对象数组去重【现锋】

```js
let newArr = []
newdataArray.forEach((item) => {
    let isClude = false
    newArr.forEach((item1) => {
        if (JSON.stringify(item) === JSON.stringify(item1)) {
            isClude = true
        }
    })
    if (!isClude) {
        newArr.push(item)
    }
})
console.log('newArr', newArr)
```
## 6.对象数组中的 根据单一对象值来去重【现锋】

```js
let newArr = []
newdataArray.forEach((item) => {
    let isClude = false
    newArr.forEach((item1) => {
        if (JSON.stringify(item.title) === JSON.stringify(item1.title)) {
            isClude = true
        }
    })
    if (!isClude) {
        newArr.push(item)
    }
})
console.log('newArr', newArr)

```

## 7.用于多个字符串 变成用逗号分割的多个字符串

```js
function linkString(aaaaaaaaaaa, bbbbbbbbbbb, ccccccccccc) {
    let newPicString1 = ""
    if (newPicString1) {
        if (aaaaaaaaaaa) {
            newPicString1 = newPicString1 + ',' + aaaaaaaaaaa
        }
    } else {
        newPicString1 = aaaaaaaaaaa
    }

    if (newPicString1) {
        if (bbbbbbbbbbb) {
            newPicString1 = newPicString1 + ',' + bbbbbbbbbbb
        }
    } else {
        newPicString1 = bbbbbbbbbbb
    }

    if (newPicString1) {
        if (ccccccccccc) {
            newPicString1 = newPicString1 + ',' + ccccccccccc
        }
    } else {
        newPicString1 = ccccccccccc
    }
    return newPicString1
}

let aaaaaaaaaaa = "你是不是大聪明"
let bbbbbbbbbbb = ""
let ccccccccccc = "是"		
const newString1 = linkString(aaaaaaaaaaa, bbbbbbbbbbb, ccccccccccc)
console.log(newString1, 'linkString(aaaaaaaaaaa,bbbbbbbbbbb,ccccccccccc)');
```

## 8. 数组转为  逗号 分割的 的字符串

```js
const list= ['aaa','vvvv','','dsfsdf']
console.log(list.join(','));
```
