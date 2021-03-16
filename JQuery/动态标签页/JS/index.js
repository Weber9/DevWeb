var that; // 定义一个全局变量
class Tab {
    constructor(id) {
        // 获取元素
        that = this;  // 将 that 指向 tab
        this._main = document.querySelector(id);
        console.log(this._main);
        this.add = this._main.querySelector('.tabadd');
        this.ul = this._main.querySelector('.nav ul:first-child');
        this.fasection = this._main.querySelector('.tabscon');
        this.init();
    }
    //初始化
    init () {
        // 更新节点
        this.updateNode();
        // 增加事件
        this.add.onclick = this.addTab;

        // 切换事件
        for (var i = 0; i < this._lis.length; i++) {
            this._lis[i].index = i;
            this._lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this._section[i].ondblclick = this.editTab;
        }
    }
    // 更新节点
    updateNode() {
        this._lis = this._main.querySelectorAll('li');
        this._section = this._main.querySelectorAll('section');
        this.remove = this._main.querySelectorAll('.icon');
        this.spans = this._main.querySelectorAll('.nav  li span:first-child');
    }
    // 切换
    toggleTab() {
        that.clearClass();
        this.className = "liactive";   // 此处 this 指向 li
        that._section[this.index].className = "conactive";  // 由于 li 下没有section，故用 that (指向tab)
    }

    // 删除类
    clearClass() {
        for (var i = 0; i < this._lis.length; i++) {
            this._lis[i].className = "";
            this._section[i].className = "";
        }
    }
    //添加
    addTab() {
        that.clearClass();
        var random = Math.random();
        // 创建 新元素
        var li = '<li class="liactive"><span>新选项卡</span> <span class="icon"></span></li>';
        var action = '<section class="conactive">测试XXX ' + random + '</section>'
        // 添加新元素
        that.ul.insertAdjacentHTML("beforeend", li);
        that.fasection.insertAdjacentHTML("beforeend", action);
        that.init();
    }

    //删除
    removeTab(e) {
        e.stopPropagation();  // 防止事件冒泡，出现 li 的索引
        var index = this.parentNode.index;
        console.log(index);
        that._lis[index].remove();
        that._section[index].remove();
        that.init();   // 元素删除后再获取一次节点  节点更新
        // 当我们删除的不是选中状态的 li ，原来的选中状态 li 保持不变
        if(document.querySelector('.liactive')) return;
        index--;
        that._lis[index] && that._lis[index].click();   // 手动调用点击事件  当删除一个 li 将焦点处于前一个 li
    }

    //修改
    editTab() {
        var str = this.innerHTML;
        // 双击不会选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = " <input type='text' /> ";
        var input = this.children[0];
        input.value = str;
        input.select();
        // 当我们离开文本框九八文本框的值给 span
        input.onblur = function () {
            this.parentNode.innerHTML = this.value;
        }
        // 按回车也能赋值
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                this.blur();
            }
        }
    }


}
new Tab('#tab');