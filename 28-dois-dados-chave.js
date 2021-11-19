const cliente = {
    nome: 'Andre', //chaves
    idade: 36,
    cpf: '11111111111',
    email: 'andre@email.com',
    fone: ['98171740','981778660']

}

cliente.fone.forEach(fone => console.log(fone));

//composição de objetos

cliente.dependente = {
    nome: 'Sara',
    parentesco: 'Filha',
    dataNasc: '20/03/2011'
}

console.log(cliente);

//para editar informação dentro da composição

cliente.dependente.nome = 'Sara Silva';

console.log(cliente);