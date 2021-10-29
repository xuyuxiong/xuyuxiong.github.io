# 面试技巧
## 面试准备
- 职位描述(JD)
对招聘上的职位进行分析
可以得出以后工作主要是做哪部分内容：
PC端 移动端 App H5 组件库的开发
- 业务分析或实战模拟
分析所应聘的公司的主要业务
如京东金融、艺龙可以先从网站首页入手，对网站进行功能分析，某些效果是否可以自己实现
- 技术栈准备
框架：vue react
构建方面：webpack gulp
跨端方面：uniapp taro
根据招聘和自身情况进行准备相应技术栈
- 自我介绍
基本信息
学历
工作经历
开源项目 github
## 模拟一面
### 面试技巧
- 准备要充分
- 知识要系统
- 沟通要简洁
- 内心要诚实
- 态度要谦虚
- 回答要灵活
### 页面布局类
浮动布局 绝对布局 表格布局 flexbox布局 网格布局
### CSS盒模型 
基本概念：标准模型+IE模型
标准模型和IE模型的区别：
标准模型的宽高只有content部分
如何设置
box-sizing:border-box
JS如何获取盒模型对应的宽和高
dom.style.width/height(局限性：只能取到内联样式的宽和高)
dom.currentStyle.width/height(只有ie支持)
window.getComputedStyle(dom).width/height
dom.getBoundingClientRect().width/height
根据盒模型解释边距重叠(父子元素)
BFC的基本概念
块级格式化上下文
原理：
垂直方向的边距会发生重叠
不会浮动元素重叠
是一个独立的容器 外面的元素不会影响里面的元素
如何创建：
float值不为none
position值不为static和relative
display: table table-cell inline-block
overflow值不为visible
### DOM事件类
基本概念：DOM事件的级别
DOM0 element.onclick = function() {}
DOM2 element.addEventListener('click', function(){}, false)
DOM3 element.addEventListener('keyup', function(){}, false) // DOM3事件类型增加了
DOM事件模型：捕获 冒泡
DOM事件流 
分为三个阶段：捕获 -> 目标阶段 -> 冒泡
描述DOM事件捕获的具体流程
window -> document -> html -> body -> ... -> 目标元素
Event对象的常见应用
event.preventDefault() // 阻止默认行为
event.stopPropagation() // 阻止冒泡
event.stopImmediatePropagation() // 当一个元素绑定了两个点击事件，可以只响应优先级更高的那个
event.currentTarget // 事件绑定到父级身上，target就是父级元素
event.target
自定义事件
const ev = new Event('custome')
ev.addEventListener('custome', () => {})
ev.dispatchEvent(eve) // 触发事件

