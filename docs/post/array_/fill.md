```
_.fill(array, value, [start=0], [end=array.length])
```

使用 value 值来填充（替换） array，从 start 位置开始, 到 end 位置结束（但不包含 end 位置）。

Note: 这个方法会改变 array（注：不是创建新数组）。

**_引入版本_**
3.2.0

**_参数_**
array (Array): 要填充改变的数组。
value (\*): 填充给 array 的值。
[start=0] (number): 开始位置（默认 0）。
[end=array.length] (number):结束位置（默认 array.length）。
**_返回值_**
(Array): 返回 array。

**_例子_**

```js
var array = [1, 2, 3];

_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']

_.fill(Array(3), 2);
// => [2, 2, 2]

_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
```

**_源码实现_**

```js
function fill(array, value, start, end) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  if (
    start &&
    typeof start != 'number' &&
    isIterateeCall(array, value, start)
  ) {
    start = 0;
    end = length;
  }
  return baseFill(array, value, start, end);
}

module.exports = fill;

//baseFill
function baseFill(array, value, start, end) {
  var length = array.length;

  start = toInteger(start);
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end === undefined || end > length ? length : toInteger(end);
  if (end < 0) {
    end += length;
  }
  end = start > end ? 0 : toLength(end);
  while (start < end) {
    array[start++] = value;
  }
  return array;
}

module.exports = baseFill;
```

**_简单模拟实现_**

```js
function fill(array, value, start, end) {
  // 处理start,end,这里处理边界值看抄源码，没有考虑输入非数字问题,重点是边界确定
  let len = array.length;
  if (start < 0) {
    start = -start > len ? 0 : len + start;
  }
  if (start === undefined) {
    start = 0;
  }
  end = end === undefined || end > len ? len : parseInt(end);
  if (end < 0) {
    end += len;
  }
  end = start > end ? 0 : end;
  //循环替换,边界左闭右开
  while (start < end) {
    array[start++] = value;
  }
  return array;
}

console.log(fill([1, 2, 3, 4, 5], 6, 1, 3)); //[ 1, 6, 6, 4, 5 ]
```
