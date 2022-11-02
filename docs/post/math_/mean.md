```
_.mean(array)
```

计算 array 的平均值

**_添加版本_**
4.0.0

**_参数_**
1.array(Array):要迭代的数组。
**_返回_**
(number): 返回平均值。

**_例子_**

```js
_.mean([4, 2, 8, 6]);
// => 5
```

**_源码实现_**

```js
function mean(array) {
  return baseMean(array, identity);
}
function baseMean(array, iteratee) {
  var length = array == null ? 0 : array.length;
  return length ? baseSum(array, iteratee) / length : NAN;
}
function baseSum(array, iteratee) {
  var result,
    index = -1,
    length = array.length;

  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : result + current;
    }
  }
  return result;
}
```

**_简单模拟实现_**

```js
function mean(array) {
  if (array.length != 0) {
    return array.reduce((a, b) => a + b) / array.length;
  }
}
```
