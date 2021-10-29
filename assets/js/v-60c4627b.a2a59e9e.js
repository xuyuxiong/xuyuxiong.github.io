"use strict";(self.webpackChunkvuepress_starter=self.webpackChunkvuepress_starter||[]).push([[8325],{6890:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-60c4627b",path:"/frontend/DOM.html",title:"DOM操作",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"常见DOM操作",slug:"常见dom操作",children:[{level:3,title:"获取查找DOM元素",slug:"获取查找dom元素",children:[]}]},{level:2,title:"给DOM增加样式",slug:"给dom增加样式",children:[{level:3,title:"给元素增加样式",slug:"给元素增加样式",children:[]},{level:3,title:"给元素增加class",slug:"给元素增加class",children:[]},{level:3,title:"判断元素上是否有某个元素",slug:"判断元素上是否有某个元素",children:[]}]},{level:2,title:"操作DOM上的属性",slug:"操作dom上的属性",children:[{level:3,title:"新增属性",slug:"新增属性",children:[]},{level:3,title:"获取属性的值",slug:"获取属性的值",children:[]},{level:3,title:"删除属性",slug:"删除属性",children:[]}]},{level:2,title:"DOM元素的增删改查",slug:"dom元素的增删改查",children:[{level:3,title:"创建DOM元素",slug:"创建dom元素",children:[]},{level:3,title:"删除DOM元素",slug:"删除dom元素",children:[]},{level:3,title:"复制DOM",slug:"复制dom",children:[]},{level:3,title:"插入DOM",slug:"插入dom",children:[]},{level:3,title:"替换DOM",slug:"替换dom",children:[]},{level:3,title:"删除DOM",slug:"删除dom",children:[]},{level:3,title:"遍历DOM",slug:"遍历dom",children:[]},{level:3,title:"元素节点类型",slug:"元素节点类型",children:[]}]},{level:2,title:"获取屏幕宽高",slug:"获取屏幕宽高",children:[{level:3,title:"获取实际屏幕宽高",slug:"获取实际屏幕宽高",children:[]},{level:3,title:"获取浏览器宽高",slug:"获取浏览器宽高",children:[]},{level:3,title:"获取当前窗口的宽高(浏览器视口宽高)",slug:"获取当前窗口的宽高-浏览器视口宽高",children:[]},{level:3,title:"获取元素布局宽高",slug:"获取元素布局宽高",children:[]},{level:3,title:"获取元素内容宽高",slug:"获取元素内容宽高",children:[]},{level:3,title:"获取滚动后被隐藏页面的宽高",slug:"获取滚动后被隐藏页面的宽高",children:[]},{level:3,title:"获取元素距离顶部和左边的距离",slug:"获取元素距离顶部和左边的距离",children:[]}]},{level:2,title:"浏览器原生事件盘点",slug:"浏览器原生事件盘点",children:[{level:3,title:"鼠标事件",slug:"鼠标事件",children:[]}]},{level:2,title:"Javascript原生对象盘点",slug:"javascript原生对象盘点",children:[{level:3,title:"时间对象Date",slug:"时间对象date",children:[]},{level:3,title:"Math对象",slug:"math对象",children:[]}]}],filePathRelative:"frontend/DOM.md",git:{updatedTime:1635519893e3,contributors:[{name:"徐誉雄",email:"xuyuxiong@shinemo.com",commits:1}]}}},5279:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="dom操作" tabindex="-1"><a class="header-anchor" href="#dom操作" aria-hidden="true">#</a> DOM操作</h1><h2 id="常见dom操作" tabindex="-1"><a class="header-anchor" href="#常见dom操作" aria-hidden="true">#</a> 常见DOM操作</h2><h3 id="获取查找dom元素" tabindex="-1"><a class="header-anchor" href="#获取查找dom元素" aria-hidden="true">#</a> 获取查找DOM元素</h3><p>document.getElementById(idName) document.getElementsByClassName(className)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> doms <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> domsArr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>doms<span class="token punctuation">)</span>\ndomsArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">dom</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>document.getElementByTagName(tagName) document.querySelectorAll()</p><h2 id="给dom增加样式" tabindex="-1"><a class="header-anchor" href="#给dom增加样式" aria-hidden="true">#</a> 给DOM增加样式</h2><h3 id="给元素增加样式" tabindex="-1"><a class="header-anchor" href="#给元素增加样式" aria-hidden="true">#</a> 给元素增加样式</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ele<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> xxx\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="给元素增加class" tabindex="-1"><a class="header-anchor" href="#给元素增加class" aria-hidden="true">#</a> 给元素增加class</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ele<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;xxx&#39;</span>\nele<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">)</span>\nele<span class="token punctuation">.</span>className <span class="token operator">+=</span> <span class="token string">&#39; xxx&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="判断元素上是否有某个元素" tabindex="-1"><a class="header-anchor" href="#判断元素上是否有某个元素" aria-hidden="true">#</a> 判断元素上是否有某个元素</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ele<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="操作dom上的属性" tabindex="-1"><a class="header-anchor" href="#操作dom上的属性" aria-hidden="true">#</a> 操作DOM上的属性</h2><h3 id="新增属性" tabindex="-1"><a class="header-anchor" href="#新增属性" aria-hidden="true">#</a> 新增属性</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ele<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-id&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取属性的值" tabindex="-1"><a class="header-anchor" href="#获取属性的值" aria-hidden="true">#</a> 获取属性的值</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ele<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-id&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="删除属性" tabindex="-1"><a class="header-anchor" href="#删除属性" aria-hidden="true">#</a> 删除属性</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ele<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-id&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="dom元素的增删改查" tabindex="-1"><a class="header-anchor" href="#dom元素的增删改查" aria-hidden="true">#</a> DOM元素的增删改查</h2><h3 id="创建dom元素" tabindex="-1"><a class="header-anchor" href="#创建dom元素" aria-hidden="true">#</a> 创建DOM元素</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="删除dom元素" tabindex="-1"><a class="header-anchor" href="#删除dom元素" aria-hidden="true">#</a> 删除DOM元素</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ele<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nele<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>childEle<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="复制dom" tabindex="-1"><a class="header-anchor" href="#复制dom" aria-hidden="true">#</a> 复制DOM</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ele<span class="token punctuation">.</span><span class="token function">cloneNode</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&quot;box&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\np<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&quot;文字节点&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> p2 <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">cloneNode</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 复制一个p  参数true标识深度复制，如果p里面有子节点也复制过来</span>\nbox<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>\nbox<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="插入dom" tabindex="-1"><a class="header-anchor" href="#插入dom" aria-hidden="true">#</a> 插入DOM</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ele<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span>\nparentEle<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>newEle<span class="token punctuation">,</span> reference<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="替换dom" tabindex="-1"><a class="header-anchor" href="#替换dom" aria-hidden="true">#</a> 替换DOM</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>parentEle<span class="token punctuation">.</span><span class="token function">replaceChild</span><span class="token punctuation">(</span>newEle<span class="token punctuation">,</span> oldEle<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="删除dom" tabindex="-1"><a class="header-anchor" href="#删除dom" aria-hidden="true">#</a> 删除DOM</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ele<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="遍历dom" tabindex="-1"><a class="header-anchor" href="#遍历dom" aria-hidden="true">#</a> 遍历DOM</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>parentNode <span class="token comment">// 查找指定节点的父节点</span>\nnextSibling <span class="token comment">// 查找指定节点的下一个节点</span>\npreviousSibling <span class="token comment">// 查找指定节点的上一个节点</span>\nfirstChild <span class="token comment">// 查找指定节点的第一个子节点</span>\nlastChild <span class="token comment">// 查找指定节点的最后一个子节点</span>\nchildElementCount <span class="token comment">// 返回子元素的个数，不包括文本节点和注释</span>\nfirstElementChild <span class="token comment">// 返回第一个子元素</span>\nlastElementChild <span class="token comment">// 返回最后一个子元素</span>\npreviousElementSibling <span class="token comment">// 返回前一个相邻兄弟元素</span>\nnextElementSibling <span class="token comment">// 返回后一个相邻兄弟元素</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="元素节点类型" tabindex="-1"><a class="header-anchor" href="#元素节点类型" aria-hidden="true">#</a> 元素节点类型</h3><p>W3C: https://www.w3school.com.cn/jsref/prop_node_nodetype.asp 常见的： 元素节点 1 属性节点 2 文本节点 3 注释节点 8 根节点(Document) 9 文档片段(DocumentFragment) 11</p><h2 id="获取屏幕宽高" tabindex="-1"><a class="header-anchor" href="#获取屏幕宽高" aria-hidden="true">#</a> 获取屏幕宽高</h2><h3 id="获取实际屏幕宽高" tabindex="-1"><a class="header-anchor" href="#获取实际屏幕宽高" aria-hidden="true">#</a> 获取实际屏幕宽高</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> w <span class="token operator">=</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width\n<span class="token keyword">const</span> h <span class="token operator">=</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="获取浏览器宽高" tabindex="-1"><a class="header-anchor" href="#获取浏览器宽高" aria-hidden="true">#</a> 获取浏览器宽高</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> w <span class="token operator">=</span> window<span class="token punctuation">.</span>outerWidth\n<span class="token keyword">const</span> h <span class="token operator">=</span> window<span class="token punctuation">.</span>outerHeight\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="获取当前窗口的宽高-浏览器视口宽高" tabindex="-1"><a class="header-anchor" href="#获取当前窗口的宽高-浏览器视口宽高" aria-hidden="true">#</a> 获取当前窗口的宽高(浏览器视口宽高)</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> w <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth\n<span class="token keyword">const</span> h <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="获取元素布局宽高" tabindex="-1"><a class="header-anchor" href="#获取元素布局宽高" aria-hidden="true">#</a> 获取元素布局宽高</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> w <span class="token operator">=</span> ele<span class="token punctuation">.</span>offsetWidth\n<span class="token keyword">const</span> h <span class="token operator">=</span> ele<span class="token punctuation">.</span>offsetHeight\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="获取元素内容宽高" tabindex="-1"><a class="header-anchor" href="#获取元素内容宽高" aria-hidden="true">#</a> 获取元素内容宽高</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> w <span class="token operator">=</span> ele<span class="token punctuation">.</span>scrollWidth\n<span class="token keyword">const</span> h <span class="token operator">=</span> ele<span class="token punctuation">.</span>scrollHeight\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="获取滚动后被隐藏页面的宽高" tabindex="-1"><a class="header-anchor" href="#获取滚动后被隐藏页面的宽高" aria-hidden="true">#</a> 获取滚动后被隐藏页面的宽高</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> w <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollLeft\n<span class="token keyword">const</span> h <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="获取元素距离顶部和左边的距离" tabindex="-1"><a class="header-anchor" href="#获取元素距离顶部和左边的距离" aria-hidden="true">#</a> 获取元素距离顶部和左边的距离</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> top <span class="token operator">=</span> ele<span class="token punctuation">.</span>offsetTop\n<span class="token keyword">const</span> left <span class="token operator">=</span> ele<span class="token punctuation">.</span>offsetLeft\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="浏览器原生事件盘点" tabindex="-1"><a class="header-anchor" href="#浏览器原生事件盘点" aria-hidden="true">#</a> 浏览器原生事件盘点</h2><h3 id="鼠标事件" tabindex="-1"><a class="header-anchor" href="#鼠标事件" aria-hidden="true">#</a> 鼠标事件</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 单击事件</span>\nele<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onclick&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n\n <span class="token comment">// 双击事件</span>\nele<span class="token punctuation">.</span><span class="token function-variable function">ondblclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;ondblclick&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 右击事件</span>\nele<span class="token punctuation">.</span><span class="token function-variable function">oncontextmenu</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;oncontextmenu&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 鼠标按下事件</span>\nele<span class="token punctuation">.</span><span class="token function-variable function">onmousedown</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onmousedown&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 鼠标移动事件</span>\nele<span class="token punctuation">.</span><span class="token function-variable function">onmousemove</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onmousemove&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 鼠标抬起事件</span>\nele<span class="token punctuation">.</span><span class="token function-variable function">onmouseup</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onmouseup&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 鼠标进来事件</span>\n<span class="token comment">// 鼠标移动到自身时候会触发事件，同时移动到其子元素身上也会触发事件</span>\nele<span class="token punctuation">.</span><span class="token function-variable function">onmouseover</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onmouseover&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 鼠标移动到自身是会触发事件，但是移动到其子元素身上不会触发事件</span>\nele<span class="token punctuation">.</span><span class="token function-variable function">onmouseenter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onmouseenter&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 鼠标离开事件</span>\n<span class="token comment">// 鼠标移动到自身时候会触发事件，同时移动到其子元素身上也会触发事件</span>\nele<span class="token punctuation">.</span><span class="token function-variable function">onmouseout</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onmouseout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 鼠标移动到自身时会触发事件，但是移动到其子元素身上不会触发事件</span>\nele<span class="token punctuation">.</span><span class="token function-variable function">onmouseleave</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onmouseleave&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 键盘事件</span>\nkeydown <span class="token comment">// 当用户按下键盘上的任意键时触发，而且如果按住按住不放的话，会重复触发此事件。</span>\nkeypress <span class="token comment">// 当用户按下键盘上的字符键时触发（就是说用户按了一个能在屏幕上输出字符的按键keypress事件才会触发），而且如果按住不放的，会重复触发此事件（按下Esc键也会触发这个事件）。</span>\nkeyup <span class="token comment">// 当用户释放键盘上的键时触发</span>\n\n<span class="token comment">// 表单事件</span>\nsubmit <span class="token comment">// 表单提交</span>\nreset <span class="token comment">// 表单重置</span>\nchange <span class="token comment">// 值发生改变</span>\nblur <span class="token comment">// 离焦（不会冒泡）</span>\nfocus <span class="token comment">// 聚焦（不会冒泡）</span>\n\n<span class="token comment">// window</span>\n<span class="token comment">// window 事件指的是浏览器窗口本身而不是窗口内的文档对象</span>\nonload <span class="token comment">// 当文档和资源加载完成后调用</span>\nunload <span class="token comment">// 当用户离开当前文档转而其他文档时调用</span>\nresize <span class="token comment">// 浏览器窗口改变</span>\n\n<span class="token comment">// 其他事件</span>\nbeforeunload <span class="token comment">// 关闭浏览器窗口之前触发的事件</span>\nDOMContentLoaded <span class="token comment">// 文档对象加载完成之后就触发的事件，无需等待样式、图片等资源</span>\nreadystatechange <span class="token comment">// document有 readyState 属性来描述 document 的 loading状态，readyState 的改变会触发 readystatechange 事件，document.readyState === &#39;complete&#39; 页面已加载完毕 document.readyState === &#39;loading&#39; 页面正在加载</span>\npageShow 和 pagehide <span class="token comment">// 每次用户浏览关闭页面时触发</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br></div></div><h2 id="javascript原生对象盘点" tabindex="-1"><a class="header-anchor" href="#javascript原生对象盘点" aria-hidden="true">#</a> Javascript原生对象盘点</h2><h3 id="时间对象date" tabindex="-1"><a class="header-anchor" href="#时间对象date" aria-hidden="true">#</a> 时间对象Date</h3><h3 id="math对象" tabindex="-1"><a class="header-anchor" href="#math对象" aria-hidden="true">#</a> Math对象</h3><p>Math.abs()：取绝对值 Math.ceil()：向上取整 Math.floor()：向下取整 Math.round()：四舍五入 Math.max()：取最大值 Math.min()：取最小值 Math.random()：产生0-1的随机数 Math.pow()：次方 Math.sqrt()：平方根</p>',59),p={},t=(0,a(3744).Z)(p,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);