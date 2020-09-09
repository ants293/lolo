const xmljs = require('xml-js');
const httpRequest = require('../../../utilities/httpRequest');
const { FLIPBOARD_FEED_URL } = require('../constants');

async function flipBoardList(request, response) {
    const postFeedResponse = await httpRequest(FLIPBOARD_FEED_URL);
    const prasedResult = praseXMLtoJSON(postFeedResponse);
    response.set('Content-Type', 'application/json');
    response.send(prasedResult.rss.channel.item);
}

const praseXMLtoJSON = (xmlResponse) => {
    return JSON.parse(xmljs.xml2json(xmlResponse, {compact: true, spaces: 2}))
}

module.exports = flipBoardList;
