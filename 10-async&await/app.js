/**
 * async/await，使用异步的方式实现同步
 * 
 * 
 * 首先async关键字，被放置在函数面前，而有这个关键字的函数，总是会返回一个promise对象
 * 无论你返回的是不是promise对象
 * 下面两种return是相同效果的
*/

async function test(){
   return new Promise((resolve, reject) => {
      resolve('hellowWord');
   });
//  return 'hellowWord';
}
console.log(test());


/**
 * await 关键字，该关键字只能在async函数中使用
 * 作用：可以让JavaScript进行等待，直到一个promise执行并返回它的结果，JavaScript才会继续往下执行。
*/

async function f() {
   let promise = new Promise((resolve, reject) => {
       setTimeout(() => resolve('done!'), 1000)
   })
   let result = await promise // 直到promise返回一个resolve值（*）
   alert(result) // 'done!' 
}


//如果不使用async，则不会弹出done，而是[object Promise]，说明promise还没有执行完成，就alert了，这不是我们所期望

function f1() {
   let promise = new Promise((resolve, reject) => {
       setTimeout(() => resolve('done!'), 1000)
   })
   let result = promise // 直到promise返回一个resolve值（*）
   alert(result) // 'done!' 
}
f1()
