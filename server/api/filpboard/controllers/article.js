const mercuryParser = require('@postlight/mercury-parser')

async function flipBoardArticle (request, response) {
  if (!request.body && !request.body.link) {
    response.status(400)
    response.send('Request cannot be empty!')

    return
  }

  const parsedResponse = await mercuryParse(request.body.link)

  if (parsedResponse.error) {
    response.status(400)
    response.send(parsedResponse.message)

    return
  }

  response.send({
    title: parsedResponse.title,
    content: parsedResponse.content,
    url: parsedResponse.url
  })
}

async function mercuryParse (link) {
  try {
    const response = await mercuryParser.parse(link)

    return response
  } catch (error) {
    return error
  }
}

module.exports = flipBoardArticle
