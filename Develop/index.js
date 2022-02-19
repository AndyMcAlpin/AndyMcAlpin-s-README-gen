// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require ('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptProjectTitle = () => {
    return inquirer.prompt([
        // project title
        {
            type: 'input',
            name: 'project-title',
            message: 'What is your projects title? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the project title');
                    return false;
                }
            }
        }
    ])
};

const promptDescription = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmDescription',
            message: 'Would you like to enter a description of your project?',
            default: true  
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation for the project?',
            when: ({ confirmDescription}) => {
                if (confirmDescription) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'why',
            message: 'Why did you build this project?',
            when: ({ confirmDescription}) => {
                if (confirmDescription) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem did you solve?',
            when: ({ confirmDescription}) => {
                if (confirmDescription) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'learn',
            message: 'What did you learn?',
            when: ({ confirmDescription}) => {
                if (confirmDescription) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
};

const promptInstallation = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'installInstructions',
            message: 'How do you install this project?'
        }
    ])
};

const promptUsage = usageData => {
    if (!usageData.step) {
        usageData.step = [];
    }
    console.log(`
    ================
    Add a Usage Step
    ================
    `);
        return inquirer.prompt([
            {
                type: 'input',
                name: 'usageStep',
                message: 'Add the next usage step information',
            },
            {
                type: 'confirm',
                name: 'usageStepScreenshotConfirm',
                message: 'Does this step have a screenshot to include?',
                default: false
            },
            {
                // pull screenshot function
                when: ({ usageStepScreenshotConfirm }) => {
                    if (usageStepScreenshotConfirm) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAnotherUsageStep',
                message: 'Is there another step to use your project?',
                default: false
            }
        ])
        .then(usageData => {
            usageData.step.push(usageData);
            if (usageData.confirmAnotherUsageStep) {
                return promptUsage(usageData);
            } else {
                return usageData;
            }
        });
};

const promptCredits = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmCredits',
            message: 'Is there anyone you need to give credit to for this project?',
            default: false
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please list anyone who helped with this project?'
        }
    ])
};

const promptLicense = () => {
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license would you like to use for your project?',
            choices: ['MIT','']
        }
    ])
}
// description
//  sub headings of motivation, why, what problem it solves, and what you learned
// table of contents
// installation
// Usage w/ screenshots
// credits
// license w/ appropriate badge
// (optional) Badges
// (optional) Features
// (optional) How to contribute
// (optional) Tests 
// (optional) questions w/ link to github, email
        
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
promptProjectTitle()
    .then(promptDescription)
    .then(promptInstallation)

