//let a = 1
//console.log(a);
//let b = a + 1
//console.log(b);
function calculo() {
let a = 1, b = 0, num = 4, temp;
let count = 0;                                //COUNT p/ contar as rodadas

while (num >=0) {
  count++;                                     //incrementa o contador a cada rodada
  temp = a;
  a = a +b;
  b = temp;
                                            //log precisa estar no final p/ mostrar os valores FINAIS
   console.log('a:', a, 'b:', b);             //serve p/ imprimir os valores das VAR em cada etapa
  num --;
}
console.log(num);
console.log("Total de rodadas:", count);      //mostra o total de rodadas realizadas
}
calculo();
          //Rodadas:

//Rodada 1:
//temp = a ==> temp = 1
//a = a + b ==> a = 1 + 0 = 1
//b = temp ==> b = 1
//num -- ==> num = 4 - 1 = 3

//Rodada 2:
//temp = a ==> temp = 1
//a = a + b ==> a = 1 + 1 = 2
//b = temp ==> b = 1
//num -- ==> num = 3 - 1 = 2    

//Rodada 3:
//temp = a ==> temp = 2 
//a = a + b ==> a = 2 + 1 = 3
//b = temp ==> b = 2
//num -- ==> num = 2 - 1 = 1

//Rodada 4:
//temp = a ==> temp = 3
//a = a + b ==> a = 3 + 2 = 5
//b = temp ==> b = 3
//num -- ==> num = 1 - 1 = 0

//Rodada 5:
//temp = a ==> temp = 5 
//a = a + b ==> a = 5 + 3 = 8
//b = temp ==> b = 5
//num -- ==> num = 0 - 1 = -1



