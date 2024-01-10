// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const questions = [];
// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app


inquirer
    .prompt([
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
            name: 'Contributing',
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
    ])
    
    
    .then((data) => {
        const readmePageContent = generateReadMe(data);

        fs.writeFile(`README.md`, readmePageContent, (err) =>
            err ? console.log(err) : console.log(`Success!!! Enjoy your new README.md`)
        );

    });
    init();