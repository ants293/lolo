const path = require('path');
const xmljs = require('xml-js');
const express = require('express');
const requestLib = require('request');
const apiRoutes = require('./api');


const PORT = process.env.PORT || 5000;
const app = express();
const buildPath = './client/build';

app.use(express.static(buildPath));

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', apiRoutes);

/*app.get('/api', async (request, response) => {
    const postFeedResponse = await getPosts('https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss');

    const result = JSON.parse(xmljs.xml2json(postFeedResponse, {compact: true, spaces: 2}));

    response.set('Content-Type', 'application/json');
    response.send(result.rss.channel.item);

});

app.get('/', function(request, response) {
    response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});*/

function getPosts(url) {
    return new Promise((resolve, reject) => {
        requestLib(url, (error, response, body) => {
            if(error) reject(error)

            else resolve(body)
        });
    });
}

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
