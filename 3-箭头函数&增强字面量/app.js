/**
 * 箭头函数：
 * 1、缩减代码
 * 2、改变this指向
 * 
 * 
 * es5中的函数
 */

 const test1 = function (item){
   return item * 2;
 };
 console.log(test1(2));

 //es6中
 const test2 = (item) => {
  return item *2
 }
 console.log(test2(2));
 //对于仅有return值的简略代码还可以优化为
 const test3 = (item) => item * 2;
 console.log(test3(2));

 //改变this指向
 var obj = {
   menbers : ['eila','jasber'],
   summery : function(){
     console.log(this.menbers);
    //  function text(){
    //    console.log(this.menbers);//打印undefined，this不知道指向谁
    //  }
    //  text();
   },
   //es6
   summery1 (){
    console.log(this.menbers);
    var text = () => {
      console.log(this.menbers);//this依旧指向summery1；
    }
    text();
   }
 }
 //比较经常用于回调函数，或者对象方法
 var obj1 = {
   fun () {
     console.log('对象方法');
   }
 }
 var arr = [1,2,3]
 var arr1 = arr.forEach((item) => {
    return item;
 })



 /**
  * 增强对象字面量：可以缩减代码
  * 对于对象中键值对内容相同的我们可以只写一个内容即可
  * es5中
  */
  var name = 'li';
  var age = 20
  var test4 = {
    name: name,
    age: age
  }
  console.log(test4);

  //es6中
  var test5 = {
    name,
    age
  }
  console.log(test5);

  function test6(name, age){
    return {name, age}//等价于{name: name, age: age}
  }
  console.log(test6(name, age));