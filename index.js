// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of this project?',
    },
    {
        type: 'input',
        name: 'Username',
        message: 'Who created this project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Give a brief description?',
    },    
    {
        type: 'input',
        name: 'Installation',
        message: 'How do you install it, how does it work?',
    }, 
    {
        type: 'input',
        name: 'Usage',
        message: 'What is this app for?',
    }, 
    {
        type: 'input',
        name: 'Contributors',
        message: 'Did anyone or anything help you to create this app?',
    },
    {
        type: 'list',
        name: 'Licensing',
        message: 'What is the type of Licensing you will need?',
        choices:['Mit', 'Isc', 'Artistic 2.0','None']
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Are there any test utilized to ensure quality?',
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your Github user address?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?',
    },


];


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log(responses)
        console.log('Making your new README.md file')
       fs.writeFileSync(path.join(process.cwd(),'README2.md'), generateMarkdown({...responses}))
    });
    
}



// Function call to initialize app
init();