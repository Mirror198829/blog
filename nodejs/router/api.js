/**
 * created by caojing on 2018/9/17
 */
let express = require('express')
let router = express.Router()
let User = require('../models/User.js') 

/**
 * 用户注册
 */
router.post('/user/register',(req,res,next)=>{
	let userInfo = req.body
	let user = new User(userInfo)
	console.log(userInfo)
	user.save(function(err){
		console.log('save status:',err ? 'failed' : 'success')
	})
	res.end('请求成功')
})
module.exports = router