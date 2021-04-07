// 引入express
const express = require("express");
const bodyParser = require("body-parser");

// 创建应用对象
const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
// 创建路由规则
app.get('/server',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send("Hello AJAX GET");
});
app.post('/server',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send("Hello AJAX POST");
});

// IE缓存问题
app.get('/ie',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 可以自定义头信息
    response.setHeader('Access-Control-Allow-Headers','*');
    // 设置响应体
    response.send("Hello IE");
});

// 超时与网络异常
app.get('/delay',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置定时器  三秒后发送响应
    setTimeout(()=>{
        // 设置响应体
        response.send("延时响应");
    },3000);

});

// 接受所有信息
app.all('/json-server',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 可以自定义头信息
    response.setHeader('Access-Control-Allow-Headers','*');
    // 响应一个数据
    const data = {
        name : '奥里给'
    };
    // 将对象转换为字符串
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str);
});

// jQuery服务
app.all('/jQuery-server',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应一个数据
    const data = {
        name : '奥里给'
    };
    // 将对象转换为字符串
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str);

});

// Axios服务
app.all('/axios-server',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 可以自定义头信息
    response.setHeader('Access-Control-Allow-Headers','*');
    // 响应一个数据
    const data = {
        name : '奥里给'
    };
    // 将对象转换为字符串
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str);

});

// Fetch服务
app.all('/fetch-server',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 可以自定义头信息
    response.setHeader('Access-Control-Allow-Headers','*');
    // 响应一个数据
    const data = {
        name : '奥里给'
    };
    // 将对象转换为字符串
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str);

});



// 监听端口启动服务
app.listen(8080,()=>{
    console.log("服务已启动，8080 端口监听中。。。");
});