另外一个方法：CustomEvent 用法跟Event类似，只是多了个参数 可以传入一个对象
### HTTP协议类 
HTTP协议的主要特点：
无连接(不会保持连接)、无状态(无法记住上次连接者的身份)、简单快速(通过URI快速访问)、灵活(可以访问不同的数据类型)
HTTP报文的组成部分
请求报文：
请求行 请求头 空行 请求体
响应报文：
状态行 响应头 空行 响应体
HTTP方法
GET POST PUT DELETE HEAD
POST和GET的区别
浏览器回退时,GET是无害的，POST会再次发起请求
GET有长度限制
GET只支持url编码
GET请求更不安全，因为参数直接暴露在url上
GET请求会被主动缓存
GET请求参数会被完整保存在浏览器历史记录里
HTTP状态码
1xx：指示信息，表示请求已接收
2xx：成功接收
3xx：重定向
4xx：客户端错误
5xx：服务器错误
什么是持久连接(http1.1才支持)
HTTP协议采用“请求-应答模式” 每次都要建立一个新的连接，完成之后立即断开
使用“Keep-Alive”模式，当出现对服务器的后继请求时，避免了重新建立连接
什么是管线化
管线化机制通过持久连接完成
只有GET和HEAD请求可以进行管线化，而POST则有所限制
管线化不会影响响应到来的顺序
请求1->请求2->请求3->响应1->响应2->响应3
### 原型链类
创建对象有几种方法
字面量的方式: var obj1 = {name: 'zhangsan'}
var obj2 = new Object({name: 'zhangsan'})
构造函数：
var Fun = function(name){this.name = name}
var obj3 = new Fun()
第三种方式：
var obj4 = Object.create(obj1)
原型、构造函数、实例、原型链
instanceof的原理
通过判断实例的__proto__是否等于构造函数的prototype 
而构造函数的prototype.__proto__ === Object.prototype
所以实例obj instanceof Object 为true
new运算符
原理
```js
var new1 = function(func){
    var o = Object.create(func.prototype)
    var r = func.call(o)
    if (typeof r === 'object') {
        return r
    } else {
        return o
    }
}
```
### 面向对象类 
类与实例
类的声明
```js
function Animal() {
    this.name = 'name'
}

// ES6 class声明
class Animal2 {
    constructor() {
        this.name = name
    }
}
```
生成实例
```js
console.log(new Animal(), new Animal2())
```
类与继承
如何实现继承
继承的几种方式
```js
// 借助构造函数实现继承
function Parent() {
    this.name = 'parent'
}
function Child() {
    Parent.call(this)
    this.type = 'child'
}
const child = new Child()

// 借助原型链实现继承
function Parent() {
    this.name = 'parent'
}
function Child() {
    this.type = 'child'
}
Child.prototype = new Parent()
const child = new Child()

// 组合方式
function Parent() {
    this.name = 'parent'
}
function Child() {
    Parent.call(this)
    this.type = 'child'
}
Child.prototype = new Parent()
const child = new Child()
// 组合方式优化
function Parent() {
    this.name = 'parent'
}
function Child() {
    Parent.call(this)
    this.type = 'child'
}
Child.prototype = Object.create(Parent.prototype)
const child = new Child()
```
### 通信类
什么是同源策略及限制
同源策略限制从一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的关键的安全机制
- Cookie LocalStorage IndexDB
- DOM无法获取
- Ajax请求无法发送
前后端如何通信
- Ajax
- WebSocket(不受同源策略限制)
- CORS
如何创建Ajax
- XMLHttpRequest对象的工作流程
- 兼容性处理
- 事件的触发条件
- 事件的触发顺序
```js
function json (options) {
    const opt = {
        url: '',
        type: 'get',
        data: {},
        success: function(){},
        error: function(){}
    }
    for (var i in options) {
        if (options.hasOwnProperty(i)) {
            opt[i] = options[i]
        }
    }
    if (opt.url) {
        var xhr = XMLHttpRequest
        ? new XMLHttpRequest()
        : new ActiveXObject('Microsoft.XMLHTTP')
        var data = opt.data,
            url = opt.url,
            type = opt.type.toUpperCase(),
            dataArr = []
        for (var k in data) {
            dataArr.push(k + '=' + data[k])
        }
        if (type === 'GET') {
            url = url + '?' + dataArr.join('&')
            xhr.open(type, url.replace(/\?$/g, ''), true)
            xhr.send()
        }
        if (type === 'POST') {
            xhr.open(type, url, true)
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
            xhr.send(dataArr.join('&'))
        }
    }
    xhr.onload = function () {
        if (xhr.status === 200 || xhr.status === 304) {
            var res
            if (opt.success && opt.success instanceof Function) {
                res = xhr.responseText
                if (typeof res === 'string') {
                    res = JSON.parse(res)
                    opt.success.call(xhr, res)
                }
            }
        } else {
            if (opt.error && opt.error instanceof Function) {
                opt.error.call(xhr, res)
            }
        }
    }
}
```
跨域通信的几种方式
JSONP
Hash(利用iframe，然后监听window.onhashchange)
postMessage
WebSocket
CORS http://www.ruanyifeng.com/blog/2016/04/cors.html
浏览器将CORS请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）
### 前端安全类
- CSRF
基本概念和缩写
跨站请求伪造
攻击原理
利用接口本身的漏洞
用户首先需要登录A网站，然后用户访问B网站时点击了引诱链接，这个链接是A网站存在漏洞的链接就会导致相应的安全事故
防御措施
Token验证
Referer验证 也就是验证页面来源 判断页面是否来源于指定站点
隐藏令牌 和token类似 隐藏在请求头中
- XSS
跨站脚本攻击
攻击原理
不需要登录 向页面注入脚本(比如在评论区提交时注入script)
防御措施
转义用户的内容
添加用户生成的内容(使用textContent或者innerText，而不能使用innerHTML)
### 前端算法类

