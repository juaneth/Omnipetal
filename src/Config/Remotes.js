const storage = window.localStorage
const secureStorage = window.secureStorage

export function getRemotes() {

}

export function createRemote(name, ip, port, passkey) {
    if (storage.getItem('remotes') === null) {
        storage.setItem('remotes', JSON.stringify({ remotes: [{}] }))
    }

    function checkIP(ipaddress) {
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
            return (true)
        }

        return (false)
    }

    if (!checkIP(ip)) {
        //return ("IPINVALID")
    }

    let remotes = JSON.parse(storage.getItem('remotes'))

    remotes.push({ name, ip, port })

    storage.setItem('remotes', remotes)
}

export function editRemote() {

}