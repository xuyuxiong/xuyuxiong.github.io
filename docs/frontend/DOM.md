# DOM操作
## 常见DOM操作
### 获取查找DOM元素
document.getElementById(idName)
document.getElementsByClassName(className)
```js
const doms = document.getElementByClassName('xxx')
const domsArr = Array.from(doms)
domsArr.forEach(dom => {})
```
document.getElementByTagName(tagName)
document.querySelectorAll()
## 给DOM增加样式
### 给元素增加样式
```js
ele.style.width = xxx
```
### 给元素增加class
```js
ele.className = 'xxx'
ele.classList.add('xxx')
ele.className += ' xxx'
```
### 判断元素上是否有某个元素
```js
ele.classList.contains('xxx')
```
## 操作DOM上的属性
### 新增属性
```js
ele.setAttribute('data-id', 1)
```
### 获取属性的值
```js
ele.getAttribute('data-id')
```
### 删除属性
```js
ele.removeAttribute('data-id')
```
## DOM元素的增删改查
### 创建DOM元素
```js
const p = document.createElement('p')
```
### 删除DOM元素
```js
ele.remove()
ele.removeChild(childEle)
```
### 复制DOM
```js
ele.cloneNode(true | false)

const box = document.getElementsByClassName("box")[0];
const p = document.createElement("p");
p.innerText = "文字节点";
const p2 = p.cloneNode(true); // 复制一个p  参数true标识深度复制，如果p里面有子节点也复制过来
box.appendChild(p);
box.appendChild(p2);
```
### 插入DOM
```js
ele.appendChild(ele)
parentEle.insertBefore(newEle, reference)
```
### 替换DOM
```js
parentEle.replaceChild(newEle, oldEle)
```
### 删除DOM
```js
ele.removeChild(ele)
```
### 遍历DOM
```js
parentNode // 查找指定节点的父节点
nextSibling // 查找指定节点的下一个节点
previousSibling // 查找指定节点的上一个节点
firstChild // 查找指定节点的第一个子节点
lastChild // 查找指定节点的最后一个子节点
childElementCount // 返回子元素的个数，不包括文本节点和注释
firstElementChild // 返回第一个子元素
lastElementChild // 返回最后一个子元素
previousElementSibling // 返回前一个相邻兄弟元素
nextElementSibling // 返回后一个相邻兄弟元素
```
### 元素节点类型
W3C: https://www.w3school.com.cn/jsref/prop_node_nodetype.asp
常见的：
元素节点 1
属性节点 2
文本节点 3
注释节点 8
根节点(Document) 9
文档片段(DocumentFragment) 11
## 获取屏幕宽高
### 获取实际屏幕宽高
```js
const w = window.screen.width
const h = window.screen.height
```
### 获取浏览器宽高
```js
const w = window.outerWidth
const h = window.outerHeight
```
### 获取当前窗口的宽高(浏览器视口宽高)
```js
const w = window.innerWidth
const h = window.innerHeight
```
### 获取元素布局宽高
```js
const w = ele.offsetWidth
const h = ele.offsetHeight
```
### 获取元素内容宽高
```js
const w = ele.scrollWidth
const h = ele.scrollHeight
```
### 获取滚动后被隐藏页面的宽高
```js
const w = document.documentElement.scrollLeft
const h = document.documentElement.scrollTop
```
### 获取元素距离顶部和左边的距离
```js
const top = ele.offsetTop
const left = ele.offsetLeft
```
## 浏览器原生事件盘点
### 鼠标事件
```js
// 单击事件
ele.onclick = function () {
    console.log("onclick");
 }

 // 双击事件
ele.ondblclick = function () {
  console.log("ondblclick");
}

// 右击事件
ele.oncontextmenu = function () {
  console.log("oncontextmenu")
}

// 鼠标按下事件
ele.onmousedown = function () {
  console.log("onmousedown");
}

// 鼠标移动事件
ele.onmousemove = function () {
  console.log("onmousemove");
}

// 鼠标抬起事件
ele.onmouseup = function () {
  console.log("onmouseup");
}

// 鼠标进来事件
// 鼠标移动到自身时候会触发事件，同时移动到其子元素身上也会触发事件
ele.onmouseover = function () {
  console.log("onmouseover");
}
// 鼠标移动到自身是会触发事件，但是移动到其子元素身上不会触发事件
ele.onmouseenter = function () {
  console.log("onmouseenter");
}

// 鼠标离开事件
// 鼠标移动到自身时候会触发事件，同时移动到其子元素身上也会触发事件
ele.onmouseout = function () {
  console.log("onmouseout");
}
// 鼠标移动到自身时会触发事件，但是移动到其子元素身上不会触发事件
ele.onmouseleave = function () {
  console.log("onmouseleave");
}

// 键盘事件
keydown // 当用户按下键盘上的任意键时触发，而且如果按住按住不放的话，会重复触发此事件。
keypress // 当用户按下键盘上的字符键时触发（就是说用户按了一个能在屏幕上输出字符的按键keypress事件才会触发），而且如果按住不放的，会重复触发此事件（按下Esc键也会触发这个事件）。
keyup // 当用户释放键盘上的键时触发

// 表单事件
submit // 表单提交
reset // 表单重置
change // 值发生改变
blur // 离焦（不会冒泡）
focus // 聚焦（不会冒泡）

// window
// window 事件指的是浏览器窗口本身而不是窗口内的文档对象
onload // 当文档和资源加载完成后调用
unload // 当用户离开当前文档转而其他文档时调用
resize // 浏览器窗口改变

// 其他事件
beforeunload // 关闭浏览器窗口之前触发的事件
DOMContentLoaded // 文档对象加载完成之后就触发的事件，无需等待样式、图片等资源
readystatechange // document有 readyState 属性来描述 document 的 loading状态，readyState 的改变会触发 readystatechange 事件，document.readyState === 'complete' 页面已加载完毕 document.readyState === 'loading' 页面正在加载
pageShow 和 pagehide // 每次用户浏览关闭页面时触发
```
## Javascript原生对象盘点
### 时间对象Date
### Math对象
Math.abs()：取绝对值
Math.ceil()：向上取整
Math.floor()：向下取整
Math.round()：四舍五入
Math.max()：取最大值
Math.min()：取最小值
Math.random()：产生0-1的随机数
Math.pow()：次方
Math.sqrt()：平方根

