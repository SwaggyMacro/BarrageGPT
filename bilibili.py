# -*- coding: utf-8 -*-
import asyncio
import os
import sys
import threading
import gc

import requests
from PyQt5 import QtWidgets
from PyQt5.QtGui import QPixmap
from loguru import logger

from Barrage import blivedm
from GPT import Chat
from Utils import Config, Common
from Windows import MainWindowUI

# TEST_ROOM_IDS from command line arguments
if len(sys.argv) > 1:
    TEST_ROOM_IDS = []
    for i in range(1, len(sys.argv)):
        TEST_ROOM_IDS.append(int(sys.argv[i]))
else:
    TEST_ROOM_IDS = [
        9519547
    ]
    logger.warning("No room id specified, using default room id: 9519547")

MAIN_WINDOW = MainWindowUI()
LIVE_MSG_CONTENT = ""
PENDING_LIST = []


async def main():
    await run_multi_clients()


async def run_multi_clients():
    clients = [blivedm.BLiveClient(room_id) for room_id in TEST_ROOM_IDS]
    handler = MyHandler()
    for client in clients:
        client.add_handler(handler)
        client.start()

    try:
        await asyncio.gather(*(
            client.join() for client in clients
        ))
    finally:
        await asyncio.gather(*(
            client.stop_and_close() for client in clients
        ))


class MyHandler(blivedm.BaseHandler):
    _CMD_CALLBACK_DICT = blivedm.BaseHandler._CMD_CALLBACK_DICT.copy()

    async def __interact_word_callback(self, client: blivedm.BLiveClient, command: dict):
        # print(f"[{client.room_id}] INTERACT_WORD: self_type={type(self).__name__}, room_id={client.room_id},"
        #       f" uname={command['data']['uname']}")
        pass

    _CMD_CALLBACK_DICT['INTERACT_WORD'] = __interact_word_callback  # noqa

    async def _on_heartbeat(self, client: blivedm.BLiveClient, message: blivedm.HeartbeatMessage):
        # print(f'[{client.room_id}] 当前人气值：{message.popularity}')
        # not working, always 1
        pass

    async def _on_danmaku(self, client: blivedm.BLiveClient, message: blivedm.DanmakuMessage):
        global PENDING_LIST
        logger.info(f"[{client.room_id}] {message.uname}: {message.msg}")
        PENDING_LIST.append(message)
        MAIN_WINDOW.update_wait_list_signal.emit(PENDING_LIST)

    async def _on_gift(self, client: blivedm.BLiveClient, message: blivedm.GiftMessage):
        logger.info(f"[{client.room_id}] {message.uname} 送出了 {message.gift_name} x {message.num}"
                    f"（{message.coin_type}瓜子x{message.total_coin}）")

    async def _on_buy_guard(self, client: blivedm.BLiveClient, message: blivedm.GuardBuyMessage):
        logger.info(f"[{client.room_id}] {message.username} 购买了 {message.gift_name}")

    async def _on_super_chat(self, client: blivedm.BLiveClient, message: blivedm.SuperChatMessage):
        logger.info(f"[{client.room_id}]  ¥{message.price} {message.uname} 超级留言：{message.message} ")


def update_answer_msg(msg: str):
    MAIN_WINDOW.textEdit.setMarkdown(msg)
    # scroll to bottom
    MAIN_WINDOW.textEdit.moveCursor(MAIN_WINDOW.textEdit.textCursor().End)


def get_user_avatar(user_id: int):
    rep = requests.get(f"https://api.bilibili.com/x/space/wbi/acc/info?mid={user_id}",
                       headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
                                              'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'})
    try:
        if rep.status_code == 200 and rep.json().get('data') is not None:
            # if key 'data' exists
            return rep.json()['data']['face']
    except:
        pass
    return "https://i0.hdslb.com/bfs/face/member/noface.jpg"


def process_pending_list():
    global PENDING_LIST
    while True:
        if len(PENDING_LIST) > 0:
            message = PENDING_LIST.pop(0)
            MAIN_WINDOW.update_ask_bilibili_signal.emit(message)
            chat = Chat(Config().get_api_key())
            answer = chat.chat(message.msg, stream=True)
            answer_content = ''
            for char in answer:
                answer_content += char
                MAIN_WINDOW.update_answer_signal.emit(answer_content)
            MAIN_WINDOW.update_wait_list_signal.emit(PENDING_LIST)
            gc.collect()


def process_wait_list(wait_list: list):
    # convert list to string and update
    wait_list_str = ''
    for i in wait_list:
        wait_list_str += f"{i.uname}: {i.msg}\n\n"
    MAIN_WINDOW.labelWaitList.setText(wait_list_str)


def update_ask_msg(msg: blivedm.DanmakuMessage):
    MAIN_WINDOW.textEdit_2.setText(msg.msg)
    MAIN_WINDOW.labelUsername.setText(f"@{msg.uname}")
    # rep = requests.get(get_user_avatar(msg.uid))
    rep = requests.get(msg.face)
    try:
        if rep.status_code == 200:
            pixmap = QPixmap()
            pixmap.loadFromData(rep.content)

            # round avatar
            MAIN_WINDOW.labelUserLogo.setPixmap(Common.round_avatar(pixmap))
    except:
        # load default avatar
        MAIN_WINDOW.labelUserLogo.setPixmap(Common.round_avatar(QPixmap("Resources/bilibili_default_avatar.jpg")))
    MAIN_WINDOW.labelUserLogo.setScaledContents(True)


def run_main_window():
    app = QtWidgets.QApplication(sys.argv)
    MainWindow = QtWidgets.QMainWindow()
    MAIN_WINDOW.setupUi(MainWindow)
    MAIN_WINDOW.update_ask_bilibili_signal.connect(update_ask_msg)
    MAIN_WINDOW.update_answer_signal.connect(update_answer_msg)
    MAIN_WINDOW.update_wait_list_signal.connect(process_wait_list)
    MainWindow.setWindowTitle("Bilibili Chatbot")
    MainWindow.show()
    sys.exit(app.exec_())


if __name__ == '__main__':
    # set proxy for openai API
    os.environ["HTTP_PROXY"] = "http://127.0.0.1:10801"
    os.environ["HTTPS_PROXY"] = "http://127.0.0.1:10801"

    # thread run main window
    thread_main_window = threading.Thread(target=run_main_window)
    thread_main_window.start()

    # thread process pending list
    thread_process_pending_list = threading.Thread(target=process_pending_list)
    thread_process_pending_list.start()
    asyncio.run(main())
