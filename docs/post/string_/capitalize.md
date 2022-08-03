```js
_.capitalize([(string = '')]);
```

转换字符串 string 首字母为大写，剩下为小写。

**_添加版本_**

3.0.0

**_参数_**

[string=''] (string): 要大写开头的字符串。
**_返回_**

(string): 返回大写开头的字符串。

**_例子_**

```js
_.capitalize('FRED');
// => 'Fred'
```

**_源码实现_**

```js
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

module.exports = capitalize;
//
```

**_简单模拟实现_**

```js
function capitalize(string) {
  return string ? string[0].toUpperCase() + string.slice(1).toLowerCase() : '';
}
```
