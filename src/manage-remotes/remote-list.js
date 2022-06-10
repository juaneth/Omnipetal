let remoteList = document.getElementById("remotes");
let saveButton = document.getElementById("save");

data.remotes.forEach((obj) => {
    let option = document.createElement("option");
    option.text = obj.name;
    option.className = "text-center text-textPrimary transition-all";
    remoteList.appendChild(option);
});

//  Add change event (When select changed)
remoteList.addEventListener("change", function() {
    // Get specific remote in remote list
    data.remotes.forEach((obj) => {
        if (obj.name === remoteList.value) {
            // Fill out IP and Port fields
            document.getElementById("name").value = obj.name;
            document.getElementById("ip").value = obj.ip;
            document.getElementById("port").value = obj.port;
        }
    });
});

// Fill out ip and port fields on load
window.addEventListener("load", function load() {
    // Get specific remote in remote list
    data.remotes.forEach((obj) => {
        if (obj.name === remoteList.value) {
            // Fill out IP, Port and name fields
            document.getElementById("name").value = obj.name;
            document.getElementById("ip").value = obj.ip;
            document.getElementById("port").value = obj.port;
        }
    });
});

// Save changes to remote list
saveButton.addEventListener("click", function() {
    // Get specific remote in remote list
    data.remotes.forEach((obj) => {
        if (obj.name === remoteList.value) {
            // Save changes to config json
            let newName = document.getElementById("name").value;
            let newIp = document.getElementById("ip").value;
            let newPort = document.getElementById("port").value;

            obj.name = newName;
            obj.ip = newIp;
            obj.port = newPort;

            fs.writeFileSync(
                `${getAppDataPath()}/omnipetal/config.json`,
                JSON.stringify(data)
            );
        }
    });

    location.reload()
});

document.getElementById('port').placeholder = data.settings[0].defaultPort;