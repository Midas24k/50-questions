
// const mitLicense = {
//   "badge": "https://img.shields.io/badge/License-MIT-yellow.svg",
//   "url": "https://opensource.org/licenses/MIT"
// }
// const iscLicense = {
//   "badge": "https://img.shields.io/badge/License-ISC-blue.svg",
//   "url": "https://opensource.org/licenses/ISC"
// }
// const  artLicense = {
//   "badge": "https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg",
//   "url":"https://opensource.org/licenses/Artistic-2.0"
// }


function renderLicenseBadge(license){
  if(license !== 'None'){
    return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`
  }
  else{
    return " "
  }
}


function renderLicenseLink(license){
  if(license !== 'None'){
    return `* [Licensing](#Licensing)`
  }
  else{
    return " "
  }
}
function renderLicenseSection(license) {
  if(license !== 'None'){
    return `## Licensing
    
    This project is licensed under the ${license} license.`
  }
  else{
    return " "
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.Title}
 
  ${renderLicenseBadge(responses.Licensing)}

  ## Description:
  ${responses.Description}

  # Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contirbutors](#contirbutors)
  ${renderLicenseLink(responses.Licensing)}
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Created by:
  ${responses.Username}
   
  ## Installation:
   ${responses.Installation}

  ## Usage:
    ${responses.Usage}

  ## Contributors:
    ${responses.Contributors}

${renderLicenseSection(responses.Licensing)}

  ## Tests:
    ${responses.Tests}

  ## Questions

  If you have any questions or would like to reach me, please feel free to email me at [${responses.Email}](mailto:${responses.Email}).
  To see other projects go to my github : [${responses.Github}](https://github.com/${responses.Github})

  
  
`;
}

module.exports = generateMarkdown;
