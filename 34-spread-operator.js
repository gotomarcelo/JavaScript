const clientes = [
    {
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
    }],
    },
    {
    nome: 'Juliana',
    cpf: '134124312',
    dependentes:[{
        nome: 'sophia',
        parentesco: 'filha',
        dataNasc: '31/08/1998'
        }],    
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.table(listaDependentes);

//spread operator - sintaxe de espalhamento, este operador copia as propriedades de objetos para outros, espalhando os conteudos