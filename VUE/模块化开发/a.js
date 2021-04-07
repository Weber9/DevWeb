let flag = true;
let number = [1,2,3,4,5];
let allthing = '全部内容';
function sum(a, b) {
    return a + b;
}

class person {
    constructor(uname,uage) {
        this.uname = uname;
        this.uage = uage;
    }

    sing(){
        console.log(this.uname + this.uage + ' 爱唱歌');
    }
}
// 导出
export { flag,number,allthing,sum,person }

// 导出函数、类
export function dec(x, y) {
    return x - y;
}

// export default   导入时，自定义变量名    每个文件只能由一个 default
const a = 55;
export default a;

