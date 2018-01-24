/**
 * controllers/site.js
 *
 * @description :: Describe the views render logic
 *
 */
const fs = require('fs')
const path = require('path')

const RequestModel = require('../models/requests')

module.exports = {
  index: async ctx => {
    await ctx.render('pages/index', {})
  },

  request: async ctx => {
    const requests = await RequestModel.find({}).sort('-_created_at')
    
    await ctx.render('pages/requests', { requests: requests, total: requests.length })
  }
}
