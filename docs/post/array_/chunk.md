```
_.chunk(array,[size=1])
```

将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果 array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
**_引入版本_**
3.0.0

**_参数_**
1.array (Array): 需要处理的数组 2.[size=1] (number): 每个数组区块的长度

**_返回_**
(Array): 返回一个包含拆分区块的新数组（注：相当于一个二维数组）。

**_例子_**

```js
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

**_源码实现（部分函数是自己封装的，如 baseSlice)_**

```js
function chunk(array, size, guard) {
  if (guard ? isIterateeCall(array, size, guard) : size === undefined) {
    size = 1;
  } else {
    size = nativeMax(toInteger(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
    resIndex = 0,
    result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = baseSlice(array, index, (index += size));
  }
  return result;
}

module.exports = chunk;
```

**_简单模拟实现_**

```js
function chunk(array, size) {
  let res = [];
  for (let i = 0; i < array.length; i += size) {
    res.push(array.slice(i, i + size));
  }
  return res;
}
```
