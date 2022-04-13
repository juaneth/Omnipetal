const fs = require("fs");
console.log(fs.readFileSync("./src/sign.txt", "utf8"));

const Storage = require("node-storage");
const getAppDataPath = require("appdata-path");

console.log(`Config:: ${getAppDataPath()}/omnipetal/config.json`);
let store = new Storage(`${getAppDataPath()}/omnipetal/config.json`);

function addRemote(name, ip, port) {
    store.put(`remotes.${name}`, {
        ip: ip,
        port: port,
    });
}