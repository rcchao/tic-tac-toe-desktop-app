import {app, BrowserWindow} from 'electron';
import path from 'path'; // Loading it in the right file path independent of where the user has it
import { isDev } from './util.js'
// type test = string;

app.on('ready', () => {
    // You can set the height and width of the winder in BrowserWindow
    const mainWindow = new BrowserWindow({height: 500, width: 500});
    
    if (isDev()) {
        mainWindow.loadURL('http://localhost:5123')
    } else {
        mainWindow.loadFile(path.join(app.getAppPath() + '/dist-react/index.html'));
    }
})