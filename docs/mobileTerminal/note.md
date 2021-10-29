# 移动web开发
## 基础概念
### 像素
物理像素 设备像素 
CSS像素(实际开发中使用的像素) 逻辑像素 设备独立像素
设备像素比(dpr:device pixel ratio)
dpr = 设备像素/CSS像素
ppi 每英寸的物理像素点
获取设备宽度：
widow.innerWidth / document.documentElement.clientWidth / document.documentElement.getBoundingClientRect().width
获取设备像素比：
window.devicePixelRatio
### 媒体查询
- 什么是媒体查询
@media screen and(min-width:900px){}  查询设备类型和大小
- 为什么需要媒体查询
一套样样式不可能适应各种大小的屏幕
针对不同的屏幕大小写样式
- 媒体类型
all(default) screen print speech ...
- 媒体查询中的逻辑
与(and) 或(,) 非(not)
- 媒体特征表达式
@media(-webkit-device-pixel-ratio: 2){

}
## 移动端事件

## 移动端调试

## 终端检测

## 移动端常见问题

## 移动端性能优化