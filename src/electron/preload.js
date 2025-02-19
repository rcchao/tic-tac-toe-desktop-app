const { contextBridge, ipcRenderer } = require('electron');

// This file exposes the necessary APIs to the renderer process

contextBridge.exposeInMainWorld('electronAPI', {
    closeApp: () => {ipcRenderer.send('closeApp')},
    minimiseApp: () => ipcRenderer.send('minimiseApp'),
});