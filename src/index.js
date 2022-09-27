new Vue({
    el: "#root",
    data: {
        message: 100,
    },
    created() {
        setInterval(this.add, 500);
        console.log(this)
    },
    methods: {
        add() {
            this.message++; 
        },
        clickFn() {
            alert("被点击")
            console.log(this);
        }
    }
})