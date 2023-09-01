### 抖音操作步骤
***
`cd`至项目根目录下`ThirdLib/tiktok_barrage_nodejs`文件夹下
1. 打开项目跟目录 安装 node 依赖 并运行

```shell
npm i // 或 cnpm i
npm run dev
```

2. 打开浏览器进入需要接受弹幕消息的直播间页面，按 F12 控制台 注入下面代码

```javascript
var scriptElement = document.createElement('script')
scriptElement.src = 'https://jiansenc.github.io/tiktok_barrage_nodejs/client.js?t=' + Math.random()
document.body.appendChild(scriptElement)
```

3. 项目根目录下执行
```shell
python tiktok.py
```

4. OBS推流选中项目软件窗口

***
原Repo地址: https://github.com/jiansenc/tiktok_barrage_nodejs