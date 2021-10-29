# 面试知识点
## HTML

## HTML5
- 语义化标签
header nav main article section aside footer
语义化的优点有:
1. 代码结构清晰，易于阅读，利于开发和维护
2. 方便其他设备解析（如屏幕阅读器）根据语义渲染网页。
3. 有利于搜索引擎优化（SEO），搜索引擎爬虫会根据不同的标签来赋予不同的权重

## CSS
- css 优先级是怎么计算的
第一优先级：!important 会覆盖页面内任何位置的元素样式
1. 内联样式，如 style="color: green"，权值为 1000
2. ID 选择器，如#app，权值为 0100
3. 类、伪类、属性选择器，如.foo, :first-child, div[class="foo"]，权值为 0010
4. 标签、伪元素选择器，如 div::first-line，权值为 0001
5. 通配符、子类选择器、兄弟选择器，如*, >, +，权值为 0000
6. 继承的样式没有权值
- position 有哪些值，作用分别是什么
1. static
static(没有定位)是 position 的默认值，元素处于正常的文档流中，会忽略 left、top、right、bottom 和 z-index 属性。
2. relative
relative(相对定位)是指给元素设置相对于原本位置的定位，元素并不脱离文档流，因此元素原本的位置会被保留，其他的元素位置不会受到影响。
使用场景：子元素相对于父元素进行定位
3. absolute
absolute(绝对定位)是指给元素设置绝对的定位，相对定位的对象可以分为两种情况：
设置了 absolute 的元素如果存在有祖先元素设置了 position 属性为 relative 或者 absolute，则这时元素的定位对象为此已设置 position 属性的祖先元素。
如果并没有设置了 position 属性的祖先元素，则此时相对于 body 进行定位。
使用场景：跟随图标 图标使用不依赖定位父级的 absolute 和 margin 属性进行定位，这样，当文本的字符个数改变时，图标的位置可以自适应
4. fixed
可以简单说 fixed 是特殊版的 absolute，fixed 元素总是相对于 body 定位的。
使用场景：侧边栏或者广告图
5. inherit
继承父元素的 position 属性，但需要注意的是 IE8 以及往前的版本都不支持 inherit 属性。
6. sticky
设置了 sticky 的元素，在屏幕范围（viewport）时该元素的位置并不受到定位影响（设置是 top、left 等属性无效），当该元素的位置将要移出偏移范围时，定位又会变成 fixed，根据设置的 left、top 等属性成固定位置的效果。
当元素在容器中被滚动超过指定的偏移值时，元素在容器内固定在指定位置。亦即如果你设置了 top: 50px，那么在 sticky 元素到达距离相对定位的元素顶部 50px 的位置时固定，不再向上移动（相当于此时 fixed 定位）。
使用场景：跟随窗口
- 垂直水平居中实现方式
[垂直水平居中实现方式](https://juejin.cn/post/6844903982960214029)
- css 怎么开启硬件加速(GPU 加速)
浏览器在处理下面的 css 的时候，会使用 GPU 渲染

transform（当 3D 变换的样式出现时会使用 GPU 加速）
opacity
filter
will-change
- 什么是重绘和回流
重绘：当我们对 DOM 的修改导致了样式的变化、却并未影响其几何属性（比如修改了颜色或背景色）时，浏览器不需重新计算元素的几何属性、直接为该元素绘制新的样式（跳过了上图所示的回流环节）。
回流：当我们对 DOM 的修改引发了 DOM 几何尺寸的变化（比如修改元素的宽、高或隐藏元素等）时，浏览器需要重新计算元素的几何属性（其他元素的几何属性和位置也会因此受到影响），然后再将计算的结果绘制出来。这个过程就是回流（也叫重排）
- 常见引起回流属性和方法
任何会改变元素几何信息(元素的位置和尺寸大小)的操作，都会触发回流，

添加或者删除可见的DOM元素；
元素尺寸改变——边距、填充、边框、宽度和高度
内容变化，比如用户在input框中输入文字
浏览器窗口尺寸改变——resize事件发生时
计算 offsetWidth 和 offsetHeight 属性
设置 style 属性的值
- 如何减少回流、重绘
1. 使用 transform 替代 top
2. 使用 visibility 替换 display: none ，因为前者只会引起重绘，后者会引发回流（改变了布局）
3. 不要把节点的属性值放在一个循环里当成循环里的变量。
4. 不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局
5. 动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 requestAnimationFrame
6. CSS 选择符从右往左匹配查找，避免节点层级过多
7. 将频繁重绘或者回流的节点设置为图层，图层能够阻止该节点的渲染行为影响别的节点。比如对于 video 标签来说，浏览器会自动将该节点变为图层

## CSS3
flex:1 是哪些属性组成的
flex 实际上是 flex-grow、flex-shrink 和 flex-basis 三个属性的缩写。
flex-grow：定义项目的的放大比例
flex-shrink：定义项目的缩小比例
flex-basis： 定义在分配多余空间之前，项目占据的主轴空

## JavaScript
- 举出闭包实际场景运用的例子
防抖节流
模拟块级作用域
在对象中创建私有变量
- 什么是事件代理（事件委托） 有什么好处
事件委托的原理：不给每个子节点单独设置事件监听器，而是设置在其父节点上，然后利用冒泡原理设置每个子节点。
优点：
1. 减少内存消耗和 dom 操作，提高性能。在 JavaScript 中，添加到页面上的事件处理程序数量将直接关系到页面的整体运行性能，因为需要不断的操作 dom,那么引起浏览器重绘和回流的可能也就越多，页面交互的事件也就变的越长，这也就是为什么要减少 dom 操作的原因。每一个事件处理函数，都是一个对象，多一个事件处理函数，内存中就会被多占用一部分空间。如果要用事件委托，就会将所有的操作放到 js 程序里面，只对它的父级进行操作，与 dom 的操作就只需要交互一次，这样就能大大的减少与 dom 的交互次数，提高性能；

2. 动态绑定事件 因为事件绑定在父级元素 所以新增的元素也能触发同样的事件
- addEventListener 默认是捕获还是冒泡
默认是冒泡
addEventListener第三个参数默认为 false 代表执行事件冒泡行为。
当为 true 时执行事件捕获行为
- apply call bind 区别

三者都可以改变函数的 this 对象指向。
三者第一个参数都是 this 要指向的对象，如果如果没有这个参数或参数为 undefined 或 null，则默认指向全局 window。
三者都可以传参，但是 apply 是数组，而 call 是参数列表，且 apply 和 call 是一次性传入参数，而 bind 可以分为多次传入。
bind 是返回绑定 this 之后的函数，便于稍后调用；apply 、call 则是立即执行 。
bind()会返回一个新的函数，如果这个返回的新的函数作为构造函数创建一个新的对象，那么此时 this 不再指向传入给 bind 的第一个参数，而是指向用 new 创建的实例
- 判断数据类型
typeof instanceof Object.prototype.toString.call()
- BOM

- DOM

## ES6

## TypeScript

## WebApp

## 小程序

## Vue.js
- Vue 组件通讯方式有哪些方法
1. props 和$emit 父组件向子组件传递数据是通过 prop 传递的，子组件传递数据给父组件是通过$emit 触发事件来做到的
2. $parent,$children 获取当前组件的父组件和当前组件的子组件
3. $attrs 和$listesners A->B->C。Vue 2.4 开始提供了$attrs 和$listeners 来解决这个问题
4. 父组件中通过 provide 来提供变量，然后在子组件中通过 inject 来注入变量。(官方不推荐在实际业务中使用，但是写组件库时很常用)
5. $refs 获取组件实例
6. envetBus 兄弟组件数据传递 这种情况下可以使用事件总线的方式
7. vuex 状态管理
- Vue 响应式原理
整体思路是数据劫持+观察者模式
对象内部通过 defineReactive 方法，使用 Object.defineProperty 将属性进行劫持（只会劫持已经存在的属性），数组则是通过重写数组方法来实现。当页面使用对应属性时，每个属性都拥有自己的 dep 属性，存放他所依赖的 watcher（依赖收集），当属性变化后会通知自己对应的 watcher 去更新(派发更新)
- Vue nextTick 原理
nextTick 中的回调是在下次 DOM 更新循环结束之后执行的延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。主要思路就是采用微任务优先的方式调用异步方法去执行 nextTick 包装的方法
- Vue diff 原理
[snabbdom](https://mp.weixin.qq.com/s?__biz=MzI0MTUxOTE5NQ==&mid=2247483825&idx=1&sn=e215b3530379f46f1a9c21232189d4e7&scene=21#wechat_redirect)
[diff 原理](https://juejin.cn/post/6953433215218483236)
- 路由原理 history 和 hash 两种路由方式的特点
1. hash 模式
location.hash 的值实际就是 URL 中#后面的东西 它的特点在于：hash 虽然出现 URL 中，但不会被包含在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。
可以为 hash 的改变添加监听事件
window.addEventListener("hashchange", funcRef, false);
每一次改变 hash（window.location.hash），都会在浏览器的访问历史中增加一个记录利用 hash 的以上特点，就可以来实现前端路由“更新视图但不重新请求页面”的功能了
特点：兼容性好但是不美观
2. history 模式
利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。
这两个方法应用于浏览器的历史记录站，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。这两个方法有个共同的特点：当调用他们修改浏览器历史记录栈后，虽然当前 URL 改变了，但浏览器不会刷新页面，这就为单页应用前端路由“更新视图但不重新请求页面”提供了基础。
特点：虽然美观，但是刷新会出现 404 需要后端进行配置

## React.js

## Babel
[Babel原理](https://juejin.cn/post/6844903760603398151#heading-1)

## 设计模式
- 常用设计模式有哪些并举例使用场景
1. 工厂模式 - 传入参数即可创建实例
虚拟 DOM 根据参数的不同返回基础标签的 Vnode 和组件 Vnode
2. 单例模式 - 整个程序有且仅有一个实例
vuex 和 vue-router 的插件注册方法 install 判断如果系统存在实例就直接返回掉
3. 发布-订阅模式 (vue 事件机制)
4. 观察者模式 (响应式数据原理)
5. 装饰模式: (@装饰器的用法)
6. 策略模式 策略模式指对象有某个行为,但是在不同的场景中,该行为有不同的实现方案-比如选项的合并策略

## Webpack
- webpack Plugin 和 Loader 的区别
Loader：
用于对模块源码的转换，loader 描述了 webpack 如何处理非 javascript 模块，并且在 buld 中引入这些依赖。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或者将内联图像转换为 data URL。比如说：CSS-Loader，Style-Loader 等。
Plugin
目的在于解决 loader 无法实现的其他事,它直接作用于 webpack，扩展了它的功能。在 webpack 运行的生命周期中会广播出许多事件，plugin 可以监听这些事件，在合适的时机通过 webpack 提供的 API 改变输出结果。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。
- Webpack 有哪些优化手段
[优化手段](https://juejin.cn/post/6844904093463347208)
- webpack编译原理
[编译原理](https://mp.weixin.qq.com/s?__biz=MzI0MTUxOTE5NQ==&mid=2247484030&idx=1&sn=d630d4b3995bbfd50f99e781074acfeb)

## HTTP
- 从输入一个 URL 地址到浏览器完成渲染的整个过程
浏览器地址栏输入 URL 并回车
浏览器查找当前 URL 是否存在缓存，并比较缓存是否过期
DNS 解析 URL 对应的 IP
根据 IP 建立 TCP 连接（三次握手）
发送 http 请求
服务器处理请求，浏览器接受 HTTP 响应
浏览器解析并渲染页面
关闭 TCP 连接（四次握手
- http 状态码 204 301 302 304 400 401 403 404 含义

http 状态码 204 （无内容） 服务器成功处理了请求，但没有返回任何内容
http 状态码 301 （永久移动） 请求的网页已永久移动到新位置。 服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置。
http 状态码 302 （临时移动） 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。
http 状态码 304 （未修改） 自从上次请求后，请求的网页未修改过。 服务器返回此响应时，不会返回网页内容。
http 状态码 400 （错误请求） 服务器不理解请求的语法（一般为参数错误）。
http 状态码 401 （未授权） 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。
http 状态码 403 （禁止） 服务器拒绝请求。（一般为客户端的用户权限不够）
http 状态码 404 （未找到） 服务器找不到请求的网页
- GET和POST区别
1.GET在浏览器回退不会再次请求，POST会再次提交请求
2.GET请求会被浏览器主动缓存，POST不会，要手动设置
3.GET请求参数会被完整保留在浏览器历史记录里，POST中的参数不会
4.GET请求在URL中传送的参数是有长度限制的，而POST没有限制
5.GET参数通过URL传递，POST放在Request body中
6.GET参数暴露在地址栏不安全，POST放在报文内部更安全
7.GET一般用于查询信息，POST一般用于提交某种信息进行某些修改操作
8.GET产生一个TCP数据包；POST产生两个TCP数据包
- Http和Https区别
1.`HTTP` 的URL 以http:// 开头，而HTTPS 的URL 以https:// 开头
2.`HTTP` 是不安全的，而 HTTPS 是安全的
3.`HTTP` 标准端口是80 ，而 HTTPS 的标准端口是443
4.`在OSI` 网络模型中，HTTP工作于应用层，而HTTPS 的安全传输机制工作在传输层
5.`HTTP` 无法加密，而HTTPS 对传输的数据进行加密
6.`HTTP`无需证书，而HTTPS 需要CA机构wosign的颁发的SSL证书
- https 加密过程是怎样的
[https](https://juejin.cn/post/6844904150115827725)

## 浏览器
- 什么是同源策略
- 浏览器缓存策略是怎样的（强缓存 协商缓存）具体是什么过程？
[缓存策略](https://juejin.cn/post/6947936223126093861)
[页面渲染机制](https://juejin.cn/post/6844903815758479374#heading-1)
- 浏览器渲染过程如下：
1. 解析HTML，生成DOM树
2. 解析CSS，生成CSSOM树
3. 将DOM树和CSSOM树结合，生成渲染树(Render Tree)
4. Layout(回流)：根据生成的渲染树，进行回流(Layout)，得到节点的几何信息（位置，大小）
5. Painting(重绘)：根据渲染树以及回流得到的几何信息，得到节点的绝对像素
6. Display：将像素发送给GPU，展示在页面上。
- EventLoop机制
[事件循环](https://zhuanlan.zhihu.com/p/33058983)

## Node.js
[require原理](https://juejin.cn/post/6866973719634542606)
- CommonJS模块化规范
CommonJS模块规范主要分为三部分：模块定义、模块标识、模块引用。
模块定义：module对象：在每一个模块中，module对象代表该模块自身。 export属性：module对象的一个属性，它向外提供接口。输出模块变量的最好方法是使用module.exports对象。一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，也就是说，在该模块内部定义的变量，无法被其他模块读取，除非定义为global对象的属性。
模块标识：传递给require方法的参数，必须是符合小驼峰命名的字符串，或者以 . 、.. 、开头的相对路径，或者绝对路径。
模块引用：加载模块使用require(同步加载)，该方法读取一个文件并执行，返回文件内部的module.exports对象。
优势：
在后端，JavaScript的规范远远落后并且有很多缺陷，这使得难以使用JavaScript开发大型应用。比如：没有模块系统、标准库较少、没有标准接口、缺乏包管理系统、列表内容
CommonJS模块规范很好地解决变量污染问题，每个模块具有独立空间，互不干扰，命名空间相比之下就不太好。
CommonJS规范定义模块十分简单，接口十分简洁。
CommonJS模块规范支持引入和导出功能，这样可以顺畅地连接各个模块，实现彼此间的依赖关系
CommonJS规范的提出，主要是为了弥补JavaScript没有标准的缺陷，已达到像Python、Ruby和Java那样具备开发大型应用的基础能力，而不是停留在开发浏览器端小脚本程序的阶段
缺点：
没有并行加载机制
由于CommonJS是同步加载模块，这对于服务器端是很不好的，因为所有的模块都放在本地硬盘。等待模块时间就是硬盘读取文件时间，很小。但是，对于浏览器而言，它需要从服务器加载模块，涉及到网速，代理等原因，一旦等待时间过长，浏览器处于”假死”状态。
所以浏览器端不是很适合Common.Js，出现另一种规范AMD

## 数据库 

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
