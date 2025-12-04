//INTRO PROGRAMAÇÃO - M2
//let a = 3;
//let count =0;
//while (a>0) {
 //   count++;
 //   a--
   // console.log(a)
//}
//console.log(a)
//console.log("Total de rodadas:", count);
//let b = count;
//if (c==0) {
//    c++;
//    console.log(c)
//}

let count = 0;

function somaAteN(N) {
  count++;
  let total = 0;
  for (let i = 1; i <= N; i++) {
  
    total += i;
    console.log("Total = " + total + " e  Rodada Nº: " + count)
  }
  return total;
}
console.log(somaAteN(5)); // 15

//N = nome parâmetro ==> apenas ganha valor quando chama a função ==> console.log(somaAteN(5));

//somaAteN(5) significa:
//“Chame a função somaAteN”
//“Passe o número 5 para dentro dela”
//“Lá dentro, o parâmetro N passa a valer 5”
//“Depois ela devolve o resultado (nesse caso, 15)”

function dobrar(x) {
  return x*2;
}console.log(dobrar(2));