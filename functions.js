//Função nomeada
function ola(param) {
    return param
}
console.log(ola("Hello World"));


//Função auto-invocada
(function (param) {
    console.log(param)
})('Ola auto');


// Função anônima atribuída a uma variável
var ola = function ola(param){
    return `Olá ${param}`
}

console.log(ola("ola mundo 2"));