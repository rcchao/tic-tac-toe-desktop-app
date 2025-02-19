import {app, BrowserWindow, ipcMain} from 'electron';
import path from 'path'; // Loading it in the right file path independent of where the user has it
import { isDev } from './util.js'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.on('ready', () => {
    // You can set the height and width of the winder in BrowserWindow
    const mainWindow = new BrowserWindow({
        height: 417,
        width: 312,
        resizable: false,
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, '..', 'src', 'electron', 'preload.js')
        },
    });
    
    if (isDev()) {
        mainWindow.loadURL('http://localhost:5123')
    } else {
        mainWindow.loadFile(path.join(app.getAppPath() , 'dist-react', 'index.html'));
    }

    // mainWindow.webContents.openDevTools(); // Enable DevTools on startup

    ipcMain.on('closeApp', () => { mainWindow.close()})
    ipcMain.on('minimiseApp', () => { mainWindow.minimize()})
})