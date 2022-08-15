```js
_.drop(array, [(n = 1)]);
```

创建一个切片数组，去除 array 前面的 n 个元素。（n 默认值为 1。）

**_引入版本_**

0.5.0

**_参数_**

array (Array): 要查询的数组。
[n=1] (number): 要去除的元素个数。
**_返回值_**

(Array): 返回 array 剩余切片。

**_例子_**

```js
_.drop([1, 2, 3]);
// => [2, 3]

_.drop([1, 2, 3], 2);
// => [3]

_.drop([1, 2, 3], 5);
// => []

_.drop([1, 2, 3], 0);
// => [1, 2, 3]
```

**_源码实现_**

```js
function drop(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = guard || n === undefined ? 1 : toInteger(n);
  return baseSlice(array, n < 0 ? 0 : n, length);
}

module.exports = drop;
```

**_简单模拟实现_**

```js
function drop(arr, n = 1) {
  let len = Array.isArray(arr) ? arr.length : 0;
  if (!len) {
    return [];
  }
  return arr.slice(len);
}
```
