# Omnipetal (Client) <img src="https://user-images.githubusercontent.com/68202118/162853416-0ca7c63b-0d6d-4d28-9c5c-3f165bb31811.png" width="25" height="25"> [![Discord Link](https://img.shields.io/badge/-Server-5865F2?logo=discord&logoColor=white&style=for-the-badge)](https://discord.gg/tt5rmneEN6)
## Minecraft Server Manager with Remote Managment and Docker integration

<img src="/src/omnipetal.png" height="300">

### If you're looking for our Daemon: [Omnipetal-Daemon](https://github.com/juaneth/Omnipetal-Daemon)

## What is it?
Omnipetal is a client for creating Minecraft Servers remotely using docker

## Installation
Head over to [Getting Started guide here](https://github.com/juaneth/Omnipetal/wiki/Getting-Started), then follow that and you should be all set <3.

# Developers
## Getting started

Clone the git repo and install dependencies
```
git clone https://github.com/juaneth/Omnipetal.git
cd Omnipetal
npm i
```

**Then to start Omnipetal just run `npm run dev`, DO NOT RUN `npm start` OR `npm run start` This will auto update and crash!**

## Build
To build Omnipetal just run `npm run make` and this wll put the build in `./out/make/[Platform]/`

Build configuration is located in `./package.json`

## Auto Updates
To configure auto-updates you can change the settings in `./src/index.js`

## Support
You can contact us by creating a ticket in our [Discord Server](https://discord.gg/tt5rmneEN6) and by creating an issue.
