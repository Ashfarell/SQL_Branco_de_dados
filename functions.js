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

    // Função arrow
var ola = (param) => {
    return `    Olá ${param}`
}
console.log(ola("ola mundo 3"));


        // Função arrow com retorno implícito
const dobro = (n) => n * 2      //retorno implícito
console.log(dobro(10))


        //outra forma de fazer função arrow com retorno implícito
const dobro2 = (valor) => {
    return valor * 2
}
console.log(dobro2(5))

        //outra forma ainda mais simplificada
const dobro3 = valor => valor *2
console.log(dobro3(8))


        //função arrow sem parâmetro
let hello = () => console.log('Hello World Arrow')      //Poderia trocar () por _
hello()

        //função arrow com múltiplos parâmetros
const adiciona = (a,b,c) => a + b + c
console.log(adiciona(1,2,3))

 const multiplica = (a,b, c) => a * b * c
 console.log(multiplica(2,3,4))

 const multiplica2 = (a = 2,b =3,c = 1) => a * b * c    //valores padrão
 console.log(multiplica2(2,2,2))
    console.log(multiplica2(2,2))                            //usa o valor padrão de c = 1
    console.log(multiplica2(1))                               //usa os valores padrão de a,b e c
 