            //parametros
function soma(num1,num2){
    return num1+num2;
}

console.log(soma(1,2));

//Parametro e Argumento

function nomeIdade(nome,idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(18,"ju"));

function multiplica(numero1 = 1 ,numero2 = 1){ //fazemos isso caso ao chamar a função não for dado parametros corretos,
    return numero1 * numero2;
}

console.log(multiplica(soma(4,2)));

//para uma boa prática é sempre bom tentar diminuir o numero de parametros de uma função
