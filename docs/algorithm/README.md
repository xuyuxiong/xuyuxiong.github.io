# 算法

## 栈

后进先出 入栈 出栈
LeetCode 20 有效的括号
应用场景: 十进制转二进制 有效的括号 函数调用堆栈

## 队列

先进先出 入队 出队
LeetCode 20 最近的请求次数
应用场景:食堂排队打饭 JS 异步任务队列 计算最近请求次数

## 链表

多个元素组成的列表
数组 VS 链表
数组:增删非首尾元素时往往需要移动元素
链表:增删非首页元素不需要移动元素,只需更改 next 的指向
JS 中没有链表 可以用 Object 模拟链表

```js
const a = { val: "a" };
const b = { val: "b" };
const c = { val: "c" };
const d = { val: "d" };
a.next = b;
b.next = c;
c.next = d;
```

LeetCode 237 删除链表中的节点
LeetCode 206 反转链表
LeetCode 2 两数相加
LeetCode 83 删除排序链表中的重复元素
因为链表是有序的 所以重复元素一定相邻
LeetCode 141 环形链表

## 集合

无序且唯一的数据结构
常用操作：去重、判断某元素是否在集合中、求交集
LeetCode 349 两个数组的交集

## 字典

与集合类似，字典也是一种存储唯一值的方式 但是它是以键值对的形式来存储

```js
const m = new Map();
// 增加
m.set("a", "aa");
m.set("b", "bb");
// 删除
m.delete("a");
m.clear();
```

LeetCode 349 两个数组的交集
LeetCode 20 有效的括号
LeetCode 1 两数之和
LeetCode 3 无重复字符的最长子串
LeetCode 76 最小覆盖子串

## 树

一种分层数据的抽象模型
常见的树有：DOM 级连选择 树形控件
JS 中没有树 可以用 Array 和 Object 构建树
树的常见操作：
深度/广度优先遍历 先中后序遍历

```js
const tree = {
  val: 1,
  children: [
    {
      val: 2,
      children: [],
    },
    {
      val: 3,
      children: [],
    },
  ],
};
const dfg = (root) => {
  console.log(root.val);
  root.children.forEach(dfg);
};
```

广度优先算法口诀
新建一个队列 把根结点入队
把队头出队并访问
把队头的 children 挨个入队
重复二三步骤知道队列为空

```js
const bfg = (root) => {
  const q = [root];
  while (root.length > 0) {
    const ele = q.shift();
    console.log(ele.value);
    ele.children.forEach((item) => {
      root.push(item);
    });
  }
};
```

二叉树
在 JS 中通常使用 Object 来模拟二叉树

```js
const binaryTree = {
  val: 1,
  left: {
    val: 2,
    left: {},
    right: {},
  },
  right: {
    val: 3,
    left: {},
    right: {},
  },
};
```

先序遍历算法口诀

- 先访问根结点
- 对根结点的左子树进行先序遍历
- 对根结点的右子树进行先序遍历

```js
const preorder = (root) => {
  if (!root) return;
  console.log(root);
  preorder(root.left);
  preorder(root.right);
};
// 第二种写法
const preorder = (root) => {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    console.log(n.val);
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
};
```

中序遍历算法口诀

- 对根结点的左子树进行中序遍历
- 访问根结点
- 对根结点的右子树进行中序遍历

```js
const inorder = (root) => {
  if (!root) return;
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
};
// 第二种写法
const inorder = (root) => {
  if (!root) return;
  const stach = [];
  const p = root;
  while (stach.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    n = stack.pop();
    console.log(n.val);
    p = p.right;
  }
};
```

后序遍历算法口诀

- 对根结点的左子树进行后续遍历
- 对根结点的右子树进行后续遍历
- 访问根结点

```js
const postorder = (root) => {
  if (!root) return;
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
};
// 第二种写法
const postorder = (root) => {
  if (!root) return;
  const stack = [root];
  const outputstack = [];
  while (stack.length) {
    const n = stack.pop();
    outputstack.push(n);
    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);
  }
  while (outputstack.length) {
    const n = outputstack.pop();
    console.log(n.val);
  }
};
```

LeetCode 104 二叉树的最大深度
LeetCode 111 二叉树的最小深度
LeetCode 102 二叉树的层序遍历
LeetCode 102 二叉树的中序遍历
LeetCode 112 路径总和

## 图

图是网络结构的抽象模型 是一组由边连接的节点
图可以表示任何二元关系 比如道路、航班
JS 中没有图 可以用 Object 和 Array 表示
图的表示法：邻接矩阵、邻接表、关联矩阵

常用操作
深度优先遍历
广度优先遍历

深度优先遍历算法口诀

- 访问根结点

- 对根结点没有访问过的相邻节点挨个进行深度优先遍历

```js
const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3],
};

const dfs = (n) => {
  const visited = new Set();
  visited.add(n);
  graph[n].forEach((item) => {
    if (!visited.has(item)) {
      dfs(item);
    }
  });
};
```

广度优先遍历算法口诀

- 新建一个队列，把根结点入队

- 把对头出队并访问

- 把队头的没访问过的相邻节点入队

- 重复二三步直到队列为空

```js
const vistied = new Set();
visited.add(2);
const q = [2];
while (q.length) {
  const n = q.shift();
  graph[n].forEach((item) => {
    if (!visited.has(item)) {
      q.push(item);
      visited.add(item);
    }
  });
}
```

