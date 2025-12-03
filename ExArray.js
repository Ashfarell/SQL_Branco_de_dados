// Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior 
//  valor e o índice do menor valor.
let lista =[2,5,8,13,15,18,35,45,99,150]
console.log(lista)
console.log([1])
console.log("Essa array tem " + lista.length + " elementos")

console.log(lista[2]);
console.log(lista.length-1)
console.log(lista.length+1)

let indiceMAX = lista.indexOf(150)
console.log("A posição do maior valor é " + indiceMAX + "º")

let indiceMIN = lista.indexOf(2)
console.log("A posição do menor valor é " +  indiceMIN + "º")


