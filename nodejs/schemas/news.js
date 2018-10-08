/**
 * created by caojing on 2018/10/8
 */
let mongoose = require('mongoose')

module.exports = new mongoose.Schema({
	title:String,
	detail:String,
	comment:Number,
	agree:Number
}) 