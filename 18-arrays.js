const notas = [10,6.5,8,7.5];

let media  = (notas[0]+notas[1]+notas[2]+notas[3]) / notas.length;
console.log(media);

//Array é uma estrutura de dados que armazena um ou mais valores
//pode ser definido como uma lista ordenada de valores enumerados 
//que cada valor é chamado de elemento, e cada elemento tem sua ordem, ou chamado de índice.
//.length -> retorna o tamanho da lista

notas.push(7);
console.log(notas);
//notas.push(valor) -> adiciona valor no final da lista
//atenção: caso seja implementado um chamado vazio (notas.push()) a média dará NaN, pois o valor inserido no final será undefined

notas.pop();
console.log(notas)
//notas.pop() -> não aceita nenhum parametro dentro, somente exclui o ultimo termo

let notas2 = [1,2];
let notasFinais = notas.concat(notas2);
console.log(notasFinais);
//notas.concat(notas2) -> concatena duas listas, e é necessário salvar em uma variável

function buscarNumerosPares(valor){
    if (valor % 2 == 0){
        return valor
    }
}

const notasPares = notasFinais.filter(buscarNumerosPares);
console.log(notasPares);
//notasFinais.filter(buscarNumerosPares) -> filtra uma lista com os resultados de uma função


numero2 = notasPares.find(buscarNumerosPares);
console.log(numero2);
//parecido com o filter, mas ele mostra somente o primeiro numero que satifaz a função

const numero2Index = notasPares.findIndex(buscarNumerosPares);
console.log(numero2Index);
//encontra o index do valor find

const numero2UltimoIndex = notasPares.lastIndexOf(buscarNumerosPares);
console.log(numero2UltimoIndex);
//encontra o index do valor find mas começando de trás pra frente

function imprimir(valor){
    console.log(valor);
};

notasPares.forEach(imprimir);
//notasPares.forEach(imprimir) executa valor por valor da lista

console.log(notasPares);
notasPares.shift();
console.log(notasPares);
//notasPares.shift(); elimina o primeiro numero sem necessidade de salvar, ao chamar ele ja tira

notasPares.unshift(10);
console.log(notasPares);
//notasPares.unshift(10); adiciona o primeiro numero sem necessidade de salvar, ao chamar ele já adiciona

let total = notasPares.reduce((total, numero) => total + numero, 0);
console.log(total);
//reduce() serve para iterar sobre uma array e utilizar o valor de cada item para criar um objeto com base em uma regra.
//reduceRight() serve igual ao reduce() mas começando de trás pra frente

console.log(notasPares);
notasPares.reverse();
console.log(notasPares);
//reverse() inverte uma array sem precisar salvar

let notasSeccionadas = notasPares.slice(0,2);
console.log(notasSeccionadas);
//slice() secciona uma lista em outra

notasPares.unshift("a");
console.log(notasPares);
console.log(notasPares.sort());
//sort() Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras

//                numero do index que inicia
//                |    remover os proximos termos
//                |    |    |adiciona naquele termo
notasPares.splice(3   ,1,   2);
console.log(notasPares);
//splice() Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.


 




