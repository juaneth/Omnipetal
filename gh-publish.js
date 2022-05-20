const fs = require("fs")
let shell = require('shelljs');

if (!fs.existsSync("gh-publish.json")) {
    console.log("gh-publish.json not found, generating...")

    let template = {
        "prompt": true,
    }

    fs.writeFileSync("gh-publish.json", JSON.stringify(template, null, 4))
}

const config = require("./gh-publish.json")

if (config.prompt) {
    console.log("Ensure you have GitHub CLI installed and configured with 'gh auth login' before running this script. CTRL+C to cancel in the next 5 seconds.");

    setTimeout(() => {
        release()
    }, 5000);
} else {
    release()
}

function release() {
    // Run external tool synchronously
    shell.exec('gh release create')
}