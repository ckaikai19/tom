const inquirer = require("inquirer");
const fs = require('fs');


const makePage = require('./src/makePage');

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");


const entire_staff = [];

function ask_Employee_Questions(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of this employee:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email."
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username."
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school"
        },
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: 'Would you like to add more staff members?',
            default: false
        }
    ])
    .then((employee_answers) => {
        let employee;
        
        if(employee_answers.role == "Intern"){
            employee = new Intern(employee_answers.name, employee_answers.id, employee_answers.email, employee_answers.school);
        }
       
        if(employee_answers.role == "Engineer"){
            employee = new Engineer(employee_answers.name, employee_answers.id, employee_answers.email, employee_answers.github);
        }

        entire_staff.push(employee);

        if (employee_answers.confirmEmployee) {
            return ask_Employee_Questions()
        } else {
            return entire_staff;
        }
    })
    .then((staff_array)=>{
        return makePage(staff_array);
    })
    .then((page)=>{
        return fs.writeFileSync(__dirname + '/dist/index.html', page);
    })

}

function askQuestions(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the name of the manager:"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's id:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email:"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number:"
        }
    ])
    .then((manager_answers) => {
        const input_manager = new Manager(manager_answers.name, manager_answers.id, manager_answers.email, manager_answers.officeNumber);
        entire_staff.push(input_manager)
    })
    .then(ask_Employee_Questions)
}


askQuestions()
