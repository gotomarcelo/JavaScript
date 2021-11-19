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

//Object.keys() retorna o nome de chaves
//Object.valeus() retorna o valores das chaves
//Object.entries() retorna um array de chaves e valores

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes('dependentes')){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }

}

oferecerSeguro(cliente);