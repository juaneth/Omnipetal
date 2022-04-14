const fs = require("fs");
const getAppDataPath = require("appdata-path");

function addRemote(remotename, remoteip, remoteport) {
    if (remotename === "" || remoteip === "" || remoteport === "") {
        return;
    } else {
        var data = JSON.parse(
            fs.readFileSync(`${getAppDataPath()}/omnipetal/config.json`)
        );

        let newRemote = {
            [remotename]: {
                ip: remoteip,
                port: remoteport,
            },
        };

        data.remotes.push(newRemote);

        console.log(newRemote);
        fs.writeFileSync(
            `${getAppDataPath()}/omnipetal/config.json`,
            JSON.stringify(data)
        );
    }
}

document.getElementById("add-remote").addEventListener("click", function() {
    addRemote(
        `${document.getElementById("name").value.replace(/\s+/g, '-').toLowerCase()}`,
        `${document.getElementById("ip").value}`,
        `${document.getElementById("port").value}`
    );

    const loader = document.getElementById("loader");

    loader.classList.add("visible");

    setTimeout(function() {
        loader.classList.add("fadeOut");
        setTimeout(function() {
            loader.classList.remove("fadeOut");
            loader.classList.remove("visible");
        }, 750);
    }, 750);
});