let vm = new Vue({
    el: '#nav',
    data: {
        books: [
            {id: 1,bookName: '《算法导论》',date:'2006-9',price: '85',count: 1},
            {id: 2,bookName: '《水浒传》',date:'2006-9',price: '128',count: 1},
            {id: 3,bookName: '《西游记》',date:'2006-9',price: '39',count: 1},
            {id: 4,bookName: '《老八美食集》',date:'2006-9',price: '999',count: 1},
        ]
    },
    methods: {
      incCount(index) {
          this.books[index].count++;
      },
      subCount(index) {
          this.books[index].count--;
      },
      removeBook(index) {
          this.books.splice(index,1);
      }
    },
    computed: {
        totalPrice() {
            /*let totalPrice = 0;
            for (let i in this.books) {
                totalPrice += this.books[i].price * this.books[i].count;
            }
            return totalPrice;*/

            // 高阶函数 Array.reduce()  汇总
            return this.books.reduce(function (preValue,book) {
                return preValue + book.price * book.count;
            },0)
        }
    },
    filters: {  // 过滤器
        showPrice(price) {
            return '￥' + Number(price).toFixed(2); // 保留两位小数
        }
    }
})