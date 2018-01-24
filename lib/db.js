/**
 * lib/db.js
 *
 * @description :: Defines db connection
 */
const mongoose = require('mongoose')
const { databaseURI } = require('../config')

mongoose.Promise = Promise
mongoose.connect(databaseURI)
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('database connected')
});

module.exports = db