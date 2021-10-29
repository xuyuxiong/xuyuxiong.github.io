# Vue base
## Vue.js是什么
Vue是一套用于构建用户界面的渐进式框架
## 声明式渲染
Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统
```html
<div id="counter">
  Counter: {{ counter }}
</div>
```
## 处理用户输入
为了让用户和应用进行交互，我们可以用 v-on 指令添加一个事件监听器，通过它调用在实例中定义的方法
## 条件和循环
## 组件化应用构建
## 与自定义元素的关系
Vue 组件非常类似于自定义元素——它是 Web 组件规范的一部分，这是因为 Vue 的组件语法部分参考了该规范
## 创建一个应用实例
```js
const app = Vue.createApp({
  // 选项
})
```
## 根组件
传递给 createApp 的选项用于配置根组件。当我们挂载应用时，该组件被用作渲染的起点(根组件实例)
## 组件实例 property
props、data、computed、inject、setup...
内置property $attr $emit...
## 生命周期钩子
beforeCreate created beforeMount mounted beforeUpdate updated beforeUnmount unmounted
## 模板语法
## 插值
### 文本
{{}} 双大括号的文本插值
### 原始HTML
v-html
### Attribute
v-bind
### 使用JavaScript表达式
## 指令
指令 (Directives) 是带有 v- 前缀的特殊 attribute
## 参数
一些指令能够接收一个“参数”，在指令名称之后以冒号表示
## 动态参数
指令参数中使用 JavaScript 表达式，方法是用方括号括起来 v-bind:[attributeName]="url"
## 修饰符
修饰符 (modifier) 是以半角句号 . 指明的特殊后缀 v-on:submit.prevent="onSubmit"
## 缩写
v-bind 缩写 <a :href="url"> ... </a>
-on 缩写 <a @click="doSomething"> ... </a>
## Data Property
组件的 data 选项是一个函数
## 方法
我们用 methods 选项向组件实例添加方法，它应该是一个包含所需方法的对象
## 计算属性和侦听器
### 计算属性
任何包含响应式数据的复杂逻辑，你都应该使用计算属性
### 计算属性缓存 vs 方法
计算属性是基于它们的反应依赖关系缓存的
### 计算属性的 Setter
计算属性默认只有 getter，不过在需要时你也可以提供一个 setter
### 侦听器
通常更好的做法是使用计算属性而不是命令式的 watch 回调
## Class与Style绑定
### 绑定HTML Class
#### 对象语法
```html
<div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
></div>
```
#### 数组语法
```html
<div :class="[activeClass, errorClass]"></div>
<!-- 三元表达式 -->
<div :class="[isActive ? activeClass : '', errorClass]"></div>
```
```js
data() {
  return {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
}
```
### 绑定内联样式
#### 对象语法
```html
<div :style="{color: activeColor, fontSize: fontSize + 'px'}"></div>
```
#### 数组语法
```html
<div :style="[baseStyles, overridingStyles]"></div>
```
#### 多重值
```html
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```
## 条件渲染
v-if v-else v-else-if
v-show 只是简单地切换元素的 CSS property display
### v-if vs v-show
v-if 是“真正”的条件渲染，因为它会确保在切换过程中，条件块内的事件监听器和子组件适当地被销毁和重建
v-if 是惰性的 初始条件为假不渲染
v-show 更高的初始渲染开销
需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好
### v-if 与 v-for 一起使用
一起使用时，v-if 具有比 v-for 更高的优先级
## 列表渲染
用 v-for 把一个数组对应为一组元素
## 事件处理
我们可以使用 v-on 指令 (通常缩写为 @ 符号) 来监听 DOM 事件，并在触发事件时执行一些 JavaScript
### 事件处理方法
许多事件处理逻辑会更为复杂，所以直接把 JavaScript 代码写在 v-on 指令中是不可行的。因此 v-on 还可以接收一个需要调用的方法名称
### 内联处理器中的方法
```html
<div id="inline-handler">
  <button @click="say('hi')">Say hi</button>
  <button @click="say('what')">Say what</button>
</div>
```
### 多事件处理器
```html
<button @click="one($event), two($event)">
  Submit
</button>
```
### 事件修饰符
.stop
.prevent
.once
<!-- 点击事件将只会触发一次 -->
<a @click.once="doThis"></a>
.capture
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div @click.capture="doThis">...</div>
.self
<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
.passive
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发   -->
<!-- 而不会等待 `onScroll` 完成                   -->
<!-- 这其中包含 `event.preventDefault()` 的情况   -->
<div @scroll.passive="onScroll">...</div>
这个 .passive 修饰符尤其能够提升移动端的性能

