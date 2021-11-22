//Orientação A Objeto - paradigm da programação 
//é um modelo, uma manerira de codar, não pe uma regra absoluta
//existe também programação funcional 
//a classe define: os atributos (características)
//e o método, o comportamento de um objeto

//Herança é um mecanismo da orientação a objetos que permite que uma classe herde características de uma outra classe.
// super - "call" , extend

//um objeto é a instancia de uma classe em memória

//Classe sintaxe

class Cliente{ //começa com letra maiuscula
    constructor(nome,email,cpf,saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    mostrarSaldo(){
        console.log(`O saldo do cliente de nome: ${this.nome}, é ${this.saldo}`);
    }
}


class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoup){
        super(nome,email,cpf,saldo)
        this.saldoPoup = saldoPoup
        }
    
    depositarPoup(valor){
        this.saldoPoup += valor;
    }    
}

const andre = new ClientePoupanca('andre', 'andre@email.com',11111111111,100,200);

console.log(andre);

andre.depositar(20);
andre.depositarPoup(100);

console.log(andre.mostrarSaldo());