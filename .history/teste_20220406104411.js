function calculaMediaLista(lista) {
  const somaNotas = lista.reduce((acumulador, total) => total + acumulador, 0);
  return somaNotas / lista.length;
}
const notas = [4,9,10];
console.log(calculaMediaLista(notas));