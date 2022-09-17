const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    windowControls: (action) => ipcRenderer.send('windowControls', action),
    config: (action) => ipcRenderer.invoke('config', action)
})