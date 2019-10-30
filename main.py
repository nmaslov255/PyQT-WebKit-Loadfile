#!/usr/bin/env python3
import sys, os

from PyQt5.QtCore import QUrl
from PyQt5.QtWebEngineWidgets import QWebEngineView
from PyQt5.QtWidgets import QApplication, QFileDialog

def _downloadRequested(item):
    dialog = QFileDialog()

    file = item.path().split('/')[-1]
    path, _ = dialog.getSaveFileName(None, 'Save File', file)

    item.setPath(path)
    item.accept()

if __name__ == '__main__':
    app = QApplication(sys.argv)

    web = QWebEngineView()

    web.load(QUrl.fromLocalFile(os.path.abspath('frontend/index.html')))
    web.page().profile().downloadRequested.connect(_downloadRequested)
    web.show()

    sys.exit(app.exec_())
