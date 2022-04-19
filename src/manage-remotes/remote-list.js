const fs = require("fs");
const getAppDataPath = require("appdata-path");

// Add remotes to remote list options
let data = require(`${getAppDataPath()}/omnipetal/config.json`);

let remoteList = document.getElementById("remotes");

data.remotes.forEach((obj) => {
    let keys = Object.keys(obj);

    let option = document.createElement("option");
    option.text = keys[0];
    option.className = "text-center text-white transition-all";
    remoteList.appendChild(option);
});

//  Add change event (When select changed)
remoteList.addEventListener("change", function() {
    data.remotes.forEach((obj) => {
        let keys = Object.keys(obj);
        if (keys[0] === remoteList.value) {
            // Fill out IP and Port fields
            document.getElementById("ip").value = obj[keys[0]].ip;
            document.getElementById("port").value = obj[keys[0]].port;
        }
    });
});
// Fill out ip and port fields on load
window.addEventListener("load", function load() {
    data.remotes.forEach((obj) => {
        let keys = Object.keys(obj);
        if (keys[0] === remoteList.value) {
            // Fill out IP and Port fields
            document.getElementById("ip").value = obj[keys[0]].ip;
            document.getElementById("port").value = obj[keys[0]].port;
        }
    });
});