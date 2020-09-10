const requestLib = require('request')

module.exports = (url) => {
  return new Promise((resolve, reject) => {
    requestLib(url, (error, response, body) => {
      if (error) reject(error)
      else resolve(body)
    })
  })
}
