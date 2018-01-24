
/**
 * router/request.js
 *
 * @description :: Describe the 'spotify' api routes
 * @docs        :: TODO
 */
const router = require('koa-router')({ sensitive: true })
const requestController = require('../controllers/request')

router.prefix('/api/request')

router.get('/', requestController.get)

module.exports = router