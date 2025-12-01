                //OPERADORES
//  +Adição
//  -Subtração
//  *Meltuplicação
//  /Divisão
//  **Exponenciação
//  %Módulo
//  ++ Incremento
//  --Decremento  

//*/
let x = 0, y = 1
x = x + 1       
x +=y
console.log(x), (y)

x = x - y
x -= y
console.log(x), (y)

x *=y

x//=y

x%=y
x**=y
x = x **y


if (x ==y){
    console.log('x é igual a y')
}
                                //COMPARAÇÃO
// ==igualdade
//  ==== valor igual e tipo igual

if (1==='1'){                           // === verifica tipo e valor ==> 1 é number e '1' é string
    console.log('Válido')
} else {
    console.log('Inválido')
}

//  != diferente
//  !== valor diferente ou tipo diferente
//  > maior que
//  < menor que
//  >= maior ou igual
//  <= menor ou igual

//  ? operador ternário
1 === '1' ? console.log('Verdadeiro') : console.log('Falso')  //ternário; simplifica o if/else em uma linha


//  && operador lógico E    
if (x === 1 && y === 1){
    console.log('x e y são iguais a 1')
}

// || operador lógico OU
// !  negação
if (x === 1 || y === 2){
    console.log('x é igual a 1 ou y é igual a 2')
}

!(1 === '1') ? console.log('Verdadeiro') : console.log('Falso')  //! negação; inverte o valor lógico