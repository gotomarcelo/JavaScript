const nome = "ju"
const idade = 2021-1998;
const cidadeDeNascimento = "Chiba";

//const apresentação = "meu nome é " + nome + " minha cidade é " + cidadeDeNascimento + " e minha idade é " + idade;


//para que não fique maçante concatenar,
//resolvemos com template string

const apresentação = `meu nome é ${nome}, minha idade é ${idade} e eu nasci em ${cidadeDeNascimento}`; 
console.log(apresentação);