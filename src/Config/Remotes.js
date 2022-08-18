const storage = window.localStorage

export function getRemotes() {

}

export function createRemote(name, ip, port, passkey) {
    function checkIP(ipaddress) {
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
            return (true)
        }

        return (false)
    }

    if (!checkIP(ip)) {
        return ("IPINVALID")
    }

    if (storage.getItem('remotes') === null) {
        storage.setItem('remotes', JSON.stringify([]))
    }

    let remotes = JSON.parse(storage.getItem('remotes'))

    remotes.push({ name, ip, port })

    storage.setItem('remotes', JSON.stringify(remotes))

    window.electronAPI.writePasskey(passkey).then(response => {
        console.log(response)
    })
}

export function editRemote(name) {
    let remotes = JSON.parse(storage.getItem('remotes'))

    let obj = remotes.find(o => o.name === name);
}