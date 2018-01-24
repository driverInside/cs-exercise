/**
 * server.js
 *
 * @description :: Loads server configuration
 */
const Koa = require('koa')
const json = require('koa-json')
// routes
const routes = require('./routes')

const app = new Koa()
// json
app.use(json())
// config views render
require('./views')(app)
// routes
app.use(routes.routes(), routes.allowedMethods())

module.exports = app
