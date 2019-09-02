import axios from 'axios';
import config from './config';
import util from './util';

console.log(config);
const instance = axios.create({
    baseURL: config.BASE_URL,
    timeout: config.TIMEOUT,
    headers: {}
});

// post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
instance.interceptors.request.use((config) => {
    console.log(config);
    if (config.showLoading) {
        util.showFullScreenLoading();
        console.log('show loading');
    }
    return config;
}, (error) => {
    console.log(error);
    return Promise.error(error);
});

// 响应拦截器
instance.interceptors.response.use((response) => {
    console.log(response);
    if (response.config.showLoading) {
        util.tryHideFullScreenLoading();
        console.log('hide loading');
    }

    if (response.status === 200) {
        return Promise.resolve(response);
    }

    return Promise.reject(response);
}, error => Promise.reject(error.response));

export function get({ url, params }) {
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params: {
                data: params
            },
            showLoading: true
        })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export function post({ url, params }) {
    return new Promise((resolve, reject) => {
        instance
            .post(url, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
