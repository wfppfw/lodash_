#

![lodash](/images/lodash.png)

## 关于 lodash

Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库 (官网抄的，哈哈哈)

Lodash 通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单。 Lodash 的模块化方法 非常适用于：

- 遍历 array、object 和 string
- 对值进行操作和检测
- 创建符合功能的函数
  > Lodash 遵循 MIT 开源协议发布，并且支持最新的运行环境。 查看各个构件版本的区别并选择一个适合你的版本。

## 关于本文档

平时也有用到 lodash 库，主要是在准备面试过程中，准备手写防抖节流这些函数时，网上版本很多，想学一下 lodash 源码怎么写的，后来还是觉得，闲则无聊干脆有空一下学一下吧,不过吧，自己只是有空就写一下，所以可能文档还有挺多内容是空的，哈哈。这里和原文档没有什么区别，你可以理解为类似的一个镜像网站，我这里主要显示一下源码实现的原理，然后自己尝试一遍。

## 安装 lodash

浏览器环境:

```html
<script src="lodash.js"></script>
<!-- <script src="https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.js"></script> -->
<script>
  console.log(window._.head([1, 2, 3]));
</script>
```

通过 npm or yarn

```
npm i lodash
yarn add lodash
```

node.js

```js
// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');

// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');
```

> 注意：
> 如需在 Node.js < 6 的 REPL 环境中使用 Lodash，请安装 n\_。
