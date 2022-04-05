const x = 10;
const y = 20;

function mostrarResultado(num) {
  console.log(`O resultado foi ${num}`);
}

function soma(numero1, numero2, callback) {
  callback(numero1 + numero2);
  return(numero1 + numero2);
}

function square(numero, callback) {
  callback(numero * numero);
}

let somado = soma(x, y, mostrarResultado);
square(somado, mostrarResultado);
