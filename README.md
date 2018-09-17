# blog
express+nodejs+mysql
## 模板
#### 模板使用
后端逻辑和页面表现分离 - 前后端分离
#### 模板配置
## 静态资源文件处理
* 设置静态文件托管目录
``` javascript
//设置静态文件托管
//当用户访问的url以/public开始，则返回对应__dirname+'/public'
app.use('/public',express.static(__dirname+'/public'))
```
### 划分模块
根据功能进心个模块划分
* 前台模块
* 后台模块
* api模块
使用app.use()进行模块划分
``` javascript
app.use('/admin',require('./router/admin'))
app.use('/api',require('./router/api'))
app.use('/',require('./router/main'))
```
