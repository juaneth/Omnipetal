const getAppDataPath = require("appdata-path");
const data = require(`${getAppDataPath()}/omnipetal/config.json`);

document.documentElement.dataset.theme = data.theme;