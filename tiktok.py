import asyncio
import os
import threading

import requests
from PyQt5.QtGui import QPixmap

from Barrage import Tiktok
from Model.TikTok import BarrageMessage

import sys
from PyQt5 import QtWidgets
from Windows import MainWindowUI
from GPT import Chat
from Utils import Config, Common

MAIN_WINDOW = MainWindowUI()
LIVE_MSG_CONTENT = ""
PENDING_LIST = []
GIFT_LIST = []


def update_answer_msg(msg: str):
    MAIN_WINDOW.textEdit.setMarkdown(msg)
    # scroll to bottom
    MAIN_WINDOW.textEdit.moveCursor(MAIN_WINDOW.textEdit.textCursor().End)


def update_ask_msg(msg: BarrageMessage):
    MAIN_WINDOW.textEdit_2.setText(msg.msg_content)
    MAIN_WINDOW.labelUsername.setText(f"@{msg.user_nickname}")
    try:
        rep = requests.get(msg.user_avatar)
        if rep.status_code == 200:
            pixmap = QPixmap()
            pixmap.loadFromData(rep.content)
            MAIN_WINDOW.labelUserLogo.setPixmap(Common.round_avatar(pixmap))
    except:
        MAIN_WINDOW.labelUserLogo.setPixmap(Common.round_avatar(QPixmap("Resources/tiktok_default_avatar.jfif")))
    MAIN_WINDOW.labelUserLogo.setScaledContents(True)


def process_pending_list():
    global PENDING_LIST
    while True:
        if len(PENDING_LIST) > 0:
            message = PENDING_LIST.pop(0)
            MAIN_WINDOW.update_ask_signal.emit(message)
            chat = Chat(Config().get_api_key())
            answer = chat.chat(message.msg_content, stream=True)
            answer_content = ''
            for char in answer:
                answer_content += char
                MAIN_WINDOW.update_answer_signal.emit(answer_content)
            MAIN_WINDOW.update_wait_list_signal.emit(PENDING_LIST)


def process_wait_list(wait_list: list):
    # convert list to string and update
    wait_list_str = ''
    for i in wait_list:
        wait_list_str += f"{i.user_nickname}: {i.msg_content}\n\n"
    MAIN_WINDOW.labelWaitList.setText(wait_list_str)


def tiktok_process_message(message: BarrageMessage):
    global PENDING_LIST, GIFT_LIST
    # TODO: code gift logic here
    PENDING_LIST.append(message)
    MAIN_WINDOW.update_wait_list_signal.emit(PENDING_LIST)


def run_main_window():
    app = QtWidgets.QApplication(sys.argv)
    MainWindow = QtWidgets.QMainWindow()
    MAIN_WINDOW.setupUi(MainWindow)
    MAIN_WINDOW.update_ask_signal.connect(update_ask_msg)
    MAIN_WINDOW.update_answer_signal.connect(update_answer_msg)
    MAIN_WINDOW.update_wait_list_signal.connect(process_wait_list)
    MainWindow.show()
    sys.exit(app.exec_())


if __name__ == "__main__":
    # set proxy for openai API
    if Config().is_proxy_on():
        os.environ["HTTP_PROXY"] = Config().get_proxy_url()
        os.environ["HTTPS_PROXY"] = Config().get_proxy_url()


    # thread run main window
    thread_main_window = threading.Thread(target=run_main_window)
    thread_main_window.start()

    # thread process pending list
    thread_process_pending_list = threading.Thread(target=process_pending_list)
    thread_process_pending_list.start()

    # tiktok barrage
    client = Tiktok()
    asyncio.get_event_loop().run_until_complete(client.connect())
    asyncio.ensure_future(client.receive_messages())
    asyncio.ensure_future(client.process_messages(tiktok_process_message))
    asyncio.get_event_loop().run_forever()
