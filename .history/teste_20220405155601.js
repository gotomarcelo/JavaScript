const x = 10;
const y = 20;

function mostrarResultado(num) {
  console.log(`O resultado foi ${num}`);
}

function soma(numero1, numero2, callback) {
  let op = numero1 + numero2
  callback(op);
}

function square(numero, callback) {
  let op = numero**2 
  callback(op);
}

let somado = soma(x, y);
square(somado);
