import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const requset = async (method, url, data) => {
    return axios({
        method: method,
        url: url,
        data: data
    });
}
