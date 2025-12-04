function somaSequencial(N) {
  if (N < 2) return N; // Não há soma se N for 0 ou 1

  let resultado = 1 + 2; // primeira soma

  for (let i = 3; i <= N; i++) {
    resultado = resultado + i; // soma o último resultado com o próximo número
  }

  return resultado;
}

//          Explicação detalhada
//function somaSequencial(N) {
//Declara uma função chamada somaSequencial que recebe um número inteiro N.
//if (N < 2) return N;
//Caso base / proteção: se N for 0 ou 1, a função retorna N imediatamente.
//Raciocínio: com N = 0 não existe soma; com N = 1 também não há a primeira operação 1 + 2, então faz sentido devolver 1 (ou 0 para N=0).
//let resultado = 1 + 2;
//Inicia a variável resultado com a primeira operação definida pela sua regra: soma o 1 com o 2. Para qualquer N >= 2 a primeira soma é sempre 3.
//Aqui estabelecemos o "estado" inicial: temos o resultado anterior que será usado na próxima iteração.
//for (let i = 3; i <= N; i++) {
//Um laço que percorre os números 3, 4, 5, ..., N.
//Começa em 3 porque 1 e 2 já foram usados na primeira soma inicial.
//resultado = resultado + i;
//Em cada iteração, substituímos resultado pelo valor resultado + i.
//Isso segue exatamente a sua regra: “sempre soma o último número (o resultado anterior) com o próximo número inteiro”.
//Ex.: quando i = 3, resultado era 3 e passa a 3 + 3 = 6. Quando i = 4, passa a 6 + 4 = 10 e assim por diante.
//return resultado;
//Ao final do laço (quando i ultrapassa N), devolvemos o valor final.
//          Exemplo passo a passo (N = 5)
//Inicial: resultado = 1 + 2 = 3
//i = 3 → resultado = 3 + 3 = 6
//i = 4 → resultado = 6 + 4 = 10
//i = 5 → resultado = 10 + 5 = 15
//Retorno: 15
//          Observação matemática (curiosidade)
//O procedimento descrito produz exatamente a soma dos inteiros de 1 até N.
//Porque:
//resultado começa em 1 + 2.
//Depois adicionamos 3, 4, ..., N.
//Logo resultado = 1 + 2 + 3 + ... + N = soma dos primeiros N inteiros.
//A soma dos primeiros N inteiros tem fórmula fechada: N * (N + 1) / 2.
//Portanto, para N >= 2, a função retorna o mesmo valor que N * (N + 1) / 2.
//          Complexidade
//Tempo: O(N) no laço (varia linearmente com N).
//Espaço: O(1) — só usa algumas variáveis fixas.