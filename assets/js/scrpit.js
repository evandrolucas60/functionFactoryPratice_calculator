function criaCalculadora() {
   return {
      
        display: document.querySelector('#resultado'),
    
    
        inicia() {
            this.clickBotoes();
        },

        clearInput() {
            this.display.value = '';
        },

        apagar() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Operaçã inválida')
                    return;
                }
                this.display.value = conta;
            } catch (e) {
                alert('Operaçã inválida')
                return;
            }
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e =>{
                if (keyCode === 13) {
                    this.realizaConta();
                }
            });
        },
    
        clickBotoes() {
            document.addEventListener('click', e => {
                const elemento = e.target;
    
                if(elemento.classList.contains('btn-num')){
                    this.valorParaDisplay(elemento.innerText);
                }
                if (elemento.classList.contains('btn-clear')) {
                    this.clearInput();
                }
                if (elemento.classList.contains('btn-apagar')) {
                    this.apagar();
                }
                if (elemento.classList.contains('btn-equals')) {
                    this.realizaConta();
                }

            });
        },
    
        valorParaDisplay(valor) {
            this.display.value += valor;
        }
   }
}


const calculadora = criaCalculadora();
calculadora.inicia();