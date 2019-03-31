//在es5中，数组的遍历方法一般为
var arr1 = ['arr1',1,5,9,6];
for(let i =0; i < arr1.length; i++){
  console.log(arr1[i]);
}


//es6中数组新增的方法，更加便捷以及方便
console.log('以下为foreach内容');
/**
 * 方法一：forEach，其中（） => 为箭头函数，item为数组内的子元素
 * 原理讲解：forEach方法中的函数通过迭代器依次获取到数组的子元素并返回给回调函数，作为回调函数的实参
*/
var arr2 = ['arr2',1,5,3,6,8];

arr2.forEach((item) => {
  console.log(item);
})
//若数组内的子元素为对象
arr2 = [{
  name: 'sdkj',
  age: 20
},{
  name: 'jhel',
  age: 45
}]
arr2.forEach((item) => {
  console.log(item.name);
})
//同时我们还可以实现数组的累加
arr2 = [1,5,3,2,8]
var sum = 0;
arr2.forEach((item) => {
  sum += item;
})
console.log(sum);


console.log('以下为map内容');
/**
 * 方法二：map,用于需要取数组或者对象中的元素进行某一定的操作
 * map函数需要有return来返回值
 * 并且map最终返回的是一个数组
 * 
 * 场景一：取两倍数组元素放入新的数组中
*/
var arr3 = [1,5,8,7,6];
var newArr3 = arr3.map((item) => {
  return item * 2;
})
console.log(newArr3);
/**
 * 场景二：取数组对象中的某个属性值并放入新的数组中
 */
arr3 = [{
  name: 'sdkj',
  age: 20
},{
  name: 'jhel',
  age: 45
}]
newArr3 = arr3.map((item) => {
  return item.age;
})
console.log(newArr3);

console.log('以下为filter内容');
/**
 * 方法三：filter 用于判断数组中元素是否满足我们的要求，相当于过滤
 * 当return的值为真的时候即将对应的数组元素返回到新数组中
 * 因此filter最终返回的是一个数组
 * 
 * 场景一：获取数组中指定类型的对象放到B数组中 
 */

var porducts = [
  {name:"cucumber",type:"vegetable"},
  {name:"banana",type:"fruit"},
  {name:"celery",type:"vegetable"},
  {name:"orange",type:"fruit"}
];
var specific = porducts.filter((item) => {
  return item.type === 'fruit';
})
console.log(specific);

/**
 * 同时，我们也可以判定多个条件是否满足
 */
var products = [
  {name:"cucumber",type:"vegetable",quantity:0,price:1},
  {name:"banana",type:"fruit",quantity:10,price:16},
  {name:"celery",type:"vegetable",quantity:30,price:8},
  {name:"orange",type:"fruit",quantity:3,price:6}
];

specific = products.filter(function(product){
    return product.type === "vegetable" 
    && product.quantity > 0 
    && product.price < 10;
})
console.log(specific);

console.log('以下为find内容');
/**
 * 方法四：find 找到满足条件的对象，也可指定对象条件
 * 与filter非常相似，如果return的值为真则返回该对象
 * 但区别在于，filter最终返回的是数组，而find返回的是对象
 * 并且，find在找到一个满足条件的对象后不会再往下寻找，而是结束执行
 */
var users = [
  {name:"Jill"},
  {name:"Alex",id:2},
  {name:"Bill"},
  {name:"Alex"}
 ];

 var speObj = users.find((item) => {
   return item.name === 'Alex';
 })
 console.log(speObj);

 console.log('以下为every,some内容');
 /**
  * 方法五：every/some 用于判断数组中是否含有符合条件的元素
  * 判断条件为return的值
  * 最终返回的值为boolean值，即true/false
  * every：一假即假,全为真才为真
  * some：一真即真，全为假才为假
  */
 var computers = [
  {name:"Apple",ram:16},
  {name:"IBM",ram:4},
  {name:"Acer",ram:32}
];
var every = computers.every((item) => {
  return item.ram > 16;
})
console.log(every);
var some = computers.some((item) => {
  return item.ram >= 16;
})
console.log(some);


console.log('以下为reduce内容');
/**
 * 方法六：reduce 对数组中的元素进行操作，如累加累减，抽离某个对象的属性
 * 返回的值为return的值
 * 当执行到最后一个元素的时候结束
 * 同时reduce可以可以实现上述所有的方法
 * 
 * 
 * 累加
 */
var numbers = [1,5,3,6,78,5];
var sum = numbers.reduce((sum, item) => {
  return sum += item;
},0)
console.log(sum);

/** 场景2
 *  将数组中对象的某个属性抽离到另外一个数组中
 * 
 */

var primaryColors = [
  {name:'sfgrt', color:"red"},
  {name:'wei', color:"yellow"},
  {name:'ming', color:"blue"}
];

var colors = primaryColors.reduce(function(previous,primaryColor){
   previous.push(primaryColor.color);

   return previous;
},[]);

console.log(colors);
