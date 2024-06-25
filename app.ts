import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";

function createWindow() {
    let __dirname = import.meta.url;

    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, "preload.js"), // no preload yet, delete if unused
            nodeIntegration: true
        },
        show: false
    });

    mainWindow.loadURL("http://localhost:4200");
    mainWindow.maximize();
    mainWindow.show();
}

ipcMain.on('quit-app', (event, args) => {
    app.quit();
})

app.whenReady().then(() => {
    createWindow();
});