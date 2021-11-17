const numeros = [100,200,300,400,500,600];

// for (let i = 0; i < numeros.length; i++){
//     console.log(i,numeros[i]);
// }

//como descobrir a média da lista numeros?

function descobreMediaDeLista(lista){
    let acumulador = 0;
    for (let i=0; i< lista.length; i++){
        acumulador = lista[i] + acumulador; //poderia escrever também acumulador += lista[i]
    }
    const tamanhoLista = lista.length;
    let media = acumulador/tamanhoLista;
    return media;
}

console.log(descobreMediaDeLista(numeros));

//como descobrir media com forEach?

let somaDosNumeros = 0;
numeros.forEach(numero => {
    somaDosNumeros += numero;
})

console.log(somaDosNumeros/numeros.length);