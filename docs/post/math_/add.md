```
_.add(augend, addend)
```

两个数相加。

**_添加版本_**
3.4.0

**_参数_**
augend (number): 相加的第一个数。
addend (number): 相加的第二个数。
**_返回_**
(number): 返回总和。

**_例子_**

```js
_.add(6, 4);
// => 10
```

**_源码实现_**

```js
var add = createMathOperation(function (augend, addend) {
  return augend + addend;
}, 0);

module.exports = add;
```

源代码这里处理 createMathOperation 主要是处理参数和默认值

```js
function createMathOperation(operator, defaultValue) {
  return function (value, other) {
    var result;
    if (value === undefined && other === undefined) {
      return defaultValue;
    }
    if (value !== undefined) {
      result = value;
    }
    if (other !== undefined) {
      if (result === undefined) {
        return other;
      }
      if (typeof value == 'string' || typeof other == 'string') {
        value = baseToString(value);
        other = baseToString(other);
      } else {
        value = baseToNumber(value);
        other = baseToNumber(other);
      }
      result = operator(value, other);
    }
    return result;
  };
}

module.exports = createMathOperation;
```

**_简单模拟实现_**

```js
function add(a, b) {
  return a + b;
}
```
