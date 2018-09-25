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
	res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
	let userInfo = req.body	
	let name = userInfo.name
	let pass = userInfo.pass

	if(name == ''){
		resData.code = 1
		resData.message = '用户名不得为空'
		res.json(resData)
		return
	}
	if(pass == ''){
		resData.code = 2
		resData.message = '密码不得为空'
		res.json(resData)
		return
	}
	let user = new User(userInfo)
	user.save(function(err){
		console.log('save status:',err ? 'failed' : 'success')
	})
	res.end('success')
})
/**
 * 查询用户名是否已经存在
 * 
 */
router.get('/user/size',(req,res,next)=>{
	let queryName = req.query.name
	let hasName = false
	User.findOne({
		name:queryName
	}).then(userInfo =>{
		if(userInfo){
			hasName =  true		
		}
		res.send(hasName)
	})	
})
/**
 * 用户登录
 * 
 */
router.post('/user/login',(req,res,next)=>{
	let userInfo = req.body	
	let name = userInfo.name
	let pass = userInfo.pass
	let validate = false
	//查询数据库中相同用户名和密码是否存在，如果存在则登录成功
	User.findOne({
		name:name,
		pass:pass
	}).then(userInfo =>{
		if(userInfo){
			validate =  true		
		}
		res.send(validate)
	})
})
module.exports = router