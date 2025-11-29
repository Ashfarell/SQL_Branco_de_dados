let x = new Boolean(false);                 //classe Boolean cria um objeto booleano
let y = false;
console.log(x == y);  // true, because x is converted to primitive false

if(x==false){
    console.log("Verdadeiro1");
}

if(x){
    console.log("Verdadeiro2");         ;  //entra aqui, pois x é um objeto e objetos são verdadeiros
}

if(y){
    console.log("Verdadeiro3")          ;  //não entra aqui, pois y é false 
}