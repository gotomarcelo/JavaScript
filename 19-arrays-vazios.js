const arrayVazia = [];
console.log(arrayVazia); // []
console.log(arrayVazia.length); // 0
console.log(arrayVazia[0]); //undefined

const arrayVaziaDeNovo = [,,,,];
console.log(arrayVaziaDeNovo); // []
console.log(arrayVaziaDeNovo.length); // 3
console.log(arrayVaziaDeNovo[0]); //undefined
console.log(arrayVaziaDeNovo[1]); //undefined
console.log(arrayVaziaDeNovo[2]); //undefined

arrayVaziaDeNovo.push(50);
console.log(arrayVaziaDeNovo);// [...,50]



