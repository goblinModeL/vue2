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
const  url="http://192.168.99.6/list/name?num=1234&age=999"
let value=url.split('?')[1].split('&')
console.log(value)
const  end=[
]
value.forEach(item=>{
  console.log(item)
 let uk= item.split("=")
  let newdata={}
  newdata[uk[0]]=uk[1]
  end.push(newdata)
})
console.log(end)
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
let a=[1,2,3,4]
let b=a.splice(1,1)
console.log(a)
console.log(b)
let aa=[1,2,3,4]
let bb=aa.slice(0,1)
console.log(aa)
console.log(bb)
let s='www.baidu.com?a=3&b=10'
let k=s.split('?')[1].split('&')
console.log(k)
let u=k.reduce((arry,item)=> ([key,value]=item.split('='),arry[key] = value, arry),{})
console.log(u)
字体渐变
// background: linear-gradient(90deg, #FFFFFF 0%, #95D4FA 100%);
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