LeetCode 65 有效数字
LeetCode 417 太平洋大西洋水流问题
LeetCode 133 克隆图

# 堆

堆是一种特殊的完全二叉树(若没有填满只会缺少右边的子节点)
所有的节点都大于等于(最大堆)或小于等于(最小堆)它的的子节点
js 中通常用数组表示堆
左侧子节点的位置是 2 \* index + 1
右侧子节点的位置是 2 \* index + 2
父节点的位置是(index-1) / 2

堆的应用
高效快速的找出最大值和最小值
时间复杂度 O(1)
找出第 K 个最大(小)元素

## 插入

- 将值插入堆的底部 即数组的尾部
- 然后上移 将这个值和它的父节点进行交换 直到父节点小于等于这个插入的值
- 大小为k的堆中插入元素的时间复杂度为O(logk)

```js
class MinHeap {
  construction() {
    this.heap = []
  }
  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }
  shiftUp(index) {
    if (index === 0) return
    const parentIndex = getParentIndex(index)
    if (this.heap[parentIndex > this.heap[index]]) {
      this.swap(index, parentIndex)
      this.shiftUp(parentIndex)
    }
  }
  swap(i1, i2) {
    [this.heap[i1],this.heap[i2]] = [this.heap[i2], this.heap[i1]]
  }
  getParentIndex(index) {
    return (index-1) >> 1
  }
}
```

## 删除堆顶

- 用数组尾部元素替换堆顶(直接删除堆顶会破坏堆的结构)
- 然后下移 新堆顶和子节点进行交换 直到子节点大于这个新堆顶
- 大小为k的堆中删除堆顶的时间复杂度为O(logk)

```js
class MinHeap {
  construction() {
    this.heap = []
  }
  pop() {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }
  shiftDown(index) {
    let leftIndex = this.getLeftIndex(index)
    let rightIndex = this.getRightIndex(index)
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index)
      shiftDown(leftIndex)
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index)
      shiftDown(rightIndex)
    }
  }
  swap(i1, i2) {
    [this.heap[i1],this.heap[i2]] = [this.heap[i2], this.heap[i1]]
  }
  getLeftIndex(index) {
    return index * 2 + 1
  }
  getRightIndex(index) {
    return index * 2 + 2
  }
}
```
## 获取堆顶和堆的大小
- 获取堆顶
返回堆顶头部
- 获取堆的大小
返回数组的长度
# 排序和搜索
排序：把某个乱序的数组变为升序或者降序的数组
搜索：找出数组中某个元素的下标
JS的排序：数组的sort方法
JS中的搜索：数组的indexOf方法
常用的排序算法：冒泡排序 选择排序 插入排序 归并排序 快速排序
常用的搜索算法：顺序搜索 二分搜索
1. 冒泡排序
```js
Array.prototype.bubbleSort = function() {
  for(let i = 0; i < this.length - 1; i++) {
    for(let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
        [this[j],this.[j+1]] = [this.[j+1],this.[j]]
      }
    }
  }
}
```
2. 选择排序
```js
Array.prototype.selectionSort = function() {
  for(let i = 0; i < this.length - 1; i++) {
    let indexMin = i
    for(let j = i; j < this.length; j++) {
      if (this[j] < this[indexMin]) {
        indexMin = j
      }
    }
    if (indexMin !== i) {
      [this[i],this[indexMin]] = [this[indexMin],this[i]]
    }
  }
}
```
3. 插入排序
```js
Array.prototype.insertSort = function() {
  for(let i = 0; i < this.length - 1; i++) {
    for(let j = i + 1; j > 0; j--) {
      if (this[j] < this[j-1]) {
        [this[j-1],this[j]] = [this[j],this[j-1]]
      } else {
        break
      }
    }
  }
}
```
4. 归并排序
```js
Array.prototype.mergeSort = function() {
  const rec = (arr) => {
    if (arr.length <= 1) return arr
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid, arr.length)
    const orderLeft = rec(left)
    const orderRight = rec(right)
    const res = []
    while(orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
      } else if (orderLeft.length) {
        res.push(orderLeft.shift())
      } else if (orderRight.length) {
        res.push(orderRight.shift())
      }
    }
    return res
  }
  const res = rec(this)
  res.forEach((item, i)=> {this[i] = item})
}
```
5. 快速排序
```js
Array.prototype.quickSort = function() {
  const rec = (arr) => {
    if (arr.length <= 1) return arr
    const left = []
    const right = []
    const mid = arr[0]
    for(let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return [...rec(left), mid, ...rec(right)]
  }
  const res = rec(this)
  res.forEach((item, i)=> {this[i] = item})
}
```
6. 顺序搜索
```js
Array.prototype.sequentialSearch = function(item) {
  for(let i = 0; i < this.length; i++) {
    if (this[i] === item) {
      return i
    }
  }
  return -1
}
```
7. 二分搜索
```js
Array.prototype.binarySearch = function(item) {
  // 假设数组已经排好序
  let low = 0
  let high = this.length - 1
  while(low <= high) {
    let mid = Math.floor((low + high) / 2)
    const element = this[mid]
    if (item < element) {
      high = mid - 1
    } else if (item > element) {
      low = mid + 1
    } else {
      return mid
    }
  }
  return -1
}
```

LeetCode 21 合并两个有序链表