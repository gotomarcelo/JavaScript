//calcular média de cada sala e depois a média geral

const salaJS = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6]
const salaPython = [7,3.5,8,9.5]

//sem reduce

// function calculaMediaLista(lista){
//     let tamanho = lista.length;
//     let acumulador = 0;
//     for (let i=0; i < tamanho;i++){
//         acumulador += lista[i]
//     }
//     let media = acumulador/tamanho;
//     return media;
// }


//com reduce

function calculaMediaLista(lista){                                       // | valor que o acumulador irá começar
    const somaNotas = lista.reduce((acumulador,total) => total + acumulador,0 );
    return somaNotas/lista.length;
}


console.log(`A média da sala de JS é ${calculaMediaLista(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMediaLista(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMediaLista(salaPython)}`)

let todos = salaJS.concat(salaJava.concat(salaPython));

console.log(`A média geral é ${calculaMediaLista(todos)}`)