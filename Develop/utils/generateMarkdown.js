function renderScreenshot(image) {
  if(!image) {
    return ''
  } else {
    return '![Usage Screenshot](./assets/images/'+(image)+')'
  }
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license = 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license = 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  } else if (license = 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return ''
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license = 'MIT') {
    return '[https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/)';
  } else if (license = 'Apache 2.0') {
    return '[https://choosealicense.com/licenses/apache-2.0/](https://choosealicense.com/licenses/apache-2.0/)';
  } else if (license = 'ISC') {
    return '[https://choosealicense.com/licenses/isc/](https://choosealicense.com/licenses/isc/)';
  } else if (license = 'GNU GPLv3') {
    return '[https://choosealicense.com/licenses/gpl-3.0/](https://choosealicense.com/licenses/gpl-3.0/)';
  } else {
    return ''
  }
};


// TODO: Create a function to generate markdown for README
module.exports = (data) => {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description

  - ${data.motivation}

  - ${data.why}

  - ${data.problem}

  - ${data.learn}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation

  - ${data.installInstructions}
  
  ## Usage

  - ${data.usage}

  - ${renderScreenshot(data.screenshot)}
      
  ## License

   - This program is licensed under ${data.license}
   - ${renderLicenseLink(data.license)}
    
  ## Contributing
  
  If you created an application or package and would like other developers to contribute it, you can 
  include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/)
  is an industry standard, but you can always write your own if you'd prefer.
  - ${data.contribute}
  
  ## Tests
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.
  - ${data.tests}

  ## Questions

  Contact Information

  -Github - https://github.com/${data.github}

  -Email - ${data.email}

  Please Email me with any questions or comments you have!
`;
};

