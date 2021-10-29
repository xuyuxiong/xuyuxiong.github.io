# ECMAScript 6 基础

## ECMAScript 6 简介
- JavaScript 三大组成部分
    - ECMAScript 
    - DOM
    - BOM 
- ECMAScript 发展历史 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_Resources
- ECMAScript 包含内容：JS 中的数据类型及相关操作，流程控制，运算符及相关运算……

## ECMAScript 6 
- let 和 const
    let
    不存在变量提升 暂时性死区 不允许重复声明
    块级作用域 为什么需要块级作用域
    内层变量可能会覆盖外层变量
    计数的循环变量泄露为全局变量
    const
    需要区分简单类型和复合类型
    let const class声明的变量不属于顶层对象的属性
    - let 和 var 的差异
        - let 允许声明一个在作用域限制在块级中的变量、语句或者表达式
            - 块级作用域 {}
        - var 声明的变量只能是全局或者整个函数块的
        - let 不能重复声明
        - let 不会被预解析
        - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let
    - const 常量
        - 常量不能重新赋值
        - 不能重复声明
        - 块级作用域
        - const 不会被预解析
        - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const
- 解构赋值
    - 对象的解构赋值
    - 数组的解构赋值
    - 字符串的解构赋值
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
- 展开运算符
    - 对象展开
    - 数组展开
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax
- Set 对象    
    - new Set([])
    - Set 对象的数据结构
    - Set 相关属性与方法
        - size 属性
        - clear()、delete()、has()、add()    
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set
    
- Map 对象
    - new Map()
    - Map 对象的数据结构
    - Map 相关属性与方法
    - size 属性
    - clear()、delete()、get()、has()、set()
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map
- 函数新增扩展
    - 箭头函数
        - 箭头函数的各种写法
        - 箭头函数的 this 问题
        - 箭头函数的不定参问题
        - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    - rest 参数设置
    - 参数默认值设置
- 新增数组扩展
    - Array.from()、Array.of() 
    - find()、findIndex()、includes()
    - flat()、flatMap()
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    #### Array.from
    Array Array.from(arrayLike[, mapFn[, thisArg]]) 将类数组转换成数组

    参数：
        arrayLike 类数组

    可选参数:    
        mapFn 类似 map 方法，循环类数组时的回函函数，返回值组成新数组
        thisArg mapFn 函数执行时的 this 指向

    返回值
        根据 arrayLike 生成的新数组


    #### Array.isArray

    Boolean Array.isArray(data) 检测数据是否是个数组

    参数：
        data 要检测的数据

    返回值:
        true 数组，false 非数组


    #### Array.of

    Array Array.of(element0[, element1[, ...[, elementN]]]) 将参数转成一个数组

    参数：
        elementN 要放入数组中的数据

    返回值：   
        新数组


    #### arr.find
    Value arr.find(callback[, thisArg]) 查找数组中满足要求的第一个元素的值

    参数：
        callback
            在数组每一项上执行的函数，接收 3 个参数：
                element
                    当前遍历到的元素。
                index[可选]
                    当前遍历到的索引。
                array[可选]
                    数组本身

    可选参数               
        thisArg
            执行回调时用作this 的对象
    返回值
        数组中第一个满足所提供测试函数的元素的值，否则返回 undefined


    #### arr.findIndex
    Index arr.findIndex(callback[, thisArg]) 查找数组中满足要求的第一个元素的值的索引

    参数:
        callback
            针对数组中的每个元素, 都会执行该回调函数, 执行时会自动传入下面三个参数:
            element
                当前元素。
            index
                当前元素的索引。
            array
                调用findIndex的数组。
    可选参数：            
        thisArg
            执行callback时作为this对象的值

    返回值：
        满足要求的值的索引

    #### arr.flat
    Array arr.flat([depth]) 扁平化多维数组

    可选参数：
        depth
            指定要提取嵌套数组的结构深度，默认值为 1。

    返回值：
        一个包含将数组与子数组中所有元素的新数组

    #### arr.flatMap
    Array arr.flatMap(function callback(currentValue[, index[, array]]) {
        // 返回新数组的元素
    }[, thisArg])  方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 和 深度值1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些

    参数：
        callback
            可以生成一个新数组中的元素的函数，可以传入三个参数：
            currentValue
                当前正在数组中处理的元素
            index可选
                可选的。数组中正在处理的当前元素的索引。
            array可选
                可选的。被调用的 map 数组
    可选参数：
        thisArg
            执行 callback 函数时 使用的this 值
    返回值：
        一个包含将数组与子数组中所有元素的新数组


    #### arr.fill 

    Array arr.fill(value[, start[, end]]); 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引

    参数：
        用来填充数组元素的值。
    可选参数：
        start 
            起始索引，默认值为0。
        end 
            终止索引，默认值为 arr.length    

    #### arr.includes

    Boolean arr.includes(valueToFind[, fromIndex]) 判断数组中是否包含一个指定的值

    参数：
        valueToFind 需要查找的值

    可选参数：
        从 fromIndex 处开始向后查找  

    返回值：
        true 代表数组中包含 valueToFind， false 代表数组中不包含 fromIndex
