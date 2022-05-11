const axios = require('axios');

function create(ip, port, passkey) {
    axios.post(`http://${ip}:${port}/create-server?passkey=${passkey}`).then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}

create('127.0.0.1', '2065', 'debug');