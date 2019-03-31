/**
 * 结构
 * 
 * 对象
 */
  var obj = {
    name: 'li',
    age: 20,
    hobbit: 'listen'
  }
 //普通的变量接收解构对象
//  const {name} = obj;
//  console.log(name);
 //取多个
 const {name, age} = obj;
 console.log(name, age);
 /**
  * 需要注意的是，在使用{}取对象变量的时候，
  * {}内的变量名称应与你所需要取的对象属性的属性名称相同
  * 即我们需要取obj内的name 则对于结构的变量应该为 {name}，否则不可以
  */
 const {name1} = obj;//不可以,应该为{name} 等价于 obj.name
 console.log(name1);
 //对于函数内的结构对象
 function induct({name, age, hobbit}){
  console.log(name, age, hobbit);
 };
 induct(obj);


 /**
  * 数组的解构，与对象的结构很相似
  * 但区别在于，接收解构的数据的变量与顺序有关，而与变量名称无关
  */

  var hobbits = ['read','sport','listen'];
  var [hobbit1, hobbit2] = hobbits;
  console.log(hobbit1,hobbit2);


  /**
   * 数组-对象的解构
   */

   var people = [
     {x: 10, y: 2},
     {x: 15, y: 4},
     {x: 8, y: 6}
   ]

   var [{x,y}] = people;
   console.log(x,y);