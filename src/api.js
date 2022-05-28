const axios = require('axios');

module.exports = {
    getAllVersions: function(ip, port, passkey, software) {
        return new Promise((resolve, reject) => {
            axios.get(`http://${ip}:${port}/getVersionList?passkey=${passkey}&software=${software}`).then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        })
    },

    createServer: function(ip, port, passkey) {
        return new Promise((resolve, reject) => {
            axios.post(`http://${ip}:${port}/create-server?passkey=${passkey}`).then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        })
    },
}