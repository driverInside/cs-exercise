/**
 * controllers/request.js
 *
 * @description :: Describe the 'request' logic
 * @docs        :: TODO
 */
const RequestModel = require('../models/requests')

module.exports = {
  get: async ctx => {
    try {
      const requests = await RequestModel.find({})

      ctx.body = requests
    } catch (e) {
      console.error('=> Error: get requests ', e)
      return ctx.throw(500, 'Internal server error')
    }
  }
}
