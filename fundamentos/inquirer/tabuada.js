const inquirer = require('inquirer')

inquirer.prompt([
    {
        name:"num",
        message:"Digite um número para ver a tabuada:"
    }
]).then(answer =>{
    const {num} = answer

    for(i = 0 ; i<10 ; i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
})
.catch(err => console.log(err))