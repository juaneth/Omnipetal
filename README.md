# Omnipetal (Client) <img src="https://user-images.githubusercontent.com/68202118/162853416-0ca7c63b-0d6d-4d28-9c5c-3f165bb31811.png" width="25" height="25">
## Minecraft Server Manager with Remote Managment and Docker integration

<img src="https://user-images.githubusercontent.com/68202118/163295152-637cd263-a32b-43ca-a315-9402c8faf0d9.png" width="800">

### For server daemon: [Omnipetal-Daemon](https://github.com/juaneth/Omnipetal-Daemon)

## Dev
### Getting started

Firstly clone this repo and change directory into it: 
```
git clone https://github.com/juaneth/Omnipetal.git
cd Omnipetal
```
Then from inside the folder run `npm i` to install all dependecies (Electron, Electron Forge etc.) and it should all be great from there!

Then to start Omnipetal just run `npm run start` and to debug just run `npm run dev`

### Build
To build Omnipetal just run `npm run make` and this wll put the build in `./out/make/[Platform]/`

All build settings are in `./package.json` under 
```
"config": {
        "forge": {

        }
    },
```

Example: 
```
"config": {
        "forge": {
            "packagerConfig": {
                "name": "Omnipetal",
                "executableName": "Omnipetal",
                "icon": "src/icon.ico"
            },
            "makers": [{
                    "name": "@electron-forge/maker-squirrel",
                    "config": {
                        "name": "Omnipetal",
                        "productName": "Omnipetal",
                        "icon": "src/icon.ico"
                    }
                },
                {
                    "name": "@electron-forge/maker-zip",
                    "platforms": [
                        "darwin"
                    ]
                },
                {
                    "name": "@electron-forge/maker-deb",
                    "config": {}
                },
                {
                    "name": "@electron-forge/maker-rpm",
                    "config": {}
                }
            ]
        }
    },
```