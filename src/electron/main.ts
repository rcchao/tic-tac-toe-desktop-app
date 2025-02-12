import {app, BrowserWindow} from 'electron';
import path from 'path'; // Loading it in the right file path independent of where the user has it
import { isDev } from './util.js'

// 1. Make the browser top tab and icons
// 2. Make draggable with CSS (-webkit-app-region: drag)
// 3. Make minimisable and closable with ISO

app.on('ready', () => {
    // You can set the height and width of the winder in BrowserWindow
    const mainWindow = new BrowserWindow({
        height: 417,
        width: 312,
        resizable: false,
        //frame: false
    });
    
    if (isDev()) {
        mainWindow.loadURL('http://localhost:5123')
    } else {
        mainWindow.loadFile(path.join(app.getAppPath() + '/dist-react/index.html'));
    }
})