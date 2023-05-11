
//___SOMANDO___
function somar (s1, s2){//aqui não precisa ter as variaveis, pode ser parametros quaisquer, desde que sejam dois
    let calculo = s1 + s2
    return(`A soma de ${s1} e ${s2} foi igual a ${calculo.toFixed(2)}`)
    //return(console.log(`A soma de ${numero1} e ${numero2} é igual a ${calculo}`))
}
//___SUBTRAINDO___
const subtrair = (sub1, sub2) =>{
    let subtrai = sub1 - sub2
    return(`A subtração do número ${sub1} por ${sub2} foi igual a ${subtrai.toFixed(2)}`)
    //return(console.log(`A subtração de ${numero1} por ${numero2} é igual a ${subtrai}`))
}
//___MULTIPLICANDO___
const multiplicar = function(mult1, mult2){
    let multiplica = mult1 * mult2
    return(`A multiplicação de ${mult1} por ${mult2} é ${multiplica.toFixed(2)}`)
    //return(console.log(`A multiplicação dos números ${numero1} e ${numero2} é igual a ${multiplica}`))
}
//___DIVIDINDO___
const dividir = (div1, div2) => {
    const divide = div1 / div2
    return(`A divisão de ${div1} por ${div2} foi ${divide.toFixed(2)}`)
    //return(console.log(`A divisão do número ${numero1} por ${numero2} é igual a ${divide.toFixed(2)}`))
}

//Criando variáveis fora das funções
let numero1 = Number(prompt("Insira o primeiro número: "))
let numero2 = Number(prompt("Insira o segundo número: "))

//Invocando as funções
somar(numero1, numero2)
subtrair(numero1, numero2)
multiplicar(numero1, numero2)
dividir(numero1, numero2)

//Criando variáveis que armazena o retorno das funções, 
//não preciso escrever return, já que ele foi invocado dentro da função
let resultado1 = somar(numero1, numero2)
console.log(resultado1)
let resultado2 = subtrair(numero1, numero2)
console.log(resultado2)
let resultado3 = multiplicar(numero1, numero2)
console.log(resultado3)
let resultado4 = dividir(numero1, numero2)
console.log(resultado4)