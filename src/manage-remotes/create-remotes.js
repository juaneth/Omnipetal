document.getElementById('port').placeholder = data.settings[0].defaultPort

function addRemote(remotename, remoteip, remoteport) {
    if (remotename === "" || remoteip === "" || remoteport === "") {
        return;
    } else {
        var data = JSON.parse(
            fs.readFileSync(`${getAppDataPath()}/omnipetal/config.json`)
        );

        let newRemote = {
            name: remotename,
            ip: remoteip,
            port: remoteport,
        };

        data.remotes.push(newRemote);

        fs.writeFileSync(
            `${getAppDataPath()}/omnipetal/config.json`,
            JSON.stringify(data)
        );
    }
}

document.getElementById("add-remote").addEventListener("click", function() {
    addRemote(
        `${document
      .getElementById("name")
      .value.replace(/\s+/g, "-")
      .toLowerCase()}`,
        `${document.getElementById("ip").value}`,
        `${document.getElementById("port").value}`
    );

    if (
        document.getElementById("name").value === "" ||
        document.getElementById("ip").value === "" ||
        document.getElementById("port").value === ""
    ) {
        return;
    } else {
        document.getElementById("name").value = "";
        document.getElementById("ip").value = "";
        document.getElementById("port").value = "";
        const loader = document.getElementById("loader");

        loader.classList.add("visible");

        setTimeout(function() {
            loader.classList.add("fadeOut");
            setTimeout(function() {
                loader.classList.remove("fadeOut");
                loader.classList.remove("visible");
            }, 750);
        }, 750);
    }
});