```js
_.repeat([(string = '')], [(n = 1)]);
```

重复 N 次给定字符串。

\***_添加版本_**

3.0.0

**_参数_**

[string=''] (string): 要重复的字符串。
[n=1] (number): 重复的次数。
**_返回_**

(string): 返回重复的字符串。

**_例子_**

```js
_.repeat('*', 3);
// => '***'

_.repeat('abc', 2);
// => 'abcabc'

_.repeat('abc', 0);
// => ''
```

**_源码实现_**

```js
do {
  if (n % 2) {
    result += string;
  }
  n = nativeFloor(n / 2);
  if (n) {
    string += string;
  }
} while (n);
```

**_简单模拟实现_**

```js
function repeat(string, num) {
  let res = '';
  for (let i = 0; i < num; i++) {
    res += string;
  }
  return res;
}
```
