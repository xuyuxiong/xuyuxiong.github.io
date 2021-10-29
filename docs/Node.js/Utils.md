# Node.js常用模块
## fs-extra
[fs-extra](https://www.npmjs.com/package/fs-extra)
- API
copy 复制文件
emptyDir 清空目录
ensureFile 创建文件
ensureDir 创建目录
move 移动文件或目录
outputFile 几乎和writeFile相同 除了如果父目录不存在则创建它
## path.resolve()
该方法将一些的 路径/路径段 解析为绝对路径
```js
var path = require("path")     //引入node的path模块

path.resolve('/foo/bar', './baz')   // returns '/foo/bar/baz'
path.resolve('/foo/bar', 'baz')   // returns '/foo/bar/baz'
path.resolve('/foo/bar', '/baz')   // returns '/baz'
path.resolve('/foo/bar', '../baz')   // returns '/foo/baz'
path.resolve('home','/foo/bar', '../baz')   // returns '/foo/baz'
path.resolve('home','./foo/bar', '../baz')   // returns '/home/foo/baz'
path.resolve('home','foo/bar', '../baz')   // returns '/home/foo/baz'
path.resolve('home', 'foo', 'build','aaaa','aadada','../../..', 'asset') //return '/home/foo/asset'
```