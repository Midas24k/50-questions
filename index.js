// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path')
// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        name: 'Title',
        message: 'What would you like to call this thing?',
    },
    {
        type: 'input',
        name: 'Username',
        message: 'Who created this project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is this about?',
    },    
    {
        type: 'input',
        name: 'Installation',
        message: 'How did you make it?',
    }, 
    {
        type: 'input',
        name: 'Usage',
        message: 'What is this app for?',
    }, 
    {
        type: 'input',
        name: 'Contributors',
        message: 'Did anyone or anthing help you to create this app?',
    },
    {
        type: 'list',
        name: 'Licensing',
        message: 'Select the tyoe of Licensing you will need?',
        choices:['Mit', 'Isc', 'Artistic 2.0','None']
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Are there any test utlized to ensure quality?',
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

// // TODO: Create a function to write README file
// function writeMarkDownFile(responses) {
//     fs.writeFile('README.md', generateMarkdown(responses));
// }

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