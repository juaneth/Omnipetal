const fs = require("fs");
const getAppDataPath = require("appdata-path");

// Add remotes to remote list options
let data = require(`${getAppDataPath()}/omnipetal/config.json`);

let x = document.getElementById("remotes");

data.remotes.forEach((obj) => {
    let keys = Object.keys(obj);

    let option = document.createElement("option");
    option.text = keys[0];
    option.className = "text-center text-white transition-all";
    x.appendChild(option);
});

// Ping remote to get status and latency
function pingRemote(remote) {
    const ping = require("ping");

    (async function() {
        const result = await ping.promise.probe(remote, {
            timeout: 10,
        });

        return parseFloat(result.avg);
    })();
}

pingRemote();

x.addEventListener("change", function() {
    let remote = x.value;
    let keys = data.remotes.find((item) => item == remote);

    console.log(keys);
});