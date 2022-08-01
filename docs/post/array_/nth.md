```js
_.nth(array, [(n = 0)]);
```

获取 array 数组的第 n 个元素。如果 n 为负数，则返回从数组结尾开始的第 n 个元素。

**_引入版本_**
4.11.0

**_参数_**
array (Array): 要查询的数组。
[n=0] (number): 要返回元素的索引值。
**_返回值_**
(\*): 获取 array 数组的第 n 个元素。

**_例子_**

```js
var array = ['a', 'b', 'c', 'd'];

_.nth(array, 1);
// => 'b'

_.nth(array, -2);
// => 'c';
```

**_源码实现_**

```js
function nth(array, n) {
  return array && array.length ? baseNth(array, toInteger(n)) : undefined;
}

module.exports = nth;

//

function baseNth(array, n) {
  var length = array.length;
  if (!length) {
    return;
  }
  n += n < 0 ? length : 0;
  return isIndex(n, length) ? array[n] : undefined;
}

module.exports = baseNth;
```

**_简单模拟实现_**

```js
function nth(array, n) {
  if (Array.isArray(array, n) && array.length > 0) {
    if (n < 0) {
      return array[array.length + n];
    } else {
      if (n > array.length) {
        return undefined;
      } else {
        return array[n];
      }
    }
  }
}
```
