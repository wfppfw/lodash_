```js
_.reverse(array);
```

反转 array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。

Note: 这个方法会改变原数组 array，基于 Array#reverse.

**_添加版本_**
4.0.0

**_参数_**
array (Array): 要修改的数组。
**_返回_**
(Array): 返回 array.

**_例子_**

```js
var array = [1, 2, 3];

_.reverse(array);
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]
```

**_源码实现_**

```js
function reverse(array) {
  return array == null ? array : nativeReverse.call(array);
}

module.exports = reverse;

//
```

**_简单模拟实现_**

```js
function reverse(array) {
  return Array.isArray(array) ? array.reverse() : array;
}
```
