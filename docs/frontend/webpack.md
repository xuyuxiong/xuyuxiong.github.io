# webpack4
webpack 是⼀个现代 JavaScript 应用程序的静态模块打包器(module bundler)，当 webpack 处理应用程序时，它会递归地构建⼀个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成⼀个或多个bundle.
虽然webpack5大大提升了打包速度，但是在配置书写跟webpack4有大多相似，在生产环境中使用webpack4还是更为稳定。
## webpack安装
先创建一个文件夹，然后在文件夹中执行以下操作
```shell
# 初始化npm配置⽂件
npm init -y 
# 安装4.x稳定版本
npm i -D webpack@4.44.0
# 安装webpack V4+版本时，需要额外安装webpack-cli
npm install webpack webpack-cli -g
# 检查版本
webpack -v
# 卸载
npm uninstall webpack webpack-cli -g
```
推荐局部安装，全局安装webpack会将你项目中的webpack锁定到指定版本，造成不同的项目中因为webpack依赖不同版本而导致冲突构建失败
## 启动webpack
1. 默认配置
- webpack默认只⽀持JS模块和JSON模块
- ⽀持CommonJS Es moudule AMD等模块类型
- webpack4⽀持零配置使用，但是很弱，稍微复杂些的场景都需要额外扩展
2. 准备执行构建
- 在文件夹中再建一个src⽂件夹
- 在文件夹中创建 index.js、index.json、other.js
```js
// index.js
const json = require("./index.json"); // commonJS
import { add } from "./other.js"; // es module
console.log(json, add(2, 3));

// index.json
{
 "name": "JOSN"
}

// other.js
export function add(n1, n2) {
 return n1 + n2; 
}
```
3. 执行构建
```shell
# 使用npx⽅式
npx webpack
# 或者 npm run dev
# 需要修改package.json⽂件
"scripts": {
  "dev": "webpack"
}
```
原理就是通过shell脚本在node_modules/.bin⽬录下创建⼀个软链接。
4. 构建成功
我们会发现目录下多出⼀个dist目录，里面有个main.js，这个文件是⼀个可执⾏的JavaScript文件，里面包含webpackBootstrap启动函数。
5. 默认配置
在根目录新建一个webpack.config.js文件
```js
// webpack.config.js
const path = require("path");
module.exports = {
 // 必填 webpack执⾏构建⼊⼝
 entry: "./src/index.js",
 output: {
 // 将所有依赖的模块合并输出到main.js
 filename: "main.js",
 // 输出⽂件的存放路径，必须是绝对路径
 path: path.resolve(__dirname, "./dist")
 }
}
```
## 核心概念
- chunk：指代码块，⼀个 chunk 可能由多个模块组合⽽成，也⽤于代码合并与分割。
- bundle：资源经过webpack 流程解析编译后最终结输出的成果文件。
- entry：顾名思义，就是入口起点，用来告诉webpack用哪个文件作为构建依赖图的起点。webpack会根据entry递归的去寻找依赖，每个依赖都将被它处理，最后输出到打包成果中。
```js
// webpack.config.js

// 单⼊⼝ SPA 本质是个字符串
entry:"./src/index.js"
// 或者
entry:{
 main: './src/index.js'
}
// 多⼊⼝ entry 是个对象
entry:{
 index:"./src/index.js",
 login:"./src/login.js"
}
```
- output：配置描述了webpack打包的输出配置，包含输出⽂件的命名、位置等信息。
```js
// webpack.config.js

output: {
 filename: "bundle.js", // 输出⽂件的名称
 path: path.resolve(__dirname, "dist") // 输出⽂件到磁盘的⽬录，必须是绝对路径
}
// 多入口的处理
output: {
 filename: "[name][chunkhash:8].js", // 利⽤占位符，⽂件名称不要重复
 path: path.resolve(__dirname, "dist") // 输出⽂件到磁盘的⽬录，必须是绝对路径
}
```
- loader：默认情况下，webpack仅⽀持 .js .json ⽂件，通过loader，可以让它解析其他类型的⽂件，充当翻译官的⻆⾊。理论上只要有相应的loader，就可以处理任何类型的⽂件。
```js
// 常见loader
  style-loader
  css-loader
  less-loader
  sass-loader
  ts-loader // 将Ts转换成js
  babel-loader // 转换ES6、7等js新特性语法
  file-loader // 处理图⽚⼦图
  eslint-loader
```
- moudle：模块，在 webpack ⾥⼀切皆模块，⼀个模块对应着⼀个⽂件。webpack 会从配置的 Entry 开始递归找出所有依赖的模块。当webpack处理到不认识的模块时，需要在webpack中的module处进行配置，当检测到是什么格式的模块，使用什么loader来处理。
```js
// webpack.config.js

module:{
  rules:[
  {
    test:/\.xxx$/, // 指定匹配规则
    use:{
      loader: 'xxx-load' // 指定使⽤的loader
    }
  }
  ]
}
```
- plugin：loader主要的职责是让webpack认识更多的文件类型，而plugin的职责则是让其可以控制构建流程，从而执行⼀些特殊的任务。插件的功能非常强大，可以完成各种各样的任务。例如：
htmlwebpackplugin
htmlwebpackplugin会在打包结束后，自动⽣成⼀个html⽂件，并把打包⽣成的js模块引⼊到该html中
clean-webpack-plugin
clean-webpack-plugin会在每次打包时把之前的dist目录的文件清空
```js
// webpack.config.js

// 安装
// npm install --save-dev html-webpack-plugin
// npm install --save-dev clean-webpack-plugin
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
 ...
 plugins: [
 new htmlWebpackPlugin({ // 配置
  title: "My App",
  filename: "app.html",
  template: "./src/index.html"
  }),
  new CleanWebpackPlugin()
 ]
}
```
## 配置编写
### loader打包静态资源
css样式处理：css-loader style-loader
```js
// 安装
npm install style-loader css-loader -D
// 配置
module: {
 rules: [
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader"]
  }
 ]
}
```
集成less sass
```js
// sass
npm install node-sass sass-loader -D
// less
npm install less less-loader -D // 配置
rules:[
  {
    test: /\.scss$/,
    use: ["style-loader","css-loader","sass-loader"]
  },
  {
    test: /\.less$/,
    use: ["style-loader","css-loader","less-loader"]
  } 
 ]
```
集成postcss
postcss主要功能只有两个：第⼀就是把css解析成JS可以操作的抽象语法树AST，第⼆就是待用插件来处理AST并得到结果；所以postcss⼀般都是通过插件来处理css，并不会直接处理 例如：
自动补齐浏览器前缀: autoprefixer插件
css压缩 cssnano
```js
// npm install postcss-loader autoprefixer cssnano -D

// 创建postcss.config.js
module.exports = {
 plugins: [require("autoprefixer")],
}

// 配置package.json
"browserslist":["last 2 versions", "> 1%"]
// 或者直接在postcss.config.js⾥配置
module.exports = {
 plugins: [
  require("autoprefixer")({
    overrideBrowserslist: ["last 2 versions", "> 1%"],
  })
 ]
}
// 或者创建.browserslistrc⽂件
> 1%
last 2 versions
not ie <= 8
```
图片/字体文件处理
url-loader 和 file-loader 都可以⽤来处理本地的资源⽂件，如图片、字体、⾳视频等。功能也是类似的， 不过 url-loader 可以指定在⽂件大小小于指定的限制时，返回DataURL ，不会输出真实的⽂件，可以减少昂贵的网络请求
```js
// 安装
// npm install url-loader file-loader -D

// 使⽤
// webpack.config.js

module.exports = {
 modules: {
 rules: [
 {
 test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
 use: [
        {
          loader: 'url-loader', // 仅配置url-loader即可，内部会⾃动调⽤file-loader
          options: {
            limit: 10240, // ⼩于此值的⽂件会被转换成DataURL
            name: '[name]_[hash:6].[ext]', // 设置输出⽂件的名字
            outputPath: 'assets', // 设置资源输出的⽬录
          }
        }
      ],
      exclude: /node_modules/
    }
  ]}
}
```
### plugins使用
经过如上几个loader处理，css最终是打包在js中的，运行时会动态插⼊head中，但是我们⼀般在⽣产环境会把css⽂件分离出来（有利于用户端缓存、并⾏加载及减小js包的大小），这时候就用到 mini-css-extract-plugin 插件
```js
// webpack.config.js

// 安装
// npm install mini-css-extract-plugin -D
// 使⽤
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  module: {
    rules: [
    {
      test: /\.less$/,
      use: [
      // 插件需要参与模块解析，须在此设置此项，不再需要style-loader 
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: true, // 模块热替换，仅需在开发环境开启
          // reloadAll: true,
          // ... 其他配置
          }
        },
        'css-loader',
        'postcss-loader',
        'less-loader'
        ]
      }
    ]
  }
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css' // 输出⽂件的名字
    })
  ]
}
```
html页面处理
htmlwebpackplugin会在打包结束后，⾃动⽣成⼀个html⽂件，并把打包⽣成的js模块引⼊到该html中
```js
// npm install --save-dev html-webpack-plugin
// 清空dist⽬录下某个⽂件或目录(clean-webpack-plugin)
// npm install --save-dev clean-webpack-plugin

// webpack.config.js

const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
module.exports = {
 ...
 plugins: [
  new htmlWebpackPlugin({
    title: "My App",
    filename: "app.html",
    template: "./src/index.html"
  }),
  new CleanWebpackPlugin()
  ]
}
```
### entry和output基础配置
webpack文件指纹策略：hash chunkhash contenthash
hash策略 是以项目为单位的，项目内容改变，则会⽣成新的hash,内容不变则hash不变
chunkhash 以chunk为单位，当⼀个文件内容改变，则整个chunk组的模块hash都会改变
contenthash 以自身内容为单位
### sourceMap配置
源代码与打包后的代码的映射关系，通过sourceMap定位到源代码。
在dev模式中，默认开启，关闭的话 可以在配置⽂件⾥
devtool的介绍：https://webpack.js.org/configuration/devtool#devtool
eval:速度最快,使⽤eval包裹模块代码,
source-map： 产⽣ .map ⽂件
cheap:较快，不包含列信息
Module：第三⽅模块，包含loader的sourcemap（比如jsx to js ，babel的sourcemap）
inline： 将 .map 作为DataURI嵌⼊，不单独⽣成 .map ⽂件
配置推荐：
```js
devtool:"cheap-module-eval-source-map", // 开发环境配置
//线上不推荐开启
devtool:"cheap-module-source-map", // 线上⽣成配置
```
### webpackDevServer提升开发效率
每次改完代码都需要重新打包⼀次，打开浏览器，刷新⼀次，很麻烦,我们可以安装使⽤webpackdevserver来改善这块的体验
```js
// npm install webpack-dev-server -D

// 修改下package.json
"scripts": {
  "server": "webpack-dev-server"
}
// 在webpack.config.js配置
devServer: {
 contentBase: "./dist",
 open: true,
 port: 8081
}
// 启动
npm run server
```
本地mock,解决跨域
联调期间，前后端分离，直接获取数据会跨域，上线后我们使⽤nginx转发，开发期间，webpack就可以搞定这件事，启动⼀个服务器，mock⼀个接口
```js
// npm i express -D
// 创建⼀个server.js 修改scripts "server":"node server.js"

//server.js
const express = require('express')
const app = express()
app.get('/api/info', (req,res)=>{
  res.json({
  name:'小明',
  age:18,
  msg:'node服务数据'
 })
})
app.listen('9091')
// node server.js

// 修改webpack.config.js 设置服务器代理
proxy: {
 "/api": {
    target: "http://localhost:9092"
  }
}
// 修改index.js
axios.get("/api/info").then(res => {
 console.log(res);
})
```
### hot module replace热模块更新
```js
// webpack.config.js

devServer: {
  contentBase: "./dist",
  open: true,
  hot:true,
  //即便HMR不⽣效，浏览器也不⾃动刷新，就开启hotOnly
  hotOnly:true
}
// 在插件配置处添加：
plugins: [
 new CleanWebpackPlugin(),
 new HtmlWebpackPlugin({
  template: "src/index.html"
 }),
 new webpack.HotModuleReplacementPlugin()
]
```
注意启动HMR后，css抽离会不⽣效，还有不⽀持contenthash，chunkhash
处理js模块HMR需要使⽤module.hot.accept来观察模块更新 从⽽更新
```js
//index.js

import number from "./number"
number()
if (module.hot) {
  module.hot.accept("./b", function() {
    document.body.removeChild(document.getElementById("number"))
    number()
  })
}
```
### babel处理es6
Babel是JavaScript编译器，能将ES6代码转换成ES5代码，让我们开发过程中放⼼使⽤JS新特性⽽不⽤担⼼兼容性问题。并且还可以通过插件机制根据需求灵活的扩展
Babel在执⾏编译的过程中，会从项⽬根⽬录下的 .babelrc JSON⽂件中读取配置。没有该⽂件会从loader的options地⽅读取配置。
```js
// npm i babel-loader @babel/core @babel/preset-env -D
// babel-loader是webpack 与 babel的通信桥梁，不会做把es6转成es5的⼯作，这部分⼯作需要⽤到@babel/preset-env来做

// webpack.config.js

{
 test: /\.js$/,
 exclude: /node_modules/,
 use: {
  loader: "babel-loader",
  options: {
    presets: ["@babel/preset-env"]
  }
 } 
}
//默认的Babel只⽀持let等⼀些基础的特性转换，Promise等⼀些还有转换过来，这时候需要借助@babel/polyfill，把es的新特性都装进来，来弥补低版本浏览器中缺失的特性
// npm install --save @babel/polyfill 
// 按需加载，减少冗余
options: {
  presets: [
  [
  "@babel/preset-env",
  {
    targets: {
      edge: "17",
      firefox: "60",
      chrome: "67",
      safari: "11.1"
    },
    corejs: 2,//新版本需要指定核⼼库版本
    useBuiltIns: "usage"//按需注⼊
    }
  ]
  ]
}
// useBuiltIns 选项是 babel 7 的新功能，这个选项告诉 babel 如何配置 @babel/polyfill 。 它有三个参数可以使⽤： ①entry: 需要在 webpack 的⼊⼝⽂件⾥ import "@babel/polyfill" ⼀次。 babel会根据你的使⽤情况导⼊垫⽚，没有使⽤的功能不会被导⼊相应的垫⽚。 ②usage: 不需要 import ，全⾃动检测，但是要安装 @babel/polyfill 。 ③false: 如果你 import "@babel/polyfill" ，它不会排除掉没有使⽤的垫⽚，程序体积会庞⼤。(不推荐)
// 新建.babelrc⽂件，把options部分移⼊到该⽂件中，就可以了
//.babelrc
{
 presets: [
    [
      "@babel/preset-env",
      {
        targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1"
      },
      corejs: 2, //新版本需要指定核⼼库版本
      useBuiltIns: "usage" //按需注⼊
      }
    ]
  ]
}
```
## 高级概念
### Tree Shaking(把代码中没用到部分去除，简称摇树)
我们在打包文件的时候，比如下面代码，有一个math.js文件，然后在index.js进行引入，代码如下：
```js
// math.js
export const add = (a, b) =>{
  console.log(a + b)
}
export const minus = (a, b) =>{
  console.log(a - b)
}

// index.js
import { add } from './math.js';
add(1, 2);
```
这样，我们只是引入了add方法，但是我们查看打包的内容，会发现，他会将math.js文件所有的文件，都会打包到打包输出文件中，我们并不想让没有引入的方法等打包输出
这个时候，我们需要使用Tree Shaking功能来实现，不过需要注意的是Tree Shaking只支持ES Module，也就是只支持import这种方式的引入，不支持require这种CommonJS的引入方式，是因为ES Module这种底层是静态引入的方式，而import这种方式底层是动态的引入方式，Tree Shaking只支持静态引入的这种方法。我们在webpack.config.js中进行下面的配置：这里需要注意的是，我们下面的配置在开发模式下的配置mode为development
```js
module.exports = {
    // 配置打包模式
    mode: 'development',
   ....
    optimization: {
      usedExports: true
    },
   ....
}
```
usedExprots: true意思就是我们去查看哪些导出的模块被使用，然后再进行打包；然后我们在package.json中进行下面的配置：添加"sideEffects": false,意思就是，对所有的模块都进行Tree Shaking也就是将没有引入的方法等不进行打包到打包输出文件中
```json
// package.json

{
  "name": "webpack",
  "version": "1.0.0",
  "sideEffects": false,
  "description": "",
  "private": true,
  "scripts": {
    "bundle": "webpack",
    "watch": "webpack --watch",
    "start": "webpack-dev-server",
    "server": "node server.js"
  }
}
```
这里的"sideEffects"有很大的用途，比如我们在使用@babel/polyfill的时候，他的内部并没有使用export导出任何模块，他只是通过类似windows.Promise这样给全局T添加一些函数，但是我们使用Tree Shaking这种去打包的时候，他会发现这个模块我们并没有通过import引入任何模块，他会以为，我们并没有使用这个模块，不会对他进行打包，这时候，我们需要这样配置：添加"sideEffects": ["@babel/polyfill"]这样，我们在打包的时候不会对这个模块进行Tree Shaking检查
一般我们在配置sideEffects选项的时候会配置成下面的：意思就是除了我们通过这种import "./strle.css"也不进行Tree Shaking检查，其他的对进行Tree Shaking检查，因为如果进行检查，会忽略我们的样式。
```json
// package.json

"sideEffects": [
   "*.css"
]
```
然后我们对上面的inedx.js进行重新打包，查看打包内容：exports used: add意思只有add方法被使用了。Tree Shaking并没有生效，因为开发环境下Tree Shaking会保留我们没用引入的代码，因为我们在查看报错的时候，如果去除了没有引入的代码，显示的行数会跟源代码不一致。如果我们的mode为production的时候，Tree Shaking就会生效了，其实在mode为production的时候，optimization: { usedExports: true}已经是配置好的，我们没必要再次进行配置，但是package.json中的sideEffects配置，还是需要的；同时将devtool改成：devtool: 'cheap-module-source-map'
### 区分环境打包
我们一般写项目的时候，会对webpack进行两个配置，一个是生成版本的配置，一个是开发版本的配置；这里我的Develoment模式的配置文件在webpack.dev.js，我的Production模式的配置文件在webapck.prod.js中，然后我们在package.json进行配置我们允许的命令
```json
// package.json

"scripts": {
  "dev": "webpack-dev-server --config webpack.dev.js",
  "build": "webpack --config webpack.prod.js",
}
```
开发环境的devtool配置为cheap-module-eval-source-map，生产环境的配置为：cheap-module-source-map,；我们在开发环境中使用下面的配置，每次修改js文件，需要进行手动刷新一次页面，我们去掉hotOnly: true，这样如果改变了js文件，就会自动刷新
根据开发环境分成webpack.dev.js、webpack.prod.js、webpack.common.js三个文件
然后我们通过webpack-merage插件来进行合并我们的配置文件，输入命令：npm install webpack-merge -D进行安装
```js
// webpack.dev.js

const webpack = require('webpack');
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const devConfig = {
    // 配置打包模式
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      // 服务器启动的根路径
      contentBase: './dist',
      open: true,
      proxy: {
        '/api': 'http://localhost:3000'
      },
      hot: true,
    },
    optimization: {
      usedExports: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), 
    ],
}
module.exports = merge(commonConfig, devConfig)

```
```js
// webpack.prod.js

const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const prodConfig = {
    // 配置打包模式
    mode: 'production',
    devtool: 'cheap-module-source-map',
}
//模块导出的是两个文件的合并
module.exports = merge(commonConfig, prodConfig)
```
```js
// common.js

// 引入node核心模块path
const path = require('path')
// 将我们写的html文件，进行打包；
const HtmlWebpakcPlugin = require('html-webpack-plugin')
// 清除上次打包生成的js文件
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    // 入口文件
    entry: {
        main: './src/index.js',
    },
    module: {
        rules: [{ 
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
            {
            test: /\.(png|jpe?g|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/',
                    limit: 204800
                }
            }
        }, {
            test: /\.vue$/,
            use: {
                loader: 'vue-loader'
            }
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 2
                  }
                },
                'sass-loader',
                'postcss-loader'
            ]
        }, {
            test: /\.(eot|ttf|svg|woff)$/,
            use: {
                loader: 'file-loader'
            }
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        },{
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
            }
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpakcPlugin({
          template: './src/index.html'
        })
    ],
    // 打包出的文件配置
    output: {
        path: path.resolve(__dirname, 'dist')
    }
}
```
```json
// package.json

"scripts": {
  "dev": "webpack-dev-server --config ./build/webpack.dev.js",
  "build": "webpack --config ./build/webpack.prod.js",
}
```
### Code Splitting
我们在写代码的时候，经常会遇到引用很多第三方的包，来方便我们处理业务逻辑，比如我们使用lodash，但是这样会导致我们打包输出的时候，会将业务逻辑代码以及第三方库的代码打包到到一起；如果我们的业务网逻辑代码很多，会导致打包成功后的文件很大；页面加载速度很慢，如果我们修改了业务代码；这样整个页面得重新加载我们的代码。这个时候我们可以进行代码的分割,webpack中实现代码分割 三种方式：

