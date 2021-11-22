const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function(){
        console.log(`${this.nome}`)//console.log(`${pessoa.nome}`)
    }//this faz com que ela utilize os valores de propriedade desses objetos.
   }
   
   pessoa.imprimeNome() //Ana

   //call() - Esse método permite que uma função seja chamada com parâmetros e valor de this específicos
   function imprimeNomeEmail(tipoCliente){
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
   }
   
   const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
   }
   
   const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
   }

imprimeNomeEmail.call(cliente1, "cliente especial")
// cliente especial - nome: Carlos, email: c@email.com

imprimeNomeEmail.call(cliente2, "cliente estudante")
// cliente estudante - nome: Fred, email: f@email.com 
//O primeiro parâmetro do método call() se refere ao objeto que será usado como contexto do this e, 
//do segundo parâmetro em diante, são passados os argumentos que a função deve receber

//apply() - funciona de forma muito semelhante ao call(), porém recebe os argumentos em um array ao invés de separados

function imprimeNomeEmail1(tipoCliente, agencia){
    console.log(`
      ${tipoCliente} da agência ${agencia}:
      - nome: ${this.nome}, email: ${this.email}
      `)
   }
   const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
   const clienteEstudante = ["cliente estudante", "Fortaleza"]
   
   imprimeNomeEmail1.apply(cliente1, clienteEspecial)
   // cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com
   
   imprimeNomeEmail1.apply(cliente2, clienteEstudante)
   // cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com


//bind() - O método bind() “prende” ou “liga” uma função ao contexto de um objeto

const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
      return `a personagem é ${this.nome}`
    }
   }

const personagemGenerico = personagem.apresentar
console.log(personagemGenerico())

//Quando atribuímos apresentar() à variável personagemGenerico estamos retirando a função apresentar()
// do contexto do objeto na qual foi criada, e por isso this não está mais acessível; a função perdeu a referência 
//original e não consegue mais localizar onde está this


const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())

//utilizamos o método bind() para “ligar” a função que atribuímos a personagemGenerico ao objeto personagem.
// Assim, sempre que esta função for executada a partir da variável personagemDefinido, 
//a função original vai usar o objeto personagem como contexto de execução. Dessa forma, 
//  this sempre se refere ao objeto personagem e é capaz de acessar suas propriedades.