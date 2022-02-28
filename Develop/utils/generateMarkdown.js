// const license = data.license
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

  Provide a short description explaining the what, why, and how of your project. Use the following 
  questions as a guide:
  
  - What was your motivation?
  - ${data.motivation}
  - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
  - ${data.why}
  - What problem does it solve?
  - ${data.problem}
  - What did you learn?
  - ${data.learn}
  
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  What are the steps required to install your project? Provide a step-by-step description of how to 
  get the development environment running.
  - ${data.installInstructions}
  
  ## Usage
  
  Provide instructions and examples for use. Include screenshots as needed.
  
  To add a screenshot, create an assets/images folder in your repository and upload your screenshot
   to it. Then, using the relative filepath, add it to your README using the following syntax:
  
      md
      ![alt text](assets/images/screenshot.png)
      
  
  ## License
  

   - This program is licensed under ${data.license}
   - ${renderLicenseLink(data.license)}
    
  
  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute it, you can 
  include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/)
  is an industry standard, but you can always write your own if you'd prefer.
  - ${data.contribute}
  
  ## Tests
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.
  - ${data.tests}

  ## Questions

  Contact Information
  -Github - ${data.github}
  -Email - ${data.email}
  Please Email me with any questions or comments you have!
`;
};

