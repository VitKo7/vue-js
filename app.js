new Vue({
    el: '#app',
    data: {
        name: 'Vitaliy',
        job: 'Front-end developer',
    },
    methods: {
        greet: function () {
            return 'Hello me name is ' + this.name;
        },
    },
});
