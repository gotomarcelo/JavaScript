//como printar info de objetos
const cliente = {
    nome: 'Andre', //chaves
    idade: 36,
    cpf: '11111111111',
    email: 'andre@email.com'
}
console.log(cliente.nome);
//console.log(cliente.cpf.substring(0,3));  

//como acessar chaves
//const chaves =['nome','idade','cpf','email'];
//console.log(cliente[chaves[0]]);
//console.log(cliente["nome"]);

//chaves.forEach(info => console.log(cliente[info]));

//adicionando chaves:

cliente.telefone = '981721740'; //adicionando
console.log(cliente);
cliente.telefone = '98 981721740'; //atualizando
console.log(cliente);

delete cliente.telefone; //deletando
console.log(cliente);
