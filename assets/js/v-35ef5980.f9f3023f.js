"use strict";(self.webpackChunkvuepress_starter=self.webpackChunkvuepress_starter||[]).push([[2641],{7060:(e,a,n)=>{n.r(a),n.d(a,{data:()=>s});const s={key:"v-35ef5980",path:"/blog/Bit.html",title:"位运算及应用",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"十进制转二进制(正数) ---- 除2取余，逆序排列 (ps: 小数和负数转换不一样)",slug:"十进制转二进制-正数-除2取余-逆序排列-ps-小数和负数转换不一样",children:[]},{level:3,title:"二进制转十进制 ---- 按权相加法",slug:"二进制转十进制-按权相加法",children:[]},{level:2,title:"1、按位与(&) 均1返1",slug:"_1、按位与-均1返1",children:[]},{level:2,title:"2、按位或(|) 有1返1",slug:"_2、按位或-有1返1",children:[]},{level:2,title:"3、按位异或(^) 不同返1，相同返0",slug:"_3、按位异或-不同返1-相同返0",children:[]},{level:2,title:"4、按位取反(~) 所有位取反 （二进制的反码）",slug:"_4、按位取反-所有位取反-二进制的反码",children:[]},{level:2,title:"5、有符号左移(<<) 往左移动n位",slug:"_5、有符号左移-往左移动n位",children:[]},{level:2,title:"6、有符号右移(>>) 往右移动n位（拷贝最左侧位填充到最左侧）",slug:"_6、有符号右移-往右移动n位-拷贝最左侧位填充到最左侧",children:[]},{level:2,title:"7、无符号右移(>>>) （最左侧位用0填充，所以结果一定是非0的",slug:"_7、无符号右移-最左侧位用0填充-所以结果一定是非0的",children:[]},{level:2,title:"1、判断奇偶数",slug:"_1、判断奇偶数",children:[]},{level:2,title:"2、两个数值的变量交换",slug:"_2、两个数值的变量交换",children:[]},{level:2,title:"3、权限认证 、类型判断",slug:"_3、权限认证-、类型判断",children:[]}],filePathRelative:"blog/Bit.md",git:{updatedTime:1635519893e3,contributors:[{name:"徐誉雄",email:"xuyuxiong@shinemo.com",commits:1}]}}},2245:(e,a,n)=>{n.r(a),n.d(a,{default:()=>m});var s=n(6252);const l=(0,s.uE)('<h1 id="位运算及应用" tabindex="-1"><a class="header-anchor" href="#位运算及应用" aria-hidden="true">#</a> 位运算及应用</h1><blockquote><p>在了解什么是位运算之前，让我们先来了解什么是位 ？位指计算机存储信息的最小单位，在二进制数系统中，位是通过0或1来表示。在学习一门编程语言的数据类型时，总会告诉我们 int 的存储需要 4个字节，取值范围为-2 147 483 648 ~ 2 147 483 647 。其实取值范围就是通过 位 计算出来的，由于 1 字节 = 8 位 ，所以 int 中的 1 用二进制表示为0000 0000 0000 0000 0000 0000 0000 0001 。所以位运算就是直接对整数在内存中的二进制位进行操作。</p></blockquote><h1 id="接下来先介绍下二进制和十进制的转换方式" tabindex="-1"><a class="header-anchor" href="#接下来先介绍下二进制和十进制的转换方式" aria-hidden="true">#</a> 接下来先介绍下二进制和十进制的转换方式</h1><h3 id="十进制转二进制-正数-除2取余-逆序排列-ps-小数和负数转换不一样" tabindex="-1"><a class="header-anchor" href="#十进制转二进制-正数-除2取余-逆序排列-ps-小数和负数转换不一样" aria-hidden="true">#</a> 十进制转二进制(正数) ---- 除2取余，逆序排列 (ps: 小数和负数转换不一样)</h3><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7d6a971a4674c7fbe3f417ff1f762ce~tplv-k3u1fbpfcp-watermark.image" alt=""></p><h3 id="二进制转十进制-按权相加法" tabindex="-1"><a class="header-anchor" href="#二进制转十进制-按权相加法" aria-hidden="true">#</a> 二进制转十进制 ---- 按权相加法</h3><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e103fc204de54dcdbca9eaf5edddead0~tplv-k3u1fbpfcp-watermark.image" alt=""></p><h1 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h1><h2 id="_1、按位与-均1返1" tabindex="-1"><a class="header-anchor" href="#_1、按位与-均1返1" aria-hidden="true">#</a> 1、按位与(&amp;) 均1返1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>10 &amp; 13\n10 : 0000 0000 0000 1010\n13 : 0000 0000 0000 1101\n------------------------------------------\n结果:0000 0000 0000 1000\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_2、按位或-有1返1" tabindex="-1"><a class="header-anchor" href="#_2、按位或-有1返1" aria-hidden="true">#</a> 2、按位或(|) 有1返1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>42 | 13\n42 : 0000 0000 0010 1010\n13 : 0000 0000 0000 1101\n------------------------------------------\n结果:0000 0000 0010 1111\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_3、按位异或-不同返1-相同返0" tabindex="-1"><a class="header-anchor" href="#_3、按位异或-不同返1-相同返0" aria-hidden="true">#</a> 3、按位异或(^) 不同返1，相同返0</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>42 ^ 13\n42 : 0000 0000 0010 1010\n13 : 0000 0000 0000 1101\n------------------------------------------\n结果:0000 0000 0010 0111\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_4、按位取反-所有位取反-二进制的反码" tabindex="-1"><a class="header-anchor" href="#_4、按位取反-所有位取反-二进制的反码" aria-hidden="true">#</a> 4、按位取反(~) 所有位取反 （二进制的反码）</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>42 : 0000 0000 0010 1010\n------------------------------------------\n~42: 1111 1111 1101 0101\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_5、有符号左移-往左移动n位" tabindex="-1"><a class="header-anchor" href="#_5、有符号左移-往左移动n位" aria-hidden="true">#</a> 5、有符号左移(&lt;&lt;) 往左移动n位</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>13 &lt;&lt; 2\n13 : 0000 0000 0000 1101\n----------------------------------------\n&lt;&lt;2: 0000 0000 0011 0100\n13 &lt;&lt; 2 的结果为：52 -----&gt; 13 * (2^2) = 52\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_6、有符号右移-往右移动n位-拷贝最左侧位填充到最左侧" tabindex="-1"><a class="header-anchor" href="#_6、有符号右移-往右移动n位-拷贝最左侧位填充到最左侧" aria-hidden="true">#</a> 6、有符号右移(&gt;&gt;) 往右移动n位（拷贝最左侧位填充到最左侧）</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>13 &gt;&gt; 2\n13 : 0000 0000 0000 1101\n----------------------------------------\n&gt;&gt;2: 0000 0000 0000 0011\n13 &gt;&gt; 2 的结果为：3 -----&gt; 13 / (2^2) = 3 \n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_7、无符号右移-最左侧位用0填充-所以结果一定是非0的" tabindex="-1"><a class="header-anchor" href="#_7、无符号右移-最左侧位用0填充-所以结果一定是非0的" aria-hidden="true">#</a> 7、无符号右移(&gt;&gt;&gt;) （最左侧位用0填充，所以结果一定是非0的</h2><h1 id="位运算的应用" tabindex="-1"><a class="header-anchor" href="#位运算的应用" aria-hidden="true">#</a> 位运算的应用</h1><h2 id="_1、判断奇偶数" tabindex="-1"><a class="header-anchor" href="#_1、判断奇偶数" aria-hidden="true">#</a> 1、判断奇偶数</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 偶数 &amp; 1 = 0\n// 奇数 &amp; 1 = 1\nconsole.log(2 &amp; 1)    // 0\nconsole.log(3 &amp; 1)    // 1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>从前面的二进制转十进制方法可以知道，除了最右边的位是1 X 1* 0 = 1，其他位数都是1乘以2的n次方，所以其他位数一定是偶数，由此可以得出，最后一位为1的时候一定是奇数。</p></blockquote><h2 id="_2、两个数值的变量交换" tabindex="-1"><a class="header-anchor" href="#_2、两个数值的变量交换" aria-hidden="true">#</a> 2、两个数值的变量交换</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = 5\nvar b = 8\na ^= b\nb ^= a\na ^= b\nconsole.log(a)   // 8\nconsole.log(b)   // 5\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>关键点</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>b = (a ^ b) ^ b = a ^ (b ^ b) = a ^ 0 = a;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>相同的两个数按位异或为0，一个数按位异或0为本身。</p></blockquote><h2 id="_3、权限认证-、类型判断" tabindex="-1"><a class="header-anchor" href="#_3、权限认证-、类型判断" aria-hidden="true">#</a> 3、权限认证 、类型判断</h2><p>场景：后台管理系统，操作权限分为一级、二级、三级管理员，其中一级管理员拥有最高的权限，二、三级较低，有些操作只允许一、二级管理员操作，有些操作只允许一、三级管理员操作。现在已经登陆的某权限的用户要进行某个操作，要用怎样的数据结构能很方便地判断他能不能进行这个操作呢？我们用位来表示管理权限，一级用第3位，二级用第2位，三级用第1位，即一级的权限表示为0b100 = 4，二级权限表示为0b010 = 2，三级权限表示为0b001 = 1。如果A操作只能由一级和二级操作，那么这个权限值表示为6 = 0b110，它和一级权限与一下：6 &amp; 4 = 0b110 &amp; 0b100 = 4，得到的值不为0，所以认为有权限，同理和二级权限与一下6 &amp; 2 = 2也不为0，而与三级权限与一下6 &amp; 1 = 0，所以三级没有权限。这里标志位的1表示打开，0表示关闭。这样的好处在于，我们可以用一个数字，而不是一个数组来表示某个操作的权限集，同时在进行权限判断的时候也很方便。</p><h1 id="位运算在vue里的实践" tabindex="-1"><a class="header-anchor" href="#位运算在vue里的实践" aria-hidden="true">#</a> 位运算在vue里的实践</h1><blockquote><p>VUE3使用静态标记，渲染性能得到提升，这里便使用到了位运算</p></blockquote><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2b23311f3bbe4bb0a98308b560819f7d~tplv-k3u1fbpfcp-watermark.image" alt=""></p><blockquote><p>这里的枚举类型使用有符号左移来表示标签含有的动态类型，在做判断是否存在某个动态标记的时候便可以使用 &amp; 做校验</p></blockquote><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6bfc97f1859e4dca95ea61384b199789~tplv-k3u1fbpfcp-watermark.image" alt=""></p>',37),r=(0,s.Uk)("附上源码地址 "),t={href:"https://github.com/vuejs/vue-next/blob/master/packages/shared/src/patchFlags.ts",target:"_blank",rel:"noopener noreferrer"},i=(0,s.Uk)("源码地址"),c=(0,s.Uk)("react也用到了 "),p={href:"https://github.com/facebook/react/blob/master/packages/react-dom/src/events/EventSystemFlags.js",target:"_blank",rel:"noopener noreferrer"},b=(0,s.Uk)("源码地址"),d=(0,s._)("h1",{id:"总结",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),(0,s.Uk)(" 总结")],-1),u=(0,s._)("p",null,"位运算在各大框架和库的源码都可以见到，react、vue、lodash等。懂得位运算可以作为阅读源码的前置知识，在开发系统和组件、库的时候 也可以灵活使用",-1),h={},m=(0,n(3744).Z)(h,[["render",function(e,a){const n=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[l,(0,s._)("p",null,[r,(0,s._)("a",t,[i,(0,s.Wm)(n)])]),(0,s._)("p",null,[c,(0,s._)("a",p,[b,(0,s.Wm)(n)])]),d,u],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{for(const[n,s]of a)e[n]=s;return e}}}]);