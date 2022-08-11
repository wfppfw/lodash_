```js
_.inRange(number, [(start = 0)], end);
```

检查 n 是否在 start 与 end 之间，但不包括 end。 如果 end 没有指定，那么 start 设置为 0。 如果 start 大于 end，那么参数会交换以便支持负范围。

**_添加版本_**

3.3.0

**_参数_**

number (number): 要检查的值。
[start=0] (number): 开始范围。
end (number): 结束范围。
**_返回_**

(boolean): 如果 number 在范围内 ，那么返回 true，否则返回 false。

**_例子_**

```js
_.inRange(3, 2, 4);
// => true

_.inRange(4, 8);
// => true

_.inRange(4, 2);
// => false

_.inRange(2, 2);
// => false

_.inRange(1.2, 2);
// => true

_.inRange(5.2, 4);
// => false

_.inRange(-3, -2, -6);
// => true
```

**_源码实现_**

```js
function inRange(number, start, end) {
  start = toFinite(start);
  if (end === undefined) {
    end = start;
    start = 0;
  } else {
    end = toFinite(end);
  }
  number = toNumber(number);
  return baseInRange(number, start, end);
}

module.exports = inRange;
```

**_简单模拟实现_**

```js
function inRange(number, start, end) {
  if (!end) {
    end = start;
    start = 0;
  }
  if (start > end) {
    [start, end] = [end, start];
  }
  return number >= start && number < end;
}
```
