// 引入express
const express = require("express");

// 创建应用对象
const app = express();

// 创建路由规则
app.get('/server',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send("Hello AJAX");
});

app.post('/server',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send("Hello AJAX POST");
});

// 监听端口启动服务
app.listen(8080,()=>{
    console.log("服务已启动，8080 端口监听中。。。");
});