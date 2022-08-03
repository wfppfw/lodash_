```js
_.pull(array, [values]);
```

移除数组 array 中所有和给定值相等的元素，使用 SameValueZero 进行全等比较。

注意： 和*.without 方法不同，这个方法会改变数组。使用*.remove 从一个数组中移除元素。

**_引入版本_**

2.0.0

**_参数_**

array (Array): 要修改的数组。
[values] (...\*): 要删除的值。

**_返回值_**

(Array): 返回 array.

**_例子_**

```js
var array = [1, 2, 3, 1, 2, 3];

_.pull(array, 2, 3);
console.log(array);
// => [1, 1]
```

**_源码实现_**

```js
//今天犯懒，懒得写源码思考了
var pull = baseRest(pullAll);

module.exports = pull;
//
```

**_简单模拟实现_**

```js
// include()方法使用的是 SameValueZero
function pull(array, ...values) {
  array = array.filter((k) => !values.includes(k));
  return array;
}
```
