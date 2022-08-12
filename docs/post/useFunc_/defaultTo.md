```js
_.defaultTo(value, defaultValue);
```

检查 value，以确定一个默认值是否应被返回。如果 value 为 NaN, null, 或者 undefined，那么返回 defaultValue 默认值。

**_添加版本_**

4.14.0

**_参数_**

value (_): 要检查的值。
defaultValue (_): 默认值。
**_返回_**

(\*): 返回 resolved 值。

**_例子_**

```js
_.defaultTo(1, 10);
// => 1

_.defaultTo(undefined, 10);
// => 10
```

**_源码实现_**

```js
//判断是否为NaN,value !== value
function defaultTo(value, defaultValue) {
  return value == null || value !== value ? defaultValue : value;
}
```

**_简单模拟实现_**

```js
function defaultTo(value, defaultValue) {
  return value === undefined || value === null || isNaN(value)
    ? defaultValue
    : value;
}
```
