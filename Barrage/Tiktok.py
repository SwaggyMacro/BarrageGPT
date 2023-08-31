import asyncio
import websockets
from loguru import logger

from Dictionary.Tiktok import Gift
from Model.TikTok import BarrageMessage


class Tiktok:
    def __init__(self, url='ws://127.0.0.1:9527'):
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

    @staticmethod
    async def recv_gift(msg_content):
        gift = Gift()
        if gift.is_gift_exist(msg_content.gift_name):
            logger.info(f"{msg_content.user_nickname} 送出了 {msg_content.gift_name} x {msg_content.gift_number}")
        else:
            logger.warning("unknown gift / gift not found")
            logger.warning(msg_content)

    async def process_messages(self, callback_function):
        while True:
            message = await self.get_message()
            message = BarrageMessage(message)
            callback_function(message)
            if message.isGift:
                asyncio.ensure_future(Tiktok.recv_gift(message))
            else:
                logger.info(f"{message.user_nickname}: {message.msg_content}")
