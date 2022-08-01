```js
_.sample(collection);
```

从 collection（集合）中获得一个随机元素。

**_添加版本_**
2.0.0

**_参数_**
collection (Array|Object): 要取样的集合。
**_返回_**
(\*): 返回随机元素。

**_例子_**

```js
_.sample([1, 2, 3, 4]);
// => 2
```

**_源码实现_**

```js
function sample(collection) {
  var func = isArray(collection) ? arraySample : baseSample;
  return func(collection);
}

module.exports = sample;

//

function arraySample(array) {
  var length = array.length;
  return length ? array[baseRandom(0, length - 1)] : undefined;
}

module.exports = arraySample;

//

function baseSample(collection) {
  return arraySample(values(collection));
}

module.exports = baseSample;
//
function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

module.exports = baseRandom;
```

**_简单模拟实现_**

```js
function sample(collection) {
  let len = collection.length;
  if (Array.isArray(collection)) {
    return len ? collection[Math.floor(Math.random() * len)] : undefined;
  }
  //如果是对象，将属性的值取出为数组集合
  if (typeof collection === 'object') {
    let objArray = Object.values(collection);
    console.log(objArray);
    return objArray.length === 0
      ? undefined
      : objArray[Math.floor(Math.random() * objArray.length)]; //同上数组处理
  }
}
```
