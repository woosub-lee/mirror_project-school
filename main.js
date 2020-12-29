const {app} = require('electron');
const {BrowserWindow} = require('electron');
let win
function createWindow () {
    win = new BrowserWindow({width: 1024, height: 1280, frame: false, webPreferences:{nodeIntegration:true},fullscreen:true})
    win.loadURL(`file://${__dirname}/index.html`)
    win.on('closed', () => {
    win = null
    })
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
if (process.platform !== 'darwin') {
    app.quit()
}
})
app.on('activate', () => {
if (win === null) {
    createWindow()
}
})