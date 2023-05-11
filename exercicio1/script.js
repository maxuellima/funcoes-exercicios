
//Imprimir nome
/*function imprimirNome(nome){
    console.log(`Olá ${nome}`)
}
imprimirNome("Lebron James")

//Tabuada
function tabuada(numero){
    let a = 1
    while( a <= 10){
        let calculo = a * numero
        a++
        console.log(calculo)
    }
    }
(tabuada(8))*/

//Expressão de função
const imprimirNome = function(nome){
    console.log(`Olá ${nome}`)
}
imprimirNome("Stephen Curry")

//--------------------->
//Arrow function
//const calcular = (numero1,numero2) =>{
function calcular (numero){
let tabuada1 = numero * 1
let tabuada2 = numero * 2
let tabuada3 = numero * 3
let tabuada4 = numero * 4
let tabuada5 = numero * 5
let tabuada6 = numero * 6
let tabuada7 = numero * 7
let tabuada8 = numero * 8
let tabuada9 = numero * 9
console.log(`A tabuada de ${numero} é 
${tabuada1}, ${tabuada2}, ${tabuada3}, ${tabuada4}, ${tabuada5}, ${tabuada6}, ${tabuada7}, ${tabuada8}, ${tabuada9}`)
}
calcular(9)
calcular(8)

//---------------------------
//Tabuada com For

/*const calcularFor = (numero) =>{
    for(var t = 1; t<=10 ; t++){
        let tabuada = numero * t
        console.log(tabuada)
    }
}
calcularFor(21)*/

