const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }

//fazendo copia de objetos
//para fazer copis não pode fazer:
//const objPersonagem2 = objPersonagem, pois ele vai somente apontar objPersonagem2 para objPersonagem, ou seja, se alterar em um, alterará noutro

//a forma correta é:
const objPersonagem2 = Object.create(objPersonagem)

objPersonagem2.nome = 'Eu';

console.log(objPersonagem2.nome);
console.log(objPersonagem.nome);
