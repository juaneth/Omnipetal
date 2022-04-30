const fs = require("fs");
console.log(fs.readFileSync(__dirname + "/sign.txt", "utf8"));

const getAppDataPath = require("appdata-path");

console.log(`Config:: ${getAppDataPath()}/omnipetal/config.json`);

function createStore(path) {
    let defaultsettings = {
        settings: [{
            "defaultPort": "2065",
        }, ],
        remotes: [{
            name: "this-device",
            ip: "locahost",
            port: "2065",
        }, ],
    };

    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, JSON.stringify(defaultsettings));
    }
}

createStore(`${getAppDataPath()}/omnipetal/config.json`);

document.getElementById("joinDiscord").addEventListener("click", () => {
    const open = require('open');

    // opens the url in the default browser 
    open('https://discord.gg/ufAX6VqcaD');
});