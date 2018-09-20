/**
 * created by caojing on 2018/9/17
 */
let express = require('express')
let router = express.Router()
let User = require('../models/User.js') 

//统一数据返回格式
let resData
router.use(function(req,res,next){
	resData={
		code:0,
		message:''
	}
	next()
})

/**
 * 用户注册
 * 1.用户名不得为空
 * 2.密码不得为空
 *
 * 1.用户是否被注册
 * 数据库查询
 */
router.post('/user/register',(req,res,next)=>{
	let userInfo = req.body
	
	let username = userInfo.username
	let password = userInfo.password

	if(username == ''){
		resData.code = 1
		resData.message = '用户名不得为空'
		res.json(resData)
		return
	}
	let user = new User(userInfo)
	user.save(function(err){
		console.log('save status:',err ? 'failed' : 'success')
	})

	res.end('请求成功')
})
module.exports = router