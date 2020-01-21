Vue.component('com0', {
    template: `
    <div>
        <p>hogehoge <slot name="slot1"></slot> hogehoge</p>
        <p>piyopiyo <slot name="slot2"></slot> piyopiyo</p>
    </div>
    `
})

Vue.component('my-button', {
    template: `
    <div>
        <button><slot>OK</slot></button>
    </div>
    `
})

const book = {
    template: `
    <div class="book">
        <dl>
            <dt><slot name="title">Display Title</slot></dt>
            <dd><slot name="summary">Display Summary</slot></dd>
        </dl>
    </div>
    `
}
Vue.component('book', book)

new Vue({
    el: '#slot-test'
})