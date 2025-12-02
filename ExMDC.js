      //Cálculo do Máximo Divisor Comum (MDC) usando o Algoritmo de Euclides
//let a = 12, b = 18
                                            //console.log("Valores iniciais: a: " + a + ", b: " + b);
//while (b !== 0) {   
 //   let temp = b;
                                            //console.log("Valor de temp: " + temp);
   // b = a % b;
                                            //console.log("Novo valor de b (a % b): " + b);
    //a = temp;
                                            //console.log("Novo valor de a (temp): " + a);
//}console.log("MDC é: " + a);

        //Testando o algoritmo MDC passo a passo
//let x = 12, y = 18
//x = x /2
//console.log("X = :" + x)
//y = y/2
//console.log("Y = :" + y)
//x = x /3
//console.log("X = :" + x)
//y = y /3
//console.log("Y = :" + y)
//x = x/2
//console.log("X = "  + x)
//y = y/3
//console.log("Y = :" + y)
//MDC = 2 * 3 
//console.log("MDC = " + MDC)


//Tentativa MDC
let b = 2, c = 3, d = 4, e = 5, f = 6, g = 7, h = 8, i = 9, j = 10, k = 11, l = 12, m = 13, n = 14, o = 15, p = 16, q = 17, r = 18, temp1;
temp = l                                                    //1º MDC
temp2 = b                                                   //divisor - começa com b(2)
l = (l/temp2)  
                                                            //1º cálculo de L
if (Number.isInteger(l)) {
      console.log("1º Valor de L se inteiro " + l);
     (temp/temp2);
     (temp = l);
     console.log("1º Valor de temp ajustado :" + temp);       //1º Valor final ajustado de temp

      if(Number.isInteger(temp)) {
          l=  (temp/temp2);
          console.log("2º Valor de L se inteiro " + temp);
          (l/temp2);
          console.log("2º Valor de temp ajustado :" + l);   //2º Valor final ajustado de temp
      }

      if(Number.isInteger(temp)) {
            l=  (temp/temp2);
          console.log("3º Valor de L se inteiro " + temp);
          (l/temp2);
          console.log("3º Valor de temp ajustado :" + l);   //2º Valor final ajustado de temp
      }




} else {
    console.log(temp*temp2);
    console.log("Valor de L não inteiro " + l);
    console.log("valor final temp :" + temp);
l = temp
      console.log("Valor de L ajustado :" + l);

}






//const resultado3 = 15 / 3;

//if (Number.isInteger(resultado3)) {
//    console.log("É inteiro");
//} else {
//    console.log("Não é inteiro");