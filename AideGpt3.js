            //Exercício 7 — Classificador de Números no Intervalo
            //minha VERSÃO ERRADA!!!
function classificarIntervalo(a,b){
    if (a>b) {
        console.log("A Não pode se maidr do que B");
    }
    let n = a;
     while (n<b) {
    n++;
    if (n%2 === 0) {
        console.log(n + " n é par!");
            }else{
            console.log(n + " n é impar!");
        }
    if (n%5 === 0) {
        console.log(n + " n é múltiplo de 5");
    }
    if (n%5 === 0 && n%2 === 0) {
         console.log(n + " n é par e múltiplo de 5");
    }
    if ( ! (n%2 === 0) && n%5 === 0) {
                console.log (n + " n é ímpart e múltiplo de 5");
       }
    }
}
classificarIntervalo(1,10);

let x = 13;
let y = 25;
console.log(x%y);