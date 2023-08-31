from PyQt5.QtCore import Qt
from PyQt5.QtGui import QImage, QPainter, QBrush, QColor, QPixmap


class Common:

    @staticmethod
    def round_avatar(pixmap: QPixmap):
        # round avatar
        size = pixmap.size()
        image = QImage(size, QImage.Format_ARGB32)
        image.fill(Qt.transparent)
        painter = QPainter(image)
        painter.setRenderHint(QPainter.Antialiasing)
        painter.setBrush(QBrush(QColor(0, 0, 0, 0)))
        painter.drawEllipse(0, 0, size.width(), size.height())
        painter.setBrush(QBrush(pixmap))
        painter.drawEllipse(0, 0, size.width(), size.height())
        painter.end()
        return QPixmap.fromImage(image)