第一种方式：自己实现代码分割：将其他引用的第三方库进行分离写在另一个js脚本中，然后我们进行修改打包配置，进行配置多个入口如下
```js
// lodash.js
import _ from 'lodash';
windows._ = _;

// index.js
console.log(_.join(['a','b','c'],'***'))

// 入口文件
entry: {
    main: './src/index.js',
    lodash: './src/lodash.js',
}
```
在index.js中我们不在引入lodash，因为他已经被挂载到了全局对象上，我们直接可以使用，这样，减少了如果业务逻辑代码频繁修改后页面重新加载很大的打包输出文件；减少了业务逻辑代码的体积；如果我们改变了业务代码，页面只会重新加载业务代码，第三方的lodash.js文件会被缓存起来，不会重新加载

第二种方式：使用webpack的代码分割：同步加载包进行打包，使用插件配置进行Code Splitting
```js
// webpack.common.js

optimization: {
  splitChunks: {
    chunks: 'all'
  }
}
// 打包后会生成一个名叫vendors~main.js的文件
```

第三种方式：使用webpack的代码分割：异步引入模块的代码分割
上面的包模块是一种同步的引入方式，然后webpack会先处理这些，然后进行处理我们的业务逻辑代码；我们这里再说一种异步包模块引入的代码分割：我们的index.js代码如下
```js
// index.js

function getComponent () {
  return import('lodash').then(({default: _}) => {
    var element = document.createElement('div')
    element.innerHTML = _.join(['a','b','c'],'***')
    return element
  })
}

getComponent ().then((element) => {
  document.body.appendChild(element)
})
```
上面的代码通过return import这种引入方式是实验性质的语法会报错，我们可以通过一个babel的插件来解决这个问题，输入命令：npm install babel-plugin-dynamic-import-webpack --save-dev，然后在我们的.babelrc文件里面进行配置：多加一个plugins: ["dynamic-import-webpack"]配置
```js
// .babelrc

{
  presets: [
    [
      "@babel/preset-env", {
        targets: {
            chrome: "67",
        },
        useBuiltIns: 'usage'
      }
    ],
    "@babel/preset-react"
  ],
  plugins: ["dynamic-import-webpack"]
}
```
这里需要注意的是：首先代码分割跟我们的webpack是无关的，我们只是通过代码分割这种思想来提升我们项目的性能；webpack中实现代码分割两种方式：

