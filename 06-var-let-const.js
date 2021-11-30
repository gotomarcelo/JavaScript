//var

//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
//console.log(area);

//let forma = "retangulo"
//let altura = 5;
//let comprimento =7;
//let area;


//if (forma === 'retangulo'){
//    area = altura * comprimento;
//}
//else {
//    area = (altura * comprimento) /2;
//} 

//console.log(area);

// const forma = 'quadrado';
// const altura = 5;
// const comprimento = 7; 
// let area;

// if (forma === 'quadrado'){
//     area = altura * comprimento;
// }
// else{
//     area = altura * comprimento / 2; 
// }

// console.log(area);

//var não recomendada por ser muito solta
//const é uma variavel constante que não altera o valor
//let valor que vai ser retribuido

//var tem um escopo global, então funciona em qualquer parte do código, 
//o que pode gerar possíveis problemas em relação à lógica da aplicação.

//let e const têm escopo local, sendo assim, não podem ser acessadas em 
//outros escopos, e const não pode ter seu valor alterado depois de definido.

function returnCar() {

    let car = 'Land Rover';

    if (car === 'Land Rover') {

        let car = 'Ferrari';

        console.log('Dentro do if: ' + car);

    }

    console.log('Fora do if: ' + car);

}

returnCar();