function calcular(altura: number, base: number): number {
  return altura * base;
}

const resultadoCalculo = calcular(5, 3);
console.log(resultadoCalculo);

function saudar(nome: string): string {
    return "Olá" + nome;
}

const saudacaoNominal = saudar(' João');
console.log(saudacaoNominal);