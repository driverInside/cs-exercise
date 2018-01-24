/**
 * routes/index.js
 *
 * @description :: defines the app routes
 */
const router = require('koa-router')({ sensitive: true })
// site views
const siteRouter = require('./site')
router.use('', siteRouter.routes(), siteRouter.allowedMethods())
// spotify
const spotifyRouter = require('./spotify')
router.use('', spotifyRouter.routes(), spotifyRouter.allowedMethods())
// request
const requestRouter = require('./request')
router.use('', requestRouter.routes(), requestRouter.allowedMethods())

module.exports = router