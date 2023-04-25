// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
let yourLicense = ''
if (license === 'MIT') {
  yourLicense =  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
} else if (license === 'GPLv3') {
  yourLicense = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
} else if (license === 'Apache2.0') {
  yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
} else if (license === 'N/A') {
}
return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let yourLicenseLink = ''
  if (license === 'MIT') {
    yourLicense =  '(https://opensource.org/licenses/MIT)'
  } else if (license === 'GPLv3') {
    yourLicense = '(https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'Apache2.0') {
    yourLicense = '(https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'N/A') {
  }
  return yourLicense;
  };


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let yourLicenseSection = ''
  if (license !== 'N/A') {
    yourLicenseSection = '## License'
  } else {yourLicenseSection = '' }
  return yourLicenseSection; 
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

## Description 
${data.Description}
# Table Of Contents
• [Installation](#installation)
• [Usage](#usage)
• [License](#license)
• [Contributing](#contributing)
• [Tests](#tests)
• [Questions](#questions)

## Installation
The Rollowing necessary dependencies must be installed to run the application. ${data.Installation}

## Usage 
In order to use this app. ${data.Usage}

${renderLicenseSection(data.License)}
This project is licensed under the ${data.License} license. 
${renderLicenseBadge(data.License)}
${renderLicenseLink(data.License)}


## Contributing 
Contributors: ${data.Contributing}

## Tests 
The following is needed to run the test: ${data.Tests}

# Questions 
https://github.com/${data.Username}
If you have any questions about the repo, open an issue or contact: ${data.Email}
`;       
}

module.exports = generateMarkdown;
