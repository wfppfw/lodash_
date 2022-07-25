```
_.compact(array)
```

创建一个新数组，包含原数组中所有的非假值元素。例如 false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。

**_引入版本_**
0.1.0

**_参数_**
array (Array): 待处理的数组

**_返回值_**
(Array): 返回过滤掉假值的新数组。

**_例子_**

```js
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```

**_源码实现_**

```js
function compact(array) {
  var index = -1,
    length = array == null ? 0 : array.length,
    resIndex = 0,
    result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = compact;
```

**_模拟实现_**

```js
function compact(array) {
  return array.filter((i) => i);
}
```
