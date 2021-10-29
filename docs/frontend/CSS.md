# CSS
## 知识点
- 绝对路径与相对路径
  绝对路径：无论从哪里出发，通过这个地址都能找到目标(就是完整的文件地址)
  相对路径：你往前走一百米，然后左转再走两百米就到了（相对于当前位置）
- 普通选择器优先级
  当优先级高的选择器 和 优先级低的选择器 给同一个元素，添加同一个样式
  会以优先级高的样式为准，最终显示在元素上
  优先级规则（普通的选择器）
  id > class > 标签选择器 > *通配符
  行间样式 > 内部样式和外部样式
- 垂直居中大法
  ```css
  // 把父级转为单元格 display:table-cell再给父级加上vertical-align:middle
  .one {
    width: 200px;
    height: 200px;
    display: table-cell;
    vertical-align: middle;
  }
  .two {
    width: 50px;
    height: 50px;
    background: #008c8c;
  }
  // 使用line-height居中，有时不是绝对的居中
  .one {
    width: 200px;
    height: 200px;
    line-height: 200px;
  }
  .two {
    width: 50px;
    height: 50px;
    background: #008c8c;
    display: inline-block;
  }
  ```
- 横向布局
(1)转化为inline-block  
  - 注：元素换行会产生空格，给父级加font-size:0;进行处理
  - 注：转化为inline-block之后记得给元素加上vertical-align:top;（默认基线对齐	方式改为顶部对齐，处理底部出现空隙的问题）

  (2)浮动  
  -  注：记得清除浮动
- 文档流（normal flow）
  文档流，也叫正常流、普通流。
  指页面中的默认布局：元素从左至右、从上到下显示。
- 伪元素（before和after）
  伪元素：利用css给一个标签创建出来的子级元素，该元素在页面中真实存在，但是在html中并不存在。
- 清浮动
  1. 如果可以使用固定高度，可以直接给父级添加固定高度
  2. 利用\<br/>达到清除浮动的效果
  3. 使用clear属性清除浮动
  4. 利用伪元素清除浮动
- CSS3 transition 过渡
  transition-duration 过渡持续时间
  transition-property 想要执行的过渡样式
  transition-delay 过渡延迟时间
  transition-timing-function 过渡执行动画
    - linear 整个过程保持相同的速度
    - ease 慢速开始，然后加速，在慢下来，结束时特别慢（默认值）
    - ease-in 慢速开始，然后加速
    - ease-out 快速开始，然后减速
    - ease-in-out 与ease类似，中间较快，两端很慢但不同速
    - cubic-bezier  三次方贝塞尔曲线cubic-bezier(x1,y1,x2,y2)
- CSS3 transform 变换
特性：
  1. 不脱离文档流
  2. 不改变文档大小
  3. 具有四种变换类别，并且允许多值书写
  4. 多值的时候，从后到前执行动画
  - translate（x，y） 位移
    - translateX（）、translateY（）、translateZ（）
    - 如果只有一个值的情况下，设置的是x
    - x、y同时移动
    - 百分比数值，基于自己本身计算
  - rotate（180deg）旋转
    - rotateX（）、rotateY（）、rotateZ（）
    - 角度（单位：deg）
    - 圈数（单位：turn）
  - scale（x，y）缩放
    - scaleX（）、scaleY（）、scaleZ（）
    - 单位：倍数
    - 如果只有一个值的情况下，同时设置x和y
    - x和y同时缩放
  - skew（x，y）斜切
    - skew（）、skewY（）
    - 单位（deg）
    - 如果只有一个值的情况下，设置的是x
  - transform-origin 变化原点
    - 关键词left、right、top、bottom
    - 数值（px）
    - 默认 center center
  - transform 3D
    - transform-style(preserve-3d) 建立3D空间
    - perspective  景深
    - perspective-origin  景深基点
