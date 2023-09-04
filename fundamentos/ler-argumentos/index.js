
const args = process.argv.slice(2)

let nome = args[0].split('=')[1]
let idade = args[1].split('=')[1]

console.log(`O Nome é ${nome} e a idade é ${idade}`)
