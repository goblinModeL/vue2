// const  data =
//   [
//     {
//     "id": 1,
//     "name": "Apple",
//     "price": 150,
// },
//   {
//     "id": 2,
//     "name": "Apple",
//     "price": 150,
//   },
//   {
//     "id": 3,
//     "name": "Orange",
//     "price": 300,
//   },
//   {
//     "id":4,
//     "name":'oo',
//     "price":300
//   }
// ]
// const data1=[
//   2,2,2,23,4,5,6,7,10,16,11,21
// ]
// console.log(new Map(data.map(item => [item.name + item.price, item])).values())
// const newdata = Array.from(new Map(data.map(item => [item.name + item.price, item])).values());//对象去重(根据name和price)
// console.log(newdata)
// const newdata1 =[...new Set(data1)]  //数组去重
// const  newdata2=data1.filter(num=>num>10)//大于10
// const  newdata3=data.filter(num=>num.price>200)//大于200
// console.log(newdata)
// console.log(newdata1)
// console.log(newdata2)
// console.log(newdata3)
//
//


// const  url="http://192.168.99.6/list/name?num=1234&age=999"
// let value=url.split('?')[1].split('&')
// console.log(value)
// const  end=[
// ]
// value.forEach(item=>{
//   console.log(item)
//  let uk= item.split("=")
//   let newdata={}
//   newdata[uk[0]]=uk[1]
//   end.push(newdata)
// })
// console.log(end)
//
//
//
// let aa={}
// const b=[{'2':2}]
// aa=b
// console.log(aa)
//
// aa
//
// for(let i in aa){
//   console.log(i)
// }
//
//
//
//
// let map={}
// let datamap={name:2,list:[]}
//
//
// map=datamap
// console.log(Object.keys(map).length > 0)



// let i=10
// function ab(){
//   console.log(i)
//     i=20
//   console.log(i)
// }
// ab()
// let a=[1,2,3]
// let b=JSON.parse(JSON.stringify(a));
// b.push(6)
// console.log(a)
// let a=[1,2,3]
// let b=[...a];
// b.push(6)
// console.log(a)
// let a=[1,2,3,4]
// let b=a.splice(1,1)
// console.log(a)
// console.log(b)
// let aa=[1,2,3,4]
// let bb=aa.slice(0,1)
// console.log(aa)
// console.log(bb)
// let s='www.baidu.com?a=3&b=10'
// let k=s.split('?')[1].split('&')
// console.log(k)
// let u=k.reduce((arry,item)=> ([key,value]=item.split('='),arry[key] = value, arry),{})
// console.log(u)
// 字体渐变
// background: linear-gradient(90deg, #FFFFFF 0%, #95D4FA 100%);
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
// 创建一个 Promise 对象



// const myPromise = new Promise((resolve, reject) => {
//   // 异步操作
//   setTimeout(() => {
//     const randomNum = Math.random();
//     console.log(randomNum)
//     if (randomNum < 0.5) {
//       // 如果随机数小于0.5，则将 Promise 标记为成功，并返回结果
//       resolve("Success!");
//     } else {
//       // 如果随机数大于等于0.5，则将 Promise 标记为失败，并返回错误信息
//       reject("Error!");
//     }
//   }, 1000); // 模拟异步操作，1秒后执行
// });
//
// // 使用 Promise 对象
// myPromise.then(
//   // 成功时的处理函数
//   result => {
//     console.log("Promise resolved with result:", result);
//   },
//   // 失败时的处理函数
//   error => {
//     console.error("Promise rejected with error:", error);
//   }
// );

// function fn1() {
//   var a = 2;
//   var b = 3;
//   function fn2() {
//     a++;
//     console.log(a);
//
//   }
//   return fn2;
// }
// var f = fn1;
// console.log(f())
// f();
// f();
// f = null;
// var test = (function() {
//   var num = 0
//   return () => {
//     return num++
//   }
// }())
// for (var i = 0; i < 20; i++) {
//   test()
// }
// console.log(test());
// var age=100
// var obj = {
//   name:"lynn",
//   age:18,
//   showLen: function() {
//     console.log(this.age);
//   },
//   fn:function(){
//     (function(cb) {
//       cb();
//     })(this.showLen)
//   }
// };
//
// obj.fn();
// function ReverseList(head) {
//   let list = null; // list 用于保存反转后的链表
//   let cur = head; // cur 用于遍历原链表的节点
//
//   while (cur) {
//     let temp = cur.next; // 临时保存 cur.next，因为在修改 cur.next 后会丢失原始值
//     // 将 cur 的 next 指针指向反转链表头部 list
//     cur.next = list;
//    console.log(list)
//     // 更新 list 为当前节点，相当于将当前节点添加到反转链表的头部
//     list = cur;
//     console.log(list)
//     // 移动 cur 到下一个节点
//     cur = temp;
//     console.log(cur)
//     console.log('\n')
//   }
//
//   return list; // 返回反转后的链表头部
// }
// let Head={
//   val:1,
//   next:{
//     val:2,
//     next:{
//       val:3,
//       next:{
//         val:4,
//         next:{
//           val:5,
//           next:null
//         }
//       }
//     }
//   }
// }
// ReverseList(Head)


// word-wrap: break-word;
// word-break: break-all;
// position: relative;
function getArea(width) {
  return height => {
    console.log(width, height)
    return width * height
  }
}

const getTenWidthArea = getArea(10)
// 之后碰到宽度为10的长方形就可以这样计算面积
// const area1 = getTenWidthArea(20)
getTenWidthArea(20)
function fn(...args){
  console.log(this,args);
}
var obj = {
  myname:"张三"
}

fn.apply(obj,[1,2]); // this会变成传入的obj，传入的参数必须是一个数组；
fn(1,2) // this指向window
