```js
_.functions(object);
```

创建一个函数属性名称的数组，函数属性名称来自 object 对象自身可枚举属性。

**_添加版本_**

0.1.0

**_参数_**

object (Object): 要检查的对象。
**_返回_**

(Array): 返回函数名。

**_例子_**

```js
function Foo() {
  this.a = _.constant('a');
  this.b = _.constant('b');
}

Foo.prototype.c = _.constant('c');

_.functions(new Foo());
// => ['a', 'b']
```

**_源码实现_**

```js
function functions(object) {
  return object == null ? [] : baseFunctions(object, keys(object));
}

module.exports = functions;

//
function baseFunctions(object, props) {
  return arrayFilter(props, function (key) {
    return isFunction(object[key]);
  });
}

module.exports = baseFunctions;
//
```

//没完成，占个坑
