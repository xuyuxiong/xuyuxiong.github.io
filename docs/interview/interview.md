# 面试知识点
## 预编译
发生在函数执行前一刻 解决执行顺序的问题 导致函数声明提升 变量声明提升
1. 创建AO(Activation Object)对象 (执行期上下文)
2. 找形参和变量声明，将变量声明和形参作为AO对象的属性名，值为undefined
3. 将实参值和形参统一
4. 在函数体里面找函数声明，值赋予函数体
## 作用域 [[scope]]
每个函数都是一个对象 对象上有些属性仅供引擎存取 [[scope]]就是我们所说的作用域，其中存储了运行期上下文
作用域就是代码的执行环境，全局执行环境就是全局作用域，函数的执行环境就是私有作用域，它们都是栈内存。
## 作用域链 
作用域呈链式连接 函数被定义时产生GO 函数执行时产生AO并放到GO的前面
当代码在一个环境中执行时，会创建变量对象的一个作用域链
内部环境可以通过作用域链访问所有外部环境，但外部环境不能访问内部环境的任何变量和函数。
## 闭包
当内部函数被保存到外部时,将会生成闭包。闭包会导致原有作用域链不释放，造成内存泄漏
#### 闭包的底层原理
代码的编译和执行是通过v8引擎在执行上下文中完成的
- 执行上下文(一共3种)
1. 全局执行上下文
2. 函数执行上下文
3. eval执行上下文
- 执行上下文分为两个阶段
    - 创建阶段
        创建词法环境
        生产变量对象(VO),建立作用域链
        确认this指向 绑定this
    - 执行阶段
        变量赋值->函数引用->执行其他代码->执行完毕后出栈等待被回收
        变量对象变为活动对象
        该阶段会进行变量赋值，函数引用并执行其他代码
        
什么是变量对象
js引擎在内存中建立的对象，用来存放当前执行环境的变量
- 变量对象的创建分为三个过程
1. 创建arguments对象（根据实参和形参放入arguments对象中）
2. 当遇到同名的函数时，后面的会覆盖前面的
3. 检查当前环境的变量声明并赋值为undefined

什么是词法作用域？
如果在函数执行上下文中找不到变量，它将在调用上下文中寻找它，如果在它的调用上下文中没有找到，就一直往上一级，直到它在全局执行上下文中查找为止

## typeof运算符
typeof undefined // undefined
typeof 'abc' // string
typeof 123 // number
typeof true // boolean
typeof {} // object
typeof [] // object
typeof null // object
typeof console.log // function
## 变量计算 - 强制类型转换
- 字符串拼接
var b = a + '11'
- == 运算符
null == undefined // true
- 逻辑运算符
console.log(10 & 0) // 0

## CSS
- CSS样式优先级
权重的计算
- 雪碧图的作用
减少HTTP的请求
某些情况下可以减小图片大小
- 自定义字体的使用场景
宣传/品牌/banner等固定文案
字体图标
- 伪类和伪元素的区别
伪类表示状态(:active :focus :link :hover :visited)
伪元素是真的有元素(::first-letter ::first-line ::before ::after)
- 如何美化checkbox
label[for]和id
隐藏元素input
:checked + label
- 实现两栏(三栏)布局的方法
1.表格布局 2.float + margin布局 3.inline-block布局 4.flexbox布局
- display:inline-block的间距
原因: 字符间距
解决: 消灭字符或消灭间距
如何适配移动端页面
首先要设置viewport
rem/viewport/media query 
设计上: 隐藏 折行 自适应
- 动画有几种
过渡动画 transition
关键帧动画 animation
- 过渡动画和关键帧动画的区别
过渡动画需要有状态变化 关键帧动画不需要状态变化
关键帧动画能控制更精细
- 预处理器的作用
更好的组织CSS代码
提高代码复用率
提升可维护性
- PostCSS 
本身只有解析CSS文件的能力,必须依靠插件
import 模块合并
autoprefixier 自动加前缀
cssnano 压缩代码
cssnext 使用CSS新特性
precss 变量 mixin 循环等

## ES6
- 模块化的使用和编译环境
- class与构造函数的区别
- Promise的用法
- ES6其他常用功能

## 异步
- 什么是单线程,和异步有何关系
- 什么是event-loop
- 目前JS解决异步的方案有哪些
- Promise的标准
- async/await的使用

## 原型
- 原型如何实际应用
- 原型如何满足拓展

## vdom
- 什么是vdom 为何要用vdom
- vdom如何使用 核心函数有哪些
- 了解diff算法吗

## MVVM
- 如何理解MVVM
- vue如何实现响应式
- vue如何解析模板
- 介绍vue的实现流程

## 组件化
- 对组件化的理解
- jSX是什么
- jsx和vdom什么关系
- 简述React的setState
- 阐述自己如何比较React和vue

## hybrid
- hybrid是什么 为什么要用hybrid
- hybrid如何更新上线
- hybrid和h5有何区别
- JS如何与客户端通信
