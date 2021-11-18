const notas = [10,9,8,7,6];


const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota );

console.log(notasAtualizadas);

//map com string

let nomes = ["Ana Julia", "Caio vinicius", "BIA silva"];

const nomesAtualizados = nomes.map(nome => nome.toLocaleUpperCase());

console.log(nomesAtualizados);