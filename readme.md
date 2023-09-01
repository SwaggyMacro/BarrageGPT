<div align=center>
   <img src="Resources/Images/logo.png" width="50px" height="50px" alt="logo"/>
</div>
<div align=center>
   <a href="readme_en.md">🇺🇸English</a> | <a href="readme.md">🇨🇳简体中文</a>
</div>


### 🤖BarrageGPT
***
**当我快完成这个项目的时候，我会完善这份readme。**

### 🖥️支持平台
***
- [x] 哔哩哔哩直播
- [x] 虎牙
- [x] 抖音

### ❓如何使用
***
1. 复制配置例子文件 `config.example.json` 为 `config.json` 然后修改其中的apikey为你自己的key。
2. 以下几个平台的使用教程readme
    - [Bilibili](./Readme/readme_bilibili.md)
    - [Huya](./Readme/readme_huya.md)
    - [TikTok(Douyin)](./Readme/readme_tiktok.md)
3. 打开OBS，然后截取本项目运行的软件进行推流。
### 🖼️截图
***
#### `截图:`
![bilibili](https://raw.githubusercontent.com/SwaggyMacro/BarrageGPT/master/Screenshots/Pictures/bilibili.png)
![huya](https://raw.githubusercontent.com/SwaggyMacro/BarrageGPT/master/Screenshots/Pictures/huya.png)

#### `录屏:`
- huya: [Check the video](https://raw.githubusercontent.com/SwaggyMacro/BarrageGPT/master/Screenshots/Videos/huya.mp4)
- bilibili: [Check the video](https://raw.githubusercontent.com/SwaggyMacro/BarrageGPT/master/Screenshots/Videos/bilibili.mp4)

### 🤬吐槽
***
**关于抖音平台直播:**

1. 首先，你必须要有1000个粉丝才能在电脑上直播。如果你不在电脑上直播，那么你就不能使用OBS推流，并且通过抓包获取抖音直播推流码的方法也不再有效。
2. 手机直播的时候，你不能静音麦克风。
3. 在我尝试了几次抖音直播后，我原本想用手机录屏直播，然后通过远程工具展示我的电脑屏幕（运行本项目的电脑），但是抖音不知道为什么连续两次无理由的封禁了我的直播（第一次我甚至都没有开播成功，只是在尝试开播，第二次我刚直播出项目的画面就被封禁了）。

所以这就是为什么本项目中没有抖音平台的使用截图。  
**脑瘫抖音**

### 📋任务列表
***
- [ ] 礼物触发AI问答（只有送礼物的用户才能通过发送弹幕进行AI问答，比如送玫瑰花礼物可以开启AI问答）
- [ ] 虚拟AI角色（在旁边显示的虚拟角色，可以进行语音朗读回复）
- [ ] 第三方中转OpenAI API