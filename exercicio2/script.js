/*const somar = (numero1, numero2) => {
    const soma = numero1 + numero2
    console.log(soma)
}
somar(56,76)

const comparar = (primeiro, segundo) =>{
    const teste = primeiro >= segundo
    console.log(`O número ${primeiro} é maior ou igual a ${segundo}?: ${teste}`)
    }
    comparar(6, 4)
    comparar(5, 5)
    comparar(4, 5)*/

    // ---------------------- > C
//Função Tradicional
   /* function parImpar (numero){
        let calculo = numero % 2 === 0
        console.log(`O número ${numero} é par? ${calculo}`)
    }
    parImpar(8)
    parImpar(9)*/

    //----------------------- > D - Calcular salário líquido
    //Arrow Function
    const taxar = (salario) => {
        const inss = 0.1
        let salarioLiquido = salario - salario * inss
        return(`Seu salário inicial de ${salario} após os descontos é de ${salarioLiquido}`)
    }
    taxar(2000)
