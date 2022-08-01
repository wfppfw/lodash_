```js
_.head(array);
```

获取数组 array 的第一个元素。

**_引入版本_**
0.1.0

**_别名_**
\_.first

**_参数_**
array (Array): 要查询的数组。
**_返回值_**
(\*): 返回数组 array 的第一个元素。

**_例子_**

```js
_.head([1, 2, 3]);
// => 1

_.head([]);
// => undefined
```

**_源码实现_**

```js
function head(array) {
  return array && array.length ? array[0] : undefined;
}

module.exports = head;
```

**_简单模拟实现_**

```js
//返回数组第一个
function head(array) {
  return Array.isArray(array) && array.length !== 0 ? array[0] : undefined;
}
```
