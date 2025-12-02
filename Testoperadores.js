//let a = 12, b = 18
//console.log(a), console.log(b)

//console.log(a/3)
    // Laço de repetição + print resultado a cada etapa
for (let i=0; i<5; i++){
    console.log('Valor de i: ' + i)
}

        //Verificando se o resultado é inteiro usando comparação direta
const resultado = 10/2;
if (resultado===0)  {
    console.log('Número inteiro')
}   else    {
    console.log('Número não inteiro')
}

        //Verificando se o resultado é inteiro: Usando operador módulo
const resultado2 = 10 / 3;

if (resultado2 % 1 === 0) {                                     //Modulo de 1 retorna o resto da divisão - Nº inteiro não tem resto
    console.log("O resultado é um número inteiro.");
} else {
    console.log("O resultado é um número de ponto flutuante.");
}

        //Verificando se o resultado é inteiro: Usando Number.isInteger()
const resultado3 = 15 / 3;

if (Number.isInteger(resultado3)) {
    console.log("É inteiro");
} else {
    console.log("Não é inteiro");
}
 
        //Cálculo do Máximo Divisor Comum (MDC) usando o Algoritmo de Euclides
let a = 12, b = 18

while (b !== 0) {   
    let temp = b;
    b = a % b;
    a = temp;
}console.log("MDC é: " + a);


let x = 12 % 18
console.log("X = " + x)

let y = 18 % 12                     //Resto divisão 12 por 18
console.log("Y = " +y)

let z = 6 % 12                      //Resto divisão 6 por 12
console.log("Z = " + z)

//  n % d === n   (se n < d)        //Sempre o próprio número, porque não dá nem para dividir uma vez.