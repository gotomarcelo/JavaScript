
const cliente = {
  nome: 'Marcelo',
  idade: 23,
  cpf: '11111111111',
  email: 'marcelo@email.com'
}

cliente.telefone = "(98)9999-9999";
delete cliente.telefone;
console.log(cliente);