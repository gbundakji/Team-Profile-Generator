const inquirer = require('inquirer');
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
            name: 'title',
            message: 'What is your current role in the team?',
            choices: ["Manager", "Engineer", "Intern"], 
            confirm: title => {
                if (title) {
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
    ])

.then((answers) => {
    const htmlPageContent = generateHtml(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Your index.html has been created successfully!')
    );
});



// function runInquirer(engineer, intern, manager) {
//     this.engineer = engineer;
//     this.intern = intern;
//     this.manager = manager;
//     this.run = () => {
//         if (title === "Engineer") {
//             return this.engineer;
//         } else if (title === "Intern" ) { 
//             return this.intern;
//         } else if (title === "Manager") {
//             return this.manager
//         };
//     };

// };


function inquirerManager() {
    const promptArray = [{
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        confirm: github => {
            if (github) {
                return true;
            } else {
                console.log('Please provide us with your github username');
                return false;
            };
        }   
    }];
    return inquirer
        .prompt(promptArray)
};

function inquirerManager() {
    const promptArray = [{
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
        confirm: github => {
            if (github) {
                return true;
            } else {
                console.log('Please provide us with your office number');
                return false;
            };
        }   
    }];
    return inquirer
        .prompt(promptArray)
};

function inquirerIntern() {
    const promptArray = [{
        type: 'input',
        name: 'school',
        message: 'What school did you go to?',
        confirm: github => {
            if (github) {
                return true;
            } else {
                console.log('Please provide us with your school name');
                return false;
            };
        }   
    }];
    return inquirer
        .prompt(promptArray)
};

function inquirerEngineer() {
    const promptArray = [{
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        confirm: github => {
            if (github) {
                return true;
            } else {
                console.log('Please provide us with your github username');
                return false;
            };
        }   
    }];
    return inquirer
        .prompt(promptArray)
};

function run() {
    let employees= [];
    const maxTimes = 4;
    for (i = 0; i < maxTimes; i++) {
        const promise = new Promise((resolve, reject) => {
            runInquirer()
                .then(function ({ name, id, email, title }) {

                    if (title === "Manager") {
                        inquirerManager().then(function ({officeNumber}) {
                            this.employee = new Manager(name, id, email, officeNumber, title);
                            console.log(officeNumber);
                            employees.push(employee);
                            resolve("done");
                        });

                    } else if (title === "Engineer") {
                        inquirerEngineer().then(function ({github}) {
                            this.employee = new Engineer(name, id, email, github, title);
                            console.log(github);
                            employees.push(employee);
                            resolve("done");
                        });
                    } else if (title === "Intern") {
                        inquirerIntern().then(function ({school}) {
                            this.employee = new Intern(name, id, email, school, title);
                            console.log(school);
                            employees.push(employee);
                            resolve("done");
                        });
                    }

                }).catch(function (err) {
                    console.log("There was an error.");
                    console.log(err);
                });
        });
        console.log('status of promise: ', promise);
    }
    
};

function displayTitle(employee) {
    if (title === "Manager") {
        console.log(officeNumber);
        return `office number: ${employee.officeNumber}`;
    }

    if (title === "Intern") {
        return `school: ${employee.school}`;
    }

    if (title === "Engineer") {
        return `gitHub: ${employee.github}`;
    }

};

function getHtml() {
    const html = "";
    html += `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
        <div class="col card-header">
            <h4>${employees[i].name}</h4>
        </div>
        <div class="col card-header">
            <h4>${employees[i].title}</h4 >
        </div >
        <ul class="list-group list-group-flush text">
            <li class="list-group-item">ID: ${employees[i].id}</li>
            <li class="list-group-item">Email: ${employees[i].email}</li>
            <li class="list-group-item"> ${displayTitle(employees[i])}</li>
        </ul>
    </div > `;
    return html;
}

const generateHtml = () => {
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="./dist/style.css"> 
  <title>Team Profile Generator</title>
    </head>
    </head>
        <body>
            <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
                <span class="navbar-brand mb-0 h1">
                    <h1>My Team</h1>
                </span>
            </nav>
            <div class="row">
                ${getHtml()}
            </div>
        </body>
</html>`;

fs.writeFile('team.html', html, generateHtml, function (err){
    if (err) console.error(err);
    console.log('Success!')
});
};

run();