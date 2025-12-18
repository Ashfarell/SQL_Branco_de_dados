                    //EXERCÍCIO 6 — Função classificadora reutilizável
function classificarNumeros(lista) {
    let frases = [];                                        //Array Frases p/ compliar FRASE final
    for (let i = 0; i < lista.length; i++) {
        let msg = lista[i] + " é ";
        // par ou ímpar
        msg += lista[i] % 2 === 0 ? "par" : "ímpar";
        // divisores
        let divisores = [];
        if (lista[i] % 3 === 0) divisores.push("3");
        if (lista[i] % 5 === 0) divisores.push("5");
        if (divisores.length > 0) {
            msg += " e divisível por " + divisores.join(" e ");
        }
        frases.push(msg);                                   //Push na Array FRASES
    }
    return frases;
}
// USO DA FUNÇÃO
let numeros = [2,3,4,5,6,10,15,30,100,90];              //Array FORA da função!!!
let resultado = classificarNumeros(numeros);

console.log(resultado.join("\n"));


            //EXERCÍCIO 7 — Classificador genérico com divisores dinâmicos
                //1º SOLUÇÃO:
function classificarNumeros(lista) {            //recebe essa ARRAY DENTRO da função
    let frases = [];
    for (let n of lista) {              //LISTA já é a ARRAY de Nº
        let msg = n + " é ";           //"LISTA" é recebida de fora, quando chamamos a função
        // par ou ímpar 
        msg += (n % 2 === 0) ? "par" : "ímpar";
        // divisores
        let divisores2 = [];                    //ARRAY criada TEMPorariamente para cada número
        if (n % 3 === 0) divisores2.push("3");
        if (n % 5 === 0) divisores2.push("5");

        if (divisores2.length > 0) {
            msg += " e divisível por " + divisores2.join(" e ");
        }
        frases.push(msg);
    }
    return frases;
}
        //Usando a função
let numeros2 = [2, 3, 4, 5, 6, 10, 15, 30, 100, 90];        //ARRAY FORA da função!!!
let resultado2 = classificarNumeros(numeros2);
for (let frase of resultado2) {
    console.log(frase);
}

            //2 ~SOLUÇÃO: 2LOOP
function classificarNumeros(lista) {
    let frases = [];
    let possiveisDivisores = [3, 5];

    for (let n of lista) {
        let msg = n + " é ";
        msg += (n % 2 === 0) ? "par" : "ímpar";

        let divisores = [];

        for (let d of possiveisDivisores) {
            if (n % d === 0) {
                divisores.push(d);
            }
        }
        if (divisores.length > 0) {
            msg += " e divisível por " + divisores.join(" e ");
        }
        frases.push(msg);
    }
    return frases;