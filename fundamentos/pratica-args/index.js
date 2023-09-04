// Passar 2 numeros nos argumentos e utilizar um módulo interno para fazer a soma deles
const soma = require('./modules.js')

const args = process.argv.slice(2)

const n1 = parseInt(args[0].split('=')[1])
const n2 = parseInt(args[1].split('=')[1])

soma(n1,n2)