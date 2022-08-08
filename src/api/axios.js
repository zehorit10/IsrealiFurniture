import axios from 'axios'

const BASE_URL = 'http://localhost:8080/';

export default {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data = {}) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data = {}) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data = {}) {
        return ajax(endpoint, 'DELETE', data)
    }
}

async function ajax(endpoint, method = 'get', data = null) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            headers:{
                "x-API-key": localStorage.getItem("token") || ""
            },
            data,
            params: (method === 'GET') ? data : null
        })
        return res.data
    } catch (err) {
        //console.log(err);
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`)
        throw err;
    }
}
// async function ajax(endpoint, method = 'get', data = null) {
//     try {
//         const res = await fetch(`${BASE_URL}${endpoint}`,{
//             method,
//             headers:{
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: (method !== 'GET') ? JSON.stringify(data) : null,
//             params: (method === 'GET') ? data : null
//         })
//         let json = await res.json();
//         return json
//     } catch (err) {
//         //console.log(err);
//         console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`)
//         throw err;
//     }
// }
