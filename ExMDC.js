                              //1º Solução
let x = 12, y = 18
x = x/2
console.log("X = :" + x)
y = y/2
console.log("Y = :" + y)
x = x /3
console.log("X = :" + x)
y = y /3
console.log("Y = :" + y)
x = x/2
console.log("X = "  + x)
y = y/3
console.log("Y = :" + y)
MDC = 2 * 3 
console.log("MDC = " + MDC)


                              //2º Solução
let a = 12, c = 2;
                        //A
      //1
if (Number.isInteger(a/2)) {
    console.log("1. A é divisível por " + c);
    a = a/ c;
    console.log("1. A é igual : " + a)
}else {
      c++;
}
    if (a ==1){
      console.log("ACABOU");
    }else {
      console.log("1º: continua " + "a = "+ a + " "+ "c = " + c);
    } 

      //2
if(Number.isInteger(a/c))     {
console.log("2. A é divisível por " + c);
a = a /c
console.log("2. A é igual : " + a)
console.log("2. C é igual : " + c)
}else {
      c++;
}
if (a ==1){
      console.log("ACABOU");
    }else {
      console.log("2º: continua " + "a = "+ a + " "+ "c = " + c);
}

      //3
if(Number.isInteger(a/c))     {
console.log("3. A é divisível por " + c);
a = a /c
console.log("3. A é igual : " + a)
console.log("3. C é igual : " + c)
}else {
      c++;                                                  //Auemnta C
}
if (a ==1){
      console.log("ACABOU");
    }else {
      console.log("3º: continua " + "a = "+ a + " "+ "c = " + c);
}

      //4
if(Number.isInteger(a/c))     {
console.log("4. A é divisível por " + c);
a = a /c
console.log("4. A é igual : " + a)
console.log("4. C é igual : " + c)
}else {
      c++;
}
if (a ==1){
      console.log("FINAL.ACABOU");
    }else {
      console.log("4º: continua " + "a = "+ a + " "+ "c = " + c);
    }

                        //FIM A
                        //B
let b = 18, d = 2;
                        //1
if (Number.isInteger(b/d)) {
    console.log("1. B é divisível por " + d);
    b = b/ d;
    console.log("1. B é igual : " + b);
    console.log("2. D é igual : " + d)
}else {
      d++;
}
    if (b ==1){
      console.log("ACABOU");
    }else {
      console.log("1º: continua " + "b = "+ b + " "+ "d = " + d);
    } 

      //2
if(Number.isInteger(b/d))     {
console.log("2. B é divisível por " + d);
b = b/ d;
console.log("2. A é igual : " + b)
console.log("2. C é igual : " + d)
}else {
      d++;
}
if (b ==1){
      console.log("ACABOU");
    }else {
      console.log("2º: continua " + "b = "+ b + " "+ "d = " + d);
}

      //3
if(Number.isInteger(b/d))     {
console.log("3. B é divisível por " + d);
b = b/ d;
console.log("3. B é igual : " + b)
console.log("3. D é igual : " + d)
}else {
      c++;                                                  //Auemnta C
}
if (b ==1){
      console.log("ACABOU");
    }else {
      console.log("3º: continua " + "b = "+ b + " "+ "d = " + d);
}

      //4
if(Number.isInteger(b/d))     {
console.log("4. B é divisível por " + d);
b = b /d
console.log("4. B é igual : " + b)
console.log("4. D é igual : " + d)
}else {
      d++;
}
if (b ==1){
      console.log("FINAL.ACABOU");
    }else {
      console.log("4º: continua " + "b = "+ b + " "+ "d = " + d);
    }

MDC = 3*2
console.log("MDC é igual = " + MDC )



//const resultado = 10 / 3;

//if (Number.isInteger(resultado)) {
  //  console.log("É inteiro");
//} else {
  //  console.log("Não é inteiro");
//}






