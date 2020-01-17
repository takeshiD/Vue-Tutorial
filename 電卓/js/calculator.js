var calc = new Vue({
    el: '#calculator',
    data: {
        items:  [
            ["7", "8", "9", "/"],
            ["4", "5", "6", "*"],
            ["1", "2", "3", "-"],
            ["0", ".", "+", "="]
        ],
        output: ""
    },
    methods: {
        calculation: function(expr) {
            this.output = eval(this.output)
        },
        clear: function() {
            this.output = ""
        },
        doClick: function(val) {
            this.output += val
        }
    }
})