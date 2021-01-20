new Vue({
	el: '#desafio',
	data: {
		alterna: false,
		aplicaClasse: '',
		ex0401: '',
		ex0402: false,
		ex0501: '',
		exe0601: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.alterna = !this.alterna;
			}, 1000);
		},
		iniciarProgresso() {
			let tmp;
			if(this.exe0601 > 100) { 
				clearInterval(tmp);
				return false; 
			}

			tmp = setInterval(() => {
				if(this.exe0601 == 100) {
					clearInterval(tmp);
					return;
				}
				return this.exe0601++;
			}, 10 );
		}
	},
	computed: {
		aplica0401() {
			return this.ex0401;
		},
		aplica0402() {
			return this.ex0402 == 'true' ? 'classe01' : 'classe02';
		},
	}
})
