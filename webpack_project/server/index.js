if (typeof window === 'undefined') {
    global.window = {};
}

const fs = require('fs');
const path = require('path');
const express = require('express');
const {renderToString} = require('react-dom/server');
const SSR = require('../dist/search-server');
const template = fs.readFileSync(path.join(__dirname, '../dist/search.html'), 'utf-8');

const data = require('./data.json');

// const renderMarkup = (str) => {
//     return `<!doctype html>
//             <html lang="en">
//             <head>
//                 <meta charset="UTF-8">
//                 <meta name="viewport"
//                       content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
//                 <meta http-equiv="X-UA-Compatible" content="ie=edge">
//                 <title>Document</title>
//             </head>
//             <body>
//                 <div id="root">${str}</div>
//             </body>
//             </html>`;
// };

const renderMarkup = (str) => {
    const dataStr = JSON.stringify(data);
    return template.replace('<!--HTML_PLACEHOLDER-->', str).replace('<!--INITIAL_DATA_PLACEHOLDER-->',  `<script>window.__initial_data=${dataStr}</script>`);
};

const server = (port) => {
    const app = express();

    app.use(express.static('dist'));

    app.get('/search', (req, res) => {
        res.status(200).send(renderMarkup(renderToString(SSR)));
    });

    app.listen(port, () => {
        console.log(`server is running on port: ${port}`);
    });
};

server(process.env.PORT || 3000);
