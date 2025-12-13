            //ARRAY
            //ARRAY com FOR
let numeros = [1,2,3,4,5];
for (let i = 0; i< numeros.length; i++) {                     //FOR: percorre índices do array
    let n = numeros[i];
    console.log(numeros[n])
}

        //ARRAY com FOR
let frutas = ["maçã", "banana", "uva"];
for (let i = 0; i < frutas.length; i++) {                     //FOR: percorre índices do array
    let fruta = frutas[i];
    console.log(fruta)
}

        //ARRAY com OF
let numbers = [10,20,30,40,50];
for (let n of numbers){
    console.log(n)
}

        //EXERCÍCIO 3 — Comparar valores de duas arrays (maior / igual / menor)
        //Alternativa 1 (IF/ELSE IF/ELSE)
let a = [5,9,12];
let b = [3,12,19];
let comparacao = [];

for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
        comparacao.push("maior");
    } else if (a[i] < b[i]) {
        comparacao.push("menor");
    } else {
        comparacao.push("igual");
    }
}
console.log("Exercício 3 - v1: " + comparacao);

        //Alternativa 2 (OPERADOR TERNÁRIO)
let x = [5,9,12];
let y = [3,12,10];
let resultado2 = [];
for (let i = 0; i < x.length; i++){
resultado2.push(x[i] > y[i] ? "maior" : x[i] < y[i] ? "menor" : "igual");       //Check ? e : operador ternário

}
console.log("Exercício 3 - v2: " + resultado2);


        //Exercício 4 — Comparar e retornar frases completas
        //array
        //for
        //template string ${}      ////Em template string não se usa +
        //operador ternário
let c = [5,9,12];
let d = [3,12,10];
let resultadoFrases = [];

for (let i = 0; i < c.length; i++) {                //Cuidado p/ n/ colocar ; depois do FOR!!!!
    let frase = `O número ${c[i]} é ${
        c[i] > d[i] ? "maior" : c[i] < d[i] ? "menor" : "igual"
    } que ${d[i]}.`;
    
    resultadoFrases.push(frase);    
}
console.log("Exercício 4:", resultadoFrases);
