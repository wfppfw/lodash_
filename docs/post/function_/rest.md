```js
_.rest(func, [(start = func.length - 1)]);
```

创建一个函数，调用 func 时，this 绑定到创建的新函数，并且 start 之后的参数作为数组传入。

Note: 这个方法基于 rest parameter。

**_添加版本_**

4.0.0

**_参数_**

func (Function): 要应用的函数。
[start=func.length-1] (number): rest 参数的开始位置。

**_返回_**

(Function): 返回新的函数。

**_例子_**

```js
var say = _.rest(function (what, names) {
  return (
    what +
    ' ' +
    _.initial(names).join(', ') +
    (_.size(names) > 1 ? ', & ' : '') +
    _.last(names)
  );
});

say('hello', 'fred', 'barney', 'pebbles');
// => 'hello fred, barney, & pebbles'
```

**_源码实现_**

```js
function rest(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  start = start === undefined ? start : toInteger(start);
  return baseRest(func, start);
}

module.exports = rest;

//
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;

//
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
      index = -1,
      length = nativeMax(args.length - start, 0),
      array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;
```

**_简单模拟实现_**

```js
function rest(func, start) {
  if (typeof func !== 'function') {
    throw TypeError('Expected a function');
  }
  return function (...values) {
    if (!start) {
      start = values.length;
    }
    start = Math.max(start > values.length ? values.length : start, 0);

    let array = values.slice(start);
    console.log(array);
    return func.apply(this, array);
  };
}
```
