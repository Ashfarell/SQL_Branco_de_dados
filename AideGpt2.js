                    //Exercício 6 — Soma Condicional em Intervalo

function somarNoIntervalo(a,b){
    if (a>=b) {
        console.log("A não pode ser maior do que B")            //A n/ pode ser < B
        return;
    }                                                           //Fecha o IF
    let soma = 0;                                               //VAR p/ somar múltiplos
    for (let n = a; n<=b; n++){                               //LOOP p/ ir de A ==>B

    let multiploDe2 = (n%2===0);                                //VAR p/ múltiplo de 2
    let multiploDe3 = (n%3===0);                                //VAR p/ múltiplo de 3


                            //só soma se for apenas de um grupo
    if (multiploDe2 && !multiploDe3) {                          //Apenas múltipço de 2
        soma += n;      
    }
    if (multiploDe3 && !multiploDe2) {                          //Apenas múltipço de 3
        soma += n;
    }
    }
console.log("Resultado ", soma);
return soma;
}
somarNoIntervalo(1,10);