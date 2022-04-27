# Omnipetal (Client) <img src="https://user-images.githubusercontent.com/68202118/162853416-0ca7c63b-0d6d-4d28-9c5c-3f165bb31811.png" width="25" height="25"> [![Discord Link](https://img.shields.io/badge/-Server-5865F2?logo=discord&logoColor=white&style=for-the-badge)](https://discord.gg/ufAX6VqcaD)
## Minecraft Server Manager with Remote Managment and Docker integration



### For server daemon: [Omnipetal-Daemon](https://github.com/juaneth/Omnipetal-Daemon)

<img src="/src/omnipetal.png" width="800">


## What is it?
Omnipetal is a client for creating Minecraft Servers remotely using docker. We have two components, a Client and a Daemon, this repository is for the client that connects to the Daemon. 

## Dev
### Getting started

Firstly check you have nodeJS and git installed and ready (run `node -v` if unsure) Then clone this repo and change directory into it: 
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

## Support
You can contact us by creating a ticket in our [Discord Server](https://discord.gg/ufAX6VqcaD) and by creating an issue
