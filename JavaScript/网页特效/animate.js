// 动画函数
function animate(obj, target,callback/*回调函数，当元素移动完成后，再进行其它操作*/) {   //  obj 运动对象   target 运动距离
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10  ;  // 设置步长
        step = step > 0 ? Math.ceil(step):Math.floor(step);
        if(obj.offsetLeft === target) {
            clearInterval(obj.timer);
            if(callback){  // 如果存在 回调函数 则执行，否则不影响
                callback();
            }
        }
        // 元素移动
        obj.style.left = obj.offsetLeft + step + 'px';
    },20);
}