/**
 * router/spotify.js
 *
 * @description :: Describe the 'spotify' api routes
 * @docs        :: TODO
 */
const router = require('koa-router')({ sensitive: true })
const spotifyController = require('../controllers/spotify')

router.prefix('/api/spotify')

router.get('/', spotifyController.get)

module.exports = router