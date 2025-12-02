                        //VERSÃO BASEADA NA SUA IDEIA (FUNCIONAL)
let b = 2, c = 3, d = 4, e = 5, f = 6, g = 7, h = 8, i = 9, j = 10, 
    k = 11, l = 12, m = 13, n = 14, o = 15, p = 16, q = 17, r = 18;

let temp = l;          // esse é o número que queremos fatori
let temp2 = b;         // começa testando pelo divisor 2
let mdc = 1;           // resultado final

while (temp2 <= temp) {

                    // tenta dividir: se for inteiro...
    if (Number.isInteger(temp / temp2)) {

        console.log(`temp (${temp}) é divisível por ${temp2}`);

        temp = temp / temp2;   // divide
        mdc *= temp2;          // acumula o divisor no MDC

        console.log(`Novo temp: ${temp}`);
        console.log(`MDC parcial: ${mdc}`);
    
    } else {

        // não divide → tenta o próximo divisor
        temp2++;

    }
}

console.log("MDC final é:", mdc);
//O que esse código faz?
//Ele segue exatamente sua ideia:
//Começa com temp = 12
//Tenta dividir por 2 (temp2)
//Se for inteiro → divide e continua dividindo até não dar mais
//Quando não der mais, aumenta temp2 → 3
//Divide novamente se possível
//Acumula os divisores no resultado (mdc = mdc * divisor)
//Repete até não poder mais dividir
//No caso de 12 e 18, isso funciona para extrair fatores comuns.


                    //VERSÃO FINAL (seu raciocínio aplicado ao MDC de dois números)
let x = 12;
let y = 18;

let divisor = 2;
let mdc1 = 1;

while (x >= divisor && y >= divisor) {

    if (Number.isInteger(x / divisor) && Number.isInteger(y / divisor)) {

        console.log(`Ambos divisíveis por ${divisor}`);

        x = x / divisor;
        y = y / divisor;

        mdc1 *= divisor;

        console.log(`a virou: ${x}`);
        console.log(`b virou: ${y}`);
        console.log(`MDC parcial: ${mdc1}`);
    
    } else {
        divisor++;
    }
}

console.log("MDC final é:", mdc1);