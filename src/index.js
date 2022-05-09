const { app, BrowserWindow, Tray, Menu, autoUpdater, dialog } = require("electron");
const nativeImage = require('electron').nativeImage
const path = require("path");

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
        icon: path.join(__dirname, "icon.png"),
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

    // If running as debug, open the DevTools
    if (process.argv.includes("dev")) {
        mainWindow.webContents.openDevTools()
    }
    // Setup the tray icon
    let tray = null
    app.whenReady().then(() => {
        // Auto Updates

        if (!process.argv.includes("dev")) {
            if (process.platform === "win32") {
                const server = 'https://update.electronjs.org'
                const feed = `${server}/juaneth/omnipetal/${process.platform}-${process.arch}/${app.getVersion()}`

                autoUpdater.setFeedURL(feed)

                autoUpdater.checkForUpdates()

                setInterval(() => {
                    autoUpdater.checkForUpdates()
                }, 300000)

                autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
                    const dialogOpts = {
                        type: 'info',
                        buttons: ['Restart', 'Later'],
                        title: 'Omnipetal Update',
                        message: process.platform === 'win32' ? releaseNotes : releaseName,
                        detail: 'A new version of Omnipetal has been downloaded. Restart to apply the update'
                    }

                    dialog.showMessageBox(dialogOpts).then((returnValue) => {
                        if (returnValue.response === 0) autoUpdater.quitAndInstall()
                    })
                })

                autoUpdater.on('error', message => {
                    console.error('There was a problem updating Omnipetal')
                    console.error(message)
                })
            } else {
                setTimeout(() => {
                    dialog.showMessageBox({
                        type: "warning",
                        title: "Omnipetal",
                        message: "❤️ Omnipetal is not supported for your platform, some features may not work, Windows is our recommended platform ❤️.",
                    });
                }, 2000);
            }
        }


        const image = nativeImage.createFromPath(
            path.join(__dirname, "icon.png")
        );
        tray = new Tray(image.resize({ width: 16, height: 16 }))
        const contextMenu = Menu.buildFromTemplate([{
                label: 'Create a Server',
                click: () => {
                    mainWindow.show()
                    app.focus()
                    mainWindow.loadFile(path.join(__dirname, "/create-server/index.html"));
                }
            },
            {
                label: 'Manage Servers',
                click: () => {
                    mainWindow.show()
                    app.focus()
                    mainWindow.loadFile(path.join(__dirname, "/server-manager/index.html"));
                }
            },
            {
                label: 'Manage Remotes',
                click: () => {
                    mainWindow.show()
                    app.focus()
                    mainWindow.loadFile(path.join(__dirname, "/manage-remotes/index.html"));
                }
            },
            {
                label: 'Settings',
                click: () => {
                    mainWindow.show()
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
            }
        ])
        tray.setToolTip('Omnipetal')
        tray.setContextMenu(contextMenu)

        // When the app is closed, destroy the tray
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