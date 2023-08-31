const huya_danmu = require('./index')

const roomid = process.argv[2];

if (!roomid) {
    console.error('Roomid is required');
    process.exit(1);
}

const client = new huya_danmu(roomid)

const WebSocket = require('ws');
const http = require('http');

const httpServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('WebSocket server is running');
});

const wss = new WebSocket.Server({ server: httpServer });

// listen port from command line argument, default 9588
const port = process.argv[3] || 9528;

client.on('connect', () => {
    console.log(`已连接huya ${roomid}房间弹幕~`)
})

client.on('chatRecv', msg => {
    console.log(`[${msg.nickname}]:${msg.msg_content}`)
    broadcastMessage('chat', msg);
})
client.on('giftRecv', msg => {
    console.log(`[${msg.nickname}]->赠送${msg.gfcnt}个${msg.gift_name}`)
    broadcastMessage('gift', msg);
})

client.on('onlineRecv', msg => {
    console.log(`[当前人气]:${msg.count}`)
})

client.on('error', e => {
    console.log(e)
    broadcastMessage('error', e);
})

client.on('close', e => {
    console.log('close，未找到直播间信息，可能是主播未开播或直播间不存在。')
    broadcastMessage('close', '未找到直播间信息，可能是主播未开播或直播间不存在。');
})

client.start()

wss.on('connection', (ws) => {
    console.log('WebSocket client connected');

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
    });

    ws.on('close', () => {
        console.log('WebSocket client disconnected');
    });
});

function broadcastMessage(type, data) {
    const message = JSON.stringify({ type, data });
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
}

httpServer.listen(port, () => {
    console.log(`WebSocket server is listening on ${port}`);
});

