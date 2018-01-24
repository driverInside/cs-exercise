/**
 * models/requests.js
 *
 * @description :: Describes the request model logic
 *             
 * @docs        :: TODO
 */
const mongoose = require('mongoose')
const db = require('../lib/db')

const RequestSchema = mongoose.Schema({
  // 'body'
  url: { type: String, required: true },
  request: { type: String, required: true },
  response: { type: String, required: true },

  _created_at: { type: Date, default: new Date() },
  _updated_at: { type: Date, default: new Date() }
}, { versionKey: false })

const Request = mongoose.model('Request', RequestSchema)

module.exports = Request
