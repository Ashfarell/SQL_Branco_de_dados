//Exercício 7 (do programa de estudos)
function parOuImpar(a){
      let msg = a + " é "
if (a%2===0) {
    msg += " par"                                       //par
}else{                          
    msg += " ímpar"                                     //ímpar
}
if (a%2===0 && a%3===0 && a%5===0) {                    // 2, 3 e 5
    msg += ", e divisível por 2, 3 e 5"
}
if (a%2===0 && a%3===0 && !(a%5===0)){                  //2 e 3
    msg += ", divisível por 2 e 3"
}
if ( !(a%2===0) && a%3===0 && !(a%5===0)){                  //apenas 3
    msg += " e divisível por 3"
}
if ( !(a%2===0) && !(a%3===0) && a%5===0){                  //apenas 5
    msg += " e divisível por 5"
}
if ( !(a%2===0) && a%3===0 && a%5===0){                  //3 e 5
    msg += ", divisível por 3 e 5"
}
if (a%2===0 && !(a%3===0) && a%5===0){                  //2 e 5
    msg += ", divisível por 2 e 5"
}
console.log(msg);
}
parOuImpar(100);