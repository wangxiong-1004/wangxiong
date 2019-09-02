const devMode = process.env.NODE_ENV !== 'production';
let baseURL;

if (devMode) {
    baseURL = 'https://www.dolabank/club';
} else {
    baseURL = 'https://www.dolabank.com/apigateway';
}

export default {
    BASE_URL: baseURL,
    TIMEOUT: 2500
};
