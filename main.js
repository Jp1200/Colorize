'use strict';
const { app, BrowserWindow } = require('electron');

require('electron-reload')('../');
function createWindow () {
    
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "#000",
    webPreferences: {
      nodeIntegration: true
    }
  })
  
  win.loadFile('index.html')
  
  
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
