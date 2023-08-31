const WebSocket = require('ws');
const http = require('http');

const httpServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('WebSocket server is running');
});

const wss = new WebSocket.Server({ server: httpServer });

function onChat(data) {
    console.log('Received chat message:', data);
    broadcastMessage('chat', data);
}

function onGift(data) {
    console.log('Received gift message:', data);
    broadcastMessage('gift', data);
}

function onError(data) {
    console.error('Received error message:', data);
    broadcastMessage('error', data);
}

function broadcastMessage(type, data) {
    const message = JSON.stringify({ type, data });
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
}

wss.on('connection', (ws) => {
    console.log('WebSocket client connected');

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
    });

    ws.on('close', () => {
        console.log('WebSocket client disconnected');
    });
});

// roomid from command line argument
const roomid = process.argv[2];

if (!roomid) {
    console.error('Roomid is required');
    process.exit(1);
}

// listen port from command line argument, default 9588
const port = process.argv[3] || 9528;

httpServer.listen(port, () => {
    // 字符串嵌套表达式
    console.log(`WebSocket server is listening on ${port}`);
});

const HuyaDanmu = require('./src');
new HuyaDanmu({
    roomid: roomid,
    onChat: (data) => onChat(JSON.stringify(data)),
    onGift: (data) => onGift(JSON.stringify(data)),
    onError: (data) => onError(JSON.stringify(data))
}).start();
