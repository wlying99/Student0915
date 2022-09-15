var express = require('express');
var app = express(); //创建服务器实例
var bodyParser = require('body-parser');
var request = require("request");
const api = require('./api');
const morgan = require('morgan'); //日志模块
var port = "7003"; // set our port
app.use(morgan('dev')); //状态码带有色彩的日志输出

//配置并解析表单数据的中间件
app.use(bodyParser.urlencoded({ extended: true, limit: '3mb' }));
app.use(bodyParser.json({ limit: '3mb' }));

//暂时全跨域
app.use(function(req, res, next) {

    //设置响应头，设置允许跨域
    var origin = req.headers.origin || "*";
    res.setHeader('Access-Control-Allow-Origin', origin);

    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    //修改程序信息与版本
    res.header('X-Powered-By', ' 3.2.1')

    //内容类型：如果是post请求必须指定这个属性
    res.header('Content-Type', 'application/json;charset=utf-8')
    next();
});


app.use('/api', api);

app.listen(port);
console.log('app happens on port ' + port);