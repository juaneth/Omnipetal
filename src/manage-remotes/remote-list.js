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
            //
        }
    });
});