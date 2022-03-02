// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const  generateMarkdown  = require ('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is your projects title? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the project title');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation for the project?'
        },
        {
            type: 'input',
            name: 'why',
            message: 'Why did you build this project?'
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem did you solve?'
        },
        {
            type: 'input',
            name: 'learn',
            message: 'What did you learn?'
        },
        {
            type: 'input',
            name: 'installInstructions',
            message: 'How do you install this project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Add instructions how to use your project.',
        },
        {
            type: 'confirm',
            name: 'usageScreenshotConfirm',
            message: 'Does this step have a screenshot to include?',
            default: false
        },
        {
            type: 'input',
            name: 'screenshot',
            message: 'What is the filename of your screenshot in the images folder? (Please be exact)',
            when: ({ usageScreenshotConfirm }) => {
                if (usageScreenshotConfirm) {
                    return true;
                } else {
                     return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like to use for your project?',
            choices: ['MIT','Apache 2.0', 'ISC', 'GNU GPLv3']
        },
        {
            type: 'list',
            name: 'contribute',
            message: 'How would you like to have people contribute?',
            choices: ['Contributor Covenant', 'Write my own',]
        },
        {
            type: 'input',
            name: 'ownContribute',
            message: 'Please write out your own contribution guidelines',
            when: ({ contribute }) => {
                if (contribute == 'Write my own') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'tests',
            message: 'Please write any tests you have for your program',
            choices: [1,2,3,4]
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github account name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email Address?'
        }
        
       
    ];       
    
//  Create a function to write README file
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


// Function to initialize app
inquirer.prompt(questions).then((answers) => {
    // console.log(answers);
    return generateMarkdown(answers);
})
.then(pageREADME => {
    return writeToFile(pageREADME);
})
.then(writeToFileResponse => {
    console.log(writeToFileResponse.message);
})
.catch(err => {
    console.log(err);
});
