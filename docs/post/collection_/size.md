```
_.size(collection)
```

返回 collection（集合）的长度，如果集合是类数组或字符串，返回其 length ；如果集合是对象，返回其可枚举属性的个数。

**_添加版本_**
0.1.0

**_参数_**
collection (Array|Object): 要检查的集合
**_返回_**
(number): 返回集合的长度。

**_例子_**

```js
_.size([1, 2, 3]);
// => 3

_.size({ a: 1, b: 2 });
// => 2

_.size('pebbles');
// => 7
```

**_源码实现_**

```js
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike(collection)) {
    return isString(collection) ? stringSize(collection) : collection.length;
  }
  var tag = getTag(collection);
  if (tag == mapTag || tag == setTag) {
    return collection.size;
  }
  return baseKeys(collection).length;
}

module.exports = size;
```

源码这里分类处理，如果是字符串和数组直接取 length,如果是 map,set 取 size,对象取属性数目。
**_简单模拟实现_**

```js
function size_(collection) {
  //判断数组，字符串
  if (Array.isArray(collection) || typeof collection === 'string') {
    return collection.length;
  }
  if (collection instanceof Set || collection instanceof Map) {
    return collection.size;
  }
  if (collection instanceof Object) {
    let num = 0;
    for (let i in collection) {
      if (collection.hasOwnProperty(i)) {
        num++;
      }
    }
    return num;
  }
}
```

写得很简陋，哈哈哈，有人看到别笑我。
