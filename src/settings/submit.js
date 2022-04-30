const fs = require("fs");
const getAppDataPath = require("appdata-path");

// Add remotes to remote list options
let data = require(`${getAppDataPath()}/omnipetal/config.json`);

function port(port) {
    document.getElementById('port').value = port;
}

port(data.settings[0].defaultPort);