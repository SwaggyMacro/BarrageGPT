window.onDouyinServer = function() {
    new Barrage({ message: false })
}
console.clear()
console.log(`[${new Date().toLocaleTimeString()}]`, '正在载入JS,请稍后..')
console.log(`[${new Date().toLocaleTimeString()}]`, '如需删除直播画面，请在控制台输入: removeVideoLayer()')
var scriptElement = document.createElement('script')
scriptElement.src = 'https://jiansenc.github.io/tiktok_barrage_nodejs/index.js?t=' + Math.random()
document.body.appendChild(scriptElement)