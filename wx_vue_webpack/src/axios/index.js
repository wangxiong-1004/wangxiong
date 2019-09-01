import axios from 'axios';
import config from './config';

console.log(config);
const instance = axios.create({
    baseURL: config.BASE_URL,
    timeout: config.TIMEOUT
});

export function get(url) {
    return new Promise((resolve, reject) => {
        instance
            .get(url)
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
}
