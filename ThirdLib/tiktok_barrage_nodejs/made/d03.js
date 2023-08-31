var bg = null
window.onDouyinServer = function() {
    bg = new Barrage()
}

var videoTimes = null

var go = () => {
    if (document.querySelector('video') === null) {
        bg = null
        setInterval(() => {
            if (document.querySelector('video') !== null) {
                clearInterval(videoTimes)
                go()
            }
        }, 60 * 1000);
    } else {
        console.log(`[${new Date().toLocaleTimeString()}]`, '正在载入JS,请稍后..')
        var scriptElement = document.createElement('script')
        scriptElement.src = 'https://jiansenc.github.io/tiktok_barrage_nodejs/index.js?t=' + Math.random()
        document.body.appendChild(scriptElement)
    }

}

go()