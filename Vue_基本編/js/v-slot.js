Vue.component('com0', {
    data: function() {
        return {};
    },
    template: `
    <div>
        <p>hogehoge <slot name="slot1"></slot> hogehoge</p>
        <p>piyopiyo <slot name="slot2"></slot> piyopiyo</p>
    </div>
    `
})

new Vue({
    el: '#slot-test'
})