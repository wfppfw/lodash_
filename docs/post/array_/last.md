```js
_.last(array);
```

获取 array 中的最后一个元素。

**_引入版本_**
0.1.0

**_参数_**
array (Array): 要检索的数组。

**_返回值_**
(\*): 返回 array 中的最后一个元素

**_例子_**

```js
_.last([1, 2, 3]);
// => 3
```

**_源码实现_**

```js
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;
```

**_简单模拟实现_**

```js
function last(array) {
  let len = Array.isArray(array) ? array.length : 0;
  return len ? array[len - 1] : undefined;
}
```
