const fs = require("fs");

// On load of the page, set textbox to config value
document.getElementById('port').value = data.settings[0].defaultPort

// Save Port to config
document.getElementById('change-port').addEventListener('click', function() {
    data.settings[0].defaultPort = document.getElementById('port').value

    fs.writeFileSync(
        `${getAppDataPath()}/omnipetal/config.json`,
        JSON.stringify(data)
    );
})

// Version Number
var pjson = require('../../package.json');
document.getElementById('version').innerHTML = pjson.version;

// Reset Config
document.getElementById('reset-button').addEventListener('click', function() {
    let defaultsettings = {
        settings: [{
            "defaultPort": "2065",
        }, ],
        remotes: [{
            name: "this-device",
            ip: "locahost",
            port: "2065",
        }, ],
        keys: [{

        }, ],
        servers: [{

        }, ],
        theme: "default",
    }

    fs.writeFileSync(`${getAppDataPath()}/omnipetal/config.json`, JSON.stringify(defaultsettings));

    location.reload();
})

document.getElementById('theme').value = data.theme

document.getElementById('theme').addEventListener('input', function() {
    data.theme = document.getElementById('theme').value

    fs.writeFileSync(`${getAppDataPath()}/omnipetal/config.json`, JSON.stringify(data));

    location.reload();
})