// 引入express
var express = require("express");

// 创建应用对象
var app = express();

// 创建路由规则
// request 请求报文封装
// response 响应报文封装
app.get('/',function (request,response){
    // 设置响应
    response.send('hello express');
});

// 监听端口启动服务
app.listen(8000,function () {
    console.log("服务已经启动，8000 端口监听中");
});
