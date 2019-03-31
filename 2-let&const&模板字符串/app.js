/**
 * es6中新增了数据类型
 * let与const都是只在声明所在的块级作用域内有效。
 * let声明的变量可以改变，值和类型都可以改变，没有限制。
 * const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即赋值。
 */
var b = 20;

{
  let a = 10;
}

// console.log(a);
console.log(b);
//报错  a is not defined
{
  let num = 10;
  console.log(num);
  //可以访问
}


/*
* const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即赋值。
 */


// const value; //报错，声明后需立刻赋值

const values = 10; //赋值后无法变量的值无法改变
// values = 20;
// console.log(values);//10

//虽然不能改变原有值，但是可以在原有值的基础上添加
const arr = ['name',1];
arr.push(2,5,6);
console.log(arr);
arr[2] = 12;
console.log(arr);
const obj = {
  name: 'eila',
  age: 20
}
obj.hobbit = 'sprot';
console.log(obj);

/**
 * 模板字符串，可以让字符串和变量更便捷的拼接
 * 模式：`字符串${变量}`
 * 
 * es5中
 */
var name = 'Tom', age = 20;
var str = name + ' is ' + age + 'years old';
console.log(str);
//es6
str = `${name} is ${age}years old`;
console.log(str);
