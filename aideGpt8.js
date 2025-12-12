//Exercício 7 (do programa de estudos)   + ARRAY
function analisarNumero(a) {
    let msg = a + " é ";
    // Parte 1 — par ou ímpar
    msg += (a % 2 === 0) ? "par" : "ímpar";                     //Operador ternário (if/else simplificado)
    // Parte 2 — identificar divisores
    let divisores = [];                                         //Cria ARRAY vazio

    if (a % 2 === 0) divisores.push("2");
    if (a % 3 === 0) divisores.push("3");
    if (a % 5 === 0) divisores.push("5");

    // Parte 3 — montar frase final se tiver divisores
    if (divisores.length > 0) {
        msg += " e divisível por " + divisores.join(", ");          //JOIN: Transforma array em string
    }
    console.log(msg);
}
analisarNumero(30);

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
    console.log("Ex 4: Pares:   " + pares.join(", "));                 //Para transformar o array em uma string: 
    console.log("Ex 4: Ímpares: " + impares.join(", "));                    
}
classificarNumeros([1, 2, 3, 4, 7, 10, 12, 15]);

        //EXERCÍCIO 5 — Classificar números em múltiplos
function classificaMultiplos(lista) {
    let mult2 = [];                                     //Define arrays vazios
    let mult3 = [];
    let mult5 = [];
        for (let n of lista) {
        //(n%2 ===0) ? mult2.push(n) : (n%3 ===0) ? mult3.push(n) : (n%5 ===0) ? mult5.push(n) : null;
         //Nesse caso não é possível usar o OPERADOR TERNÁRIO, pois um número pode ser múltiplo de mais de um valor
        if (n % 2 === 0) mult2.push(n);
        if (n % 3 === 0) mult3.push(n);
        if (n % 5 === 0) mult5.push(n);
        }
        console.log("Múltiplos de 2: " + mult2.join(", "));
        console.log("Múltiplos de 3: " + mult3.join(", "));
        console.log("Múltiplos de 5: " + mult5.join(", "));
}
classificaMultiplos([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,30, 100]);


                        //EXERCÍCIO 6 — Classificador inteligente de múltiplos
                        //ARRAY fazendo divisões

let a = [10, 20, 30];
let b = [2, 4, 5];
let resultado = [];

for (let i = 0; i < a.length; i++) {                    //P/ percorrer ARRAY
    resultado.push(a[i] / b[i]);                        //Divisão dos elementos correspondentes dos arrays a e b
}

console.log("a/b = " + resultado);

                        //Exercício ARRAY
let numeros6 =   [8,12,20,50];
let divisores6 = [2,4,5,10];
let resultado6 = [];

for (let i=0; i<numeros6.length; i++) {                           //Usa ÍNDICE p/cruzar ARRAY
        resultado6.push(numeros6[i] / divisores6[i]);           //Divisão dos elementos correspondentes dos arrays numeros6 e divisores6
}
console.log("numeros6 / divisores6 = " + resultado6);
console.log("Tamanho da Array Nº6 = " + numeros6.length);
console.log("Tamanha da Array Dº6 = " + divisores6.length);
console.log(numeros6[0]);
console.log(numeros6[3]);
console.log(numeros6[3]);

                                //EXERCÍCIO ARRAY 
                                //Exercício 1 — Somar os valores das duas arrays pelo índice
let x = [4,8,12];
let y = [2,3,4];
let somaXY = [];

for (let i=0; i< x.length; i++){
        somaXY.push(x[i] + y[i]);
}
console.log("EX1 - Soma de x + y = " + somaXY);

                                //Exercício 2 — Gerar um novo array dizendo se numeros[i] / divisores[i] é par ou ímpar
let numeros2 =   [6,9,10,13,15,18,20,30,45,100,36];
let divisores2 = [2,3,5,2,5,3,4,5,9,10,6];
let resultado2 = [];                                    //ARRAY Par ou ímpar

for (let i = 0; i<numeros2.length; i++){
        resultado2.push( numeros2[i] / divisores2[i] % 2 === 0 ? "par" : "ímpar" );       //PUSH + OPERADOR TERNÁRIO
}
console.log("EX 2     - Resultado 2 = " + resultado2);


        //Exercício 2 — Gerar um novo array dizendo se numeros[i] /ALTERNATIVA CHATGPT
let numeros3 =   [6,9,10,13,15,18,20,30,45,100,36];
let divisores3 = [2,3,5,2,5,3,4,5,9,10,6];
let resultado3 = [];                            //ARRAY Par ou ímpar
let resultadoDivisao3 = [];                     //Resultado da divisão

for (let i = 0; i<numeros3.length; i++){
        resultado3.push( numeros3[i] / divisores3[i] % 2 === 0 ? "par" : "ímpar" );    
        resultadoDivisao3.push( numeros3[i] / divisores3[i] );   
}
console.log("EX 2.GPT - Resultado 3 = " + resultado3);
console.log("EX 2.GPT - Resultado Divisão = " + resultadoDivisao3);


                //Exercício 2 - Versão com VAR temporária (mais legível) - LET DIVISÃO
let numeros4 =   [6,9,10,13,15,18,20,30,45,100,36];
let divisores4 = [2,3,5,2,5,3,4,5,9,10,6];
let resultado4 = [];                                    //ARRAY Par ou ímpar

for (let i = 0; i<numeros4.length; i++){
        let divisao = numeros4[i] / divisores4[i];
        resultado4.push( numeros4[i] / divisores4[i] % 2 === 0 ? "par" : "ímpar" );       //PUSH + OPERADOR TERNÁRIO
}
console.log("EX 2.alt3.     - Resultado 4 = " + resultado4);
