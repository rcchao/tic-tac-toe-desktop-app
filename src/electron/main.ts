import {app, BrowserWindow} from 'electron';
import path from 'path';

// type test = string;

app.on('ready', () => {
    // You can set the height and width of the winder in BrowserWindow
    const mainWindow = new BrowserWindow({});
    // Loading it in the right file path independent of where the user has it
    mainWindow.loadFile(path.join(app.getAppPath() + '/dist-react/index.html'));
})