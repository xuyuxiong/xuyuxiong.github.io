# 数据可视化
## http://www.youbaobao.xyz/datav-docs/
## 技术栈选型
- canvas
- svg
- webgl
- zrender
- d3
- three.js
- highcharts(Highcharts JS, Highstock JS, Highmaps JS)
- AntV 一套数据解决方案
G2: 可视化引擎
G2Plot: 图标库
G6: 图可视化引擎
Graphin: 基于G6的图分析组件
F2: 移动可视化方案
ChartCube: AntV图标在线制作
L7: 地理空间数据可视化
- echart
基本概念：系列(series)
基本概念：坐标系
是指一组数值映射成对应的图
基本概念：组件
除绘图之外的其他部分都可以抽象为组件,如x轴、y轴、grid(控制图标的位置)
基本概念：定位(grid)
基本概念：坐标系(单/双坐标系、多坐标系)
## canvas 图片压缩
```html
<input type="file" id="upload">
```
```js
const ACCEPT = ['image/jpg', 'image/png']
const MAXSIZE = 1024 * 1024
const MAXSIZE_STR = '1MB'
function convertImageToBase64(file, callback) {
	let reader = new FileReader()
	reader.readAsDataURL(file)
	reader.addEventListener('load', function(e) {
		const base64Image = e.target.result
		callback && callback(base64Image)
		reader = null
	})
}
function compress(base64Image, callback) {
	let maxW = 1024
	let maxH = 1024
	const image = new Image()
	image.addEventListener('load', function(e) {
		let radio
		let needCompress = false
		if (maxW < image.naturalWidth) {
			needCompress = true
			ratio = image.naturalWidth / maxW
			maxH = image.naturalHeight / ratio
		}
		if (maxH < image.naturalHeight) {
			needCompress = true
			ratio = image.naturalHeight / maxH
			maxW = image.naturalWidth / ratio
		}
		if (!needCompress) {
			maxW = image.naturalWidth
			maxH = image.naturalHeight
		}
		const canvas = document.createElement('canvas')
		canvas.setAttribute('id', '__compress__')
		canvas.width = maxW
		canvas.height = maxH
		canvas.style.vasibility = 'hidden'
		document.body.appendChild(canvas)
		const ctx = canvas.getContext('2d')
		ctx.clearRect(0, 0, maxW, maxH)
		ctx.drawImage(image, 0, 0, maxW, maxH)
		const compressImage = canvas.toDataURL('image/jpeg', 0.8)
		callback && callback(compressImage)
		const _image = new Image()
		_image.src = compressImage
		document.body.appendChild(_image)
		canvas.remove()
		console.log('压缩比: ' + image.src.length / _image.src.length)
	})
	image.src = base64Image
}
// 上传到服务端
function uploadToServer(compressImage) {

}
const upload = document.getElementById('upload')
upload.addEventListener('change', function(e) {
	const [file] = e.target.files
	// 等价于 const file = e.target.files[0]
	if (!file) return
	const { type: fileType, size: fileSize } = file
	if (ACCEPT.indexOf(fileType) < 0) {
		alert('不支持[' + fileType + ']文件类型')
		upload.value = ''
		return
	}
	if (fileSize > MAXSIZE) {
		alert('文件超出' + MAXSIZE_STR)
		upload.value = ''
		return
	}
	// 压缩
	convertImageToBase64(file, (base64Image) => compress(base64Image, uploadToServe))
})
```
## 百度地图