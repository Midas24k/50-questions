// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What would you like to call this thing?',
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
        type: 'Checkbox',
        name: 'Licensing',
        message: 'Select the tyoe of Licensing you will need?',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Are there any test utlized to ensure quality?',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?',
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(`Error writing to ${fileName}: ${err}`);
        } else{
            console.log(`Data written to ${fileName} successfully`);
        }
    })
}

// TODO: Create a function to initialize app
function init(inquirer) {
    inquirer.prompt(questions).then((data) => {
        const readMeContent = function generateMarkdown(data) {
            return `# ${data.title}
            # ${response.title}
          
            # Table of Contents
            -[description](#description)
            -[Installation](#Installation)
            -[Usage](#Usage)
            -[Contirbutors](#Contirbutors)
            -[Licensing](#Licensing)
            -[Tests](#Tests)
            -[Github](#Github)
            -[Email](#Email)
            
            ${responsse.username}
            ##username:
            
              ${response.description}
            ##description:
           
             ${response.Installation}
            ##Installation:
          
              ${response.Usage}
            ##Usage:
          
              ${response.Contirbutors}
            ##Contributors:
          
              ${response.Licensing}
            ##Licensing
          
              ${response.Tests}
            ##Tests:
          
              ${response.Github}
            ##Github:
          
             ${response.Email}
            ##Email:
          `;
          }
    })
    writeToFile('README.md', readMeContent, (err) => {
        if (err) {
            console.error('Intialzation failed.');
        } else {
            console.log('Initialization successful.');
        }
    });
}

// Function call to initialize app
init();