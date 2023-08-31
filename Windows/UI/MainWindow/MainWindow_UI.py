# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'MainWindow_UI.ui'
#
# Created by: PyQt5 UI code generator 5.15.9
#
# WARNING: Any manual changes made to this file will be lost when pyuic5 is
# run again.  Do not edit this file unless you know what you are doing.


from PyQt5 import QtCore, QtGui, QtWidgets
from PyQt5.QtCore import QObject


class Ui_MainWindow(QObject):
    def setupUi(self, MainWindow):
        MainWindow.setObjectName("MainWindow")
        MainWindow.resize(1101, 612)
        MainWindow.setStyleSheet("*{\n"
"background-color: rgb(0, 0, 0);\n"
"}\n"
"QScrollBar:vertical {\n"
"    border: 2px solid #999999;\n"
"    background: #F0F0F0;\n"
"    width: 10px;\n"
"    margin: 0px 0px 0px 0px;\n"
"}\n"
"\n"
"QScrollBar::handle:vertical {\n"
"    background: #888888;\n"
"    min-height: 20px;\n"
"}\n"
"\n"
"QScrollBar::add-line:vertical, QScrollBar::sub-line:vertical {\n"
"    background: none;\n"
"}\n"
"")
        self.centralwidget = QtWidgets.QWidget(MainWindow)
        self.centralwidget.setObjectName("centralwidget")
        self.labelBotLogo = QtWidgets.QLabel(self.centralwidget)
        self.labelBotLogo.setGeometry(QtCore.QRect(40, 60, 51, 51))
        self.labelBotLogo.setStyleSheet("border-image: url(:/Images/Resources/Images/ai_logo.png);\n"
"background-repeat: no-repeat;\n"
"background-attachment: fixed;\n"
"background-size: cover;\n"
"border-radius: 25px;")
        self.labelBotLogo.setText("")
        self.labelBotLogo.setObjectName("labelBotLogo")
        self.textEdit = QtWidgets.QTextEdit(self.centralwidget)
        self.textEdit.setGeometry(QtCore.QRect(150, 20, 651, 391))
        font = QtGui.QFont()
        font.setFamily("Microsoft YaHei UI")
        font.setPointSize(16)
        self.textEdit.setFont(font)
        self.textEdit.setStyleSheet("QTextEdit{\n"
"background-color: rgba(43, 43, 43, 180);\n"
"border: 1px solid #2b2b2b;\n"
"border-radius: 20px;\n"
"padding: 10px;\n"
"color: white;\n"
"}\n"
"QScrollBar:vertical {\n"
"    border: none;\n"
"    background-color: #333333;\n"
"    width: 10px;\n"
"    margin: 0px 0px 0px 0px;\n"
"    border-radius: 5px;\n"
"}\n"
"\n"
"QScrollBar::handle:vertical {\n"
"    background-color: #666666;\n"
"    min-height: 20px;\n"
"    border-radius: 5px;\n"
"}\n"
"\n"
"QScrollBar::add-line:vertical {\n"
"    border: none;\n"
"    background-color: #333333;\n"
"    height: 10px;\n"
"    subcontrol-position: bottom;\n"
"    subcontrol-origin: margin;\n"
"    border-radius: 5px;\n"
"}\n"
"\n"
"QScrollBar::sub-line:vertical {\n"
"    border: none;\n"
"    background-color: #333333;\n"
"    height: 10px;\n"
"    subcontrol-position: top;\n"
"    subcontrol-origin: margin;\n"
"    border-radius: 5px;\n"
"}\n"
"\n"
"QScrollBar::add-page:vertical, QScrollBar::sub-page:vertical {\n"
"    background-color: none;\n"
"    border-radius: 5px;\n"
"}")
        self.textEdit.setMarkdown("")
        self.textEdit.setObjectName("textEdit")
        self.labelUserLogo = QtWidgets.QLabel(self.centralwidget)
        self.labelUserLogo.setGeometry(QtCore.QRect(30, 510, 51, 51))
        self.labelUserLogo.setStyleSheet("background-repeat: no-repeat;\n"
"background-attachment: fixed;\n"
"background-size: cover;")
        self.labelUserLogo.setText("")
        self.labelUserLogo.setObjectName("labelUserLogo")
        self.textEdit_2 = QtWidgets.QTextEdit(self.centralwidget)
        self.textEdit_2.setGeometry(QtCore.QRect(150, 440, 651, 121))
        font = QtGui.QFont()
        font.setFamily("Microsoft YaHei UI")
        font.setPointSize(16)
        self.textEdit_2.setFont(font)
        self.textEdit_2.setStyleSheet("QTextEdit{\n"
"background-color: rgba(43, 43, 43, 180);\n"
"border: 1px solid #2b2b2b;\n"
"border-radius: 20px;\n"
"padding: 10px;\n"
"color: white;\n"
"}\n"
"QScrollBar:vertical {\n"
"    border: 2px solid #999999;\n"
"    background: #F0F0F0;\n"
"    width: 10px;\n"
"    margin: 0px 0px 0px 0px;\n"
"}\n"
"\n"
"QScrollBar::handle:vertical {\n"
"    background: #888888;\n"
"    min-height: 20px;\n"
"}\n"
"\n"
"QScrollBar::add-line:vertical, QScrollBar::sub-line:vertical {\n"
"    background: none;\n"
"}\n"
"")
        self.textEdit_2.setObjectName("textEdit_2")
        self.label = QtWidgets.QLabel(self.centralwidget)
        self.label.setGeometry(QtCore.QRect(820, 20, 161, 21))
        font = QtGui.QFont()
        font.setFamily("Microsoft YaHei UI")
        font.setPointSize(14)
        self.label.setFont(font)
        self.label.setStyleSheet("color: white;")
        self.label.setObjectName("label")
        self.labelWaitList = QtWidgets.QLabel(self.centralwidget)
        self.labelWaitList.setGeometry(QtCore.QRect(820, 45, 271, 511))
        font = QtGui.QFont()
        font.setFamily("Microsoft YaHei UI")
        font.setPointSize(12)
        self.labelWaitList.setFont(font)
        self.labelWaitList.setStyleSheet("color: rgb(161, 161, 161);")
        self.labelWaitList.setText("")
        self.labelWaitList.setAlignment(QtCore.Qt.AlignLeading|QtCore.Qt.AlignLeft|QtCore.Qt.AlignTop)
        self.labelWaitList.setWordWrap(False)
        self.labelWaitList.setObjectName("labelWaitList")
        self.labelUsername = QtWidgets.QLabel(self.centralwidget)
        self.labelUsername.setGeometry(QtCore.QRect(10, 446, 131, 51))
        font = QtGui.QFont()
        font.setFamily("Microsoft YaHei UI")
        font.setPointSize(14)
        self.labelUsername.setFont(font)
        self.labelUsername.setStyleSheet("color: rgb(255, 255, 255);")
        self.labelUsername.setText("")
        self.labelUsername.setAlignment(QtCore.Qt.AlignCenter)
        self.labelUsername.setObjectName("labelUsername")
        self.labelUsername_2 = QtWidgets.QLabel(self.centralwidget)
        self.labelUsername_2.setGeometry(QtCore.QRect(10, 10, 121, 51))
        font = QtGui.QFont()
        font.setFamily("Microsoft YaHei UI")
        font.setPointSize(14)
        self.labelUsername_2.setFont(font)
        self.labelUsername_2.setStyleSheet("color: rgb(255, 255, 255);")
        self.labelUsername_2.setAlignment(QtCore.Qt.AlignCenter)
        self.labelUsername_2.setObjectName("labelUsername_2")
        MainWindow.setCentralWidget(self.centralwidget)
        self.menubar = QtWidgets.QMenuBar(MainWindow)
        self.menubar.setGeometry(QtCore.QRect(0, 0, 1101, 21))
        self.menubar.setObjectName("menubar")
        MainWindow.setMenuBar(self.menubar)
        self.statusbar = QtWidgets.QStatusBar(MainWindow)
        self.statusbar.setObjectName("statusbar")
        MainWindow.setStatusBar(self.statusbar)

        self.retranslateUi(MainWindow)
        QtCore.QMetaObject.connectSlotsByName(MainWindow)

    def retranslateUi(self, MainWindow):
        _translate = QtCore.QCoreApplication.translate
        MainWindow.setWindowTitle(_translate("MainWindow", "智能AI对答 - ChatGPT引擎"))
        self.textEdit.setHtml(_translate("MainWindow", "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\">\n"
"<html><head><meta name=\"qrichtext\" content=\"1\" /><style type=\"text/css\">\n"
"p, li { white-space: pre-wrap; }\n"
"</style></head><body style=\" font-family:\'Microsoft YaHei UI\'; font-size:16pt; font-weight:400; font-style:normal;\">\n"
"<p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:14pt;\"><br /></p></body></html>"))
        self.textEdit_2.setHtml(_translate("MainWindow", "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\">\n"
"<html><head><meta name=\"qrichtext\" content=\"1\" /><style type=\"text/css\">\n"
"p, li { white-space: pre-wrap; }\n"
"</style></head><body style=\" font-family:\'Microsoft YaHei UI\'; font-size:16pt; font-weight:400; font-style:normal;\">\n"
"<p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:11pt;\"><br /></p></body></html>"))
        self.label.setText(_translate("MainWindow", "等待列表："))
        self.labelUsername_2.setText(_translate("MainWindow", "@智能AI答复"))
from . import MainWindow_rc
