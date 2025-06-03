const alunos = [
    { nome: "João", nota: 5 },
    { nome: "Maria", nota: 8 },
    { nome: "Pedro", nota: 4 },
    { nome: "Ana", nota: 6 },
    { nome: "Fabricio", nota: 10 },
    { nome: "Jenifer", nota: 2 },
    { nome: "Enzo", nota: 5 },
    { nome: "Marina", nota: 7 },
];

function filtraAprovados(listaDeAlunos) {
    return listaDeAlunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = filtraAprovados(alunos);
const nomesAprovados = aprovados.map(aluno => aluno.nome);

const reprovados = alunos.filter(aluno => aluno.nota < 6);
const nomesReprovados = reprovados.map(aluno => aluno.nome);

console.log(aprovados);
console.log("Nomes dos aprovados:", nomesAprovados)
console.log("Nomes dos reprovados:", nomesReprovados);