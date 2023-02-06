## 连环解构赋值 顺便改名字

```js
 // 原始数据： this.oldObj.oldData

 const { oldObj: { oldData:newData } } = this
 console.log(newData)
```

