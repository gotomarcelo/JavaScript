//quando começamos a estudar o JavaScript, ou ouve falar, é muito comum escutar que o JavaScript é uma linguagem baseada em protótipos, e que tudo em JavaScript é um objeto
//trabalhar com herança, com o conceito de herança, você herdar atributos, propriedades, funções a partir do protótipo

//propriedades
function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}


function ClientePoupanca(nome,cpf,email,saldo,saldoPoupanca){
    Cliente.call(this,nome,cpf,email,saldo);
    this.saldoPoupanca = saldoPoupanca;

}

const andre = new ClientePoupanca('Andre','12345678901','andre@email.com',100,200);

console.log(andre)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoupanca += valor;
}
andre.depositarPoup(30);
console.log(andre.saldoPoupanca);

