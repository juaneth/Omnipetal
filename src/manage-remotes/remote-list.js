const fs = require("fs");
const getAppDataPath = require("appdata-path");

// Add remotes to remote list options
let data = require(`${getAppDataPath()}/omnipetal/config.json`);

let remoteList = document.getElementById("remotes");
let saveButton = document.getElementById("save");

data.remotes.forEach((obj) => {
    let option = document.createElement("option");
    option.text = obj.name;
    option.className = "text-center text-white transition-all";
    remoteList.appendChild(option);
});

//  Add change event (When select changed)
remoteList.addEventListener("change", function() {
    // Get specific remote in remote list
    data.remotes.forEach((obj) => {
        if (obj.name === remoteList.value) {
            // Fill out IP and Port fields
            document.getElementById("ip").value = obj.ip;
            document.getElementById("port").value = obj.port;
        }
    });
});

// Fill out ip and port fields on load
window.addEventListener("load", function load() {
    // Get specific remote in remote list
    data.remotes.forEach((obj) => {
        if (obj.name === remoteList.value) {
            // Fill out IP and Port fields
            document.getElementById("ip").value = obj.ip;
            document.getElementById("port").value = obj.port;
        }
    });
});

// Save changes to remote list
saveButton.addEventListener("click", function() {
    // Get specific remote in remote list
    data.remotes.forEach((obj) => {
        if (obj.name === remoteList.value) {
            // Save changes to config json
            let newIp = document.getElementById("ip").value;
            let newPort = document.getElementById("port").value;

            var data = JSON.parse(
                fs.readFileSync(`${getAppDataPath()}/omnipetal/config.json`)
            );

            let updatedRemote = {
                name: remoteList.value,
                ip: newIp,
                port: newPort,

            };

            data.remotes.push(updatedRemote);

            fs.writeFileSync(
                `${getAppDataPath()}/omnipetal/config.json`,
                JSON.stringify(data)
            );
        }
    });
});