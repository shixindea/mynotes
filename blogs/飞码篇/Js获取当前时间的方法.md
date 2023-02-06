---
title: Js获取当前时间的方法
sidebar: auto
date: 2022-08-04
tags:
 - Javascript
 - 时间
categories:
 -  飞码篇
---

# uni-app JS获取当前时间的方法



```js
    getDataTime() {
        // 得到时间参数
        function timestampToTime(timestamp) {
          var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
          var Y = date.getFullYear() + '-';
          var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
          var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
          var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
          var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
          var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
          return Y + M + D + h + m + s;
        }
        var timestamp = Date.parse(new Date());
        // ;
        // console.log(timestampToTime(timestamp)); //2020-06-18 10:33:24
        return timestampToTime(timestamp)
      },
```

# vue3 + TS 获取时间的方法

**2022-11-29 19:22:45**

```js
function nowDate(now:any) {
  var year = now.getFullYear() //年份
  var month = now.getMonth() + 1 //月份（0-11）
  var date = now.getDate() //天数（1到31）
  var hour = now.getHours() //小时数（0到23）
  var minute = now.getMinutes() //分钟数（0到59）
  var second = now.getSeconds() //秒数（0到59）
  return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
}
console.log(nowDate(new Date()));
```



### 方法一

**效果图：** 

