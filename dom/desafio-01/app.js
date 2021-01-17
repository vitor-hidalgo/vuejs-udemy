new Vue({
    el: '#desafio',
    data: {
        name: 'Vitor Hidalgo',
        age: 40,
        image: 'https://s2.glbimg.com/0eBtCaYZyoo0m9M8hcFu20PdAEs=/0x0:795x530/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/S/x/mwHvh2SYeTVvymv35HOQ/alpine.jpg'
    },
    methods: {
        nameAge: function() {
            return `${this.name} - (${this.age})`;
        },
        random: function() {
            return Math.random()
        }
    }
})