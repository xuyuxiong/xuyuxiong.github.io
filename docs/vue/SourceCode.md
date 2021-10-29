# Vue Source Code

## 事件循环 EventLoop
浏览器为了协调事件处理、脚本执行、网络请求和渲染等任务而制定的工作机制。
## 宏任务Task
代表一个个离散的、独立的工作单位。浏览器完成一个宏任务，在下一个宏任务执行开始前，会对页面进行重新渲染。主要包括创建文档对象、解析HTML、执行主线JS代码以及各种事件。如页面加载、输入、网络事件和定时器等。
## 微任务
微任务是更小的任务，在当前宏任务执行结束后立即执行的任务。如果存在微任务，浏览器会清空微任务队列之后再重新渲染。微任务的例子有Promise回调哈桑农户、DOM变化等。