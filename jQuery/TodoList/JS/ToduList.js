$(function () {
    load();
    // 存取数据格式： var todo = [{title: "xxx", done: false}]   数组型
    $("#title").on("keydown", function (event) {
        // 按下 回车键 发生响应     把数据存入本地存储中，关闭页面内容不会消失
        if(event.keyCode === 13 ){
            if($(this).val() === ""){
                alert("请输入内容！");
            } else {
                // 先读取本地数据
                var local = getData();
                // 更新数据
                local.push({title: $(this).val(), done: false});
                // 把新数据存储到本地
                saveData(local);
                load();
                $(this).val("");
            }
        }
    });
    // 删除数据
    $("ol, ul").on("click","a",function () {
        // 先获取本地数据
        var data = getData();

        //修改数据
        var index = $(this).attr("id");   // 获取每个 a 的索引号，找到对应数据
        // console.log(index);
        data.splice(index,1);

        // 保存到本地存储
        saveData(data);

        // 重新渲染画面
        load();

    })

    // 正在进行和完成操作
    $("ol, ul").on("click", "input", function () {
        // 先获取本地数据
        var data = getData();

        //修改数据
        var index = $(this).siblings("a").attr("id");
        // console.log(index);
        data[index].done = $(this).prop("checked");

        // 保存到本地存储
        saveData(data);

        // 重新渲染画面
        load();
    })

    // 读取本地数据
    function getData() {
        var data = localStorage.getItem("todo");
        if(data !== null ){
            // 将字符串格式数据转化为对象格式
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    // 保存本地数据
    function saveData(data){
        localStorage.setItem("todo", JSON.stringify(data));
    }

    // 渲染加载数据  (增删改查)
    function load(){
        var data = getData();
        var todoCount = 0;
        var doneCount = 0;
        // 遍历前先将 ol 清空   防止数据多次出现
        $("ol,ul").empty();
        // 遍历数据
        $.each(data, function (i,n) {
            // 判断 任务是否完成   true 存入 ul  false 存入 ol
            if(n.done) {
                $("ul").prepend("<li><input type='checkbox' checked> <p>"+n.title+"</p>  " +
                    "<a href='javascript:;' id="+i+">删除</a> </li>");
                doneCount++;
            }else {
                $("ol").prepend("<li><input type='checkbox'>  <p>"+n.title+"</p> " +
                    " <a href='javascript:;' id="+i+">删除</a> </li>");
                todoCount++;
            }
            $("#doneCount").text(doneCount);
            $("#todoCount").text(todoCount);

        })
    }

})