//operador ternario
//um operador ternario se comporta como if ou if else
const IdadeMinima = 18;
const IdadeCliente = 18;

// if(IdadeCliente >= IdadeMinima){
//     console.log("Cerveja");
// }else{
//     console.log("Suco")
// }

console.log(IdadeCliente >= IdadeMinima ? "cerveja" : "suco");
//           condição                      //true     //false
//a dica de boa prática é não usar o operador ternario para uma boa leitura de codigo, a não ser que seja comparação curta

//é chamado operador ternário por conta de ter 3 opradores, >= , ? , :

const idade = 70;
const analfabeto = false;
console.log(
  idade >= 18 && idade <= 70 ? "Obrigado a votar" : "Não é obrigado a votar"
);

console.log(
  analfabeto
    ? "Não é obrigado a votar"
    : idade >= 18 && idade <= 70
    ? "Obrigado a votar"
    : "Não é obrigado a votar"
);
