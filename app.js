var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index')
var apiRouter = require('./routes/api')
var userRouter = require('./routes/userRouter')
var markRouter = require('./routes/markRouter')
var musicMarkRouter = require('./routes/musicMarkRouter')
var musicRouter = require('./routes/musicRouter')
var videoRouter = require('./routes/videoRouter')
var ejs = require('ejs');  //我是新引入的ejs插件


var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// 视图的根目录
app.engine('html', ejs.__express);
app.set('views','./view/')
app.set('view engine','html')

// parse application/json
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'view')))

//路由列表
app.use('/', indexRouter)
app.use('/api', apiRouter)
app.use('/api', userRouter)
app.use('/api', markRouter)
app.use('/api', musicMarkRouter)
app.use('/api', musicRouter)
app.use('/api', videoRouter)

module.exports = app
