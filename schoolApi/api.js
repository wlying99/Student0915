var express = require('express');
// var bcrypt = require('bcryptjs');
var router = express.Router();
const querystring = require('querystring');
var mysql = require('./mysql');
const { json } = require('express');
const _mysqlLabor = ["127.0.0.1", "school"]; // 数据库信息 


//统一处理区域
router.use(async function(req, res, next) {
    await asynnext(req, res, next);
});

function asynnext(req, res, next) {
    //异步处理
    return new Promise(async(resolve, reject) => {
        next();
        //resolve(true);
    });
}

router.route('/login').all((req, res, next) => {
    var json = queryString(req.url);
    getmysql(req, res, "login", json['un'], json['p']);
});

router.route('/getStudent').all((req, res, next) => {
    var json = queryString(req.url);
    getmysql(req, res, "getStudent", json['n']);
});

router.route('/Student').all((req, res, next) => {
    var json = queryString(req.url);
    getmysql(req, res, "Student", json['n']);
});

router.route('/addstudent').all((req, res, next) => {
    postmysql(req, res, "addstudent");
});

router.route('/adduser').all((req, res, next) => {
    postmysql(req, res, "adduser");
});

router.route('/updateStudent').all((req, res, next) => {
    postmysql(req, res, "updateStudent");
});

router.route('/deleteStudent').all((req, res, next) => {
    postmysql(req, res, "deleteStudent");
});

router.route('/tongStudent').all((req, res, next) => {
    getmysql(req, res, "tongStudent");
});

router.route('/zhuanStudent').all((req, res, next) => {
    getmysql(req, res, "zhuanStudent");
});

queryString = function(url) {
    var a = url.split("?");
    var json = querystring.parse(a[1])
    return json;
}

//post存储过程处理
postmysql = function(req, res, functionname) {

    if (req.body[0]) {
        p = Object.values(req.body[0]);
        p.unshift(_mysqlLabor[0], _mysqlLabor[1], functionname);
        //执行存储过程
        mysql.usselect(p, function(ret) { res.end(JSON.stringify(ret)); });
    }
}

//get获取数据库信息
getmysql = function(req, res, functionname, ...p) {
    p = p || [];
    p.unshift(_mysqlLabor[0], _mysqlLabor[1], functionname);
    //执行存储过程
    mysql.usselect(p, function(ret) {
        res.end(JSON.stringify(ret));
    }); //
}


module.exports = router;