![img](https://ask.qcloudimg.com/http-save/yehe-7753286/gvxfde7b6a.gif)

 **说明：**

[JavaScript](https://cloud.tencent.com/product/sms?from=10680) 中 Date 对象

**创建 Date 对象的语法：**

>  var myDate=new Date() 

**常用 Date 对象方法：**

| 方法          | 描述                                      |
| :------------ | :---------------------------------------- |
| Date()        | 返回当日的日期和时间                      |
| getDate()     | 从 Date 对象返回一个月中的某一天 (1 ~ 31) |
| getDay()      | 从 Date 对象返回一周中的某一天 (0 ~ 6)    |
| getMonth()    | 从 Date 对象返回月份 (0 ~ 11)             |
| getFullYear() | 从 Date 对象以四位数字返回年份            |
| getHours()    | 返回 Date 对象的小时 (0 ~ 23)             |
| getMinutes()  | 返回 Date 对象的分钟 (0 ~ 59)             |
| getSeconds()  | 返回 Date 对象的秒数 (0 ~ 59)             |

JavaScript 中 requestAnimationFrame()方法

window.requestAnimationFrame()方法告诉浏览器您希望执行动画并请求浏览器在下一次重绘之前调用指定的函数来更新动画，通常与 setTimeout() 方法一起使用

**源代码：**

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Html+js获取当前时间</title>
		<style type="text/css">
			#Main
			{
				margin-top: 40px;
				margin-left: 50px;
				height: 100px;
				font-size: 30px;
			}
		</style>
		<script type="text/javascript">
			window.onload=function()
			{
				window.requestAnimationFrame(getDate)
			}
			
			function getDate()
			{
				window.setTimeout(function(){
					window.requestAnimationFrame(getDate)
				},1000/2)
				var d=new Date();   
				var year=d.getFullYear()  //获取年
				var month=d.getMonth()+1;  //获取月，从 Date 对象返回月份 (0 ~ 11)，故在此处+1
				var day=d.getDay()    //获取日
				var days=d.getDate() //获取日期
				var hour=d.getHours()   //获取小时
				var minute=d.getMinutes()  //获取分钟
				var second=d.getSeconds()   //获取秒
				
				if(month<10) month="0"+month
				if(days<10) days="0"+days
				if(hour<10) hour="0"+hour
				if(minute<10) minute="0"+minute
				if(second<10) second="0"+second
				
				var week=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六")
				var Tools=document.getElementById("Main")
				var da=year+" 年 "+month+" 月 "+days+" 日 "+week[day]+" "+hour+" : "+minute+" :"+second
				Tools.innerHTML=da
			}
			
		</script>
	</head>
	<body>
		<div id="Main"></div>
	</body>
</html>
```





### 方法二   通过时间戳的方法

https://www.zhihu.com/people/chen-xi-41-46-95)

>  [JS获取当前时间的方法 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/450208567)

1.获取时间戳

```text
第一种
var timestamp = Date.parse(new Date());
输出：1640569738000
第二种
var timestamp=new Date().getTime()；
输出：1640569787716
第三种
var timestamp=new Date().getTime()；(和二重复了)
var timestamp = (new Date()).valueOf() 
输出：1640569936666
```

第一种：获取的时间戳是把毫秒改成000显示，因为这种方式只精确到秒
第二种和第三种是获取了当前毫秒的时间戳。

2.获取时间

```text
var myDate = new Date();
myDate.getYear();  //获取当前年份(2位)
myDate.getFullYear(); //获取完整的年份(4位,1970-????)
myDate.getMonth();  //获取当前月份(0-11,0代表1月)
myDate.getDate();  //获取当前日(1-31)
myDate.getDay();   //获取当前星期X(0-6,0代表星期天)
myDate.getTime();  //获取当前时间(从1970.1.1开始的毫秒数)
myDate.getHours();  //获取当前小时数(0-23)
myDate.getMinutes();  //获取当前分钟数(0-59)
myDate.getSeconds();  //获取当前秒数(0-59)
myDate.getMilliseconds(); //获取当前毫秒数(0-999)
myDate.toLocaleDateString();  //获取当前日期
var mytime=myDate.toLocaleTimeString();  //获取当前时间
myDate.toLocaleString( );  //获取日期与时间

// 获取当前时间戳(以s为单位)
var timestamp = Date.parse(new Date());
timestamp = timestamp / 1000;
//当前时间戳为：1403149534
console.log("当前时间戳为：" + timestamp);
 
// 获取某个时间格式的时间戳
var stringTime = "2014-07-10 10:21:12";
var timestamp2 = Date.parse(new Date(stringTime));
timestamp2 = timestamp2 / 1000;
//2014-07-10 10:21:12的时间戳为：1404958872 
console.log(stringTime + "的时间戳为：" + timestamp2);
 
// 将当前时间换成时间格式字符串
var timestamp3 = 1403058804;
var newDate = new Date();
newDate.setTime(timestamp3 * 1000);
// Wed Jun 18 2014 
console.log(newDate.toDateString());
// Wed, 18 Jun 2014 02:33:24 GMT 
console.log(newDate.toGMTString());
// 2014-06-18T02:33:24.000Z
console.log(newDate.toISOString());
// 2014-06-18T02:33:24.000Z 
console.log(newDate.toJSON());
// 2014年6月18日 
console.log(newDate.toLocaleDateString());
// 2014年6月18日 上午10:33:24 
console.log(newDate.toLocaleString());
// 上午10:33:24 
console.log(newDate.toLocaleTimeString());
// Wed Jun 18 2014 10:33:24 GMT+0800 (中国标准时间)
console.log(newDate.toString());
// 10:33:24 GMT+0800 (中国标准时间) 
console.log(newDate.toTimeString());
// Wed, 18 Jun 2014 02:33:24 GMT
console.log(newDate.toUTCString());
```

![img](https://pic4.zhimg.com/80/v2-9aaf4f95e4edb8eea5169ccbbea2b7f7_720w.jpg)

3.时间戳转化为YYYY-MM-DD hh:mm:ss

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

4.封装的时间格式器

```js
/** 
 * 时间戳格式化函数 
 * @param {string} format 格式 
 * @param {int} timestamp 要格式化的时间 默认为当前时间 
 * @return {string}   格式化的时间字符串 
 */
function date(format, timestamp){ 
 var a, jsdate=((timestamp) ? new Date(timestamp*1000) : new Date()); 
 var pad = function(n, c){ 
  if((n = n + "").length < c){ 
   return new Array(++c - n.length).join("0") + n; 
  } else { 
   return n; 
  } 
 }; 
 var txt_weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
 var txt_ordin = {1:"st", 2:"nd", 3:"rd", 21:"st", 22:"nd", 23:"rd", 31:"st"}; 
 var txt_months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
 var f = { 
  // Day 
  d: function(){return pad(f.j(), 2)}, 
  D: function(){return f.l().substr(0,3)}, 
  j: function(){return jsdate.getDate()}, 
  l: function(){return txt_weekdays[f.w()]}, 
  N: function(){return f.w() + 1}, 
  S: function(){return txt_ordin[f.j()] ? txt_ordin[f.j()] : 'th'}, 
  w: function(){return jsdate.getDay()}, 
  z: function(){return (jsdate - new Date(jsdate.getFullYear() + "/1/1")) / 864e5 >> 0}, 
   
  // Week 
  W: function(){ 
   var a = f.z(), b = 364 + f.L() - a; 
   var nd2, nd = (new Date(jsdate.getFullYear() + "/1/1").getDay() || 7) - 1; 
   if(b <= 2 && ((jsdate.getDay() || 7) - 1) <= 2 - b){ 
    return 1; 
   } else{ 
    if(a <= 2 && nd >= 4 && a >= (6 - nd)){ 
     nd2 = new Date(jsdate.getFullYear() - 1 + "/12/31"); 
     return date("W", Math.round(nd2.getTime()/1000)); 
    } else{ 
     return (1 + (nd <= 3 ? ((a + nd) / 7) : (a - (7 - nd)) / 7) >> 0); 
    } 
   } 
  }, 
   
  // Month 
  F: function(){return txt_months[f.n()]}, 
  m: function(){return pad(f.n(), 2)}, 
  M: function(){return f.F().substr(0,3)}, 
  n: function(){return jsdate.getMonth() + 1}, 
  t: function(){ 
   var n; 
   if( (n = jsdate.getMonth() + 1) == 2 ){ 
    return 28 + f.L(); 
   } else{ 
    if( n & 1 && n < 8 || !(n & 1) && n > 7 ){ 
     return 31; 
    } else{ 
     return 30; 
    } 
   } 
  }, 
   
  // Year 
  L: function(){var y = f.Y();return (!(y & 3) && (y % 1e2 || !(y % 4e2))) ? 1 : 0}, 
  //o not supported yet 
  Y: function(){return jsdate.getFullYear()}, 
  y: function(){return (jsdate.getFullYear() + "").slice(2)}, 
   
  // Time 
  a: function(){return jsdate.getHours() > 11 ? "pm" : "am"}, 
  A: function(){return f.a().toUpperCase()}, 
  B: function(){ 
   // peter paul koch: 
   var off = (jsdate.getTimezoneOffset() + 60)*60; 
   var theSeconds = (jsdate.getHours() * 3600) + (jsdate.getMinutes() * 60) + jsdate.getSeconds() + off; 
   var beat = Math.floor(theSeconds/86.4); 
   if (beat > 1000) beat -= 1000; 
   if (beat < 0) beat += 1000; 
   if ((String(beat)).length == 1) beat = "00"+beat; 
   if ((String(beat)).length == 2) beat = "0"+beat; 
   return beat; 
  }, 
  g: function(){return jsdate.getHours() % 12 || 12}, 
  G: function(){return jsdate.getHours()}, 
  h: function(){return pad(f.g(), 2)}, 
  H: function(){return pad(jsdate.getHours(), 2)}, 
  i: function(){return pad(jsdate.getMinutes(), 2)}, 
  s: function(){return pad(jsdate.getSeconds(), 2)}, 
  //u not supported yet 
   
  // Timezone 
  //e not supported yet 
  //I not supported yet 
  O: function(){ 
   var t = pad(Math.abs(jsdate.getTimezoneOffset()/60*100), 4); 
   if (jsdate.getTimezoneOffset() > 0) t = "-" + t; else t = "+" + t; 
   return t; 
  }, 
  P: function(){var O = f.O();return (O.substr(0, 3) + ":" + O.substr(3, 2))}, 
  //T not supported yet 
  //Z not supported yet 
   
  // Full Date/Time 
  c: function(){return f.Y() + "-" + f.m() + "-" + f.d() + "T" + f.h() + ":" + f.i() + ":" + f.s() + f.P()}, 
  //r not supported yet 
  U: function(){return Math.round(jsdate.getTime()/1000)} 
 }; 
   
 return format.replace(/[\]?([a-zA-Z])/g, function(t, s){ 
  if( t!=s ){ 
   // escaped 
   ret = s; 
  } else if( f[s] ){ 
   // a date function exists 
   ret = f[s](); 
  } else{ 
   // nothing special 
   ret = s; 
  } 
  return ret; 
 }); 
}
```