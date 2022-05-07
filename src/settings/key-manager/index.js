const fs = require("fs");
const getAppDataPath = require("appdata-path");

// Add remotes to remote list options
let data = require(`${getAppDataPath()}/omnipetal/config.json`);

let keySelect = document.getElementById("key-select")

data.keys.forEach((obj) => {
    let option = document.createElement("option");
    option.text = obj.name;
    option.className = "text-center text-white transition-all";
    keySelect.appendChild(option);
});