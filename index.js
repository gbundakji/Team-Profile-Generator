const inquirer = require('inquirer');
const jest = require('jest');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');

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
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${name}</h1>
    <h2 class="lead">${role}</h2>
    <ul class="list-group">
        <li class="list-group-item">ID: ${id}
        <li class="list-group-item">GitHub: ${github}</li>
        <li class="list-group-item">Email: ${email}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

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
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Your index.html has been created successfully!')
    );
});

