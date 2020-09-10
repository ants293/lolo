const xmljs = require('xml-js')
const httpRequest = require('../../../utilities/httpRequest')
const { FLIPBOARD_FEED_URL } = require('../constants')

async function flipBoardList(request, response) {
  const postFeedResponse = await httpRequest(FLIPBOARD_FEED_URL)
  const parsedResult = parsedXMLtoJSON(postFeedResponse)

  if (!parsedResult.rss || !parsedResult.rss.channel || !parsedResult.rss.channel.item) {
    response.status(400)
    response.send('Feed generating failed')
    return
  }

  response.set('Content-Type', 'application/json')
  response.send(parsedResult.rss.channel.item)
}

const parsedXMLtoJSON = (xmlResponse) => {
  return JSON.parse(xmljs.xml2json(xmlResponse, { compact: true, spaces: 2 }))
}

module.exports = flipBoardList
