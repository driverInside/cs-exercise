/**
 * views.js
 *
 * @description :: Loads render views middleware configuration
 */
const render = require('koa-ejs');
const path = require('path');

const serve = require('koa-static')

module.exports = (app) => {
  // set the static file serving path
  app.use(serve(__dirname + '/site/public'))

  render(app, {
    root: path.join(__dirname, 'site/views'),
    layout: false,
    viewExt: 'html',
    cache: false,
    debug: false,
    localsName: 'locals'
  })
}
