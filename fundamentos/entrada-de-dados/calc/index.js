const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("================")
console.log("Operações:")
console.log("1 - Adição")
console.log("2 - Subtração")
console.log("3 - Divisão")
console.log("4 - Multiplicação")
console.log("================")

readline.question("Digite a operação:", (operator) => {

    if(["1", "2", "3", "4"].includes(operator)){
        readline.question("Digite o primeiro número:", (resp1) => {
            let num1 = Number(resp1)
    
            readline.question("Digite o segundo número:", (resp2) => {
                let num2 = Number(resp2)
    
                switch (operator) {
                    case "1":
                        console.log(`${num1} + ${num2} = ${num1 + num2}`)
                        break
                    case "2":
                        console.log(`${num1} - ${num2} = ${num1 - num2}`)
                        break
                    case "3":
                        if(num2 == 0){
                            console.log('Erro, divisão por 0 não é permitido')
                        }else{
                            console.log(`${num1}/ ${num2} = ${num1 / num2}`)
                        }
                        break

                    case "4":
                        console.log(`${num1} x ${num2} = ${num1 * num2}`)
                        break
                }
    
                readline.close()
            })
        })

    }else{
        console.log("Opção inválida!")
        readline.close()
    }


})