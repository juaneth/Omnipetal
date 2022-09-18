const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    windowControls: (action) => ipcRenderer.send("windowControls", action),
    config: (action) => ipcRenderer.invoke("config", action),
    writePasskey: (name, passkey) =>
        ipcRenderer.invoke("writePasskey", name, passkey),
    deletePasskey: (name) => ipcRenderer.invoke("deletePasskey", name),
    readPasskey: (name) => ipcRenderer.invoke("readPasskey", name),
});