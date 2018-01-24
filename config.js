/**
 * config.js
 *
 * @description :: defines the app configuration
 */
const { NODE_ENV, PORT } = process.env
const env = NODE_ENV || 'development'
const port = PORT || 8000

const databaseURI = 'mongodb://localhost/common'
const spotifyClientID = 'aa60e45a194f484d8a8ae867c9d91e01'
const spotifyClientSecret = '3fbd1f89c421445aaf259758eb14ef10'

module.exports = {
  env,
  port,
  databaseURI,
  spotifyClientSecret,
  spotifyClientID
}
