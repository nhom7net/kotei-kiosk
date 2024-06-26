import { app, BrowserWindow } from "electron";
import * as path from "path";

function createWindow() {
    let __dirname = import.meta.url;

    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        show: false
    });

    mainWindow.loadURL("http://localhost:4200");
    mainWindow.maximize();
    mainWindow.show();
}

app.whenReady().then(() => {
    createWindow();
});