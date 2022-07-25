```
_.values(object)
```

创建 object 自身可枚举属性的值为数组。

注意: 注意: 非对象的值会强制转换为对象。

**_添加版本_**
0.1.0

**_参数_**
object (Object): 要检索的对象。
**_返回_**
(Array): 返回对象属性的值的数组。

**_例子_**

```js
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.values(new Foo());
// => [1, 2] (无法保证遍历的顺序)

_.values('hi');
// => ['h', 'i']
```

**_源码实现_**

```js

```

**_简单模拟实现_**

```js

```
