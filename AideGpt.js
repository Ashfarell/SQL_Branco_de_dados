
            //  Exercício 1: Criar sua primeira função
//Vamos começar agora — Nível 1, Exercício 1
//✅ Exercício 1: Criar sua primeira função
//Crie uma função chamada dizerOla que:
//não recebe nenhum valor
//imprime: "Olá! Seja bem-vindo!"

function dizerOla() {                               //declara função
    console.log("Oi, seja bem vindo" + " SEM PARÂMETRO");          //print e definie texto dentro da função
}
dizerOla();                                         //chama função

            //Exercício 2: Função com parâmetro
                        //Como declarar uma função com parâmetro:
function dizerOlaPara(nome){
    console.log("Olá " + nome + " 1º forma C/ PARÂMETRO");
}
dizerOlaPara("Jean");

                        //Como usar o parâmetro dentro do texto:

function dizerOlaPara1(nome1){                   //nome = parâmetro
console.log("Olá " + nome1);
}
dizerOlaPara1("Jean" + " parâmetro dentro do texto" + " 2º forma C/ PARÂMETRO");

                    //Ou usando template string (opcional):
function dizerOlaPara2(nome2){
    console.log(`Olá 3, ${nome2}`);                //parâmetro dentro do texto
}
dizerOlaPara2("Jean" + " Template string" + " 3º forma C/ PARÂMETRO");



                //Exercício 3: Somar dois números
function somar(a,b){
console.log (a+b);
}
somar(2, 5);

                // USANDO LET
function somar1(a,b){
    let resultado = a +b;                 //guarda o valor em uma variável chamada resultado:
    console.log(resultado);               //Depois usa essa variável:
}
somar1(3,6);

                //Outro exemplo com LET
function somar3(a, b) {
    let resultado = a + b;

    if (resultado > 10) {
        console.log("O resultado é grande!");
    }else {
        console.log("Menor que 10");
    }
    console.log("Resultado final:", resultado);
}
somar3(3,6);


                //Exercício 4 — Loop com for
function contarAte(N){
for (let i = 1; i<=N; i++) {                    //i começa no 1
console.log(i);
}
}    
contarAte(5);                                   //Aqui definimos o valor de N

                //Exercício 5 
                // — Contar de N até 1 (contagem regressiva) + IF/ELSE
function contarRegressivo(M){
for (let j =M; j>=1; j--){                      //abri {} para usar FOR
if (j>1) {
    console.log("J ainda é maior, vale: " + j);             //condicional p/ print se maior
}else{
    console.log("Agora j = M, j vale: " + j);               //condicional p/ print quando chegar no valor
}}
}
contarRegressivo(5);                                        //Aqui definimos o valor de M

                        //Sem if/else
function contarRegressivo1(K){
    for (let o= K; o>=1; o-- ){                             //! o loop precisa começar o=K
        console.log(o);
    }
}
contarRegressivo(5);

                            //!!!! Versão errada !!!!
function contarRegressivo2(P){
  for (let u = 5; u >= P; u--){                 //u tem valor FIXO!! se eu mudar o valor de P, o código n/ funciona
    console.log(P + " APENAS print se até 5");
  }
}
contarRegressivo2(5);