### 按键修饰符
```html
<input @keyup.enter="submit" />
```
### 按键别名
.enter
.tab
.delete (捕获“删除”和“退格”键)
.esc
.space
.up
.down
.left
.right
### 系统修饰符
可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。
.ctrl
.alt
.shift
.meta
```html
<!-- Alt + Enter -->
<input @keyup.alt.enter="clear" />
```
### .exact 修饰符
.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件
### 鼠标按钮修饰符
这些修饰符会限制处理函数仅响应特定的鼠标按钮
.left
.right
.middle
## 表单输入绑定
可以用 v-model 指令在表单 input、textarea 及 select 元素上创建双向数据绑定
### 修饰符
.lazy 添加 lazy 修饰符，从而转为在 change 事件_之后_进行同步
.number 自动将用户的输入值转为数值类型
.trim 自动过滤用户输入的首尾空白字符
## 组件基础
### 组件的复用
可以将组件进行任意次数的复用
### 通过 Prop 向子组件传递数据
### 监听子组件事件
父级组件可以像处理原生 DOM 事件一样通过 v-on 或 @ 监听子组件实例的任意事件
### 使用事件抛出一个值
```js
@click="$emit('enlargeText', 0.1)"
```
### 在组件上使用 v-model
### 通过插槽分发内容
### 动态组件
在不同组件之间进行动态切换是非常有用的
### 解析 DOM 模板时的注意事项
诸如 li、tr 和 option，只能出现在其它某些特定的元素内部
可以使用特殊的 v-is 指令作为一个变通的办法
```html
<table>
  <tr v-is="'blog-post-row'"></tr>
</table>
```
## 组件注册
### 全局注册
### 局部注册
```js
const app = Vue.createApp({
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})
```
### 模块系统
```js
import ComponentA from './ComponentA'
```
## Props
### Prop类型
```js
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // 或任何其他构造函数
}
```
### 单项数据流
父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解
### Prop验证
### 类型检查
type 可以是下列原生构造函数中的一个：
String
Number
Boolean
Array
Object
Date
Function
Symbol
### 非 Prop 的 Attribute
常见的示例包括 class、style 和 id 属性
### 禁用 Attribute 继承
不希望组件的根元素继承 attribute，你可以在组件的选项中设置 inheritAttrs: false
$attrs 包含父组件传递到子组件的非Prop属性
### 多个根节点上的 Attribute 继承
多个根节点的组件不具有自动 attribute 回退行为。如果未显式绑定 $attrs，将发出运行时警告
## 自定义事件
可以通过 emits 选项在组件上定义已发出的事件
```js
app.component('custom-form', {
  emits: ['inFocus', 'submit']
})
```
### 验证抛出的事件
```js
app.component('custom-form', {
  emits: {
    // 没有验证
    click: null,

    // 验证submit 事件
    submit: ({ email, password }) => {
      if (email && password) {
        return true
      } else {
        console.warn('Invalid submit event payload!')
        return false
      }
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit', { email, password })
    }
  }
})
```
### 多个 v-model 绑定
```html
<user-name
  v-model:first-name="firstName"
  v-model:last-name="lastName"
></user-name>
```
```js
app.component('user-name', {
  props: {
    firstName: String,
    lastName: String
  },
  emits: ['update:firstName', 'update:lastName'],
  template: `
    <input 
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)">

    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)">
  `
})
```
## 插槽
设计灵感源自 Web Components 规范草案
### 插槽内容
### 渲染作用域
可以访问与模板其余部分相同的实例property
### 备用内容
### 具名插槽
```html
div class="container">
  <header>
    <!-- 我们希望把页头放这里 -->
  </header>
  <main>
    <!-- 我们希望把主要内容放这里 -->
  </main>
  <footer>
    <!-- 我们希望把页脚放这里 -->
  </footer>
</div>
<!-- 使用 -->
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```
### 作用域插槽
让插槽内容能够访问子组件中才有的数据是很有用的
绑定在 \<slot\> 元素上的 attribute 被称为插槽 prop
在父级作用域中，我们可以使用带值的 v-slot 来定义我们提供的插槽 prop 的名字
```html
<todo-list>
  <template v-slot:default="slotProps">
    <i class="fas fa-check"></i>
    <span class="green">{{ slotProps.item }}</span>
  </template>
</todo-list>
```
### 独占默认插槽的缩写语法
```html
<todo-list v-slot="slotProps">
  <i class="fas fa-check"></i>
  <span class="green">{{ slotProps.item }}</span>
</todo-list>
```
插槽的缩写语法不能和具名插槽混用
### 解构插槽 Prop
可以使用 ES2015 解构来传入具体的插槽 prop
```html
<todo-list v-slot="{ item }">
  <i class="fas fa-check"></i>
  <span class="green">{{ item }}</span>
</todo-list>
```
### 动态插槽名
```html
<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>
</base-layout>
```
### 具名插槽的缩写
```html
<base-layout>
  <template #header>
    <h1>Here might be a page title</h1>
  </template>

  <template #default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template #footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```