## 模拟二面
### 渲染机制类
什么是DOCTYPE及作用
DOCTYPE是用来声明文档类型和DTD(文档类型定义)规范的，一个主要的用途表示验证文件的合法性验证。
浏览器渲染过程
解析html生成DOMTree,与此同时解析CSSRule生成CSSTRree,DOMTree和CSSTree合并生成RenderTree,根据RenderTree生成Layout(计算每个元素的位置宽高)
重排Reflow
浏览器根据各种样式来计算元素该出现的位置，这个过程称之为reflow
触发：
增加、删除、修改DOM节点时会导致Reflow或Repaint
移动DOM的位置，或是搞个动画
修改CSS样式
改变窗口大小(移动端没有这个问题)，或是滚动
修改网页的默认字体
重绘Repaint
当各种盒子的位置、大小、颜色等属性确定下来后，浏览器会把这些元素按照各自的特性绘制一遍，这个过程称之为repaint
触发：
DOM改动
CSS改动
减少repaint的方法 通过documentFragment来一次完成操作
布局Layout
### JS运行机制
如何理解单线程
所有任务需要排队，前一个任务结束，才会执行后一个任务
什么是任务队列
用来存放异步任务的事件队列
什么是EventLoop
主线程从“任务队列”中读取事件，这个过程是循环不断的
### 页面性能
提升页面性能的方法有哪些
1. 资源压缩合并 减少HTTP请求
2. 非核心代码异步加载(异步加载的方式、异步加载的区别)
方式：
1.动态脚本加载 2.defer 3.async
区别：
defer是在HTML解析完之后才会执行，如果有多个按顺序依次执行
async是在加载完之后才会执行，如果有多个，执行顺序和加载顺序无关
3. 利用浏览器缓存 (缓存的分类、缓存的原理)
分类：
强缓存 Expires(绝对时间) Cache-Control(相对时间)
协商缓存 Last-Modified(上次修改的时间) If-Modified-Since(发送给服务器的时间) Last-Modified Etag(判断内容是否有改变) If-None-Match
4. 使用CDN
5. 预解析DNS
高级版本浏览器a标签默认具有预解析功能
<link rel="dns-prefetch" href="//host_name_to_prefetch.com">
### 错误监控
前端错误的分类
即时运行错误：代码错误
资源加载错误
错误的捕获方式
代码错误: 1.try...catch  2.window.error
资源加载错误: 1.object.onerror(如加载图片的错误事件) 2.performance.getEntries() 可以获取到加载资源的数量 3.事件捕获阶段获取 window.addEventListener('error', function(e) {console.log(e)}, true)
上报错误的基本原理
利用Image对象上报

## 模拟三面
### 业务能力
主动描述 + 被动回答
我做过什么业务
负责的业务有什么业绩
使用了什么技术方案
突破了什么技术难点
遇到了什么问题
最大的收获是什么
### 团队协作能力
### 事务推动能力
完成多项专利的申请 主导客服系统的建设 推动专题的CMS架构
### 带人能力
带一个社招完成数字彩的开发和维护
带一个实习生完成专题活动的开发
代码规范 Review

## 模拟终面
1.乐观积极 2.主动沟通 3.逻辑顺畅 4.上进有责任心 5.有主张,做事果断
### 职业竞争力
1. 业务能力 可以做到行业第一
2. 思考能力 对同一件事可以从不同角度去思考,找到最优解
3. 学习能力 不断学习新的业务和技术,沉淀、总结
4. 无上限的付出 对于无法解决的问题 对于无法解决的问题可以熬夜、加班
### 职业规划
1. 目标是什么
在业务上成为专家、在技术上成为行业大牛
2. 近阶段的目标
不断的学习积累各方面的经验,以学习为主
3. 长期目标
做几件很有价值的事情,如开源作品、技术框架
4. 方式方法
先完成业务上的主要问题,做到极致,然后逐步向目标靠拢