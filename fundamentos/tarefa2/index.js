const inquirer = require('inquirer')
const chalk = require('chalk')


    inquirer.prompt([
        {
            name:'name',
            message:'Digite seu nome:'
        },
        {
            name:'age',
            message:'Digite sua idade:'
        }
    ])
    .then(answer =>{
        if(answer.name.length == 0 || answer.age.length == 0){
            throw new Error("Digite os dados corretamente!")
        }

        console.log(chalk.bgYellow.black(`O seu nome é ${answer.name} e você tem ${answer.age} anos!`))
    })
    .catch(err =>{
        console.log("Erro ",err)
    })

