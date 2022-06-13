const inquirer = require("inquirer");

function askQuestions(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'nawefweme',
            message: 'Who is the efewfmanager of this team?',
        },
        {
            type: 'input',
            name: 'naewfweme',
            message: 'Who is the maefwefnager of this team?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'Who is the wefweanager of this team?',
        },
        {
            type: 'input',
            name: 'naerhgme',
            message: 'Who is thhrthe manager of this team?',
        },
        {
            type: 'input',
            name: 'nabfbgbe',
            message: 'Who is thfbgbe manager of this team?',
        },
        {
            type: 'input',
            name: 'na3rme',
            message: 'Who is thrfdee manager of this team?',
        },
    ])
    .then(answers => {
        console.log(answers.nawefweme)
    })
}


askQuestions()