- 新增字符串扩展
    - includes(), startsWith(), endsWith()
    - repeat()
    - 模版字符串   
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String
    #### str.includes
    Boolean str.includes(valueToFind[, fromIndex]) 判断字符串是否包含一个指定的值
    详细： 参考数组的 includes

    #### str.endsWith
    Boolean str.endsWith(searchString[, length]) 判断当前字符串是否是以另外一个给定的子字符串“结尾”

    参数
        searchString
            要搜索的子字符串。
    可选参数
        length
            作为 str 的长度。默认值为 str.length
    返回值
        如果传入的子字符串在搜索字符串的末尾则返回true；否则将返回 false。

    #### str.startsWith
    Boolean str.startsWith(searchString[, position]) 判断当前字符串是否以另外一个给定的子字符串开头

    参数
        searchString
            要搜索的子字符串。
    可选参数
        position
            在 str 中搜索 searchString 的开始位置，默认值为 0，也就是真正的字符串开头处。
    返回值
        如果传入的子字符串在搜索字符串的开始则返回true；否则将返回 false。

    #### str.repeat

    String str.repeat(count) 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本

    参数
        count
            介于0和正无穷大之间的整数。表示在新构造的字符串中重复了多少遍原字符串

    返回值
        生成的新字符串

    #### 模板字符串
    模板字面量 是允许嵌入表达式的字符串字面量。你可以使用多行字符串和字符串插值功能。它们在ES2015规范的先前版本中被称为“模板字符串”。 
- 新增对象扩展
    - 属性简洁表示法
    - 属性名表达式
    - 方法简写
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object
    #### Object.assign
    Object Object.assign(target, ...sources) 将所有可枚举属性的值从一个或多个源对象复制到目标对象

    参数:
        target
            目标对象
        sources
            源对象
    返回值：
        目标对象
    #### Object.is
    Boolean Object.is(value1, value2) 判断两个值是否是相同的值。 

    规则：
        两个值都是 undefined
        两个值都是 null
        两个值都是 true 或者都是 false
        两个值是由相同个数的字符按照相同的顺序组成的字符串
        两个值指向同一个对象
        两个值都是数字并且
            都是正零 +0
            都是负零 -0
            都是 NaN
- babel 使用
    - Babel 是一个 JavaScript 编译器
    - 手册地址：https://www.babeljs.cn/
    - Babel 基本是否方法

### 同步和异步
同步和异步是一种消息通知机制
- 同步：A调用B，B处理获得结果，才返回给A。A在这
个过程中，一直等待B的处理结果，没有拿到结果之前，需要A（调用者）一直等待和确认调用结果是否返回，拿到结果,然后继续往下执行。
在 JS 中，正常的代码执行，全部走的都是同步模式,必须拿到一行的执行结果，再去走下一行

```js
  alert(1);
  fn2();
  function fn2(){
      console.log(2);
  }
```


- 异步：A调用B，无需等待B的结果。
调用结果返回时， 会以消息或回调的方式通知调用者

在 JS 中，定时器，动画帧 这些操作，都是异步操作，所以是在 回调函数中 处理执行后的内容

```js
setTimeout(()=>{
    console.log(1);
},100);    
fn2();
function fn2(){
    console.log(2);
}
```
### 回调地狱
- 最早我们处理异步消息通知，都是通过回调来处理的，
但是回调多了，代码的结构就必然嵌套层级特别多，
造成可读性和维护性的直线下降 - 这就是回调地狱

### Promise 对象
ES6的Promise对象是一个构造函数，用来生成Promise实例。
所谓Promise对象，就是代表了未来某个将要发生的事件（通常是一个异步操作）。
它的好处在于，有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数

