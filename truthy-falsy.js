const UsuarioLogado = true;
const ContaPaga = false;
 
//existem valores que não são nem true ou false mas que para o javascript, são, equivalem, truthy e falsy.
//0 -> falsy
//1 -> truthy

console.log(0 == false);
console.log('' == false);
console.log(null == false);
console.log(undefined == false);
console.log(1 == true);

//null tem caracteristicas especiais

let numero = 3;
let texto = 'alura';
console.log(typeof numero); 
console.log(typeof texto); 

let minhavar;
let varnull = null;

console.log(typeof minhavar); 
console.log(typeof varnull); //object -> bug da linguagem

