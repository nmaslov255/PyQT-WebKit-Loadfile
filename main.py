#!/usr/bin/env python3
import sys, os

from PyQt5.QtCore import *
from PyQt5.QtWebEngineWidgets import *
from PyQt5.QtWidgets import QApplication
 
app = QApplication(sys.argv)
 
web = QWebEngineView()
web.load(QUrl("file://" + os.path.abspath('template/index.html')))
web.show()
 
sys.exit(app.exec_())