"use strict";

var alunos = [{
  nome: "João",
  nota: 5
}, {
  nome: "Maria",
  nota: 8
}, {
  nome: "Pedro",
  nota: 4
}, {
  nome: "Ana",
  nota: 6
}, {
  nome: "Fabricio",
  nota: 10
}, {
  nome: "Jenifer",
  nota: 2
}, {
  nome: "Enzo",
  nota: 5
}, {
  nome: "Marina",
  nota: 7
}];
function filtraAprovados(listaDeAlunos) {
  return listaDeAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var aprovados = filtraAprovados(alunos);
var nomesAprovados = aprovados.map(function (aluno) {
  return aluno.nome;
});
var reprovados = alunos.filter(function (aluno) {
  return aluno.nota < 6;
});
var nomesReprovados = reprovados.map(function (aluno) {
  return aluno.nome;
});
console.log(aprovados);
console.log("Nomes dos aprovados:", nomesAprovados);
console.log("Nomes dos reprovados:", nomesReprovados);