const MITLB = ['https://img.shields.io/badge/License-MIT-yellow.svg', 'https://opensource.org/licenses/MIT'];

const mitLIcense = {
  "badge": "https://img.shields.io/badge/License-MIT-yellow.svg",
  "url": "https://opensource.org/licenses/MIT"
}
const ISCB = ('https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC');
const TALB = ('https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === "MIT") {
    console.log("MIT", mitLIcense.badge) // dot notation to reference an object
    console.log("MIT", MITLB[0]) // bracket notation to reference an index of an array
    console.log("MIT", "https://img.shields.io/badge/License-MIT-yellow.svg") //hardcoded badge link into function
  } else if (!license) {
    console.log('no license')
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.Title}
  # ${responses.Title}

  # Table of Contents
  -[description](#description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[Contirbutors](#Contirbutors)
  -[Licensing](#Licensing)
  -[Tests](#Tests)
  -[Github](#Github)
  -[Email](#Email)
  
  #Created by:
  ${responses.Username}
  
  #description:
   ${responses.Description}
 
  #Installation:
   ${responses.Installation}

  #Usage:
    ${responses.Usage}

  #Contributors:
    ${responses.Contributors}

  #Licensing
    ${responses.Licensing}

  #Tests:
    ${responses.Tests}

  #Github:
    ${responses.Github}

  #Email:
   ${responses.Email}
`;
}

module.exports = generateMarkdown;
