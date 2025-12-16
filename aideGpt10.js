        //EXERCÍCIO 5 — Classificador de números (nível intermediário)
        //Tentativa JB
let numeros = [2,3,4,5,6,10,15,30,100];
let msg = " ";

for (i = 0; i < numeros.length; i++) {
msg += " " + numeros[i] + " é";
msg +=  numeros[i] % 2 === 0 ? " par," : " ímpar,";                  //Par ou ímpar

let divisores = [];
if (numeros[i] % 3 === 0) divisores.push("3");                          //Divisível por 3      
if (numeros[i] % 5 === 0) divisores.push("5");                          //Divisível por 5

if (divisores.length > 0) {
    msg += " e divisível por " + divisores.join(",");           //Concatena divisores
}
}
console.log(msg);

                            //Versão ChatGPT
let numeros2 = [2,3,4,5,6,10,15,30,100];
let frases = [];

for (let i = 0; i < numeros2.length; i++) {
    let msg = numeros[i] + " é ";

    // Par ou ímpar
    msg += numeros2[i] % 2 === 0 ? "par" : "ímpar";

    // Divisores
    let divisores2 = [];

    if (numeros2[i] % 3 === 0) divisores2.push("3");
    if (numeros2[i] % 5 === 0) divisores2.push("5");

    if (divisores2.length > 0) {
        msg += " e múltiplo de " + divisores2.join(" e ");
    }

    frases.push(msg);
}

console.log(frases.join("\n"));