1. 同步代码：只需要在webpack.common.js中做optimization的配置；
2. 异步代码(import) 无需做任何配置，会自动进行代码分割
### splitChunksPlugin
作用：修改打包输出的文件名
其实我们上面讲的webpack代码分割是使用了SplitChunksPlugin这个插件来实现的；我们查看打包结果，他会将lodash的第三方库打包成0.js的文件，我们如果想要改这个生成的文件名，可以通过魔法注释的方法来实现：我们在引入lodash前加了一个/* webpackChunkName = "lodash"*/意思就是打包后，这个模块的名字叫做lodash.js
```js
// index.js

function getComponent () {
  return import(/* webpackChunkName:"lodash"*/'lodash').then(({default: _}) => {
    var element = document.createElement('div')
    element.innerHTML = _.join(['a','b','c'],'***')
    return element
  })
}

getComponent ().then((element) => {
  document.body.appendChild(element)
})
```
然后移除掉我们前面安装的babel-plugin-dynamic-import-webpack插件，因为这个插件不支持我们的魔法注释这种功能；在package.json删除babel-plugin-dynamic-import-webpack，然后在.babelrc文件里面去除我们的配置；然后我们使用官方提供的动态引入第三库的插件；输入命令：npm install --save-dev @babel/plugin-syntax-dynamic-import;然后在.babelrc文件中我们引入这个插件
```js
// .babelrc

{
    presets: [
        [
            "@babel/preset-env", {
                targets: {
                    chrome: "67",
                },
                useBuiltIns: 'usage'
            }
        ],
        "@babel/preset-react"
    ],
    plugins: ["@babel/plugin-syntax-dynamic-import"]
}
```
这样修改还是不行，他打包出的文件会在前面加一个vendors~lodash.js这样，我们需要去除这个前缀，打开webpack.common.js,修改optimization的配置如下：这样，打包之后的文件名就是我们所想要的了。
```js
// webpack.common.js

optimization: {
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      vendors: false,
      default: false
    }
  }
}
```
其实我们不进行splitChunks配置，也可以进行打包的，因为，它本身有一个默认的配置，配置内容如下
```js
// webpack.common.js

optimization: {
  splitChunks: {
    chunks: 'async',//代码分割只对异步加载的代码生效,如果想对同步、异步都进行分割设置为all
    minSize: 30000,//设置模块大小大于30kb才会进行代码分割
    maxSize: 0,//设置打包输出文件的最大体积，如果需要打包的模块超过这个大小，他会进行分割成多个文件进行打包输出
    minChunks: 1,//当一个模块被用了至少多少次的时候，才进行分割。
    maxAsyncRequests: 5,//同时加载的模块数。如果页面引用的模块超过五个，不会对超过的模块进行代码分割
    maxInitialRequests: 3,//入口文件进行加载引入的模块最多数，这个设置为3，就是如果入口文件引入模块超过三个，超过的就不会进行代码分割
    automaticNameDelimiter: '~',//打包输出文件的连接符，例如vendors~main.js；vendors是组名，后面就是连接符；vendors~main.js意思是vendors组的入口文件是main.js
    name: true,
    cacheGroups: {
        // 如果引入的包是node_modules里面的内容，会进入到这里的配置
      vendors: {
        test: /[\\/]node_modules[\\/]/,//检测引入的第三方库是不是node_modules里面的内容
        priority: -10,
        filename: 'vendors.js' //如果是node_modules里面的内容，会打包到这个文件里面
      },
      // 如果引入的包不是node_modules里面的内容，会进入到这里的配置
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
        filename: 'common.js'
      }
    }
  }
}
```
### lazy loading 懒加载
我们的页面有时候会引入很多的包，或者第三方库文件；这时候整个页面加载速度会特别慢，我们可以通过懒加载的方式去加载这些包；来提高页面的响应速度。懒加载也就是说，我们在页面初始化的时候，不加载那些初始化不需要的包文件，只在需要包的函数中，进行异步加载包文件，如下面代码：这里，只要我们点击页面的时候才会需要lodash包，所以，我们通过异步加载，在页面首次加载的时候，不对该包进行加载；这样来提高页面的响应速度。
```js
// index.js

function getComponent () {
  return import(/* webpackChunkName:"lodash"*/'lodash').then(({default: _}) => {
    var element = document.createElement('div')
    element.innerHTML = _.join(['a','b','c'],'***')
    return element
  })
}
// 点击页面才会执行
document.addEventListener('click', () => {
  getComponent ().then((element) => {
    document.body.appendChild(element)
  })
})
```
可以使用异步函数async来改写上面的函数
```js
// index.js

async function getComponent () {
  const {default: _} = await import(/* webpackChunkName:"lodash"*/'lodash');
  const element = document.createElement('div')
  element.innerHTML = _.join(['a','b','c'],'***')
  return element
}
// 点击页面才会执行
document.addEventListener('click', () => {
  getComponent ().then((element) => {
    document.body.appendChild(element)
  })
})
```
### 打包分析
webpack打包分析工具：https://github.com/webpack/analyse 如果要使用这个工具对我们打包生成的代码进行分析，我们首先需要生成一个打包过程的描述文件；通过这样命令webpack --profile --json > stats.json，我们在package.json里面进行配置我们的打包命令：代码意思是，我们会将打包过程的描述信息放置到stats.json这个文件中
```json
// package.json

"scripts": {
  "dev-build": "webpack --profile --json > stats.json --config ./build/webpack.dev.js"
}
```
然后点击进入这个网站http://webpack.github.io/analyse/（需要科学上网），上传我们打包的描述信息文件，会生成一个分析结果
### preloading prefetching
前端性能优化不是靠做缓存 而是在代码覆盖率上(通过异步加载代码的方式)
```js
// index.js

document.addEventListener('click', () => {
  const element = document.createElement('div')
  element.innerHTML = 'webpack'
  document.body.appendChild(element)
})
```
我们在页面初始化的时候，并没有用到这些；我们可以打开控制台，按ctrl+shift+p然后输入>show coverage来查看我们文件的覆盖率：绿色的是页面加载有用的内容
上面这段与页面交互的代码，没有被利用；页面一开始并没有使用这个交互式的函数，所以在页面初始化加载的时候，将这些代码全部下载进行加载，会浪费项目的性能。这种交互的代码最好是放在一个异步加载的模块里面，我们新建一个click.js文件，里面写我们异步加载模块等实现的交互式代码
```js
// click.js

function handleClick () {
    const element = document.createElement('div')
    element.innerHTML = 'webpack'
    document.body.appendChild(element)
}

export default handleClick
```
然后在index.js这样去引入我们的 click.js模块
```js
// index.js

document.addEventListener('click', () => {
  // func就是我们导出的handleclick方法
  import('./click.js').then(({default: func}) => {
    func();
  })
})
```
### CSS文件的代码分割
MiniCssExtractPlugin
optimize-css-assets-webpack-plugin 做代码压缩
我们在输出配置的时候可以添加一个chunkFilename的配置项；我们配置的入口文件在打包输出的时候其实是根据filename: '[name].js',我们配置的这个进行打包输出，而其他的打包输出文件会根据我们配置的chunkFilename的配置项，来进行打包输出；我们之前打包css，打包成功之后会将css与js文件打包在一起；我们现在想把我们的css文件打包输出的时候也跟打包js文件一样单独输出，这时候就需要这个MiniCssExtractPlugin插件，来帮助我们：
输入命令npm install --save-dev mini-css-extract-plugin进行安装这个插件，需要注意的是，这个插件不支持热更新，在开发环境的时候使用，开发效率较低，我们修改css样式之后，得手动刷新浏览器；一般我们在线上环境会使用这个插件。在开发环境的配置中添加下面的配置
```js
// webpack.dev.js

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const prodConfig = {
    // 配置打包模式
    mode: 'production',
    devtool: 'cheap-module-source-map',
    plugins: [
      new MiniCssExtractPlugin({})
    ]
}
// 模块导出的是两个文件的合并
module.exports = merge(commonConfig, prodConfig)
```
然后在打包的规则中，配置打包css文件的时候使用该插件提供的loader，把css单独打包成一个文件。然我们修改生产环境的配置，配置打包css文件的规则，如下代码：开发环境的打包css的规则可以不用修改
```js
// webpack.prod.js

module: {
  rules: [
    {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        },
        'sass-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader'
      ]
    }
  ]
}
```
然后我们只想打包会发现并没有生成一个css文件，是因为我们前面配置了tree shaking会检测引入的包是否使用，如果没有使用就会去除，不会进行打包；我们可以修改package.json里面的配置，让其不对css文件进行检查
```json
// package.json

"sideEffects": [
  "*.css"
]
```
我们还可以在MiniCssExtractPlugin添加很多配置项，如下面代码：当打包的文件直接引入到页面的时候他的命名规则会走filename的配置项，如果是间接引入到页面，就会走下面的chunkFilename的配置项。如果页面直接引入了多个css文件，会直接将这些文件合并打包到一个main.css文件中
```js
// webpack.common.js

plugins: [
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].chunk.css',
  })
]
```
需要压缩css文件，我们使用一个插件，输入命令进行安装：npm install --save-dev optimize-css-assets-webpack-plugin,然后在webpack.prod.js里面引入这个插件，进行配置如下：
```js
// webpack.prod.js

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const prodConfig = {
    optimization: {
      minimizer: [new OptimizeCssAssetsPlugin({})]
    }
  }
```
多个js入口文件引入的css文件打包输出为一个文件
我们需要通过代码分割的配置添加一个styles的组，配置如下：enforce: true,就是说忽略掉我们配置的其他有关css文件打包的默认参数
```js
// webpack.prod.js

splitChunks: {
  cacheGroups: {
    styles: {
      name: 'styles',
      test: /\.css$/,
      chunks: 'all',
      enforce: true,
    }
  }
}
```
根据配置入口js文件不同，对其中引入的css文件进行单独打包
我们还可以根据我们配置的js文件，对每个文件中引入的css文件打包输出成单独的一个文件。如下面配置：入口文件有foo跟bar，分别进行打包输出为不同的文件
```js
// webpack.prod.js

splitChunks: {
  cacheGroups: {
    fooStyles: {
      name: 'foo',
      test: (m, c, entry = 'foo') =>
        m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
      chunks: 'all',
      enforce: true,
    },
    barStyles: {
      name: 'bar',
      test: (m, c, entry = 'bar') =>
        m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
      chunks: 'all',
      enforce: true,
    }
  }
}
```
### webpack与浏览器缓存
我们每次打包之后的文件，如果不做添加文件修改，打包输出的文件每次都是一样的；这会导致浏览器加在我们的代码的时候出现使用缓存中已经缓存好的文件；这时候我们可以在打包输出的配置进行修改添加一个打包输出文件的唯一标识符：contenthash是文件的hash值；如果打包输出的文件没有变化，这个值不变，如果有变化，对应的这个值也会变化
```js
// webpack.common.js

output: {
  filename: '[name].[contenthash].js',
  chunkFilename: '[name].[contenthash].js'
}
```
对于新版本的webpack4.x打包之后如果文件没有更改，会保持不变，但是老版本的webpack4.x货值之前的版本，有可能会发生变化，这个时候我们需要在optimization选项中添加下面的配置
```js
// webpack.common.js

optimization: {
  runtimeChunk: {
    name: 'runtime'
  }
}
```
### shimming
webpack 编译器(compiler)能够识别遵循ES2015模块语法、CommonJS或 AMD规范编写的模块。然而，一些第三方的库(library)可能会引用一些全局依赖（例如 jQuery中的$）。这些库也可能创建一些需要被导出的全局变量。这些“不符合规范的模块”就是 shimming发挥作用的地方，在webpack中，每个库文件是单独的，彼此隔离的；如下面的代码：
新建的一个jquery.ui.js我们使用了jquery但是我们的库文件没有引入它。
```js
// jquery.ui.js

export function ui () {
  $('body').css('background', 'red')
}

// index.js

import _ from 'lodash'
import $ from 'jquery'
import { ui } from './jquery.ui.js'
ui();
const dom = $('<div>')
dom.html(_.join(['dell', 'lee'], '---'))
$('body').append(dom)
```
这样会提示$没有定义，我们原本想着前面引入了jquery为什么还是没用，就是因为在webpack中，每个库文件是单独的，彼此隔离的，我们一般引入的库文件是第三方的，存放在node_module中，我们也不可能去修改它里面的内容，所以这时候就需要使用Shimming来解决问题；修改我们的webpack.common.js:new webpack.ProvidePlugin这个webpack自带的插件会进行对打包文件进行检查，如果检测到你的代码中有$这个符号，他会自动帮你引入jquery模块。然后将jquery模块赋值给$字符串
```js
// webpack.common.js

const webpack = require('webpack')
module.exports = {
  // 添加插件清空打包路径以及根据模板进行打包html文件
  plugins: [
    .....
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ]
}
```
利用Shimming改变模块中this指向window
我们在模块中，比如我们的入口文件，我们打印console.log(this === window);会发现，里面的this指向并不是window对象，我们可以借助一些loader:输入命令进行安装npm install imports-loader --save-dev,然后进行修改webpack.common.js中打包js文件的配置：loader: "imports-loader?this=>window"当我们打包js文件的时候，会走下面的规则，然后将我们每个模块中的this指向我们的windos对象。
```js
// webpack.common.js

module: {
  rules: [{ 
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
      {
        loader: "babel-loader",
      },
      {
        loader: "imports-loader?this=>window"
      }
    ]
  }]
}
```
### 环境变量的使用
可以对之前的分环境代码进行修改
```json
// package.json

"scripts": {
  "dev": "webpack-dev-server --config ./build/webpack.common.js",
  "build": "webpack --env production --config ./build/webpack.common.js",
  "dev-build": "webpack --config ./build/webpack.common.js",
}
```
```js
// webpack.common.js
module.exports = (production) => {
  if (production) {
    return merge (commonConfig, prodConfig)
  } else {
    return merge (commonConfig, devConfig)
  }
}
```
## 实战配置案例
### Library的打包
### PWA的打包配置
http-server
work-webpack-plugin
利用了service work
### TypeScript的打包配置
ts-loader typescript
安装lodash对应的类型声明文件
@types/lodash
```shell
# tsconfig.json
{
  "compilerOptions": {
    "outDir":"./dist",
    "module": "es6",
    "target":"es5",
    "allowJs":true
  }
}
```
### webpackDevServer实现请求转发
### EsLint
npm install eslint  
npx eslint --init
npx eslint src
### 性能优化
1.尽可能使用新的npm yarn node 版本
2.尽可能少的模块应用loader 使用include exclude
3.plugin尽可能精简并保证可靠 css代码压缩只在线上环境使用
4.resolve参数合理配置
```js
// webpack.dev.js

resolve: {
  extentions: ['js', 'jsx'],
  mainFiles: ['index','child'], // 引入某个目录下的文件时会先查找是否存在index文件，不存在再查找child文件 (不推荐使用)
  alias: {
    @: path.resolve(__dirname, '../src/')
  }
}
```
5.使用dllplugin提高打包速度
npm install add-asset-html-webpack-plugin
目标：第三方模块只打包一次
1.第三方模块打包一次
2.我们引入第三方模块的时候，要去使用dll文件引入
6.控制包文件大小
treeShaking splitChunksPlugin
7.thread-loader,parallel-webpack,happypack多进程打包
8.合理使用sourceMap
9.结合stats分析打包结果
10.开发环境无用插件剔除
### 多页面打包
## 如何编写一个loader
npm install loader-utils
通过loaderUtils获取传递进来的参数
const options = loaderUtils.getOptions(this)

同步或者异步调用的并返回多个结果的函数。预期的参数是：
```js
this.callback (
  err: Error | null,
  content: string | Buffer,
  sourceMap?: SourceMap,
  meta?: any
)
// 异步返回结果
const callback = this.async()
callback(result)

resolveLoader: {
  modules: ['mode_modules', './loaders']
}
```
## 如何编写一个plugin
## bundler源码编写
npm install cli-highlight -g 高亮显示代码
node bundler.js | highlight
npm install @babel/parser --save
npm install @babel/traverse --save
npm install @babel/core --save
npm install @babel/preset-env --save
dependencies graph