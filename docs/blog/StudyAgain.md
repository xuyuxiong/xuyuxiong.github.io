# 重学前端
## 明确你的前端学习路线与方法
- 首先是前端的基础知识
- 其次，技术上存在短板，就会导致前端开发者的上升通道不甚顺畅
- 除此之外，前端工程师也会面临技术发展问题带来的挑战
1. 第一个方法：建立知识架构(我们可以把它理解为知识的“目录”或者索引，它能够帮助我们把零散的知识组织起来，也能够帮助我们发现一些知识上的盲区)
2. 第二个方法：追本溯源
## 前端知识架构图
基础部分包含了 JavaScript 语言（模块一）、CSS 和 HTML（模块二）以及浏览器的实现原理和 API（模块三），这三个模块涵盖了一个前端工程师所需要掌握的全部知识
### JavaScript
![JavaScript](https://img.imgdb.cn/item/609287b6d1a9ae528fe2c1bc.jpg)
### HTML 和 CSS
![HTML 和 CSS](https://img.imgdb.cn/item/60928b2ad1a9ae528f001974.jpg)
1. 文档元信息：通常是出现在 head 标签中的元素，包含了描述文档自身的一些信息
2. 语义相关：扩展了纯文本，表达文章结构、不同语言要素的标签
3. 链接：提供到文档内和文档外的链接
4. 替换型标签：引入声音、图片、视频等外部元素替换自身的一类标签
5. 表单：用于填写和提交信息的一类标签
6. 表格：表头、表尾、单元格等表格的结构
### 浏览器的实现原理和 API
![浏览器](https://img.imgdb.cn/item/60928e29d1a9ae528f19f864.jpg)
### 前端工程实践
![前端工程实践](https://img.imgdb.cn/item/60928ef5d1a9ae528f2160c5.jpg)
## JavaScript类型：关于类型，有哪些你不知道的细节
### 类型
JavaScript 语言规定了 7 种语言类型 Undefine、Null、Boolean、String、Number、Symbol、Object
建议使用 void 0 来获取 undefined 值
以放心用 null 关键字来获取 null 值
String 有最大长度是 2^53 - 1
Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON 检查等式左右两边差的绝对值是否小于最小精度
### Object
Number、String 和 Boolean，三个构造器是两用的，当跟 new 搭配时，它们产生对象，当直接调用时，它们表示强制类型转换
Symbol 函数比较特殊，直接用 new 调用它会抛出错误，但它仍然是 Symbol 对象的构造器
### 类型转换
StringToNumber (多数情况下，Number 是比 parseInt 和 parseFloat 更好的选择)
NumberToString
### 装箱转换
所谓装箱转换，正是把基本类型转换为对应的对象
一个 Symbol 对象，我们可以利用一个函数的 call 方法来强迫产生装箱
```js
var symbolObject = (function(){ return this; }).call(Symbol("a"))
```
Object.prototype.toString 是可以准确识别对象对应的基本类型的方法，它比 instanceof 更加准确
所谓装箱转换，正是把基本类型转换为对应的对象，它是类型转换中一种相当重要的种类
### 拆箱转换
对象类型到基本类型的转换
拆箱转换会尝试调用 valueOf 和 toString 来获得拆箱后的基本类型。如果 valueOf 和 toString 都不存在，或者没有返回基本类型，则会产生类型错误 TypeErro
## 面向对象还是基于对象
JavaScript 标准对基于对象的定义，这个定义的具体内容是：“语言和宿主的基础设施由对象来提供，并且 JavaScript 程序即是一系列互相通讯的对象集合”。
### JavaScript 对象的特征
- 对象具有唯一标识性：即使完全相同的两个对象，也并非同一个对象。
- 对象有状态：对象具有状态，同一对象可能处于不同状态之下。
- 对象具有行为：即对象的状态，可能因为它的行为产生变迁。
在实现了对象基本特征的基础上, 我认为，JavaScript 中对象独有的特色是：对象具有高度的动态性，这是因为 JavaScript 赋予了使用者在运行时为对象添改状态和行为的能力。
### JavaScript 对象的两类属性
第一类属性，数据属性。它比较接近于其它语言的属性概念。数据属性具有四个特征。
- value：就是属性的值。
- writable：决定属性能否被赋值。
- enumerable：决定 for in 能否枚举该属性。
- configurable：决定该属性能否被删除或者改变特征值。
第二类属性是访问器（getter/setter）属性，它也有四个特征
- getter：函数或 undefined，在取属性值时被调用。
- setter：函数或 undefined，在设置属性值时被调用。
- enumerable：决定 for in 能否枚举该属性。
- configurable：决定该属性能否被删除或者改变特征值。
如果我们要想改变属性的特征，或者定义访问器属性，我们可以使用 Object.defineProperty
JavaScript 提供了完全运行时的对象系统，这使得它可以模仿多数面向对象编程范式（两种面向对象编程的范式：基于类和基于原型），所以它也是正统的面向对象语言
## 你知道全部的对象分类吗
- 宿主对象（host Objects）：由 JavaScript 宿主环境提供的对象，它们的行为完全由宿主环境决定。
全局对象 window 上的属性，一部分来自 JavaScript 语言，一部分来自浏览器环境。
宿主对象也分为固有的和用户可创建的两种，比如 document.createElement 就可以创建一些 DOM 对象。
- 内置对象（Built-in Objects）：由 JavaScript 语言提供的对象。
1. 固有对象（Intrinsic Objects ）：由标准规定，随着 JavaScript 运行时创建而自动创建的对象实例。
固有对象在任何 JavaScript 代码执行前就已经被创建出来了，它们通常扮演者类似基础库的角色。
ECMA 标准为我们提供了一份固有对象表，里面含有 150+ 个固有对象。
2. 原生对象（Native Objects）：可以由用户通过 Array、RegExp 等内置构造器或者特殊语法创建的对象。
JavaScript 标准中，提供了 30 多个构造器。按照我的理解，按照不同应用场景，我把原生对象分成了以下几个种类。
![原生对象](https://pic.imgdb.cn/item/60b30ea008f74bc1595af795.jpg)
几乎所有这些构造器的能力都是无法用纯 JavaScript 代码实现的，它们也无法用 class/extend 语法来继承。
函数对象的定义是：具有[[call]]私有字段的对象，构造器对象的定义是：具有私有字段[[construct]]的对象。
3. 普通对象（Ordinary Objects）：由{}语法、Object 构造器或者 class 关键字定义类创建的对象，它能够被原型继承。
## JavaScript执行(一)：Promise里的代码为什么比setTimeout先执行
采纳 JSC 引擎的术语，我们把宿主发起的任务称为宏观任务，把 JavaScript 引擎发起的任务称为微观任务。
事件循环：宏观任务的队列就相当于事件循环。
在宏观任务中，JavaScript 的 Promise 还会产生异步代码，JavaScript 必须保证这些异步代码在一个宏观任务中完成，因此，每个宏观任务中又包含了一个微观任务队列
### Promise
Promise 是 JavaScript 语言提供的一种标准化的异步管理方式，它的总体思想是，需要进行 io、等待或者其它异步操作的函数，不返回真实结果，而返回一个“承诺”，函数的调用方可以在合适的时机，选择等待这个承诺兑现（通过 Promise 的 then 方法的回调）
## JavaScript执行(二)：闭包和执行上下文是怎么回事
### 闭包
闭包与普通函数的区别是，它携带了执行的环境
闭包包含两个部分：
1.环境部分：词法环境
2.表达式部分：函数体
### 执行上下文
JavaScript 标准把一段代码（包括函数），执行所需的所有信息定义为：“执行上下文”。
## JavaScript执行(二)：你知道现在有多少种函数吗？
第一种，普通函数：用 function 关键字定义的函数。
```js
function foo(){
    // code
}
```
第二种，箭头函数：用 => 运算符定义的函数。
```js
const foo = () => {
    // code
}
```
第三种，方法：在 class 中定义的函数。
```js
class C {
    foo(){
        //code
    }
}
```
第四种，生成器函数：用 function * 定义的函数。
```js
function* foo(){
    // code
}
```
第五种，类：用 class 定义的类，实际上也是函数
```js
class Foo {
    constructor(){
        //code
    }
}
```
第六 / 七 / 八种，异步函数：普通函数、箭头函数和生成器函数加上 async 关键字。
```js

async function foo(){
    // code
}
const foo = async () => {
    // code
}
async function foo*(){
    // code
}
```
这些函数并没有本质区别，都是遵循了“继承定义时环境”的规则，它们的一个行为差异在于 this 关键字
### this 关键字的行为
this 是执行上下文中很重要的一个组成部分。同一个函数调用方式不同，得到的 this 值也不同
调用函数时使用的引用，决定了函数执行时刻的 this 值。
## JavaScript执行（四）：try里面放return，finally还会执行吗？


## JavaScript词法：为什么12.toString会报错？