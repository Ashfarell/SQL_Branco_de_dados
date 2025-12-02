                    //Sua ideia (versão didática, testando divisor por divisor)
let a = 12;
let b = 18;
let divisor1 = 1;
let mdc = 1;

while (divisor1 <= a && divisor1 <= b) {
    if (a % divisor1 === 0 && b % divisor1 === 0) {
        mdc = divisor1; // guarda o maior divisor comum encontrado
    }
    divisor1++;
}
console.log("MDC1 é:", mdc);
//Como funciona?
//Começamos em divisor = 1
//Testamos 1, 2, 3, 4, 5…
//Quando um divisor divide os dois números, guardamos ele como possível MDC
//No final, a variável mdc contém o maior deles
//Para 12 e 18:
//1 divide ambos → mdc = 1
//2 divide ambos → mdc = 2
//3 divide ambos → mdc = 3
//4 não divide 18
//5 não divide…
//6 divide ambos → mdc = 6
//(E esse é o maior)

                        //2. Versão que “divide quando possível” (como você descreveu)
let c = 12;
let d = 18;
let divisor2 = 2;
let mdc2 = 1;

while (c >= divisor2 && b >= divisor2) {
    if (c % divisor2 === 0 && d % divisor2 === 0) {
        mdc2 *= divisor2;  // acumula o divisor no MDC
        c /= divisor2;
        d /= divisor2;
    } else {
        divisor2++; // tenta o próximo divisor
    }
}

console.log("MDC2 é:", mdc2);

//O que acontece com 12 e 18?
//1ª rodada
//divisor = 2
//12 % 2 = 0
//18 % 2 = 0
//→ Divide ambos
//a = 6, b = 9
//mdc = 2
//2ª rodada
//divisor = 2
//6 % 2 = 0
//9 % 2 ≠ 0
//→ Não posso dividir → divisor++
//3ª rodada
//divisor = 3
//6 % 3 = 0
//9 % 3 = 0
//→ Divide ambos
//a = 2, b = 3
//mdc = 2 × 3 = 6
//Agora nenhum divisor comum maior existe → terminou.
//Resultado = 6.