# Node.js
### Node.js介绍
---
- Node.js 诞生于2009年，Node.js采用C++语言编写而成，是 一个Javascript的运行环境。Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境 ，让JavaScript的运行脱离浏览器端，可以使用JavaScript语言 书写服务器端代码。

### 安装Node.js

​	[Node.js官网](https://nodejs.org)下载稳定版本,node偶数版本为稳定版本，奇数版本为非稳定版本。

- mac 直接安装  或者 brew来安装

- 安装完Node.js会自动安装NPM(Node Package Manager)：包管理工具；
- 通过指令 node -v 来查看是否安装完成和查看node版本号；npm -v 来查看npm版本。

### 使用Node.js实现第一个服务器

初步感受Node.js

```js
//引入http模块
let http = require("http");
//创建一个服务器
let serve = http.createServer((req,res)=>{
    console.log("hello");
    res.end("hello world");
})
//设置端口号
serve.listen(3000);
```
### 模块化

一、为什么会有模块化

- 在JavaScript发展初期就是为了实现简单的页面交互逻辑，寥寥数语即，如今随着前端代码日益膨胀

  这时候JavaScript作为嵌入式的脚本语言的定位动摇了，JavaScript却没有为组织代码提供任何明显帮助，JavaScript极其简单的代码组织规范不足以驾驭如此庞大规模的代码；

二、Node.js中的模块化  commonjs规范

- CommonJS就是为JS的表现来制定规范，因为js没有模块的功能所以CommonJS应运而生，它希望js可以在任何地方运行，不只是浏览器中。

  1、创建自定义模块

  - 引入一个文件 形式模块

    home.js执行文件

    ```js
    //通过require来引入
    require("./aModule"); //注意一定要有"./"，文件后缀可加可不加。
    ```

    amodule.js文件

    ```js
    console.log("我是amodule模块111");
    ```

  - 引入文件夹形式模块

    - home.js执行文件

    ```js
    require("./aModuledir"); //必须加"./"
    ```

    ​aModuleDir里的index.js文件,会自动查找文件夹下的index.js文件执行

    ```js
    console.log("我是aModule模块文件夹");
    ```

    - 当然也可以配置默认启动文件，在文件夹内新建package.json来指定执行文件

    ```json
    {
      "name":"aModule",
      "version":"1.0.0",
      "main":"test.js"
    }
    ```

    

- 自定义模块的按需导出

  通过module.exports 导出； \_\_dirname  , \_\_filename

  ```js
  module.exports = {
      a:"我是a的值",
      b(){
          console.log("我是导出的b函数");
      }
  }
  ```

  引入导出文件

  ```js
  let mymodule = require("bModule");
  console.log(mymodule.a);
  mymodule.b();
  ```

  或者 通过  exports来导出

  ```js
  exports.fn = function(){
      console.log("我是fn函数");  
  }
  ```

  导入文件

  ```js
  let myfn = require("bModule").fn;
  myfn();
  // 或者 通过解构赋值 
  let { fn } = require("bModule");
  fn();
  ```

- 模块加载的优先级 ,先文件再目录；

2、内置模块；

nodejs内置模块有：Buffer，C/C++Addons，Child Processes，Cluster，Console，Crypto，Debugger，DNS，Domain，Errors，Events，File System，

Globals，HTTP，HTTPS，Modules，Net，OS，Path，Process，Punycode，Query Strings，Readline，REPL，Stream，String Decoder，Timers，TLS/SSL，TTY，UDP/Datagram，URL， Utilities，V8，VM，ZLIB；内置模块不需要安装，外置模块需要安装

### npm包管理器

NPM(Node Package Manager)  官网的地址是 [npm官网](https://www.npmjs.com)	

- npm常用指令；
  - npm init：引导创建一个package.json文件
  - npm help(npm -h) ：查看npm帮助信息
  - npm version (npm -v) : 查看npm版本；
  - npm search：查找
  - npm install (npm i)：安装  默认在当前目录，如果没有node_modules 会创建文件夹；
    - npm install module_name -S 或者--save    即    npm install module_name --save    写入dependencies
    - npm install module_name -D  或者 —save-dev   即    npm install module_name --save-dev 写入devDependencies
    - npm install module_name -g 全局安装(命令行使用)
    - 指定版本安装模块   npm i module_name @1.0 通过  "@"符号指定；
  - npm update(npm -up)：更新
  - npm remove 或者  npm uninstall：删除
  - npm root  查看当前包安装的路径  或者通过  npm root -g 来查看全局安装路径；

## fs模块

- fs是文件操作模块，所有文件操作都是有同步和异步之分，特点是同步会加上 "Sync" 如：异步读取文件  "readFile"，同步读取文件 "readFileSync"；

  文件操作

  - 文件读取：

    - 异步读取

    ```js
    let fs = require("fs");
    fs.readFile("1.txt",(err,data)=>{
        if(err){
            return console.log(err);
        }
        console.log(data.toString());
    })
    ```

    - 同步读取文件

    ```js
    let fs = require("fs");
    let res = fs.readFileSync("1.txt");
    console.log(res.toString());
    ```

  - 文件写入：

    ```js
    let fs = require("fs");
    //flag配置  "a":追加写入，"w":写入，"r":读取
    fs.writeFile("2.txt","我是要写入的内容",{flag:"w"},err=>{
        if(err){
            return console.log(err);
        }
        console.log("写入成功");   
    })
    ```

  - 文件删除

    ```js
    fs.unlink("2.txt",err=>{
        if(err){
            return console.log(err);
        }
        console.log("删除成功");
    })
    ```

  - 复制文件

    - 先读取文件再写入文件

    ```js
    function mycopy(src,dest){
       fs.writeFileSync(dest,fs.readFileSync(src));
    }
    mycopy("1.txt","4.txt");
    ```

  - 修改文件名，目录也可以通过rename来操作

    ```js
  fs.rename("1.txt","5.txt",function (err) {
        if(err){
            console.log(err);
        }else{
            console.log("修改成功");
        }
    });
    ```
  
  - 判断文件是否存在

    ```js
  fs.exists("4.txt",function (exists) {
        console.log(exists);
  })
    ```

### buffer缓冲区

- buffer的创建
  - 直接创建
  - 数组创建
  - 字符串创建
  - 乱码的处理
  - buffer转换tostring

###stream流

- stream流：流与数据处理方面密不可分
  - 流的原理
  - 流数据的获取
    - pipe
    - data
    - end
  - copy的流方法实现
  - 加载视图的流方法实现
## 模板引擎

  模板引擎：模板引擎是web应用中动态生成html的工具，负责将数据和模板结合；常见模板引擎有：ejs、jade（现更名为pug）、Handlebars、Nunjucks、Swig等；使用模板引擎可以是项目结构更加清晰，结构更加合理，让项目维护变得更简单；

##pug模板引擎使用

- 安装pug

  `npm i pug -g`

- pug常用语法

  - pug语法：通过缩进关系，代替以往html的层级包含关系，如 个简单的静态   可以表达为，注意要统一使用tab或者空格缩进，不要混用
  - 内联书写层级,a: img
  - style属性：div(style={width:”200px”,color:”red”})
  - 使用”-”来定义变量，使用“=”把变量输出到元素内；
  - 通过 #{variable} 插 相应的变量值
  - html 元素属性通过在标签右边通过括号包含（可以通过判断来添加）
  - 文本通过在 字前 添加竖线符号“|”可让 jade 原样输出内容 在html标签标记后 通过空格隔开 本内容 在html标签标记后通过添加引号“.”添加块级文本
  - 注释：可以通过双斜杠进 注释，jade有3种注释 式，可以分别对应输出html 注释、 输出html注释、块级html注释
  - 循环：each val in [1,2,3]
  - 判断语句：”if  else”  case  when default 
  - mixin：混合模式
  - **include** common/footer.pug 通过include引入外部文件

- 练习工具 hade；

  `npm i hade -g`

## nunjucks模板引擎在koa中的应用

- 安装koa-nunjucks-2

## koa介绍  

​	koa是express原班人马打造的轻量、健壮、富有表现力的nodejs框架。目前koa有koa1和koa2两个版本；koa2依赖Node.js 7.6.0或者更高版本；koa不在内核方法中绑定任何中间件，它仅仅是一个轻量级的函数库，几乎所有功能都必须通过第三方插件来实现。

### koa使用

- koa安装

  $ npm i koa	

- 一个简单的koa服务器

  ```js
  const Koa = require('koa');
  const app = new Koa();
  
  app.use(async ctx => {
    ctx.body = 'Hello World';
  });
  
  app.listen(3000);
  ```
- Koa 利用中间件 控制"上游"，调用"下游“；

  - koa是包含一组中间件函数的对象；可以将app.use里的函数理解成中间件

    ```js
    //这里的middleWare函数就是一个中间件
    let middleWare = async (ctx,next)=>{
        console.log("first middleWare");
        ctx.body = "hello world";
    }
    app.use(middleWare);
    ```

  - 通过next()将控制转交给另一个中间件；

  - 上述过程也可以通过"洋葱模型“来解释中间件执行顺序

### Application对象

- application是koa的实例  简写app

- app.use 将给定的中间件方法添加到此应用程序,分为同步和异步，异步：通过es7中的async和await来处理  

- app.listen设置服务器端口；

- app.on 错误处理；


### 上下文context对象常用属性及方法

- context 将node中的request和response 封装到一个对象中，并提供一些新的api提供给用户进行操作；

  - ctx.app:应用程序实例引用,等同于app;
  - ctx.req:Node 的 `request` 对象.
  - ctx.res:Node 的 `response` 对象.
  - ctx.request:koa中的Request对象；
  - ctx.response:koa中的response对象；
  - ctx.state：对象命名空间，通过中间件传递信息；
  - ctx.throw:抛出错误；

- request及response别名

  - koa会把ctx.requset上的属性直接挂载到ctx上如：

    - ` ctx.header`  //头信息；
    - `ctx.headers`
    - `ctx.method`
    - `ctx.method=`
    - `ctx.url`
    - `ctx.url=`

    …...

  - 同样也会把ctx.response上的属性直接挂载到ctx上如：

    - `ctx.body`
    - `ctx.body=`
    - `ctx.status`
    - `ctx.status=`
    ….
  - ctx.status 获取响应状态。默认情况下，`response.status` 设置为 `404` 而不是像 node 的 `res.statusCode` 那样默认为 `200`。

  - http状态码：1xx(消息)、2xx(成功)、3xx(重定向)、4xx(请求错误)、5xx和6xx(服务器错误)

  - 常见http状态码   （302    location  跳转）

    <table>
      <tr>
      <td>HTTP状态码</td>
      <td>描述</td>
      </tr> 
      <tr>
      <td>100</td>
      <td>继续。继续响应剩余部分，进行提交请求</td>
      </tr>
      <tr>
      <td>200</td>
      <td>成功</td>
      </tr>
      <tr>
      <td>301</td>
      <td>永久移动。请求资源永久移动到新位置</td>
      </tr>
      <tr>
      <td>302</td>
      <td>临时移动。请求资源零时移动到新位置</td>
      </tr>
      <tr>
      <td>304</td>
      <td>未修改。请求资源对比上次未被修改，响应中不包含资源内容</td>
      </tr>
      <tr>
      <td>401</td>
      <td>未授权，需要身份验证</td>
      </tr>
      <tr>
      <td>403</td>
      <td>禁止。请求被拒绝</td>
      </tr>
      <tr>
      <td>404</td>
      <td>未找到，服务器未找到需要资源</td>
      </tr><tr>
      <td>500</td>
      <td>服务器内部错误。服务器遇到错误，无法完成请求</td>
      </tr>
      <tr>
      <td>503</td>
      <td>服务器不可用。零时服务过载，无法处理请求</td>
      </tr>
    </table>
  ### koa常用中间件介绍

  ### 一、koa-router  

  - 路由是引导匹配之意，是匹配url到相应处理程序的活动。

  - koa-router安装

    `npm i koa-router -S`

  - Koa-router使用

  - Koa-router推荐使用RESTful架构API。Restful的全称是Representational State Transfer 即表现层转移。

    - RESTful是一种软件架构风格、设计风格，而**不是**标准，只是提供了一组设计原则和约束条件。基于这个风格设计可以更简洁，更有层次;

    - 非RESTful架构api：

    - 使用RESTful架构设计api

    - REST设计一般符合如下条件：

      - 程序或者应用的事物都应该被抽象为资源
      - 每个资源对应唯一的URI(uri是统一资源标识符)
      - 使用统一接口对资源进行操作
      - 对资源的各种操作不会改变资源标识
      - 所有操作都是无状态的

### 二、koa-views 

- Koa-views用于加载html模板文件；

  - 安装 koa-views

    `npm i koa-views -S`

  - 使用koa-view


### 三、koa-static

- koa-static     是用于加载静态资源的中间件，通过它可以加载css、js等静态资源；

- 安装 koa-static 

  `npm i koa-static`

- 使用koa-static

  ```js
  const static = require("koa-static");
  app.use(static(__dirname+"/static")) //加载静态文件的目录
### mvc模式

- mvc 即  model 、controller、view；mvc模式将model、view、controller分离；使用mvc分层是系统更加灵活，扩展性更强。让程序更加直观、复用性更强、可维护性更强。
  - model 负责数据访问；
  - controller负责消息处理；
  - view 负责视图呈现；
- 利用mvc模式规划项目
### SSE (server send event) 服务器推送数据；

​	Server-sent events:使用server-sent 事件的方法,服务器可以在任何时刻向我们的web页面推送数据和信息.这些被推送进来的信息可以在这个页面上作为事件+data来处理.

- 服务端设置

  - 设置头部

    `"Content-type","text/event-stream"`

  - 返还数据格式

    ​	`data:`声明数据开始

    ​	`\r\n\r\n`标志数据结尾

- 前端获取

  ```js
  let source = new EventSource("/test");
      source.onopen = function(){
          console.log("连接建立...",this.readyState);
      }
      // console.log(source)
      source.onmessage = function(evnet){
          console.log("数据是：",evnet.data)
      }
      source.error = function(err){
          return console.log('err');
      }
  ```

  - readyState  代表连接状态:
    - 0 `CONNECTING` (`0`) 。
    - 1 `OPEN` (`1`),
    - 2 CLOSED` (`2`)

### websocket

- WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议;

- 创建websocket服务器；

  ```js
  var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({ port: 8181 });
  wss.on('connection', function (ws) {
      console.log('client connected');
      ws.on('message', function (message) {
        	//监听接收的数据
          console.log(message);
      });
    	setInterval(() => {
          let somedata = {
              name:"张三",
              age:20
          }
          ws.send(JSON.stringify(somedata));
      }, 1000);
  });
  ```

  

- 客户端代码

  - 建立握手

  ```js
  var ws = new WebSocket("ws://localhost:8181");
  ```

  打开协议

  ```js
  	ws.onopen = function () {}
  ```

  - 发送数据到服务端

  ```js
    ws.send("客户端数据");
  ```

  -  关闭协议:关闭协议后不能发送数据

  ```js
    ws.close();
  ```

  - 接收消息
  
    ```js
    ws.onmessage = function(e){
             // console.log(e.data);
    }
    ```

### socket.io模块

- 服务端

  ```js
  const server = require('http').createServer(app.callback());
  const io = require('socket.io')(server);
  server.listen(3000);
  ```

- 客户端

  ```js
  let socket = io.connect();
   this.emit("clientfn","hello i am client");
    socket.on("message",function(data){}
  ```
### cookie

- cookie是http协议下，服务端或者脚本可以维护客户端信息的一种方式。

- koa中cookie的使用

  - 储存cookie的值；

  ```js
  ctx.cookies.set(name, value, [options])
  ```

  - 获取cookie的值

  ```js
  ctx.cookies.get(name, [options])
  ```

  - options常用设置
    - `maxAge` 一个数字表示从 Date.now() 得到的毫秒数
    - `expires` cookie 过期的 `Date`
    - `path` cookie 路径, 默认是`'/'`
    - `domain` cookie 域名
    - `secure` 安全 cookie  设置后只能通过https来传递cookie
    - `httpOnly` 服务器可访问 cookie, 默认是 **true**
    - `overwrite` 一个布尔值，表示是否覆盖以前设置的同名的 cookie (默认是 **false**). 如果是 true, 在同一个请求中设置相同名称的所有 Cookie

### 登录案例

- 验证用户名密码是否正确；

- 实现登录功能，通过记住我实现七天免登录；

  

###通过本地cookie实现记录换肤功能

- 客户端cookie使用方式；

  - 设置

    ```js
    document.cookie="key=value"
    ```

    - key和value是包含在一个字符串中

      - key包含字段
        - [name] 这个name为自己取的cookie名称，同名的值会覆盖
        - domain 所属域名
        - path 所属路径
        - Expires/Max-Age 到期时间/持续时间 (单位是秒)
        - http-only 是否只作为http时使用，如果为true，那么客户端能够在http请求和响应中进行传输，但时客户端浏览器不能使用js去读取或修改

    - 多个key=value使用 ; （分号）分隔

      

  - 获取

    ```js
    document.cookie
    ```

    返回值是当前域名下的所有cookie，并按照某种格式组织的字符串 ：key=value;key1=value1;......keyn=valuen

  - 封装

    - 设置cookie封装

    ```js
    //设置cookie
    function setCookie(name,value,options={}){
        let cookieData = `${name}=${value};`;
        for(let key in options){
            let str = `${key}=${options[key]};`;
            cookieData += str;
        }
        document.cookie = cookieData;
    }
    ```

    

    - 获取cookie

    ```js
    //获取Cookie
    function getCookie(name){
        let arr = document.cookie.split("; ");
        for(let i=0;i<arr.length;i++){
            let items = arr[i].split("=");
            if(items[0]==name){
                return items[1];
            }
        }
        return "";
    }
    ```

  - 几种皮肤背景色

    ```js
    ["white","rgb(204,232,207)", "rgb(200,200,169)", "rgb(114,111,128)"]
    ```

    

###客户端操作cookie特点

- 浏览器会主动存储接收到的 set-cookie 头信息的值
- 有时效性；
- 可以设置 http-only 属性为 true 来禁止客户端代码（js）修改该值



### 本地缓存Storage

- localStorage及sessionStorage使用

  - 设置

    setItem(key, value)   添加或更新（如果数据项中已存在该key）数据项中指定key的value

  - 获取

    getItem(key) 获取数据项中指定key对应的value

  - 移出指定数据

    removeItem(key) 删除数据项中指定key的value

  - 清空所有数据

    clear()  清空所有数据项

### 通过storage来改造换肤功能



###通过storage实现添加歌曲列表功能

- 通过stroage来处理本地多开音乐页面得问题；
- 实现删除及删除所有列表的功能；

###本地存储异同

- 共同点

- localStorage和sessionStorage和cookie共同点
  - 同域（同源策略）限制：同源策略：请求与响应的 协议、域名、端口都相同 则时同源，否则为 跨源/跨域
  - 存储的内容都会转为字符串格式
  - 都有存储大小限制

- localStorage和sessionStorage共同点

  - API相同
  - 存储大小限制一样基本类似
  - 无个数限制

  

- 不同点
- localStorage
  - 没有有效期，除非删除，否则一直存在
  - 同域下页面共享
  - 支持 storage 事件
- sessionStorage
  - 浏览器关闭，自动销毁
  - 页面私有
  - 不支持 storage 事件

- cookie
  - 浏览器也会在每次请求的时候主动组织所有域下的cookie到请求头 cookie 中，发送给服务器端
  - 浏览器会主动存储接收到的 set-cookie 头信息的值
  - 可以设置 http-only 属性为 true 来禁止客户端代码（js）修改该值
  - 可以设置有效期 (默认浏览器关闭自动销毁)(不同浏览器有所不同)
  - 同域下个数有限制，最好不要超过50个(不同浏览器有所不同)
  - 单个cookie内容大小有限制，最好不要超过4000字节(不同浏览器有所不同)