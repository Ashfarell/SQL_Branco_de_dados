        //Ex sobre INCREMENTOS:
        //DESAFIO 1 — O que o loop imprime?
for (let i = 0; i < 5; i++) {

    if (i === 2) {
        console.log("Pulando o 2...");
        continue;
    }

    console.log("Valor atual:", i);

    if (i === 3) {
        console.log("i virou:", i + 1);
        i++;
    }
}