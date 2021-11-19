const cliente = {
    nome: 'Andre', //chaves
    idade: 36,
    cpf: '11111111111',
    email: 'andre@email.com',
    fone: ['98171740','981778660'],
    dependentes: [{
        nome: 'Sara',
        parentesco: 'Filha',
        dataNasc: '20/03/2011'},
    {
        nome: 'Samia Maria',
        parentesco:'Filha',
        dataNasc: '04/01/2014'
    }        
    ],

    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo);

cliente.depositar(30);

console.log(cliente.saldo);