- CSS3  animation 动画
  - animation-name  绑定到选择器的 keyframe 名称
  - keyframes 规定动画
    @keyframes  name {selector {//css样式;}}
    - name  必须，定义动画名称
    - selector 必须，动画时长百分比
    - 0-100%	
    - from（与 0% 相同）  to（与 100% 相同）
    @keyframes  mymove{
      0% {top:0px; background:red;}
      100% {top:200px; background:yellow;}
      }
  - animation-duration  完成动画所花费的时间，以秒或毫秒计
    - 默认值是0
  - animation-timing-function  规定动画的速度曲线
    - linear	动画从头到尾的速度是相同的。
    - ease	默认。动画以低速开始，然后加快，在结束前变慢。	
    - ease-in	动画以低速开始。	
    - ease-out	动画以低速结束。	
    - ease-in-out	动画以低速开始和结束。
    - cubic-bezier(n,n,n,n)	在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。
  - animation-delay  动画开始之前的延迟时间，默认值是0
  - animation-iteration-count  动画播放的次数
    - n	定义动画播放次数的数值。	
    - infinite	规定动画应该无限次播放。
  - animation-direction  是否应该轮流反向播放动画
    - normal	默认值。动画应该正常播放。
    - alternate	动画应该轮流反向播放。
  - animation-play-state: 属性规定动画正在运行还是暂停
    - paused|running;
  - animation-fill-mode 属性规定动画在播放之前或之后，其动画效果是否可见
    - none
    - forwards 规定动画运动完成之后，停留在最后一帧的状态
    - backwards 在动画播放之前，动画延时的这段时间里直接使用关键帧里面的第一帧样式
    - both
- flex 弹性布局
http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
- 网格布局
http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html
## 常用样式
- background - 元素背景
  background: 背景颜色 背景图 背景重复 背景定位 背景跟随滚动。对应如下：
  background: background-color background-image background-repeat background-position background-attachment
- font字体
![](https://img.imgdb.cn/item/60728a0d8322e6675c6b30d8.png)
在font复合写法里：font-size和font-family是必写的 
- 文本设置
文本对齐方式text-align：left \ right \ center
强制换行   word-break：break-all
强制不换行 white-space:nowrap
overflow：visible（默认值）\ hidden \ scroll
## 常用标签和选择器
- img标签
特性：
  1. 一行显示多个，父级宽度不够，元素换行
  2. 支持宽高
  3. 宽高等比缩放（宽高同时设定，不会等比缩放）
  4. img标签底部存在间隙（vertical-align:top;解决这个问题）
  5. 换行会被解析出一个空格
  
  换行产生间隙的解决方案：
  1. 不换行
  2. 父级font-size设置为0（常用）
  3. 利用margin-left:负值
- a标签
a标签的用途：
  1. 跳转页面
  2. 下载文件
  3. 瞄点跳转
  4. 打电话
  5. 发邮件

  特性：
  1. 一行可以显示多个，父级宽度不够会换行显示
  2. 不支持宽高
  3. 换行会产生空格
  4. 父级字体颜色的设置对其无效
  5. 有下划线

  a标签的伪类：
    - 没有被访问过的（:link）
    - 被访问过的（:visited）
    - 鼠标经过这个链接（:hover）
    - 在这个链接上按下去（:active）
    书写顺序注意按lvha(后出现的伪类会覆盖先出现的伪类)
- input表单元素(<input type="" />)
  - 用于收集用户信息，根据不同的type值，让input表单元素具备不一样的功能
  - type类型：
  A.text 单行文本输入框
  B.submit 提交
  C.password 密码框
  D.reset 重置按钮
  E.button按钮
  F.file文件上传
  G.hidden隐藏域 该表单元素的用途：
  发送信息的时候，携带一些需要后端接收，但不需要用户看到的内容,而且该请求一定是需要通过表单的form进行提交的
  H.radio 单选
  I.checkbox复选
- label标签(帮助扩大点击区域，而不是只有点击表单元素有效)
- select 下拉表单 && option 选项
- textarea 多行文本输入框
- 表单伪类
  :checked
  :focus
