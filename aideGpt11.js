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
function classificarNumerosGenerico(lista, divisores) {
    let numeros2 = [];     
    let divisores2 = [];                              //Array Números2 p/ compilar FRASE final

}   
let numeros2 = [2,3,4,5,6,10,15];
let divisores2 = [2,3,5];