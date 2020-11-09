'use strict';
const { app, BrowserWindow } = require('electron');
const { PythonShell } = require('python-shell');
require('electron-reload')('../');
function createWindow () {
    
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
    
  }
 
});
PythonShell.runString('hello.py', null, function (err) {
    if (err) throw err;
    console.log('finished');
  });