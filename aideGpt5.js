for (let i = 1; i < 4; i++) {
    console.log("Início do for, i =", i);
    let n = i;                                  //quando volta p/ FOR ==>n toma o valor I

    while (n < 5) {
        n++;                                    //no WHILE, ++ acontece no início???

        if (n === 3) {
            console.log("n chegou em 3, continuando...");
            continue;                                           //CONTINUE
        }
        if (n === 4 && i === 2) {
            console.log("Saindo do while porque i=2 e n=4");
            break;                                              //apenas sai do loop interno (WHILE); n/ sai do FOR
        }
        console.log("n vale:", n);
    }
    console.log("Fim do ciclo do for, i =", i);
}