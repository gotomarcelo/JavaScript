//tipo de dado booleano

//conversão implicita
//converter um tipo de dado em outro
//por ex number to spring vice-versa

let numero = 5;
let numerostring = "4";

//console.log(numero === numerostring);
//numero é diferente do texto
//console.log(numero == numerostring);//foi feita uma conversao implicita
//obs duas == siginifica comparacao de valor "só o que esta dentro"
//console.log(numero+numerostring);
//concatenação dos valores
//console.log(numero-numerostring);

//-------------------------------------------------------------------------

//conversao explicita
//Number()
//String() ou toString()
//é sempre bom fazer conversoes explicitas para que não apareceçam erros desapercebidos


console.log(numero+Number(numerostring));
console.log(String(numero)-numerostring); //esse ai eu não entendi


