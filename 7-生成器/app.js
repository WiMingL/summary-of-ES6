/**
 * 生成器：可以返回多次的函数
 * generator: function* name(){ yield 返回值}
 */

 //实例，斐波那契函数
 function* feboneqie(pos){
    var a = 0, b = 1,arr = [a,b], i =0;
    while(i++ < pos){
      yield a;
      [a, b] = [b, a + b];
      
    }
    return;
 }
 var f = feboneqie(5);
 console.log(f);//无数值出现
 /** 
  * 需要得出第一次返回值应该使用next方法,最终返回的是一个对象，
  * 对象含有一个value值，和done
  * 我们执行多几次
  */
 console.log(f.next());
 console.log(f.next());
 console.log(f.next());
 console.log(f.next());
 console.log(f.next());//这个即为最终求到的斐波那契的第五项的值
 console.log(f.next());//当done为ture时，说明函数执行到了return处，执行结束

 //如果需要打印所有的值，可以使用 for of
 //key 值由自己定义，代表的时 of 后面的函数的value值
 for(var key of feboneqie(5)){
   console.log(key);
 }

// 迭代器还原生成器的结构
function nameIterator(names){
  let nextIndex = 0;
  return {
    //执行next方法的时候，判断是否小于实参的长度，是则返回相应的nextIndex数组元素，并且++，否则说明执行完毕，返回value: undefined,done:true
    next:function(){
      return nextIndex < names.length ? {value: names[nextIndex++],done:false} : {value: undefined,done:true}
    }
  }
}