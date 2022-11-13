const {
    app,
    BrowserWindow,
    Tray,
    Menu,
    autoUpdater,
    dialog,
    webContents,
    ipcMain,
    safeStorage,
} = require("electron");
const nativeImage = require("electron").nativeImage;
const path = require("path");

const store = require('store-js')

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
    app.quit();
}

const isDev = process.env.IS_DEV === "true";

require('update-electron-app')()

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1400,
        height: 720,
        frame: false,
        title: "Omnipetal",
        backgroundColor: "#FFF",
        icon: path.join(__dirname, "Resources", "icon-noBg-zoom.png"),
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    // Open the DevTools.
    if (isDev) {
        mainWindow.loadURL("http://localhost:5173");
        mainWindow.webContents.openDevTools();
    } else {
        // mainWindow.removeMenu();
        mainWindow.loadFile(path.join(__dirname, "build", "index.html"));
    }

    // Setup the tray icon
    let tray = null;
    app.whenReady().then(() => {
        const image = nativeImage.createFromPath(
            path.join(__dirname, "Resources", "icon-noBg-zoom.png")
        );
        tray = new Tray(image.resize({ width: 16, height: 16 }));
        const contextMenu = Menu.buildFromTemplate([{
                label: "Hide",
                click: () => {
                    mainWindow.hide();
                },
            },
            {
                label: "Show",
                click: () => {
                    mainWindow.show();
                },
            },
            {
                label: "Close",
                click: () => {
                    app.exit();
                },
            },
            { type: "separator", label: " " },
            {
                label: "Toggle Dev Tools",
                click: () => {
                    if (mainWindow.webContents.isDevToolsOpened()) {
                        mainWindow.webContents.closeDevTools();
                    } else {
                        mainWindow.webContents.openDevTools();
                    }
                },
            },
        ]);
        tray.setToolTip("Omnipetal");
        tray.setContextMenu(contextMenu);

        tray.on("click", () => {
            if (mainWindow.isVisible()) {
                mainWindow.hide();
            } else {
                mainWindow.show();
            }
        });

        ipcMain.handle("writePasskey", async(event, name, passkey) => {
            if (safeStorage.isEncryptionAvailable() === false) {
                return "ENCRYPTIONFAILED";
            }

            const encryptedPasskey = safeStorage.encryptString(passkey);

            store.set("passkeys." + name, encryptedPasskey);
        });

        ipcMain.handle("deletePasskey", async(event, name) => {
            if (safeStorage.isEncryptionAvailable() === false) {
                return "ENCRYPTIONFAILED";
            }

            store.delete("passkeys." + name);
        });

        ipcMain.handle("readPasskey", async(event, name) => {
            if (safeStorage.isEncryptionAvailable() === false) {
                return "ENCRYPTIONFAILED";
            }

            const encryptedPasskey = store.get("passkeys." + name);

            console.log("passkeys." + name);

            return safeStorage.decryptString(Buffer.from(encryptedPasskey, "utf8"));
        });

        // When the app is closed, destroy the tray
        app.on("quit", () => {
            tray.destroy();
        });

        ipcMain.on("windowControls", (event, action) => {
            if (action == "min") {
                mainWindow.minimize();
            }
            if (action == "max") {
                if (mainWindow.isMaximized()) {
                    mainWindow.unmaximize();
                } else {
                    mainWindow.maximize();
                }
            }
            if (action == "close") {
                app.quit();
            }
        });
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow();
    app.on("activate", function() {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});