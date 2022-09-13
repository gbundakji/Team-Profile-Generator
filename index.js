const inquirer = require('inquirer');
const jest = require('jest');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');

inquirer 
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            confirm: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is your current role in the team?',
            choices: ["Manager", "Engineer", "Intern"], 
            confirm: role => {
                if (role) {
                    return true;
                } else {
                    console.log('Please pick your current team role!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID?',
            confirm: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Please provide your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address',
            confirm: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please provide us with your email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            confirm: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Please provide us with your github username');
                    return false;
                }
            }
        },
    ])

.then((answers) => {
    const htmlPageContent = generateHtml(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Your index.html has been created successfully!')
    );
});

// function run() {
//     let allRoles = [];
//     const positions = 4;
//     for (let i = 0; i < positions.length; i++) {
//         const promise = new Promise((resolved, rejected) => {
//             runInquirer()
//             .then(function ({name, role, id, email}) {
//                 if (title === "Manager") {
//                     runInquirerManager().then(function ({
                        
//                     }))
//                 }
//             })
//         })
//     }
// };



function runInquierer(engineer, intern, manager) {
    this.engineer = engineer;
    this.intern = intern;
    this.manager = manager;
    this.run = () => {
        if (title === "Engineer") {
            return this.engineer;
        } else if (title === "Intern" ) { 
            return this.intern;
        } else if (title === "Manager") {
            return this.manager
        };
    };

};

runInquierer(engineer, intern, manager);

function displayTitle(employee) {
    if (employee.title === "Manager") {
        console.log(employee.officeNumber);
        return `office number: ${employee.officeNumber}`;
    }

    if (employee.title === "Intern") {
        return `school: ${employee.school}`;
    }

    if (employee.title === "Engineer") {
        return `gitHub: ${employee.github}`;
    }

};

const generateHtml = ({name, role, id, email, github}) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Profile Generator</title>
</head>
<header class="backgorund-red">My Team</header>
<body>
<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
<div class="col card-header">
    <h4>${employeeArray[i].name}</h4>
</div>
<div class="col card-header">
    <h4>${employeeArray[i].title}</h4 >
</div >
<ul class="list-group list-group-flush text">
    <li class="list-group-item">ID: ${employeeArray[i].id}</li>
    <li class="list-group-item">Email: ${employeeArray[i].email}</li>
    <li class="list-group-item"> ${displayTitle(employeeArray[i])}</li>
</ul>
</div >
</div>
</body>
</html>`;

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.error(err);
        }
        console.log("Your index.html file has been created successfully! ")
    });
};

function init() {
    inquirer.prompt(questions)
    .then(function (answers, data) {
        console.log(answers)
        writeToFile("index.html", generateMarkdown(answers));
    });
};

init();
