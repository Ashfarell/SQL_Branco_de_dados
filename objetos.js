                //ARRAY = lista de itens
let frutas = ['maçã', 'banana', 'uva']                 //ARRAY
console.log((frutas.length))

let primeiraFruta = frutas[0]               //1º item = 0
console.log(primeiraFruta)                  //print 1º item

let ultimaFruta = frutas[frutas.length -1]   //último item = length -1
console.log(ultimaFruta)                    //print último item

frutas.forEach(function(fruta, idx){             //forEach = para cada item do ARRAY (percorre) 
    console.log(fruta)                             //idx = índice serve p/ mostrar a posição do item
})

frutas.push('pera')                                  //adiciona item no final do ARRAY   
frutas.pop()                                        //remove o último item do ARRAY

frutas.forEach((fruta, idx) => {                        //função arrow
    console.log(fruta)                                  //igual ao de cima
})

                //JSON - EXEMPLO DE OBJETO

var JsonJS = [                                  //JSON = JavaScript Object Notation
    {
        "nome": function(){
             return 'João'
    },
        "idade": "30"
    },
    {
        "nome": "Maria",
        "idade": 25
    }
]
console.log(JsonJS)

                        //JSON EXEMPLO 2
        const JsonRest = {
            "nome": "daniel",
            "idade": 25
        }
        console.log(JsonRest)

     console.log(JSON.stringify(JsonJS))           //converte JSON em string

     const texto = '[{"idade":"30"},{"nome":"Maria","idade":25}]'    //string JSON'
     console.log(JSON.parse(texto))                 //converte string em JSON