const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    windowControls: (action) => ipcRenderer.send('windowControls', action),
    writePasskey: (name, passkey) => ipcRenderer.invoke('writePasskey', name, passkey),
    readPasskey: (name) => ipcRenderer.invoke('readPasskey', name)
})