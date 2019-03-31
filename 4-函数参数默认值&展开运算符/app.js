/**
 * 函数参数默认值：当函数没有传入相应的实参给形参的时候取默认参数值
 */

 //es5实现
 function test1 (url,method){
   if(!method){
     method = 'GET';
   }
   return {url, method};
 }
 var url = 'https://www.taobao.com';
 console.log(test1(url));

 //es6
 function test2(url, method = 'GET'){
  return {url, method};
 }
 console.log(test2(url));

 /**
  * 展开运算符：对于需要传递数量较多的参数的时候
  */

  //es5
  function sum1(a,b,c,d){
    var num = [a,b,c,d];
    var sum = 0;
    for(var i = 0; i < num.length; i++){
      sum += num[i];
    }
    return sum;
  }
  console.log(sum1(1,5,3,6));

  //es6
  function sum2(...num){
    var sum = 0;
    for(var i = 0; i < num.length; i++){
      sum += num[i];
    }
    return sum;
  }
  console.log(sum2(1,5,3,6));
  /**
  * ...item 相当于展开数组item时候的参数，而不要...的时候，item为数组
  * 比如 ...item = 1,5,6,3   那么item = [1,5,6,3];
  */
  var arr = [1,5,3,6,2];
  var arr1 = ['sdfjh','sfjk']
  console.log(...arr);
  //也可以合并数组
  console.log(['food',...arr]);
  console.log([...arr1,...arr]);