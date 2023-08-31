from sqlalchemy.util import asyncio

from Barrage import Huya
from Model.Huya import BarrageMessage
import asyncio
import os
import threading

import requests
from PyQt5.QtGui import QPixmap

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


def get_user_face(uid: str):
    return requests.get('https://v.huya.com/index.php?r=user%2Fliveinfo&uid=' + uid).json()['user_avatar']


def update_ask_msg(msg: BarrageMessage):
    MAIN_WINDOW.textEdit_2.setText(msg.msg_content)
    MAIN_WINDOW.labelUsername.setText(f"@{msg.nickname}")
    msg.face = get_user_face(msg.uid)
    try:
        rep = requests.get(msg.face)
        if rep.status_code == 200:
            pixmap = QPixmap()
            pixmap.loadFromData(rep.content)

            # round avatar
            MAIN_WINDOW.labelUserLogo.setPixmap(Common.round_avatar(pixmap))
    except:
        MAIN_WINDOW.labelUserLogo.setPixmap(Common.round_avatar(QPixmap("Resources/huya_default_avatar.png")))
    MAIN_WINDOW.labelUserLogo.setScaledContents(True)


def process_pending_list():
    global PENDING_LIST
    while True:
        if len(PENDING_LIST) > 0:
            message = PENDING_LIST.pop(0)
            if message.type == "gift":
                MAIN_WINDOW.update_wait_list_signal.emit(PENDING_LIST)
                continue
            MAIN_WINDOW.update_ask_huya_signal.emit(message)
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
        wait_list_str += f"{i.nickname}: {i.msg_content}\n\n"
    MAIN_WINDOW.labelWaitList.setText(wait_list_str)


def run_main_window():
    app = QtWidgets.QApplication(sys.argv)
    MainWindow = QtWidgets.QMainWindow()
    MAIN_WINDOW.setupUi(MainWindow)
    MAIN_WINDOW.update_ask_huya_signal.connect(update_ask_msg)
    MAIN_WINDOW.update_answer_signal.connect(update_answer_msg)
    MAIN_WINDOW.update_wait_list_signal.connect(process_wait_list)
    MainWindow.setWindowTitle("Huya Chatbot")
    MainWindow.show()
    sys.exit(app.exec_())


def huya_process_message(message: BarrageMessage):
    global PENDING_LIST, GIFT_LIST
    # TODO: code gift logic here
    print(message)
    PENDING_LIST.append(message)
    MAIN_WINDOW.update_wait_list_signal.emit(PENDING_LIST)


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

    client = Huya()
    asyncio.get_event_loop().run_until_complete(client.connect())
    asyncio.ensure_future(client.receive_messages())
    asyncio.ensure_future(client.process_messages(huya_process_message))
    asyncio.get_event_loop().run_forever()
