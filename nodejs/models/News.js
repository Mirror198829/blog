var mongoose = require('mongoose')
var newsSchema = require('../schemas/news.js')
module.exports = mongoose.model('News',newsSchema)