## Provide/Inject
无论组件层次结构有多深，父组件都可以作为其所有子组件的依赖提供者
### 处理响应性
如果我们想对祖先组件中的更改做出响应，我们需要为 provide 的 todoLength 分配一个组合式 API computed property
```js
app.component('todo-list', {
  // ...
  provide() {
    return {
      todoLength: Vue.computed(() => this.todos.length)
    }
  }
})
app.component('todo-list-statistics', {
  inject: ['todoLength'],
  created() {
    console.log(`Injected property: ${this.todoLength.value}`) // > Injected property: 5
  }
})
```
## 动态组件&异步组件
### 在动态组件上使用 keep-alive
组件之间切换的时候，保持这些组件的状态，以避免反复渲染导致的性能问题
### 异步组件
Vue 有一个 defineAsyncComponent 方法，可以接受一个返回 Promise 的工厂函数
## 模板引用
可以使用 ref attribute 为子组件或 HTML 元素指定引用 ID
还可以向组件本身添加另一个 ref
## Setup
接受两个参数
props
context: 暴露组件的三个property attrs slots emit
### 访问组件的 property
执行 setup 时，组件实例尚未被创建。因此，你只能访问以下 property
props
attrs
slots
emit
### 合模板使用
如果 setup 返回一个对象，则可以访问该对象的 property
### 使用渲染函数
setup 还可以返回一个渲染函数，该函数可以直接使用在同一作用域中声明的响应式状态
```js
import { h, ref, reactive } from 'vue'

export default {
  setup() {
    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })
    return () => h('div', [readersNumber.value, book.title])
  }
}
```
### 使用this
在 setup() 内部，this 不会是该活跃实例的引用
## Provide/Inject
### 使用 Provide
provide 函数允许你通过两个参数定义 property
首先从 vue 显式导入 provide 方法
property 的 name (String 类型)
property 的 value
### 使用 inject
首先从 vue 显式导入 inject 方法
inject 函数有两个参数
要 inject 的 property 的名称
一个默认的值 (可选)
### 添加响应性
为了增加 provide 值和 inject 值之间的响应性，我们可以在 provide 值时使用 ref 或 reactive
### 修改响应式 property
建议尽可能，在提供者内保持响应式 property 的任何更改
## 自定义指令
### 钩子函数
created
beforeMount
mounted
beforeUpdate
updated
beforeUnmount
unmounted
### 动态指令参数
v-mydirective:[argument]="value"
### 函数简写
### 对象字面量
```html
<div v-demo="{ color: 'white', text: 'hello!' }"></div>
```
```js
app.directive('demo', (el, binding) => {
  console.log(binding.value.color) // => "white"
  console.log(binding.value.text) // => "hello!"
})
```
## 渲染函数

