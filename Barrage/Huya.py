import asyncio
import websockets
from loguru import logger

from Model.Huya import BarrageMessage


class Huya:
    def __init__(self, url='ws://127.0.0.1:9528'):
        self.message_queue = asyncio.Queue()
        self.websocket = None
        self.url = url

    async def connect(self):
        self.websocket = await websockets.connect(self.url)
        logger.success("Connection opened")

    async def receive_messages(self):
        try:
            while True:
                message = await self.websocket.recv()
                await self.message_queue.put(message)
                # print("Received message:", message)
        except websockets.ConnectionClosed:
            logger.info("Connection closed")

    async def send_message(self, message):
        await self.websocket.send(message)

    async def get_message(self):
        return await self.message_queue.get()

    async def close(self):
        await self.websocket.close()
        logger.info("Connection closed")

    async def process_messages(self, callback_function):
        while True:
            message = await self.get_message()
            message = BarrageMessage.from_json(message)
            callback_function(message)
            if message.type == "gift":
                logger.info(f"{message.nickname} 送出了 {message.gift_name} x {message.gfcnt}")
            else:
                logger.info(f"{message.nickname}: {message.msg_content}")
