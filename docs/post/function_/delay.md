```js
_.delay(func, wait, [args]);
```

延迟 wait 毫秒后调用 func。 调用时，任何附加的参数会传给 func。

**_添加版本_**
0.1.0

**_参数_**
func (Function): 要延迟的函数。
wait (number): 要延迟的毫秒数。
[args] (...\*): 会在调用时传入到 func 的参数。

**_返回_**
(number): 返回计时器 id

**_例子_**

```js
_.delay(
  function (text) {
    console.log(text);
  },
  1000,
  'later'
);
// => 一秒后输出 'later'。
```

**_源码实现_**

```js
var delay = baseRest(function (func, wait, args) {
  return baseDelay(func, toNumber(wait) || 0, args);
});

module.exports = delay;

//
function baseDelay(func, wait, args) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return setTimeout(function () {
    func.apply(undefined, args);
  }, wait);
}
```

**_简单模拟实现_**

```js
function delay(func, wait, ...args) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  //返回定时器
  return setTimeout(function () {
    func.apply(undefined, args);
  }, wait);
}
```
