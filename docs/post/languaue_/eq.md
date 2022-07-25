```
_.eq(value, other)
```

执行 SameValueZero 比较两者的值，来确定它们是否相等。

**_添加版本_**
4.0.0

**_参数_**
value (_): 要比较的值。
other (_): 另一个要比较的值。

**_返回_**
(boolean): 如果两个值相等返回 true ，否则返回 false 。

**_例子_**

```js
var object = { a: 1 };
var other = { a: 1 };

_.eq(object, object);
// => true

_.eq(object, other);
// => false

_.eq('a', 'a');
// => true

_.eq('a', Object('a'));
// => false

_.eq(NaN, NaN);
// => true
```

**_源码实现_**

```js
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;
```

`value === other` 判断除了 NaN 的情况，`(value !== value && other !== other)`判断两个是否都是 NaN

**_简单模拟实现_**

```js
function eq(value, other) {
  return Object.is(value, other) || value === other;
}
```

Object.is()采用的是 SameValue，与 SameValueZero 不同的是 0 和-0 不相等，而在 SameValueZero 里 0 和-0 和+0 都是相等的，当出现特例时到第二个条件判断 0===-0;
没有测试太多，应该没问题吧哈哈哈。
