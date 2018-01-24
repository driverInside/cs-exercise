/**
 * router/site.js
 *
 * @description :: Describe the 'site' view routes
 * @docs        :: README
 */
 const router = require('koa-router')({ sensitive: true })
 const siteController = require('../controllers/site')

 router.prefix('/')

 router.get('/', siteController.index)
 router.get('/requests', siteController.request)

 module.exports = router
 