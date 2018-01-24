/**
 * index.js
 *
 * @description :: inits the app
 */
const server = require('./server')
const { port } = require('./config')
// inits the app
server.listen(port, () => {
  console.log(`App running in port ${port} ...`)
})
