const storage = window.localStorage

export function getRemotes() {
    if (storage.getItem('remotes') === null) {
        return "NOREMOTESFOUND"
    }

    let remotes = JSON.parse(storage.getItem('remotes'))

    return remotes
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

    let obj = remotes.findIndex(o => o.name === name);

    console.log(remotes[obj])

    if (remotes[obj] == undefined) {
        remotes.push({ name, ip, port })

        storage.setItem('remotes', JSON.stringify(remotes))

        window.electronAPI.writePasskey(name, passkey)
    }
}

export function editRemote(name, action, newData) {
    let remotes = JSON.parse(storage.getItem('remotes'))

    let obj = remotes.findIndex(o => o.name === name);

    if (remotes[obj] === undefined) {
        return ("DOESNTEXIST")
    }

    if (action == "name") {
        remotes[obj].name = newData

        window.electronAPI.writePasskey(name, newData)
    }

    if (action == "ip") {
        remotes[obj].ip = newData
    }

    if (action == "port") {
        remotes[obj].port = newData
    }

    if (action == "passkey") {
        window.electronAPI.writePasskey(name, newData)
    }

    if (action == "delete") {
        remotes.splice(obj, 1)
        window.electronAPI.deletePasskey(name)
    }

    storage.setItem('remotes', JSON.stringify(remotes))
}