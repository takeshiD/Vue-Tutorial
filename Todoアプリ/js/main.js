var app = new Vue({
    el: "#app",
    data: {
        items: [
            {no:1, name: "キャベツ", categoryNo: "1"},
            {no:2, name: "ステーキ", categoryNo: "2"},
            {no:3, name: "リンゴ", categoryNo: "1"},
        ],
        items2: [
            {no:5, name: "きゅうり", categoryNo: "1"},
            {no:6, name: "ハンバーグ", categoryNo: "2"},
            {no:8, name: "ワイン", categoryNo: "3"},
        ],
        newNo: 4
    },
    computed: {
        myList: {
            get() {
                return this.items;
            },
            set(value) {
                this.items = value;
            }
        }
    },
    methods: {
        doAdd: function() {
            var self = this;
            var no = 0;
            if(self.items.concat().length > 0){
                no = Math.max.apply(null, self.items.concat().map((item) => item.no)) + 1;
                self.newNo = self.newNo < no ? no:self.newNo;
            }
            this.items.push(
                {
                    no: this.newNo,
                    name: '追加リスト' + this.newNo,
                    categoryNo: '5'
                }
            );
        },
        doDelete: function(item, index) {
            this.items.splice(index, 1);
        },
    }
})