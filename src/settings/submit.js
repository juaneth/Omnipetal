const fs = require("fs");
const getAppDataPath = require("appdata-path");

// Add remotes to remote list options
let data = require(`${getAppDataPath()}/omnipetal/config.json`);


document.getElementById('port').value = data.settings[0].defaultPort;

function saveSettings() {

}