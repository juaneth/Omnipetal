const getAppDataPath = require("appdata-path");

// Add remotes to remote list options
let data = require(`${getAppDataPath()}/omnipetal/config.json`);

let remoteList = document.getElementById("remotes");
let versionList = document.getElementById("versions");

const api = require("../api.js");

data.remotes.forEach((obj) => {
    let option = document.createElement("option");
    option.text = obj.name;
    option.className = "text-center text-white transition-all";
    remoteList.appendChild(option);
});

remoteList.addEventListener("change", () => {
    data.remotes.forEach((obj) => {
        if (remoteList.value == obj.name) {
            api.getAllVersions(obj.ip, obj.port, "debug", "vanilla").then((versions) => {
                versions.forEach((obj) => {
                    let version = document.createElement("option");
                    version.text = obj.id;
                    version.className = "text-center text-white transition-all";
                    versionList.appendChild(version);
                })
            })
        };

    })

    console.log(remoteList.value);
})