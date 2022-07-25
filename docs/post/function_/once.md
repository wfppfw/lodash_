```
_.once(func)
```

创建一个只能调用 func 一次的函数。 重复调用返回第一次调用的结果。 func 调用时， this 绑定到创建的函数，并传入对应参数。

**_添加版本_**
0.1.0

**_参数_**
func (Function): 指定的触发的函数。
**_返回_**
(Function): 返回新的受限函数。

**_例子_**

```js
var initialize = _.once(createApplication);
initialize();
initialize();
```

**_源码实现_**

```js
function once(func) {
  return before(2, func);
}

module.exports = once;
```

```js
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function () {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

module.exports = before;
```

**_简单模拟实现_**

```js
function once(func) {
  let flag = true;
  return function () {
    if (flag) {
      func.apply(this, arguments);
      flag = false;
      func = null;
    }
  };
}
```
