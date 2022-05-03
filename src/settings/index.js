const fs = require("fs");
const getAppDataPath = require("appdata-path");

// Add remotes to remote list options
let data = require(`${getAppDataPath()}/omnipetal/config.json`);

document.getElementById('port').value = data.settings[0].defaultPort

function savePort() {
    data.settings[0].defaultPort = document.getElementById('port').value

    fs.writeFileSync(
        `${getAppDataPath()}/omnipetal/config.json`,
        JSON.stringify(data)
    );
}

document.getElementById('change-port').addEventListener('click', function() {
    savePort()
})

var pjson = require('../../package.json');
console.log(pjson.version);
document.getElementById('version').innerHTML = pjson.version;