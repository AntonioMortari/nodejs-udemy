const inquire = require('inquirer')

inquire.prompt([
    {
        name:"num1",
        message:"Digite o primeiro número"
    },
    {
        name:"num2",
        message:"Digite outro número"
    }
]).then(answers =>{
    const s = parseInt(answers.num1) + parseInt(answers.num2)
    console.log(s)
})