class ValidaCPF{
    constructor(cpfenviado){
        Object.defineProperty(this,'cpflimpo',{
            writable: false,
            enumerable:true,
            configurable:false,
            value: cpfenviado.replace(/\D+/g, '')
        });
    }

    esequencia(){
        return this.cpflimpo.charAt(0).repeat(11) === this.cpflimpo
    }

    gerarnovocpf(){
        const cpfsemdigitos = this.cpflimpo.slice(0,-2);
        const digito1 = this.geradigito(cpfsemdigitos)
        const digito2 = this.geradigito(cpfsemdigitos+ digito1)
        this.novoCPF = cpfsemdigitos + digito1 + digito2
    }

    geradigito(cpfsemdigitos){
        let total = 0;
        let reverso = cpfsemdigitos.length + 1;

        for(let stringNumérica of cpfsemdigitos){
            //total +=(stringNumérica, reverso)
            total += reverso * Number(stringNumérica)
            reverso--;
        }
        const digito = 11-(total %11)
        return digito <= 9 ? digito : '0';
    }

    valida(){
       if(!this.cpflimpo) return false;
       if(typeof this.cpflimpo !== 'string') return false
       if(this.cpflimpo.length !== 11) return false
       if(this.esequencia()) return false;
       this.gerarnovocpf() 
       
       return this.novoCPF === this.cpflimpo
    }
}

const validacpf = new ValidaCPF()





