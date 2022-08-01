```js
_.isArray(value);
```

检查 value 是否是 Array 类对象。

**_添加版本_**

0.1.0

**_参数_**

value (\*): 要检查的值。

**_返回_**

(boolean): 如果 value 是一个数组返回 true，否则返回 false。

**_例子_**

```js
_.isArray([1, 2, 3]);
// => true

_.isArray(document.body.children);
// => false

_.isArray('abc');
// => false

_.isArray(_.noop);
// => false
```

**_源码实现_**

```js
var isArray = Array.isArray;

module.exports = isArray;
```

**_简单模拟实现_**

```js
function isArray(array) {
  //判断是否为数组，
  // a.constructor.toString().indexOf("Array") !== -1;
  // Object.prototype.toString.call(a).indexOf("Array")
  return array instanceof Array;
}
```
