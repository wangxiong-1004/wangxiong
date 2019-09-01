const express = require('express');
const { renderToString } = require('react-dom/server');
const SSR = require('../dist/search-server');

server(process.env.PORT || 3000);

const server = (port) => {
    const app = express();

    app.use(express.static('dist'));

    app.get('/search', (req, res) => {
        res.status(200).send(renderToString(SSR));
    });

    app.listen(port, () => {
        console.log('server is running on port:' + port);
    })
};

const renderMarkup = (str) => {
    return ``;
};