#### Promise 基本语法

new Promise(function(resolve,reject){

})

#### Promise 内部状态
- Pending 在等待(异步执行中)
- Fulfilled(标准)||Resolved 执行成功 - 调用resolve之后改变
- Rejected 执行失败 - 调用 reject 之后改变
#### then
   
promise.then(onFulfilled,onRejected) 

参数：
    onFulfilled
        当Promise变成接受状态（fulfillment）时，该参数作为回调函数被调用（参考： Function）。该函数有一个参数，即接受的最终结果（the fulfillment  value）。如果传入的 onFulfilled 参数类型不是函数，则会在内部被替换为(x) => x ，即原样返回 promise 最终结果的函数

    onRejected
        当Promise变成拒绝状态（rejection ）时，该参数作为回调函数被调用（参考： Function）。该函数有一个参数,，即拒绝的原因（the rejection reason）。

返回值：
    当一个Promise完成（fulfilled）或者失败（rejected），返回函数将被异步调用（由当前的线程循环来调度完成）。具体的返回值依据以下规则返回：

    - 如果then中的回调函数返回一个值，那么then返回的Promise将会成为接受状态，并且将返回的值作为接受状态的回调函数的参数值。
    - 如果then中的回调函数没有返回值，那么then返回的Promise将会成为接受状态，并且该接受状态的回调函数的参数值为 undefined。
    - 如果then中的回调函数抛出一个错误，那么then返回的Promise将会成为拒绝状态，并且将抛出的错误作为拒绝状态的回调函数的参数值。
    - 如果then中的回调函数返回一个已经是接受状态的Promise，那么then返回的Promise也会成为接受状态，并且将那个Promise的接受状态的回调函数的参数值作为该被返回的Promise的接受状态回调函数的参数值。
    - 如果then中的回调函数返回一个已经是拒绝状态的Promise，那么then返回的Promise也会成为拒绝状态，并且将那个Promise的拒绝状态的回调函数的参数值作为该被返回的Promise的拒绝状态回调函数的参数值。
    - 如果then中的回调函数返回一个未定状态（pending）的Promise，那么then返回Promise的状态也是未定的，并且它的终态与那个Promise的终态相同；同时，它变为终态时调用的回调函数参数与那个Promise变为终态时的回调函数的参数是相同的。

#### Promise.reject
Promise.reject(reason) 返回一个状态为 Rejected 的 Promise 对象

参数：
    reason 失败原因

#### Promise​.resolve
Promise.resolve(value) 返回一个状态为 resolved 的 Promise 对象

参数：
    value  将被Promise对象解析的参数


#### Promise.catch
	捕获前一个promise抛出的错误

#### Promise.all

    Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例，当所有Promise都成功的时候，整个Promise.all才成功

#### Promise.race
    与Promise.race方法类似将多个promise包装成一个新的promise实例
    但是其中有一项的状态发生改变新的实例的状态就会随着改变


### async函数
只要函数名之前加上async关键字，就表明该函数内部有异步操作。
该异步操作应该返回一个Promise对象，前面用await关键字注明。
当函数执行的时候，一旦遇到await就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句

### es6模块化

- 浏览器默认模块化  script 里加入 "type=module"；
- 导出  关键字  export 依赖前置(前置依赖)
  - 导出 方式一  ：
    ```js
    export { a ,b , c}
    ```
  - 导出方式二 关键字  "as"
    ```js
    export { a as aa ,b , c}
    ```
  - 导出方式三
    ```js
    export let c = ()=>{console.log("I am c function...")}
    ```
  - 导出方式四
    ```js
    export default a;
    ```
    - 等同
      ```js
      export {a as default};
      ```
  - export  可以导出多个，export default  只能导出一个；
- 导入方式：关键字 import
  - export导出的,命名要保持一致
    ```js
    import {aa , b , c} from './moduleb.js';
    ```
  - export导出的，命名可以自定义；
    ```js
    import myfn from './moduleb.js';
    ```
  - 通配符 "*"方式导入
    ```js
    import * as obj from './moduleb.js';
    ```
-  按需导入（延迟导入）
​	import 方法；

```js
document.onclick =async function(){
    // import {fn1} from  './fn.js';
    let res = await import("./fn.js");
    console.log(res);
}
```
### 模块化优点

- 防止作用域污染 
- 提高代码的复用性
- 维护成本降低