```js
_.defer(func, [args]);
```

推迟调用 func，直到当前堆栈清理完毕。 调用时，任何附加的参数会传给 func。

**_添加版本_**

0.1.0

**_参数_**

func (Function): 要延迟的函数。
[args] (...\*): 会在调用时传给 func 的参数。
**_返回_**

(number):返回计时器 id。

**_例子_**

```js
_.defer(function (text) {
  console.log(text);
}, 'deferred');
// => 一毫秒或更久一些输出 'deferred'。
```

**_源码实现_**

```js
var defer = baseRest(function (func, args) {
  return baseDelay(func, 1, args);
});

module.exports = defer;
//

function baseDelay(func, wait, args) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return setTimeout(function () {
    func.apply(undefined, args);
  }, wait);
}

module.exports = baseDelay;
```

**_简单模拟实现_**

```js
function defer(func, ...arg) {
  if (typeof func !== 'function') {
    throw new TypeError('error');
  }
  return setTimeout(function () {
    func.apply(undefined, arg);
  }, 0);
}
```
