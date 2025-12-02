                //Alternativa MDC
let a = 12;
let b = 18;

let divisor = 2;
let mdc = 1;

while (a >= divisor && b >= divisor) {

    if (Number.isInteger(a / divisor) && Number.isInteger(b / divisor)) {

        console.log(`Ambos divisíveis por ${divisor}`);

        a = a / divisor;
        b = b / divisor;

        mdc *= divisor;

        console.log(`a virou: ${a}`);
        console.log(`b virou: ${b}`);
        console.log(`MDC parcial: ${mdc}`);
    
    } else {
        divisor++;
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

let divisor2 = 2;
let mdc2 = 1;

while (x >= divisor2 && y >= divisor2) {

    if (Number.isInteger (x/ divisor2) && Number.isInteger(y / divisor2)) {

        console.log(`Ambos divisíveis por ${divisor2}`);

        x = x / divisor2;
        y = y / divisor2;

        mdc2 *= divisor2;

        console.log(`a virou: ${x}`);
        console.log(`b virou: ${y}`);
        console.log(`MDC parcial: ${mdc2}`);
    
    } else {
        divisor2++;
    }
}
console.log("MDC final é:", mdc2);

//Ambos divisíveis por 2
//...
//Ambos divisíveis por 3
//...
//MDC final é: 6