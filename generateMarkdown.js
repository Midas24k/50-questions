
const mitLicense = {
  "badge": "https://img.shields.io/badge/License-MIT-yellow.svg",
  "url": "https://opensource.org/licenses/MIT"
}
const iscLicense = {
  "badge": "https://img.shields.io/badge/License-ISC-blue.svg",
  "url": "https://opensource.org/licenses/ISC"
}
const  artLicense = {
  "badge": "https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg",
  "url":"https://opensource.org/licenses/Artistic-2.0"
}

function renderLicenseSection(license) {
  switch (license) {
    case "Mit":
      return `[![License](${mitLicense.badge})](${mitLicense.url})`;
    case "Isc":
      return `[![License](${iscLicense.badge})](${iscLicense.url})`;
    case "Artistic 2.0":
      return `[![License](${artLicense.badge})](${artLicense.url})`;
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.Title}
  # ${responses.Title}

  # Table of Contents
  #[description](#description)
  #[Installation](#Installation)
  #[Usage](#Usage)
  #[Contirbutors](#Contirbutors)
  #[Licensing](#Licensing)
  #[Tests](#Tests)
  #[Github](#Github)
  #[Email](#Email)
  
  #Created by:
  ${responses.Username}
  
  #Description:
   ${responses.Description}
 
  #Installation:
   ${responses.Installation}

  #Usage:
    ${responses.Usage}

  #Contributors:
    ${responses.Contributors}

  #Licensing
    ${renderLicenseSection(responses.Licensing[0])}

  #Tests:
    ${responses.Tests}

  #Github:
    ${responses.Github}

  #Email:
   ${responses.Email}
`;
}

module.exports = generateMarkdown;
