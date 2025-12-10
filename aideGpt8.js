//Exercício 7 (do programa de estudos)   + ARRAY
function analisarNumero(a) {
    let msg = a + " é ";
    // Parte 1 — par ou ímpar
    msg += (a % 2 === 0) ? "par" : "ímpar";                     //Operador ternário (if/else simplificado)
    // Parte 2 — identificar divisores
    let divisores = [];

    if (a % 2 === 0) divisores.push("2");
    if (a % 3 === 0) divisores.push("3");
    if (a % 5 === 0) divisores.push("5");

    // Parte 3 — montar frase final se tiver divisores
    if (divisores.length > 0) {
        msg += " e divisível por " + divisores.join(", ");          //JOIN: Transforma array em string
    }
    console.log(msg);
}
analisarNumero(15);

        //EXERCÍCIO 1 — Treinando push()
let numeros = [];
numeros.push(10);
numeros.push(20);
numeros.push(30);
console.log("EXERCÍCIO 1: " + numeros);  // [10, 20, 30]
console.log ("EXERCÍCIO 1: " +  numeros.join (" ,"));

        //EXERCÍCIO 2 — Treinando join()
let frutas = ["maçã", "banana", "uva"];
let lista = "A lista é composta por " + frutas.join(", ") + ".";
console.log ("EXERCÍCIO 2: " + lista);  // A lista é composta por maçã, banana, uva.

        //EXERCÍCIO 3 — Treinando o operador ternário
//  msg += (a % 2 === 0) ? "par" : "ímpar";                
let n = 7;
let tipo = (n % 2 === 0) ? "par" : " ímpar";                            //Operador ternário (if/else simplificado)
console.log( "EXERCÍCIO 3: " + "O valor de n é " + n + " e n é" +  tipo);

        //EXERCÍCIO 4 — Classificar vários números usando array + push + join + ternário
function classificarNumeros(lista) {

    let pares = [];
    let impares = [];

    for (let n of lista) {                                       //OF: percorre diretamente valores do array
        (n % 2 === 0) ? pares.push(n) : impares.push(n);         //Usar o operador ternário para decidir se o número é par
    }                                                                   
    console.log("Pares:   " + pares.join(", "));                 //Para transformar o array em uma string: 
    console.log("Ímpares: " + impares.join(", "));                    
}
classificarNumeros([1, 2, 3, 4, 7, 10, 12, 15]);

        //EXERCÍCIO 5 — Classificar números em múltiplos