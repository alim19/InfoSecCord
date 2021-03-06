const electron = require("electron");

const app = electron.app;
app.name = "InfoSecCord";

const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow(){
    mainWindow = new BrowserWindow({width: 800, height: 600});

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    mainWindow.on("closed", () => mainWindow = null);
}

app.on("ready", createWindow);

app.on("window-all-closed", app.quit);
app.on("activate", ()=>{if(mainWindow==null)createWindow()});