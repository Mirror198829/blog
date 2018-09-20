/**
 * Created by CaoJing on 2018/9/17
 * 入口文件
 */
//加载express模块
let express = require('express')
//加载模块处理模板
let swig = require('swig')
//加载数据库模块
let mongoose = require('mongoose')
//加载body-parser，用来处理post提交来的数据
let bodyParser = require('body-parser')
let Mock = require('mockjs')

let User = require('./models/User.js') 
//创建app应用 =>Nodejs Http.createServer
let app = express()
//自定义中间件，设置跨域响应头
// let allowCrossDomain = function (req, res, next) {
//  res.header('Access-Control-Allow-Origin', '*');//自定义中间件，设置跨域需要的响应头。
//  res.header('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
//  next();
// }
// app.use(allowCrossDomain)


//跨域处理
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Origin", "*");
    if (req.method == 'OPTIONS') {
        /*让options请求快速返回*/
        res.send(200);
    }
    else {
        next();
    }
});
//设置静态文件托管
//当用户访问的url以/public开始，则返回对应__dirname+'/public'
app.use('/public',express.static(__dirname+'/public'))
//配置应用模板
//定义当前应用所使用的模板引擎
//第一个参数：模板引擎的名称，同时也是模板文件的后缀，第二个参数表示用于解析处理模板内容的方法
app.engine('html',swig.renderFile)
//设置模板文件存放的目录，第一个参数必须是views，第二个参数是目录
app.set('views','./views')
//注册模板引擎，第一个参数必须是view engine，第二个参数和app.engine的第一个参数一致
app.set('view engine','html')
//在开发过程中，需要取消模板缓存
swig.setDefaults({cache:false})

//bodyparser设置
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());// 解析 application/json

/**
 * 根据不同的功能划分模块
 */
app.use('/admin',require('./router/admin'))
app.use('/api',require('./router/api'))
// app.use('/',require('./router/main'))

app.get('/',(req,res,next)=>{
	// res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
	// res.end('<h1>这是首页</h1>')
	/**
	 * 读取views目录下指定文件，解析并返回客户端
	 * 第一个参数：表示模板的文件，相对views目录 views/index.html
	 * 第二个参数：传递给模板使lo用的数据
	 */
	
	res.render('index')
})
app.get('/new',(req,res,next)=>{
	// res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
	// res.end('<h1>这是首页</h1>')
	/**
	 * 读取views目录下指定文件，解析并返回客户端
	 * 第一个参数：表示模板的文件，相对views目录 views/index.html
	 * 第二个参数：传递给模板使lo用的数据
	 */
	let userInfo = Mock.mock({    
	    username:"@cname",
		password:"@name"
	})
	let user = new User(userInfo)
	user.save(function(err){
		console.log('save status:',err ? 'failed' : 'success')
	})
	res.end('index')
})
mongoose.connect('mongodb://localhost/blog',{ useNewUrlParser: true },(err)=>{
	if(err){
		console.log('-----数据库连接失败-----')
	}else{
		console.log('-----数据库连接成功-----')
		app.listen(8081)
		console.log('Server running on port localhost:8081')
	}
})
