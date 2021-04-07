class Promise {
    // 声明构造函数
    constructor(excutor) {
        // 添加属性
        // Promise状态
        this.PromiseState = 'pending';
        // 返回值
        this.PromiseResult = null;
        // 保存实例对象的this值
        const that = this;
        // 保存回调函数   执行异步任务传入的状态
        this.callbacks = [];

        // 成功 resolve函数
        function resolve(data) {
            // 判断状态   每次执行promise只能有一个状态
            if(that.PromiseState !== 'pending') return;
            // 更改 Promise 状态
            that.PromiseState = 'fulfilled';
            that.PromiseResult = data;

            setTimeout(function () {
                // 执行成功回调
                that.callbacks.forEach(item => {
                    item.onResolved(data);
                });
            });
        }
        // 失败 reject函数
        function reject(data) {
            // 判断状态   每次执行promise只能有一个状态
            if(that.PromiseState !== 'pending') return;
            // 更改 Promise 状态
            that.PromiseState = 'rejected';
            that.PromiseResult = data;

            setTimeout(function () {
                // 执行失败回调
                that.callbacks.forEach(item => {
                    item.onRejected(data);
                });
            });
        }
        // 异常状态
        try{
            // 同步调用 执行器函数
            excutor(resolve,reject);
        }catch (e) {
            // 将Promise状态设为 失败
            reject(e);
        }
    }

    // 添加原型方法 then
    then(onResolved, onRejected) {
        const self = this;
        // 判断回调函数参数    实现异常穿透
        if(typeof onRejected !== 'function'){
            onRejected = reason => {
                throw reason;
            }
        }
        if(typeof onResolved !== 'function'){
            onResolved = value => value;
        }

        return new Promise((resolve,reject) => {
            // 封装函数
            function callback(type) {
                try{
                    // 获取回调函数执行结果
                    let result = type(self.PromiseResult);
                    // 判断 返回结果对象
                    if(result instanceof Promise){
                        result.then(v => {
                            resolve(v);
                        },r => {
                            reject(r);
                        })
                    }else {
                        resolve(result);
                    }
                }catch (e) {
                    reject(e);
                }
            }

            // 调用回调函数(同步任务)
            if(this.PromiseState === 'fulfilled'){
                setTimeout(function () {
                    callback(onResolved);
                })
            }

            if (this.PromiseState === 'rejected'){
                setTimeout(function () {
                    callback(onRejected);
                })

            }

            // 判断状态(异步任务)
            if(this.PromiseState === 'pending'){
                // 保存回调函数  将异步任务状态传入构造函数
                this.callbacks.push( {
                    onResolved: function () {
                        callback(onResolved);
                    },
                    onRejected:  function () {
                        callback(onRejected);
                    }
                });
            }
        })
    }

    // 添加 catch 方法
    catch(onRejected) {
        return this.then(undefined,onRejected);
    }

    // 添加 resolve 方法
    static resolve(value) {
        // 返回 promise 对象
        return new Promise((resolve,reject) => {
            if(value instanceof Promise) {
                value.then(v => {
                    resolve(v);
                }, r => {
                    reject(r);
                })
            }else {
                // 状态设置成功
                resolve(value);
            }
        })
    }

    // 添加 reject 方法
    static reject(reason) {
        return new Promise((resolve,reject) => {
            reject(reason);
        })
    }

    // 添加 all 方法
    static all(promises) {
        // 返回结果为 promise 对象
        return new Promise((resolve,reject) => {
            // 声明变量
            let count = 0;
            let arr = [];
            // 遍历
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v => {
                    // 对象状态成功，每个promise对象 都成功
                    count++;
                    // 将当前promise对象成功的结果存入数组
                    arr[i] = v;
                    // 判断
                    if(count === promises.length) {
                        // 修改状态
                        resolve(arr);
                    }
                },r => {
                    reject(r);
                })
            }
        })
    }

    // 添加 race 方法
   static race(promises) {
        return new Promise((resolve,reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v => {
                    // 修改返回对象的状态为 成功
                    resolve(v);
                },r => {
                    // 修改状态为 失败
                    reject(r);
                })
            }
        });
    }

}





