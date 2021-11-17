//listas com duas dimensões - Matrizes
const alunos = ['Joao','Juliana','Caio','Ana'];
const mediaAlunos = [10,7,9,6];

let listaDeNotasEAlunos = [alunos,mediaAlunos];
                                // primeira lista primeiro termo da primeira lista
//                                 |                                         segunda lista, primeiro termo da segunda lista
console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`);

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + " sua média é " + listaDeNotasEAlunos[1][indice]; 
    }else {
        return "Aluno não cadastrado ou não encontrado";
    }
}

console.log(exibeNomeNota("Ana"));