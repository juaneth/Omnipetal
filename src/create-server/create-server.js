const getAppDataPath = require("appdata-path");

// Add remotes to remote list options
let data = require(`${getAppDataPath()}/omnipetal/config.json`);

let remoteList = document.getElementById("remotes");
let softwareList = document.getElementById("software");
let versionList = document.getElementById("versions");

let createServer = document.getElementById("create");

const api = require("../api.js");

remoteList.classList.add("text-gray-500");

data.remotes.forEach((obj) => {
    let option = document.createElement("option");
    option.text = obj.name;
    option.className = "text-center text-white transition-all";
    remoteList.appendChild(option);
});

softwareList.addEventListener("change", (e) => {
    versionList.innerText = null;

    data.remotes.forEach((obj) => {
        if (remoteList.value == obj.name) {
            api.getAllVersions(obj.ip, obj.port, "debug", softwareList.value).then((versions) => {
                versions.forEach((obj) => {
                    let version = document.createElement("option");
                    version.text = obj.id;
                    version.className = "text-center text-white transition-all";
                    versionList.appendChild(version);
                })
            })
        };
    })
})

remoteList.addEventListener("change", () => {

    function statusIndicator(status) {
        if (status == 'online') {
            document.getElementById("settings").classList.remove("hidden");
            document.getElementById("settings").classList.add("fade-in");

            document.getElementById("status-online").classList.remove("hidden");
            document.getElementById("status-online").classList.add("fade-in");
        } else if (status == 'offline') {
            document.getElementById("status-offline").classList.remove("hidden");
            document.getElementById("status-offline").classList.add("fade-in");
        } else if (status == 'reset') {
            document.getElementById("status-offline").classList.add("hidden");
            document.getElementById("status-offline").classList.remove("fade-in");

            document.getElementById("status-online").classList.add("hidden");
            document.getElementById("status-online").classList.remove("fade-in");

            document.getElementById("settings").classList.add("hidden");
            document.getElementById("settings").classList.remove("fade-in");
        }
    }

    versionList.innerText = null;
    remoteList.classList.remove("text-gray-500");

    statusIndicator("reset");

    data.remotes.forEach((obj) => {
        if (remoteList.value == obj.name) {
            api.getAllVersions(obj.ip, obj.port, "debug", "vanilla").then((versions) => {
                statusIndicator('online');

                versions.forEach((obj) => {
                    let version = document.createElement("option");
                    version.text = obj.id;
                    version.className = "text-center text-white transition-all";
                    versionList.appendChild(version);
                })
            }).catch(error => {
                statusIndicator('offline');
            })
        };
    })
})

createServer.addEventListener("click", () => {
    data.remotes.forEach((obj) => {
        if (remoteList.value == obj.name) {
            api.createServer(obj.ip, obj.port, "debug").then((data) => {
                console.log(data);
            }).catch(error => {
                console.log(error)
            })
        };
    })
})