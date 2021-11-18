//com a média, verificar os reprovados

const alunos = ['Ana','Marcos','Maria','Mauro'];
const notas = [7,4.5,8,6.5];

const reprovados = alunos.filter( (aluno,indice) => notas[indice] < 7 );
console.log(`Reprovados: ${reprovados}`);