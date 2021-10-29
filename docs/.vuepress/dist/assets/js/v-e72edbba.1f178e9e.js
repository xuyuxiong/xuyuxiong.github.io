"use strict";(self.webpackChunkvuepress_starter=self.webpackChunkvuepress_starter||[]).push([[5211],{2699:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-e72edbba",path:"/frontend/DataVisualization.html",title:"数据可视化",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"http://www.youbaobao.xyz/datav-docs/",slug:"http-www-youbaobao-xyz-datav-docs",children:[]},{level:2,title:"技术栈选型",slug:"技术栈选型",children:[]},{level:2,title:"canvas 图片压缩",slug:"canvas-图片压缩",children:[]},{level:2,title:"百度地图",slug:"百度地图",children:[]}],filePathRelative:"frontend/DataVisualization.md",git:{updatedTime:1635519893e3,contributors:[{name:"徐誉雄",email:"xuyuxiong@shinemo.com",commits:1}]}}},4844:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="数据可视化" tabindex="-1"><a class="header-anchor" href="#数据可视化" aria-hidden="true">#</a> 数据可视化</h1><h2 id="http-www-youbaobao-xyz-datav-docs" tabindex="-1"><a class="header-anchor" href="#http-www-youbaobao-xyz-datav-docs" aria-hidden="true">#</a> http://www.youbaobao.xyz/datav-docs/</h2><h2 id="技术栈选型" tabindex="-1"><a class="header-anchor" href="#技术栈选型" aria-hidden="true">#</a> 技术栈选型</h2><ul><li>canvas</li><li>svg</li><li>webgl</li><li>zrender</li><li>d3</li><li>three.js</li><li>highcharts(Highcharts JS, Highstock JS, Highmaps JS)</li><li>AntV 一套数据解决方案 G2: 可视化引擎 G2Plot: 图标库 G6: 图可视化引擎 Graphin: 基于G6的图分析组件 F2: 移动可视化方案 ChartCube: AntV图标在线制作 L7: 地理空间数据可视化</li><li>echart 基本概念：系列(series) 基本概念：坐标系 是指一组数值映射成对应的图 基本概念：组件 除绘图之外的其他部分都可以抽象为组件,如x轴、y轴、grid(控制图标的位置) 基本概念：定位(grid) 基本概念：坐标系(单/双坐标系、多坐标系)</li></ul><h2 id="canvas-图片压缩" tabindex="-1"><a class="header-anchor" href="#canvas-图片压缩" aria-hidden="true">#</a> canvas 图片压缩</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>upload<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">ACCEPT</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;image/jpg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;image/png&#39;</span><span class="token punctuation">]</span>\n<span class="token keyword">const</span> <span class="token constant">MAXSIZE</span> <span class="token operator">=</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span>\n<span class="token keyword">const</span> <span class="token constant">MAXSIZE_STR</span> <span class="token operator">=</span> <span class="token string">&#39;1MB&#39;</span>\n<span class="token keyword">function</span> <span class="token function">convertImageToBase64</span><span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">let</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\treader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>\n\treader<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">const</span> base64Image <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result\n\t\tcallback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span>base64Image<span class="token punctuation">)</span>\n\t\treader <span class="token operator">=</span> <span class="token keyword">null</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">compress</span><span class="token punctuation">(</span><span class="token parameter">base64Image<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">let</span> maxW <span class="token operator">=</span> <span class="token number">1024</span>\n\t<span class="token keyword">let</span> maxH <span class="token operator">=</span> <span class="token number">1024</span>\n\t<span class="token keyword">const</span> image <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\timage<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">let</span> radio\n\t\t<span class="token keyword">let</span> needCompress <span class="token operator">=</span> <span class="token boolean">false</span>\n\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>maxW <span class="token operator">&lt;</span> image<span class="token punctuation">.</span>naturalWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tneedCompress <span class="token operator">=</span> <span class="token boolean">true</span>\n\t\t\tratio <span class="token operator">=</span> image<span class="token punctuation">.</span>naturalWidth <span class="token operator">/</span> maxW\n\t\t\tmaxH <span class="token operator">=</span> image<span class="token punctuation">.</span>naturalHeight <span class="token operator">/</span> ratio\n\t\t<span class="token punctuation">}</span>\n\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>maxH <span class="token operator">&lt;</span> image<span class="token punctuation">.</span>naturalHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tneedCompress <span class="token operator">=</span> <span class="token boolean">true</span>\n\t\t\tratio <span class="token operator">=</span> image<span class="token punctuation">.</span>naturalHeight <span class="token operator">/</span> maxH\n\t\t\tmaxW <span class="token operator">=</span> image<span class="token punctuation">.</span>naturalWidth <span class="token operator">/</span> ratio\n\t\t<span class="token punctuation">}</span>\n\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>needCompress<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tmaxW <span class="token operator">=</span> image<span class="token punctuation">.</span>naturalWidth\n\t\t\tmaxH <span class="token operator">=</span> image<span class="token punctuation">.</span>naturalHeight\n\t\t<span class="token punctuation">}</span>\n\t\t<span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span>\n\t\tcanvas<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;__compress__&#39;</span><span class="token punctuation">)</span>\n\t\tcanvas<span class="token punctuation">.</span>width <span class="token operator">=</span> maxW\n\t\tcanvas<span class="token punctuation">.</span>height <span class="token operator">=</span> maxH\n\t\tcanvas<span class="token punctuation">.</span>style<span class="token punctuation">.</span>vasibility <span class="token operator">=</span> <span class="token string">&#39;hidden&#39;</span>\n\t\tdocument<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span>\n\t\t<span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span>\n\t\tctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> maxW<span class="token punctuation">,</span> maxH<span class="token punctuation">)</span>\n\t\tctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> maxW<span class="token punctuation">,</span> maxH<span class="token punctuation">)</span>\n\t\t<span class="token keyword">const</span> compressImage <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">&#39;image/jpeg&#39;</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">)</span>\n\t\tcallback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span>compressImage<span class="token punctuation">)</span>\n\t\t<span class="token keyword">const</span> _image <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t\t_image<span class="token punctuation">.</span>src <span class="token operator">=</span> compressImage\n\t\tdocument<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>_image<span class="token punctuation">)</span>\n\t\tcanvas<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;压缩比: &#39;</span> <span class="token operator">+</span> image<span class="token punctuation">.</span>src<span class="token punctuation">.</span>length <span class="token operator">/</span> _image<span class="token punctuation">.</span>src<span class="token punctuation">.</span>length<span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\timage<span class="token punctuation">.</span>src <span class="token operator">=</span> base64Image\n<span class="token punctuation">}</span>\n<span class="token comment">// 上传到服务端</span>\n<span class="token keyword">function</span> <span class="token function">uploadToServer</span><span class="token punctuation">(</span><span class="token parameter">compressImage</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> upload <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;upload&#39;</span><span class="token punctuation">)</span>\nupload<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">const</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files\n\t<span class="token comment">// 等价于 const file = e.target.files[0]</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>file<span class="token punctuation">)</span> <span class="token keyword">return</span>\n\t<span class="token keyword">const</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> fileType<span class="token punctuation">,</span> size<span class="token operator">:</span> fileSize <span class="token punctuation">}</span> <span class="token operator">=</span> file\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">ACCEPT</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>fileType<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;不支持[&#39;</span> <span class="token operator">+</span> fileType <span class="token operator">+</span> <span class="token string">&#39;]文件类型&#39;</span><span class="token punctuation">)</span>\n\t\tupload<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>\n\t\t<span class="token keyword">return</span>\n\t<span class="token punctuation">}</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>fileSize <span class="token operator">&gt;</span> <span class="token constant">MAXSIZE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;文件超出&#39;</span> <span class="token operator">+</span> <span class="token constant">MAXSIZE_STR</span><span class="token punctuation">)</span>\n\t\tupload<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>\n\t\t<span class="token keyword">return</span>\n\t<span class="token punctuation">}</span>\n\t<span class="token comment">// 压缩</span>\n\t<span class="token function">convertImageToBase64</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">base64Image</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">compress</span><span class="token punctuation">(</span>base64Image<span class="token punctuation">,</span> uploadToServe<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div><h2 id="百度地图" tabindex="-1"><a class="header-anchor" href="#百度地图" aria-hidden="true">#</a> 百度地图</h2>',8),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,p]of s)n[a]=p;return n}}}]);