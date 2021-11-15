//expressao de função


//Diferenças

console.log(apresentar());
console.log(soma(1,1));

function apresentar(){
    return "olá";
}

const soma = function(num1=0,num2=0){return num1 + num2};

//A diferença é que a expressão de função não consegue acessar antes da inicialização
//Hoisting
//as listas de funções e var são primeiramente listadas 