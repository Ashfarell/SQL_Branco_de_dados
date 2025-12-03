//1º
let lista = [2, 5, 8, 13, 15, 18, 35, 45, 99, 150];

console.log(lista[0]); // posição 0 → 2
console.log(lista[3]); // posição 3 → 13
console.log(lista[9]); // posição 9 → 150

//Para buscar um número dinamicamente (com variável)
let pos = 4;
console.log(lista[pos]); // 15


//Para garantir que a posição existe
if (pos >= 0 && pos < lista.length) {
    console.log(lista[pos]);
} else {
    console.log("Posição inválida!");
}


//Solução: encontrar o índice do maior e do menor valor
let lista2 = [2, 5, 8, 13, 15, 18, 35, 45, 99, 150];

let indiceMaior = 0;
let indiceMenor = 0;

for (let i = 1; i < lista.length; i++) {
    if (lista2[i] > lista[indiceMaior]) {
        indiceMaior = i;
    }
    if (lista2[i] < lista[indiceMenor]) {
        indiceMenor = i;
    }
}

console.log("Índice do MAIOR valor:", indiceMaior);
console.log("Índice do MENOR valor:", indiceMenor);