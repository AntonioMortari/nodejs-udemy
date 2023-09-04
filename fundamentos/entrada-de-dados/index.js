const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})

readline.question("Digite um número:", (resp1) =>{

    readline.question("Digite outro número:", (resp2) =>{
        const n1 = Number(resp1)
        const n2 = Number(resp2)

        console.log(`${n1} + ${n2} = ${n1+n2}`)

        readline.close()
    })
})

