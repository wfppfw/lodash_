```js
_.isBoolean(value);
```

检查 value 是否是原始 boolean 类型或者对象。

**_添加版本_**

0.1.0

**_参数_**

value (\*): 要检查的值。

**_返回_**

(boolean): 如果 value 是一个布尔值，那么返回 true，否则返回 false。

**_例子_**

```js
_.isBoolean(false);
// => true

_.isBoolean(null);
// => false
```

**_源码实现_**

```js
function isBoolean(value) {
  //判断原始值false true 布尔对象
  return (
    value === true ||
    value === false ||
    (isObjectLike(value) && baseGetTag(value) == boolTag)
  );
}

module.exports = isBoolean;
```

**_简单模拟实现_**

```js
function isBoolean(value) {
  return value === true || value === false || value instanceof Boolean;
}
```
