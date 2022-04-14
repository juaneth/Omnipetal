const fs = require("fs");
console.log(fs.readFileSync("./src/sign.txt", "utf8"));

const getAppDataPath = require("appdata-path");

console.log(`Config:: ${getAppDataPath()}/omnipetal/config.json`);

function createStore(path) {
    let defaultsettings = {
        settings: [{
            "default-port": "2065",
        }, ],
        remotes: [{
            "this-device": {
                ip: "locahost",
                port: "2065",
            },
        }, ],
    };

    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, JSON.stringify(defaultsettings));
    }
}

createStore(`${getAppDataPath()}/omnipetal/config.json`);