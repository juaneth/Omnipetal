const getAppDataPath = require("appdata-path");

// Add remotes to remote list options
let data = require(`${getAppDataPath()}/omnipetal/config.json`);

var x = document.getElementById("remotes");

data.remotes.forEach((obj) => {
    let option = document.createElement("option");
    option.text = obj.name;
    option.className = "text-center text-white transition-all";
    x.appendChild(option);
});