```
_.concat(array,[values])

```

创建一个新数组，将 array 与任何数组 或 值连接在一起。
**_引入版本_**
4.0.0

**_参数_**
array (Array): 被连接的数组。
[values] (...\*): 连接的值。
**_返回值_**
(Array): 返回连接后的新数组。

**_例子_**

```js
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
```

**_源码实现_**

```js
function concat() {
  var length = arguments.length;
  if (!length) {
    return [];
  }
  var args = Array(length - 1),
    array = arguments[0],
    index = length;

  while (index--) {
    args[index - 1] = arguments[index];
  }
  return arrayPush(
    isArray(array) ? copyArray(array) : [array],
    baseFlatten(args, 1)
  );
}

module.exports = concat;
```

这里如果是数组,扁平化一层，再合并.

**_简单模拟实现_**

```js
function concat(...restArray) {
  return [...restArray[0], ...restArray.slice(1).flat(1)];
}
```
