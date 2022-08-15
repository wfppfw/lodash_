```js
_.flip(func);
```

创建一个函数，调用 func 时候接收翻转的参数。

**_添加版本_**

4.0.0

**_参数_**

func (Function): 要翻转参数的函数。
**_返回_**

(Function): 返回新的函数。

**_例子_**

```js
var flipped = _.flip(function () {
  return _.toArray(arguments);
});

flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']
```

**_源码实现_**

```js
function flip(func) {
  return createWrap(func, WRAP_FLIP_FLAG);
}

module.exports = flip;
//createWrap源码太长了，后续补上
```

**_简单模拟实现_**

```js
function flip(func) {
  return function (...args) {
    func.apply(this, args.resver());
  };
}
```
