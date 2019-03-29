import axios from 'axios';

const API_ROOT = 'https://jsonplaceholder.typicode.com/posts';
const TIMEOUT = 20000;
const HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

class ApiService {
    constructor({url = API_ROOT, timeout =TIMEOUT, headers = HEADERS, auth }){
        const client = axios.create({
            url,
            timeout,
            headers,
            auth
        });

        client.interceptors.response.use(this.handlesuccess, this.handleError);
        this.client = client;
    }

    handleSuccess(response) {
        return response;
    }

    handleError(error){
        return Promise.reject(error);
    }
    
    get(path) {
        return this.client.get(path).then(response => response.data);
    }
}

export default ApiService;
