// 导入{}中的值
import {flag,number,allthing,sum,person} from './a.js'

console.log(flag);
for (let i of number){
    console.log(i);
}
console.log('--------------')
console.log(sum(5,6));

console.log('----------')

let p = new person('黎明',20);
p.sing()
console.log('---------')
// 导入 函数
import {dec} from './a.js'

console.log(dec(666,555))

console.log('---------');
// 导入 export default 自定义    导入时，不带 {}
import aaa from './a.js'
console.log(aaa)

console.log('---------')
// 导入全部文件全部 内容
import * as all from './a.js';

console.log(all.allthing);