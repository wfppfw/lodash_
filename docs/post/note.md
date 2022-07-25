SameValueZero
js 相等比较算法
1.The Abstract Equality Comparison Algorithm (==)  
2.The Strict Equality Comparison Algorithm (===)  
3.SameValue (Object.is()) (附：这里 NaN 和 NaN 相等，0 和-0 不相等)
4.SameValueZero (暂未提供 API) (附：这里 NaN 和 NaN 相等，0 和-0 和+0 都是相等的)

- SameValueZero 算法和 SameValue 算法的区别在于对 0 的处理（认为 0、+0 以及-0 三者是相等的），其他的和 SameValue 一样
- includes()内部使用的比较算法就是 SameValueZero，new Set()比较是用的算法也是 SameValueZero（+0 和-0 和 0 都是相等的，NaN 和 NaN 也是相等的
