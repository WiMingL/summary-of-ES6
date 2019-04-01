/**
 * Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及其返回的值
 * 语法：new Promise( function(resolve, reject) {...})
 * 三种状态：
 * unresolved：等待任务完成
 * resolved：任务完成并且没有任何问题
 * rejectd：任务完成，但是出现问题
 */

let promise = new Promise((resolve, reject) => {
   resolve(); 
// reject();
})


promise
   .then(() => console.log('没问题'))
   .then(() => console.log('没问题'))
   .catch(() => console.log('遇到问题了'));




/** 
 * new http: fetch
 * 一个基于promise的请求方法,更简单,更便捷
 */

let url = 'http://jsonplaceholder.typicode.com/posts';//url为请求数据的地址
//  fetch(url).then((data) => console.log(data));//需要将获取的对象转化为数据流，执行.json()方法
let datas;
fetch(url)
   .then((response) => response.json())
   .then((data) => datas = data)//data是上一步中.json方法获取的数据流,数据保存到外部datas
   .catch((err) => console.log(err));//catch 当出现错误时执行的方法，err为错误信息


//使用async/await编写
let url1 = 'http://jsonplaceholder.typicodes.com/posts';//错误地址
async function myFun(url){
       const res = await fetch(url);
       const data = await res.json();
       await console.log(data);
}
myFun(url);
myFun(url1).catch((err) => console.log(err));//如果需要捕捉错误信息，可以使用catch方法
