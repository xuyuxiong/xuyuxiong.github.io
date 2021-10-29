# 手写系列

## 手写bind
```js
Function.prototype.myBind = function(context, ...args) {
    if (!context) {
        context = window
    }
    const fn = Symbol()
    context[fn] = this
    const _this = this // 调用myBind方法的函数本身
    const result = function(...innerArgs) {
        // 如果以new的方式调用
        if (this instanceof _this) {
            // 此时的this指向实例对象
            this[fn] = _this
            this[fn](...[...args,...innerArgs])
            delete this[fn]
        } else { // 正常走else逻辑
            // 相当于在context上调用原本的函数
            context[fn](...[...args,...innerArgs])
            delete context[fn]
        }
    }

    result.prototype = Object.create(this.prototype)
    return result
}
```
## 手写new操作符
```js
function myNew(fn, ...args) {
    const obj = Object.create(fn.prototype)
    const res = fn.call(obj, ...args)
    if (res && typeof res === 'object' || res === 'function') {
        return res
    }
    return obj
}
```
## 手写setInterval
```js
function mySetInterval(fn, time = 1000) {
    const timer = null
    const isClear = false
    function interval() {
        if (isClear) {
            isClear = false
            clearTimeout(timer)
            return
        }
        fn()
        timer = setTimeout(interval, time)
    }
    setTimeout(interval, time)
    return () => {
        isClear = true
    }
}
```
## 判断括号字符串是否有效
```js
const isValid = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }
  const regObj = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      const cur = stack.pop();
      if (s[i] !== regObj[cur]) {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
};

```
## 手写发布订阅模式
```js
class EventEmit {
    constructor() {
        this.events = {}
    }
    on(type, callback) {
        if (this.events[type]) {
            this.events[type].push(callback)
        } else {
            this.events[type] = [callback]
        }
    }
    off(type, callback) {
        if (!this.events[type]) return
        this.events[type] = this.events[type].filter(event => event !== callback)
    }
    once(type, callback) {
        function oneTime() {
            callback()
            this.off(type, oneTime)
        }
        this.on(type, oneTime)
    }
    emit(type, ...rest) {
        this.events[type] && this.events[type].forEach(fn => fn.apply(this, rest))
    }
}
```
## 手写防抖节流
```js
function debounce(fn, delay=300) {
    let timer
    return function() {
        const args = arguments
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}
function throttle(fn, delay) {
    let flag = true
    return function() {
        const args = arguments
        if (flag) {
            flag = false
            setTimeout(() => {
                falg = true
                fn.apply(this, args)
            }, delay)
        }
    }
}
```
## 手写对象的flatten方法
```js
function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}
function flatten(obj) {
    if (!isObject(obj)) return
    let res = {}
    const dfs = (cur, prefix) {
        if (isObject(cur)) {
            Array.isArray(cur) {
                cur.forEach((item, index)=> {
                    dfs[item, `${prefix}[${index}]`]
                })
            } else {
                for(key in cur) {
                    dfs(cur[k], `${prefix}${prefix ? '.' : ''}${key}`)
                }
            }
        } else {
            res[prefix] = cur
        }
    }
    dfs(obj, '')
    return res
}
```
## 数组扁平化
```js
function flatten(arr) {
    return arr.reduce((result, item) => {
        return result.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}
```
## 对象深拷贝
```js
function deepClone(obj) {
    let res = {}
    if (typeof obj === 'object' || obj !== null) {
        for(key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key]
                res[key] = typeof value === 'object' ? deepClone(value) : value
            }
        }
    }
    return res
}

```

