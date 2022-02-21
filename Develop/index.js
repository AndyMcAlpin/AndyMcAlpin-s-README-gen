// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./src/README-template.js')
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
    console.log(`
    ================
    Add a Usage Step
    ================
    `);

    if (!usageData.steps) {
        usageData.steps = [];
    }
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
                type: 'input',
                name: 'screenshotFilePath',
                message: 'What is the file path and name of your screenshot? (Please be exact)',
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
        .then(stepData => {
            usageData.steps.push(stepData);
            if (stepData.confirmAnotherUsageStep) {
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
};

const promptBadges = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmBadges',
            message: 'Would you like to add badges?',
            default: false
        },
        {
            type: 'input',
            name: 'badges',
            message: 'Please enter your badges',
            when: ({ confirmBadges }) => {
                if (confirmBadges) {
                    return true;
                } else {   
                    return false;
                }
            }
        }
    ])
};

const promptFeatures = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmFeatures',
            message: 'Would you like a features section?',
            default: false
        },
        {
            type: 'input',
            name: 'features',
            message: 'Please describe your features',
            when: ({ confirmFeatures }) => {
                if (confirmFeatures) {
                    return true;
                } else {   
                    return false;
                }
            }
        }
    ])
};

const promptContribute = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmContribute',
            message: 'Would you like a how-to contribute section?',
            default: false
        },
        {
            type: 'list',
            name: 'contribute',
            message: 'ADFJKDFKJSDJKFHJKSDFHJFDSJK',
            choices: [],
            when: ({ confirmContribute }) => {
                if (confirmContribute) {
                    return true;
                } else {   
                    return false;
                }
            }
        }
    ])
};

const promptTests = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like a Tests section?',
            default: false
        },
        {
            type: 'list',
            name: 'tests',
            message: 'ADFJKDFKJSDJKFHJKSDFHJFDSJK',
            choices: [],
            when: ({ confirmTests }) => {
                if (confirmTests) {
                    return true;
                } else {   
                    return false;
                }
            }
        }
    ])
};

const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmQuestions',
            message: 'Would you like a questions section?',
            default: true
        },
        {
            // questions question here
            // add email and github
        }
    ])
};
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
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'README created!'
            });
        });
    });
};

// TODO: Create a function to initialize app


// Function call to initialize app
promptProjectTitle()
    .then(promptDescription)
    .then(promptInstallation)
    .then(promptUsage)
    .then(promptCredits)
    .then(promptLicense)
    .then(promptBadges)
    .then(promptFeatures)
    .then(promptContribute)
    .then(promptTests)
    .then(promptQuestions)
    .then(console.log('HOW DO I PULL UP ALL DATA'))