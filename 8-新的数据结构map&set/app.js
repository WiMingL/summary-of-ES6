/** 
 * 数据结构: map
 * 键值对: 与对象不同的是键和值可以是任何类型如{}_*这些特殊符号
 * 
 * 首先需要实例化 new Map()
 */

 const map = new Map();

 //设置key值
 const key1 = {},
       key2 = 'shte',
       key3 = function(){};

 //设置key对应的value值
 map.set(key1,'Value of key1');
 map.set(key2,'Value of key2');
 map.set(key3,'Value of key3');

 console.log(map);

 //获取key相应的value值：map.get(key)方法
 console.log(`key1:${map.get(key1)}`);

 //获取value的数量：map.size
 console.log(`num:${map.size}`);

 //遍历key和value：for of
 for(let [key, value] of map){
   console.log(`key:${key} -- value:${map.get(key)}`);
 }

// 将map转化为正常的数组：Array.form(value)   value是我们所需要变成数组的数据
const keyValueArray = Array.from(map);
console.log(keyValueArray);

// 将map中的key转化为数组：map.keys()方法可以得到map中所有的key值，并放入数组中
const keyArray = Array.from(map.keys());
console.log(keyArray);

// 将map中的value值转换为数组：map.values()方法可以得到map中所有的values值，并放入数组中
const valueArray = Array.from(map.values());
console.log(valueArray);


/**
 * 数据结构：set
 * 集合: 可以存储任何数据类型,并且是唯一的(不重复的值)
 */

 const set = new Set();

 //添加元素
 set.add(100);
 set.add('stegds');
 set.add({name: 'li'});
 set.add(true);
 set.add(100);//相同的元素无法添加,

 console.log(set);

 //获取长度：set.size
 console.log(`size:${set.size}`);

 //检查是否有某个值set.has(value)，匹配的是地址
 console.log(set.has(100));
 console.log(set.has('asfhlk'));
 console.log(set.has({name: 'li'}));//对象虽然内容相同，但地址不同

 //删除某个值：set.delete(value)
 set.delete(100);
 console.log(set);

 // 将set转换为array
const setArray = Array.from(set);
console.log(setArray);
 