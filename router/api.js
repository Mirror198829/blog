/**
 * created by caojing on 2018/9/17
 */
var express = require('express')
var router = express.Router()
router.get('/user',(req,res,next)=>{
	res.send('API-USER-caojing')
})
module.exports = router