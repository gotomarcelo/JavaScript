const cliente = {
    nome: 'Andre', //chaves
    idade: 36,
    cpf: '11111111111',
    email: 'andre@email.com',
    fone: ['98171740','981778660'],
    dependentes: [{
        nome: 'Sara',
        parentesco: 'Filha',
        dataNasc: '20/03/2011'
    }]
}

//adicionando mais um dependente

cliente.dependentes.push({
    nome: 'Samia Maria',
    parentesco:'Filha',
    dataNasc: '04/01/2014'
})

console.log(cliente);

//acessando dependentes

const FilhaMaisNova = cliente.dependentes.filter(dependentes => dependentes.dataNasc==='04/01/2014');

console.log(FilhaMaisNova[0].nome);