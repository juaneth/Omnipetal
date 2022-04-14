// Add remotes to remote list options
let data = require(`${getAppDataPath()}/omnipetal/config.json`);

var x = document.getElementById("remotes");

data.remotes.forEach((obj) => {
    console.log(obj);

    let keys = Object.keys(obj);

    console.log(keys);

    let option = document.createElement("option");
    option.text = keys[0];
    option.className = "text-center text-white transition-all";
    x.appendChild(option);
});

//