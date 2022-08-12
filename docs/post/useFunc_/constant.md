```js
_.constant(value);
```

创建一个返回 value 的函数。

**_添加版本_**

2.4.0

**_参数_**

value (\*): 要新函数返回的值。
**_返回_**

(Function): 返回新的常量函数。

**_例子_**

```js
var objects = _.times(2, _.constant({ a: 1 }));

console.log(objects);
// => [{ 'a': 1 }, { 'a': 1 }]

console.log(objects[0] === objects[1]);
// => true
```

**_源码实现_**

```js
function constant(value) {
  return function () {
    return value;
  };
}
```

**_简单模拟实现_**

```js
//额，源码挺简洁的哈，直接抄
function constant(value) {
  return function () {
    return value;
  };
}
```
