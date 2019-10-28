#!/usr/bin/env python3
import sys, os

from PyQt5.QtCore import QUrl
from PyQt5.QtWebEngineWidgets import QWebEngineView
from PyQt5.QtWidgets import QApplication


if __name__ == '__main__':
    app = QApplication(sys.argv)
     
    web = QWebEngineView()
    web.load(QUrl.fromLocalFile(os.path.abspath('src/index.html')))
    web.show()

    sys.exit(app.exec_())