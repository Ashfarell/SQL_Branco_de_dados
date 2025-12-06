//Exercício 7 (do programa de estudos)
//Crie uma função que receba um número e retorne “par” se ele for par e “ímpar” se for ímpar.

                        //ALTERNATIVA SEM LET MSG
function parOuImpar(a) {

    if (a % 2 === 0 && a % 3 === 0) {
        console.log("a é par e divisível por 2 e 3");
    } else if (a % 2 === 0) {
        console.log("a é par");
    } else {
        console.log("a é ímpar");
    }
}

parOuImpar(30);

                  //ALTERNATIVA COM LET MSG
function parOuImpar2(x) {
    let msg = x + " é ";

    // Par ou ímpar
    if (x % 2 === 0) {
        msg += "par";
    } else {
        msg += "ímpar";
    }

    // Adicional: múltiplo de 3
    if (x % 3 === 0) {
        msg += " e divisível por 3";
    }
    console.log(msg);
}
parOuImpar2(30);