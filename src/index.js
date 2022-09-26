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
        }
    }
})