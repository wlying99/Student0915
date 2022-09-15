//参数
var us = {
    mysql: require('mysql'),
    sqle: {}
};

//连接数据库
us.mysqlconnection = function(host, database) {
    if (!us.sqle[host] || !us.sqle[host][database]) { //配置数据库连接 
        us.sqle[host] = us.sqle[host] || {};
        us.sqle[host][database] = us.mysql.createPool({
            connectionLimit: 0,
            host: host, //数据库地址
            user: "root", //用户名
            password: "123456", //密码
            database: database, //数据库名称
            port: 3306 //端口
        }); //连接超时和错误从连
    }
    return us.sqle[host][database]; //返回连接对象
}


//连接数据库调用
exports.usselect = function(param, callback) {
    if (param.length > 1) {
        var _mysqlconnection = us.mysqlconnection(param[0], param[1]); //创建连接池
        _mysqlconnection.getConnection(function(error, connection) { //获取连接
            if (error) { //连接错误
                console.log("连接失败：", error);
            } else { //连接成功
                for (i = 0; i < param.length; i++) {
                    param[i] = decodeURIComponent(param[i]);

                } //格式化处理参数
                var i, _sql = "CALL ";
                var _param = new Array();
                if (param.length > 3) { //带有参数的sql语句  如：'call test(?, ?, ?);'
                    _param = param.slice(3) //截取有效参数
                    _sql += (param[2] || "") + "(?"; //拼接存储过程名称 
                    //_s += (p[2] || "") + "('" + p.slice(3).join("','") + "');";
                    //, + ? 拼接参数 该方法拼接后比数组长度少一因此上一句代码中默认拼接了第一个参数
                    _sql += Array(_param.length).join(",?");
                    _sql += ");"; //拼接结果语句
                } else { //不带参数的sql语句 如：'call test();'
                    _sql += param[2] + "();";
                }
                console.log("拼凑的MySQl语句为：", _sql);
                connection.query(_sql, _param, function(error, results, fields) { //执行sql语句 
                    if (results) {
                        // if (results.pop) {
                        //     results.pop();
                        // }
                        //console.log(JSON.stringify(results)); 输出结果集
                        //执行回调函数
                        //results.affectedRows != null 如果受影响行不等于null（空） 则返回受影响行数
                        //results.affectedRows != null 如果受影响行不等于null（空） 则返回受影响行数
                        //results.length > 1 ? results : results[0] 如果结果集为单行则直接返回Object对象 否则返回数组对象
                        callback(results.affectedRows != null ? results.affectedRows : results.length > 1 ? results : results[0]);
                    } else { //执行错误
                        console.log("sql执行失败", error || "");
                        callback(error);
                    }
                });

                connection.release(function(error) { //释放资源
                    if (error) console.log("连接释放错误", error);
                });

            }
        });
    }
}