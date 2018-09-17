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
