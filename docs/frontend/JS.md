# JavaScript
## 知识点

- 引用Js的三种方式
  - 行间 JS  `<div onclick="alert("我爱JavaScrip！")"></div>`
  - 内部 JS  `<script> // 这里放置js的代码 </script>`
  - 外部 JS  `<script src="main.js"><script>`
- 获取元素的两种方式
  - document.getElementById(' ID ')
  - document / parent.querySelector('选择器')
- Js的注释方式
  - 单行注释
  - 多行注释
- 打印/弹出-用来调试
  - alert()
  - console.log()
- 给元素添加鼠标点击事件
  - onclick 点击事件
- 什么是变量
  1. 关于变量的命名，理论上，变量哪怕是使用汉字命名也没问题，但为了提升【代码可读性】应当避免汉字、拼音、或者没有意义的abc来等命名。

  2. 在变量命名中不可以使用关键字和保留字，可以查看
  [MDN关键字与保留字]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Reserved_words
  - 变量声明（规则）
    - 不允许数字开头
    - 不允许使用关键字和保留字
    - 允许是字母，数字，下划线(_)，美元符($)任意组合而成
  - 变量赋值
- 标识符命名规则
  - 关键字和保留字
    - 关键字：[关键字](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#%E5%85%B3%E9%94%AE%E5%AD%97)
      - 当前语法中正在使用的单词	
    - 保留字：[保留字](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#%E6%9C%AA%E6%9D%A5%E4%BF%9D%E7%95%99%E5%85%B3%E9%94%AE%E5%AD%97)
      - 将来可能在语法中使用的单词
  - 大驼峰
    - JavaScript
  - 小驼峰
    - javaScript
- 驼峰命名法
  一般在变量命名时会采用**小驼峰**的命名方式，比如`leftBox`，`mainHeader`，那为什么不用大驼峰呢？因为大驼峰是用在一些特殊情况时，在后面面向对象章节会详细讲到。
- 多变量同时声明
- function(){} 函数
  - 什么是函数
  - 函数声明及调用
  - 匿名函数
- 什么是属性
- JS 属性操作
  - 属性读操作
  - 属性写操作
- JS 中两种操作属性的方法
  - . 点运算符
  - [] 方括号运算符
- 常用 JS 属性
  - id
  - className
  - value
  - style
    - background
    - color
    - width
    - height
    - ……
  - cssText
  - innerHTML
  - href
  - src
  - tagName    
- 属性操作时的注意事项及常见问题
  - href 值和 src 值获取到的是绝对路径
  - style 是行间属性
  - cssText 会替换掉当前所有的行间属性
  - class 是关键字，改成 className
  - tagName 获取到的是大写字母
  
- if 语句语法
  - if(){}
  - if(){} else {}
  - if(){} else if() {}
  - if(){} else if() {} else {}
- 判断条件 之 布尔值
  - true - 真
  - false - 假
- 比较运算符
  - 大于 >、小于 <、等于 ==、大于等于 >= 、小于等于 <=  
- 逻辑运算符
  - && 与、|| 或、! 非
  - 利用逻辑运算符书写多条件判断
- 数组
  - length
  - 数组的下标
- NodeList
  `NodeList`对应的是`querySelectorAll()`方法。这个方法还可以获取其他的节点类型
- HTMLCollection
  `HTMLCollection`对应的方法有`getElementsByClassName()`、`getElementsByTagName()`等等。这个方法只能获取元素节点，并且能够动态获取。动态获取的意思是，假如使用js删除了一个`li`以上这些方法获取到的就是4个`li`，而`querySelectorAll()`方法，除非你重新获取，不然它还是会获取到5个`li`。  
- classList 使用
  - add 添加一个项
  - contains 判断是否包含
  - toggle 切换
  - remove 删除一项
- 数据类型
  1. 划分数据类型的重要性
  2. ECMAScript 数据类型划分
      - 原始类型(基础类型,简单类型)：number、string、boolean、null、undefined、symbol
      - 复合类型(复杂类型)：object
  3. typeof 运算符
    number、string、boolean、function、undefined、symbol、object	
  4. 强制数据类型转换
      - 强制转换为数字
        - parseInt(string, radix) 将数据转换为整数返回
          - 第一个参数接受的是个字符串也就是我们要转换的数据
          - 第二个参数 基数，也可以理解为 标注出我们要转换的这个字符串是几进制的数字
        - parseFloat(string) 转换成浮点数(也就是小数)
        - Number(val) 将数据转换成数字
          - 字符串类型，使用 Number() 转换时，规则如下：
            - 当整段字符串都符合数字规则时，转换为数字返回
            - 空字符串,直接返回 0
            - 其余情况，直接返回 NaN
          - 布尔值类型，使用 Number() 转换时，true 返回 1，false 返回 0
          - null，使用 Number() 转换时 返回 0
          - undefined，使用 Number() 转换时 返回 NaN
          - 对象类型，使用 Number() 转换时，调用的对象的toString()方法，然后再次依照前面字符串的转换规则进行转换
        - NaN 和 isNaN
          - 在使用 NaN 时，要注意 NaN 不等于任何值，包括它自己，也就是 NaN 不等于 NaN。
          - 当我们要检测一条数据是否是 NaN 时，可以使用 isNaN(val) 来进行检测, 在 isNaN 方法中，传入的数据 能被转换成 合法数字时，就会返回 false，当传入的数据不能被转换成 合法数字( 也就是NaN) 时，isNaN 就会返回 true
  5. String(val) 转换成字符串
      - 数字类型，直接转换数据类型原样返回
      - undefined ，直接返回字符串 undefined
      - null，直接返回字符串 null
      - 布尔值，直接返回字符串 true 或者 false
      - 函数，直接把整个函数变成字符串 返回
      - 对象，直接调用对象的 toString 方法
  6. Boolean(val) 转换成布尔值
      - 数字类型：非零的合法数字转换为 true, 零代表 false, NaN 代表 false
      - 字符串类型：空字符串转换为false，非空字符串转换为true
      - null：转换为false
      - 对象：转换为true
  7. 隐式类型转换
      - 隐式数据类型转换，也就是说这个转换过程不受我们强制, js 偷偷自己转的
- 流程控制语句
  - 分支结构
  - 顺序结构
  - 循环结构
- switch语句
- 集循环语句 while do while break continue
- Function
  - 传值和传址
  数据的赋值操作，可以看做是一个拷贝的过程。而这个过程存在一个区别就是传值或是传址。数据类型中的复杂类型也称作引用类型，例如一个对象声明时，会在内存中开辟一个地址供这个对象存储值，而代表着这个对象的变量只是一个引用而已。
  所以把引用类型的数据赋值给一个新变量时，只是让这个新变量也来引用这个地址，当这两个变量各自修改对象中的属性值时，会相互影响，所以是传址。
  简单数据类型在拷贝时，是为新变量分配新的值，新、老变量是两个不同的变量，仅是值相同，所以是传值。
  - 函数声明和调用
    - function 声明
    ```js
    function foo(){}
    ```
    - 函数表达式
    ```js
    var foo = function(){}
    ```
    - 函数的事件调用 和 非事件调用
  - 自执行函数
  [自执行函数权威API详解](https://developer.mozilla.org/zh-CN/docs/Glossary/%E7%AB%8B%E5%8D%B3%E6%89%A7%E8%A1%8C%E5%87%BD%E6%95%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F)
  ```js
  (function foo() {
      console.log("Hello Foo");
  }());
  或
  (function foo(){
      console.log("Hello Foo");
  })();
  ```
  * 自执行函数会形成一个独立的作用域，可以用于防止变量污染
  * 括号会被理解为执行函数，所以在自执行函数体前面要加上分号，不然会报错
  - 函数传参
    - 形参 和 实参
    - 案例：封装选项卡函数
  - arguments 不定参
    - arguments 的特性：length 和 下标   
  - return 返回值
    - 函数返回值定义：函数执行完成后的结果
    - return的作用
      - 设置函数执行后结果
      - 可以终止函数执行
    - return 使用的注意事项
      - 必须是函数中使用
      - 终止函数执行
  - 获取计算后样式
    - 计算后样式和 style 的区别
    `getComputedStyle()`和`ele.style`的区别
    * `ele.style`只能获取到写在行间的样式，写在样式表中的样式不能获取到
    * `getComputedStyle()`是只读的，不能设置样式；`ele.style`可读可写
    `getComputedStyle()`方法在IE9以下浏览器不兼容，可以用`ele.currentStyle`来实现相同的功能。
    - getComputedStyle() 方法  
- JS 预解析机制(变量提升Hoisting)
  变量提升(Hoisting)被认为是,Javascript中执行上下文(特别是创建和执行阶段)工作方式的一种认识
  - var 的提升
  - function 的提升
  扩展：从概念的字面意义上说，“变量提升”意味着变量和函数的声明会在物理层面移动到代码的最前面，但这么说并不准确。实际上变量和函数声明在代码里的位置是不会动的，而是在编译阶段被放入内存中
- 作用域(scope)
  通常来说一段程序代码中使用的变量和函数并不总是可用的，限定其可用性的范围即作用域，作用域的使用提高了程序逻辑的局部性，增强程序的可靠性，减少名字冲突。
  - 全局作用域
  - 函数作用域
- 作用域链(scope chain)
  https://developer.mozilla.org/en-US/docs/Glossary/Scope
- 闭包
  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures
  函数对象可以通过作用域链相互关联起来，函数体内的数据(变量和函数声明)都可以保存在函数作用域内，这种特性在计算机科学文献中被称为“闭包”。既函数体内的数据被隐藏于作用于链内，看起来像是函数将数据“包裹”了起来。从技术角度来说，js的函数都是闭包：函数都是对象，都关联到作用域链，函数内数据都被保存在函数作用域内。
- this
  this 当前执行代码的环境对象
  - 全局环境
  - 函数（运行内）环境
    在函数内部，this的值取决于函数被调用的方式
  - 扩展：严格模式(use strict)下 function 的 this 指向
    "严格模式"体现了Javascript更合理、更安全、更严谨的发展方向
  - call 和 apply
    在调用时修改 this 指向
  - bind
    创建一个新的函数，在bind()被调用时，这个新函数的this被bind的第一个参数指定，其余的参数将作为新函数的参数供调用时使用
- 定时器和日期对象
  - onmouseover 鼠标移入时 事件
  - onchange  input标签 标签状态发生变化时 事件
  - break; 跳出当前循环
  - setTimeout 和 clearTimeout
    - setTimeout 的语法说明
    - clearTimeout 清除定时器
  - setInterval 和 clearInterval
    - 定时器管理的两种模式
  - 日期对象
    - 获取系统时间
      - Date()、getDate()、getDay()、getMonth()、getFullYear()、getHours()、getMinutes()、getSeconds()、getMilliseconds()
      - getTime()、Date.now()
    - 设置日期对象
      - Date()、setDate()、setMonth()、setFullYear()、setHours()、setMinutes()、setSeconds()、setTime()
- 数组字符串方法
  - 字符串方法
    - 查找类方法: charAt() indexOf() lastIndexOf()
    - 截取类方法：slice() substr() substring()
    - 其他常用方法：split() toLowerCase() toUpperCase() concat() charCodeAt() fromCharCode()
    - 数字方法：toFixed()
  - 数组方法
  [Array对象权威API解析](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
    - 创建方式
      * 字面量方式【常用】
      ```
      var array = [element0,element1,element2,...,elementN];
      ```
      * 构造器方式
      ```
      var array = new Array(element0,element1[,...[,elementN]]);
      ```
    - 数组的length
    - 添加和删除：push() pop() unshift() shift()

    | 方法      | 作用           | 返回值         |
    | --------- | -------------- | -------------- |
    | push()    | 在数组末尾添加 | 返回数组新长度 |
    | unshift() | 在数组起始添加 | 返回数组新长度 |

    | 方法    | 作用                 | 返回值         |
    | ------- | -------------------- | -------------- |
    | shift() | 删除数组第一个元素   | 返回删除的元素 |
    | pop()   | 删除数组最后一个元素 | 返回删除的元素 |


    - 数组元素的替换：splice()

    | 方法     | 作用                     | 返回值                                                       |
    | -------- | ------------------------ | ------------------------------------------------------------ |
    | splice() | 添加、删除、替换数组元素 | 第一个参数：添加/删除的位置 <br/> 第二个参数：删除的元素数量<br/>第三个参数：数组的新元素（选填） |
      - 替换数组元素
      - 数组指定位置删除
      - 数组指定位置添加
    - reverse()
    - 数组排序：
      [Array.prototype.sort\(\)权威API解读](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
      - sort()
      - 队列排序
      - 自定义规则排序
    - 其他常用方法：concat() join() reverse()
    - ECMAScript 5.1数组新增方法
      - forEach()
      - filter()
      - map()
      - reduce()
      - every()
      - some()
    - 对象
      - 对象的语法
      - keys() values()
      - for in 循环
    - json
      - json是什么
      - parse() stringify()
    - 常用Math方法
      取整方法：ceil() floor() round()
      随机数：Math.random()
      最大值和最小值：max() min()
      其他：Math.PI Math.abs()

- javascript 的组成部分
  - DOM (document object model) 文档对象模型
  - BOM (browers object model) 浏览器对象模型
  - ECMAScript js 的核心
- DOM文档对象模型
  - DOM关系
    - childNodes 子节点
    - children 子元素
    - firstChild 第0个子节点
    - firstElementChild 第0个子元素
    - lastChild 最后一个子节点
    - lastElementChild 最后一个子元素
    - nextSibling 下一个兄弟节点
    - nextElementSibling 下一个兄弟元素
    - previousSibling 上一个兄弟节点
    - previousElementSibling 上一个兄弟元素
    - parentNode 父节点
    - offsetParent 定位父级
  - 节点操作
    创建节点 document.creamentElement()
    添加节点 el.appendChild(node) el.insertBefore(newNode, oldNode)
    替换节点 parent.replaceChild(el)
    删除节点 parent.removeChild(el) node.remove()
    克隆节点 node.cloneNode(deep) 
    deep为true 克隆元素及属性,以及元素的内容和后代
    deep为false 克隆元素本身及属性
- BOM
  - 文档碎片和创建插入文档的区别
  那么关于DOM操作，究竟有没有可优化的方案呢？
  答案是肯定的，解决方案就叫做文档碎片`document.createDocumentFragment()`。
  [文档碎片权威API解读](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createDocumentFragment)
  当需要添加大量的节点时，会先将元素放入文档碎片中，再将文档碎片插入到节点中。
  文档碎片存在于内存，而不在DOM树中。
  这样会大大减少DOM操作，从而提高性能。
  - dataset和getAttribute/setAttribute的区别
  HTML属性分为内置属性和自定义属性；内置属性我们之前已经接触过了，像id、class这些都是内置属性；但是有时为了便于我们开发工作，还需要给HTML元素其他属性，就是接下来要说的自定义属性了。
  `dataset`属性和`getAttribute()`/`setAttribute()`方法都可以获取、设置元素的自定义属性。
  其中`dataset`时HTML5新加入的属性，用它来设置的值都会出现一个`data-`的前缀。
  `getAttribute()`/`setAttribute()`方法都是对于字符串操作的。
  - 关于尺寸获取的属性及方法的区别
  一张图让你搞懂他们的区别：
  ![483aec75c6a4ba58e5ef907914392faf](BOM.resources/3331DE56-9072-453A-91AB-34F0D57A1AF0.gif)
  ```
  ```
  可视区域

  offsetWidth = contentWidth + padding + border

  offsetHeight = contentHeight + padding +border

  ```
  ```
  可视区域

  clientWidth = contentWidth + padding

  clientHeight = contentHeight + padding

  如果值为小数会被四舍五入为整数

  ```
  ```
  内容超过可视区域

  scrollWidth  = contentWidth（包括可视区内和可视区外）+ padding

  scrollHeight = contentHeight（包括可视区内和可视区外）+ padding'

  内容不超过可视区域时与clientWidth相同

  ```
  ```
  element.getBoundingClientRect().width =  contentWidth + padding

  element.getBoundingClientRect().height = contentHeight + padding

  如果值为小数可以获取到

  ```
  ```
  offsetTop 元素与它定位父级top坐标的距离

  clientTop 元素上边框的宽度

  scrollTop 页面被卷起来的高度

  element.getBoundingClientRect().top 元素到可视区域顶部的距离

  ```
  ```
  offsetLeft 元素与它定位父级left坐标的距离

  clientLeft 元素左边框的宽度

  scrollLeft 页面被卷起来的宽度

  element.getBoundingClientRect().left 元素到可视区域左侧的距离
  ```
  ```
  element.getBoundingClientRect().bottom 元素底部到可视区域顶部的距离

  element.getBoundingClientRect().right 元素右侧到可视区域左侧的距离
  ```
- BOM下五大对象
  window对象
  - innerWidth / innerHeight
  - open 方法
  window.open(URL,target,specs,replace)
    - URL 新窗口地址
    - target 属性 新窗口打开方式
      - _blank
      - _self 
    - specs 新窗口规格
      - width=pixels	窗口的宽度.最小.值为100
      - height=pixels	窗口的高度。最小.值为100
      - location=yes|no|1|0	是否显示地址字段.默认值是yes
      - menubar=yes|no|1|0	是否显示菜单栏.默认值是yes
      - resizable=yes|no|1|0	是否可调整窗口大小.默认值是yes
      - scrollbars=yes|no|1|0	是否显示滚动条.默认值是yes
      - status=yes|no|1|0	是否要添加一个状态栏.默认值是yes
      - titlebar=yes|no|1|0	是否显示标题栏.被忽略，除非调用HTML应用程序或一个值得信赖的对话框.默认值是yes
      - toolbar=yes|no|1|0	是否显示浏览器工具栏.默认值是yes
  - close 关闭窗口
  - scroll 事件
  - resize 事件
  - 操作滚动条位置
    - window.scrollX、window.scrollY、window.scrollTo()
    - document.documentElment.scrollTop、document.documentElment.scrollLeft

  - window 下的各类弹窗
    - alert()
    - confirm('message')
    - prompt([msg],[defaultText])
  location 对象
  - hostname
  - port
  - protocol
  - href
  - hash
    - hashchange
  - search
  - reload()
  - replace()
  history对象
  - back()
  - forward()
  - go()
  - state 
  - pushState()
  - popstate
    - history
  navigator 对象
  - userAgent
  - appName
    - appVersion
  screen对象
    width height
- 前端路由
  - 前端路由的两种实现方式
  - `hash`
  * 原理：`location.hash`
  * 监听`hash`变化：`hashchange`事件
  * 触发`hash`变化：
      * `a`标签的`href`属性，用户点击标签改变url
      * js对`location.hash`赋值，改变url

  - `history`
  * 原理：想要跳转到指定url的时候，将目标url通过`pushState()`或者`pushState()`方法填入到`history`和地址栏中，但是这两种方法不会主动进行页面刷新，仍然停留在当前页面，只是url地址发生改变，之后`popstate`事件响应，执行相应的回调函数，切换页面。
  * [H5 historyAPI权威解读](https://developer.mozilla.org/zh-CN/docs/Web/API/History)、[popstateAPI权威解读](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/popstate_event)

  - 两种方式的对比
  * `hash`方式会在url中有#字符，`history`方式没有
  * `hash`方式可以用js直接操作，`history`方式通常需要服务端配合实现
  * `hash`方式兼容性好，`history`方式只兼容IE10以上

- 元素尺寸的获取
  - offset
    - offsetWidth   可视宽度  content + padding + border
    - offsetHeight  可视高度
    - offsetLeft    距离定位父级的Left坐标
    - offsetTop     距离定位父级的top坐标
  - client
    - clientWidth   可视宽度 - border
    - clientHeight  可视高度 - border
    - clientTop     上边框宽度
    - clientLeft    左边框宽度
  - 当前浏览器可视区宽度
    - document.documentElement.clientWidth 浏览器可视宽度
    - document.documentElement.clientHeight 浏览器可视高度
  - scroll
    - scrollWidth   内容宽度  content + padding
    - scrollHeight  内容高度
    - scrollLeft    左右滚动距离
    - scrollTop     上下滚动距离
  - getBoundingClientRect()
    - left          元素左侧距离可视区左侧距离
    - top           元素顶部距离可视区顶部距离
    - right         元素右侧距离可视区左侧距离
    - bottom        元素底部距离可视区顶部距离
    - width         可视宽度
    - height        可视高度
  - 当前滚动条位置 （相对于页面顶部）
    - document.documentElement.scrollTop
    - document.documentElement.scrollLeft
- 事件
  - 事件监听器
  - addEventListener(type, listener[, options|useCapture])
    - 事件流
      - 事件冒泡
      - 事件捕获
    - 事件监听相关配置
      - capture 是否再捕获阶段执行
      - once    是否只执行一次
      - passive 组织取消默认事件
  - removeEventListener 取消事件监听
  - Event 事件对象
    - event.target event.currentTarget 事件源
    - 事件委托(事件代理)
    - 事件委托的优点
      1. 可减少需要添加事件绑定的元素
      2. 可给新增DOM元素添加上事件
    - 事件委托的缺点
      1. 事件处理函数中需要判断事件源增加逻辑复杂度
      2. 祖父级和事件源之间不能阻止冒泡
  - mousenter、mouseleave 事件  - 这俩个事件 不会在鼠标移动父子级切换过程中触发
  - Event.stopPropagation() Event.cancleBubble 取消冒泡
  - Event.clientX Event.clientY Event.pageX Event.pageY
  - contextmenu事件
    - return false 和 Event.preventDefault() 阻止默认事件
  - 键盘事件
    - keydown keyup
    - Event.keyCode Event.key
    - Event.altKey Event.ctrlKey Event.shiftKey
  - 鼠标滚动事件
    - mousewheel 和 DOMMouseScroll 事件 
    - Event.wheelDelta 和  Event.detail 滚轮方向获取
  - 其他常用事件：
  - dblclick
    - blur、focus、change、input、submit、reset
    - 表单其他方法：blur()、focus()、select()
### 面向对象编程思想

 一、面相过程：注重解决问题的步骤，分析问题需要的每一步，实现函数依次调用；

 二、面相对象：是一种程序设计思想。将数据和处理数据的程序封装到对象中；

 三、面相对象特性： 抽象、 继承、封装、多态

优点：提高代码的复用性及可维护性；
### 对象

Javascript 是一种基于对象的语言，几乎所有东西都是对象；

1、对象创建方法：

- 字面量创建

- new Object()创建

- Object.create()创建：创建对象的原型；
### 工厂模式

一、工厂模式

工厂模式解决了代码复用的问题；

### 对象和类

​	一、对象：具体的某个事物；(如：小明、叮当猫)

​	二、类：一类事物的抽象；(如：人类、猫类)



### new运算符

- new的特点：1.new执行函数 2.自动创建空对象； 3.this绑定到空对象；4 隐式返还this；5.
- 通过new来改造工厂模式

### 构造函数

- 构造函数要通过new来调用 this指向实例化对象
- 约定俗成构造函数首字母大写
- 静态属性及方法
  - 静态方法里的this；

### 构造函数性能

- 公共空间存放公共方法

### 构造函数原型

### prototype原型
- 通过new实例化出来的对象其属性和行为来自两个部分，一部分来自构造函数，另一部分来自原型。
- 当声明一个函数的时候，同时也申明了一个原型 。
- 原型本身是一个对象。
- 对象属性方法查找规则；
### 工厂模式对比构造函数

1.没有解决对象识别的问题。即创建的所有实例都是Object类型。(不清楚是哪个对象的实例)

2.没有原型，占用内存。
### 原型链

对象之间的继承关系，在JavaScript中是通过prototype对象指向父类对象，直到指向Object对象为止，这样就形成了一个原型指向的链条，称之为原型链；

1.当访问一个对象的属性或方法时，会先在对象自身上查找属性或方法是否存在，如果存在就使用对象自身的属性或方法。如果不存在就去创建对象的构造函数的原型对象中查找 ，依此类推，直到找到为止。如果到顶层对象中还找不到，则返回 undefined。

2.原型链最顶层为 Object 构造函数的 prototype 原型对象，给 Object.prototype 添加属性或方法可以被除  null 和 undefined 之外的所有数据类型对象使用。
### 构造函数继承

- 继承：子类继承父类所有属性和行为，父类不受影响。
- 目的：找到类之间的共性精简代码

```js
function Person(name){
    this.name = name;
    this.eyes = "两只";
    this.legs = "两条";
}
function Student(name){
    Person.call(this,name)
    this.className = "二班";
}
let newPerson = new Student("张三");
console.log(newPerson.className);
```

- 简单原型继承,出现影响父类的情况；

  ```js
  function Person(name){
      this.name = name;
      this.eyes = "两只";
      this.legs = "两条";
  }
  function Student(name){
      Person.call(this,name)
      this.className = "二班";
  }
  Student.prototype = Person.prototype  //直接赋值
  ```

### 原型的深拷贝继承

- 传值和传址问题

  - 基本数据类型：Number、String、Boolean、Null、Undefined
  - 复杂数据类型/引用数据类型:Array、Date、Math、RegExp、Object、Function等

- JOSN序列化的不足

  ```
  如果拷贝对象包含函数，或者undefined等值，此方法就会出现问题
  ```

- 浅拷贝和深拷贝

  ```js
  //递归深拷贝
  function deepCopy(obj){
      let newObj = Array.isArray(obj)?[]:{};
      for(let key in obj){
          if(obj.hasOwnProperty(key)){
              if(typeof obj[key] == "object"){
                  newObj[key] = deepCopy(obj[key]);
              }else{
                  newObj[key] = obj[key];
              }
          }
      }
      return newObj;
  }
  ```

###原型的继承

- 深拷贝继承

- 组合继承

  ```js
  function Dad(){
      this.name = "张三";
  }
  Dad.prototype.hobby = function(){
      console.log("喜欢篮球");
  }
  function Son(){
      Dad.call(this);
  }
  let F = function(){}
  F.prototype = Dad.prototype;
  Son.prototype = new F();
  Son.prototype.constructor = Son;
  
  let newSon = new Son();
  newSon.hobby();
  ```

  ### 包装对象
  
  - 除过null,undefined，基本类型都有自己对应的包装对象：String Number Boolean 	
  - 包装对象把所有的属性和方法给了基本类型，然后包装对象消失
