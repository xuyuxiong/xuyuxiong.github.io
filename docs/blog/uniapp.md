# uniapp 入门
- 遵循了vue单文件规范
- 组件标签靠近小程序规范
- 接口能力靠近微信小程序规范
- 数据绑定及事件处理同vue.js规范
- 为兼容多端运行,使用flex布局进行开发
特色：
- 条件编译
#ifdef #endif
- App端的Nvue开发
- HTML5+
知识点：
组件、基础组件、自定义组件、语法、生命周期、API、路由、布局样式

云函数
const collection = db.collection('user')
// 添加
const res = await collection.add({age: 18})
// 删除
const res = await collection.doc('5e6ce9219').remove()
// 更新
const res = await collection.doc('5e6ce9219').update({
	age: 20
})
const res = await collection.doc('5e6ce9219').set({
	age: 20
})
// 查找
const res = await collection.doc('5e6ce9219').get()
const res = await collection.where({
	age: 20
}).get()

上传文件
uni.chooseImage({
	count: 1,
	success(res) {
		const tempFilePath = res.tempFilePaths[0]
		// 上传
		uniCloud.uploadFile({
			filePath: tempFilePath,
			success(res){},
			fail(err){}
		})
		// 删除文件
		uniCloud.deleteFile({
			fileList: ['https://vkceyugu.cdn.bspapp...'],
			success(res){},
			fail(err){}
		})
	},
	fail(err) {}
})
// 聚合: 更精细化的去处理数据 求和 分组 指定的那些字段
const list = await db.collection('article')
.aggregate()
.match({
	classify: name
})
.project({ // 指定某些字段是否返回到数据中
	content: false
})
.end() // 聚合操作完成

直接使用组件
// easyCom components/组件名/组件名.vue 局部引入

// 获取手机系统信息
const info = uni.getSystemInfoSync()
// 设置状态栏高度
this.statusBarHeight = info.statusBarHeight
// 获取胶囊的位置
const menuButtonInfo = uni.getMenuButtonBoundingClientRect() 