```js
_.noop();
```

这个方法返回 undefined。

**_添加版本_**  
2.3.0

**_例子_**

```js
_.times(2, _.noop);
// => [undefined, undefined]
```

**_源码实现_**

```js
function noop() {
  // No operation performed.
}

module.exports = noop;
```

**_简单模拟实现_**

```js
function noop() {
  // 没有return ,函数默认返回undefined
}
```
