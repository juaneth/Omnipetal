const storage = window.localStorage

export function getServers() {

}

export function createServer(name, remote, software, version) {
    if (storage.getItem('servers') === null) {
        storage.setItem('servers', JSON.stringify([]))
    }

    let servers = JSON.parse(storage.getItem('servers'))

    let obj = servers.findIndex(o => o.name === name);

    if (servers[obj] == undefined) {
        servers.push({ name, remote, software, version })

        storage.setItem('servers', JSON.stringify(servers))
    }
}

export function editServer() {

}