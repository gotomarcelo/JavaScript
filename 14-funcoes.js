// let x = "";
// console.log(x);
// x="oi";

//1) declara função 
function imprimetexto(texto){
    console.log(texto);
}

//2)executar a função

imprimetexto("oi");

imprimetexto("oi denovo");

//3 formas de escrever funções

function soma(){
    const resultado = 2+2;
    return resultado;
    //ou return 2+2;
}

console.log(soma());

imprimetexto(soma());

//Math.round(): Faz o arredondamento para o proximo numero inteiro
//Math.ceil(): Faz o arredondamento para o valor mais alto (teto 6.1 -> 7)
//Math.floor(): Faz o arredondamento para o valor mais baixo, (chão 6.1 -> 6)
//Math.trunc() : Desconsidera os números decimais, truncamento (9.25 -> 9)
//Math.pow() : Faz a exponenciação de 2 números Math.pow(3,2) 3²
//Math.sqrt() : Retorna a raiz quadrada
//Math.min(): Retorna o menor valor entre os argumentos(2,5,1) -> 1
//Math.max(): Retorna o maior valor entre os argumentos(2,5,1) -> 5
//Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1
