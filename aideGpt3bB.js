// Exercício 7 — Classificador de Números no Intervalo
function classificarIntervalo(a,b){
    if (a>b) {
        console.log("A não pode ser maior do que B");
    }
    let n = a;

  while (n<=b) {

    let msg =n + " é ";
    if (n%2===0) {
        msg += "par";
    }else{
        msg +="ímpar";
    }
    if (n%5===0) {
        msg += " e múltiplo de 5";
    }
    console.log(msg);                       //Precisa PRINT var MSG
    n++;                                    //Precisa ficar no final pq: 1)no início vai pular o 1º Nº; 2) quando chegar no 10, vai somar!
                                     
  }
 }
classificarIntervalo(1,10);