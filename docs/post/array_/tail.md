```js
_.tail(array);
```

获取除了 array 数组第一个元素以外的全部元素。

**_添加版本_**

4.0.0

**_参数_**

array (Array): 要检索的数组。
**_返回_**

(Array): 返回 array 数组的切片（除了 array 数组第一个元素以外的全部元素）。

**_例子_**

```js
_.tail([1, 2, 3]);
// => [2, 3]
```

**_源码实现_**

```js
function tail(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseSlice(array, 1, length) : [];
}
```

**_简单模拟实现_**

```js
function tail(array) {
  let len = Array.isArray(array) ? 0 : array.length;
  return len !== 0 ? array.slice(1) : [];
}
```
