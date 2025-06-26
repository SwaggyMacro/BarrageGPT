### 🤖BarrageGPT
***
**Once I'm nearing completion of the project, I might plan to write a readme.md file.**

### 🖥️Support platforms
***
- [x] Bilibili
- [x] Huya
- [x] Douyin

### ❓How to use
***
1. Pull the project files from the repository
   ```shell
   git clone https://github.com/SwaggyMacro/BarrageGPT.git
   ```
2. Install the project's python dependencies
   ```shell
   pip install -r requirements.txt
   ```
3. Copy the `config.example.json` to `config.json` and modify the configuration file to configure the corresponding apikey.
    - The `api_proxy` is used to fill in the address of the third-party intermediary OpenAI API. If there is no such address, fill in `false` in the `on` attribute.
    - `proxy` is the proxy address (http proxy). If you don't need it, fill in `false` in the `on` attribute.
4. Check the platform you want to live-stream on, and follow the readme below to run the corresponding script.
    - [Bilibili](./Readme/readme_bilibili.md)
    - [Huya](./Readme/readme_huya.md)
    - [TikTok(Douyin)](./Readme/readme_tiktok.md)
5. Open OBS and select the project software window to start streaming.

### 🖼️Screenshots
***
#### `Pictures here:`
![bilibili](https://raw.githubusercontent.com/SwaggyMacro/BarrageGPT/master/Screenshots/Pictures/bilibili.png)
![huya](https://raw.githubusercontent.com/SwaggyMacro/BarrageGPT/master/Screenshots/Pictures/huya.png)

#### `Videos here:`
- huya: [Check the video](https://raw.githubusercontent.com/SwaggyMacro/BarrageGPT/master/Screenshots/Videos/huya.mp4)
- bilibili: [Check the video](https://raw.githubusercontent.com/SwaggyMacro/BarrageGPT/master/Screenshots/Videos/bilibili.mp4)

### 🤬Gripes
***
**Gripes About `TikTok` Live Streaming Platform:**

1. In order to go live from a computer, you are required to have a minimum of `1,000 followers`. If you choose not to go live from a computer, you won't be able to utilize OBS for streaming, and the method of capturing TikTok's streaming code through packet capture is no longer effective.
2. Unfortunately, you cannot mute the microphone while streaming from a mobile device.
3. I have made several attempts at live-streaming. My initial plan was to showcase my personal PC's screen (which was running the project) by using a remote tool. However, TikTok unjustly and inexplicably banned my live stream on two separate occasions.

So, that's why there are no `TikTok(Douyin)` screenshots in this project.  
**Fuck the TikTok(Douyin)!**

### 📋TODO
***
- [ ] Gift-triggered AI Q&A (Only users who have sent gifts are allowed to AI Q&A by sending barrage, such as starting an AI Q&A session with a rose gift.)
- [ ] Virtual AI Characters (A virtual character displayed alongside and capable of providing voice-read responses.)
- [x] Third-party intermediary API for OpenAI


### EdgeOne
CDN acceleration and security protection for this project are sponsored by Tencent EdgeOne.  
[Best Asian CDN, Edge, and Secure Solutions - Tencent EdgeOne](https://edgeone.ai/?from=github)  
![EdgeOne](https://edgeone.ai/_next/static/media/headLogo.daeb48ad.png?auto=format&fit=max&w=256)
