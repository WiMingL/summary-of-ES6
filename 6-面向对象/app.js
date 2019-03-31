/**
 * class
 * 万物皆对象
 * 主要用于对象的继承
 * 原有继承的步骤过于复杂和难以理解
 * 
 * 模式：
 * class name{
 *    constructor(形参){
 *      赋值
 *    }，
 *    下面是方法
 * }
 * 
 * class 可以更快捷方便的继承
 * 原理：需要指定父级 extends 父级名称，在constructor中需要添加 super（形参）方法，缺一不可。
 */

 //父级
 class Car{
   constructor({name,price}){
     this.name = name;
     this.price = price;
   }
   //方法
   drive(){
     return 'voooom'
   }
 }

 /**
  * 继承：继承父级的相应的属性和所有的方法
  * extends： 指定父级为Car
  * super（）：将实参传递给父级constructor内赋值，使子级得到父级的属性以及属性值
  */
 class Toyota extends Car{
  constructor(options){
    super(options);
    this.color = options.color;
  }
 }

 const toyota = new Toyota({name: 'toyota', price: '$10000.0', color: 'red'});
 console.log(toyota);