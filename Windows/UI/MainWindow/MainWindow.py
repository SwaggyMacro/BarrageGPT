# extends UI_MainWindow
from PyQt5.QtCore import pyqtSignal

from Barrage import blivedm
from Model import Huya
from Model.TikTok import BarrageMessage
from .MainWindow_UI import Ui_MainWindow


class MainWindowUI(Ui_MainWindow):
    update_ask_signal = pyqtSignal(BarrageMessage)
    update_ask_bilibili_signal = pyqtSignal(blivedm.DanmakuMessage)
    update_ask_huya_signal = pyqtSignal(Huya.BarrageMessage)
    update_answer_signal = pyqtSignal(str)
    update_wait_list_signal = pyqtSignal(list)

    def __init__(self):
        super().__init__()
