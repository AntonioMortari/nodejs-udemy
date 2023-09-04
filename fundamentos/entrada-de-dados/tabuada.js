const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})

readline.question("Quer ver a tabuada de qual número? ", (n) =>{
    const number = Number(n)

    for(let i = 0 ; i<10 ; i++){
        console.log(`${number} x ${i} = ${number*i}`)
    }

    readline.close()
})