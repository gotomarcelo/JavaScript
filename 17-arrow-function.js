//arrow function 
function apresentar(nome){
    return `ola ${nome}`;
}

const apresentarArrow = nome => `ola ${nome}`;
const soma = (num1,num2) => num1+num2;

//Veio junto com a EC6
//Arrow function com mais de uma linha de codigo

const somaNumerosPequenos = (num1,num2) => {
    if (num1 && num2 > 10){
        return "numeros de 1 a 9";
}   else {
    return num1 + num2;
    }
}

console.log(somaNumerosPequenos(4,5));