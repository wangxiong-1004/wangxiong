const path = require('path');

function resolve(src) {
    return path.resolve(__dirname, src);
}

module.exports = {
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            console.log(config);
        } else {
            console.log('development');
        }
    },

    chainWebpack: (config) => {
        config.resolve.alias
            .set('@assets', resolve('src/assets'));
    }
};
