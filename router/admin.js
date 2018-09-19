/**
 * created by caojing on 2018/9/17
 */
let express = require('express')
let router = express.Router()

router.get('/user',(req,res,next)=>{
	res.send('Admin —— User')
})

module.exports = router