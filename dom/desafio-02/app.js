new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta: function() {
            alert('Exibindo Alerta');
        },
        armazenaValor: function(e) {
            this.valor = e.target.value;
        }
    }
})