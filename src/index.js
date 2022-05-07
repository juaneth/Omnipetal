const { app, BrowserWindow, Tray, Menu } = require("electron");
const path = require("path");
require('update-electron-app')({
    repo: 'juaneth/omnipetal',
})

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
    // eslint-disable-line global-require
    app.quit();
}

const createWindow = () => {
    // Create the browser window

    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 800,
        minHeight: 720,
        title: "Omnipetal",
        icon: path.join(__dirname, "icon.ico"),
        titleBarStyle: "hidden",
        autoHideMenuBar: true,
        titleBarOverlay: {
            color: "#1f2937",
            symbolColor: "#fff",
        },
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true,
        },
    });

    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, "index.html"));

    if (process.argv.includes("dev")) {
        mainWindow.webContents.openDevTools()
    }

    let tray = null
    app.whenReady().then(() => {
        tray = new Tray(path.join(__dirname, "icon.ico"))
        const contextMenu = Menu.buildFromTemplate([{
                label: 'Manage Servers',
                click: () => {
                    app.focus()
                    mainWindow.loadFile(path.join(__dirname, "/server-manager/index.html"));
                }
            },
            {
                label: 'Manage Remotes',
                click: () => {
                    app.focus()
                    mainWindow.loadFile(path.join(__dirname, "/manage-remotes/index.html"));
                }
            },
            {
                label: 'Settings',
                click: () => {
                    app.focus()
                    mainWindow.loadFile(path.join(__dirname, "/settings/index.html"));
                }
            },
            { type: 'separator', label: ' ' },
            {
                label: 'Hide',
                click: () => {
                    mainWindow.hide()
                }
            },
            {
                label: 'Show',
                click: () => {
                    mainWindow.show()
                }
            },
            {
                label: 'Close',
                click: () => {
                    app.exit()
                }
            },
            { type: 'separator', label: ' ' },
            {
                label: 'Toggle Dev Tools',
                click: () => {
                    if (mainWindow.webContents.isDevToolsOpened()) {
                        mainWindow.webContents.closeDevTools()
                    } else {
                        mainWindow.webContents.openDevTools()
                    }
                }
            },
        ])
        tray.setToolTip('Omnipetal')
        tray.setContextMenu(contextMenu)

        app.on('quit', () => {
            tray.destroy()
        })
    })
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.