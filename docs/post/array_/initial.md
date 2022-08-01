```js
_.initial(array);
```

获取数组 array 中除了最后一个元素之外的所有元素（注：去除数组 array 中的最后一个元素）。

**_引入版本_**
0.1.0

**_参数_**
array (Array): 要查询的数组。
**_返回值_**
(Array): 返回截取后的数组 array。

**_例子_**

```js
_.initial([1, 2, 3]);
// => [1, 2]
```

**_源码实现_**

```js
function initial(array) {
  var length = array == null ? 0 : array.length;
  //源码这里自己封装的slice函数不改变原数组返回一个修改后的拷贝数组
  return length ? baseSlice(array, 0, -1) : [];
}

module.exports = initial;
```

**_简单模拟实现_**

```js
function initial(array) {
  let len = Array.isArray(array) ? array.length : 0;
  return len ? array.slice(0, array.length - 1) : [];
}
```
