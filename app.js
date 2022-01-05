
const inquirer = require('inquirer');
const fs = require("fs");
const generatePage = require('./src/page-template');

const promptUser = () => {
    console.log(`
    ====================================================================
    Welcome to the README generator app
    ====================================================================
    `);
return inquirer.prompt([{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: titleInput => {
        if(titleInput) {
            return true;
        } else {
            console.log('Please enter a title!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'githubUsername',
    message: 'What is your github username?',
    validate: usernameInput => {
        if(usernameInput) {
            return true;
        } else {
            console.log('Please enter your Github username!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: emailInput => {
        if(emailInput) {
            return true;
        } else {
            console.log('Please enter your email address!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Provide some description about the project'
},
{
    type: 'confirm',
    name: 'Installation',
    message: 'Would you like to add Installation Instructions about this repo?'
    },
    {
    type: 'input',
    name: 'InstallationInstructions',
    message: 'Provide Installation Instructions about this repo',
    when: ({ Installation }) => { if(Installation) {
        return true;
    } else {
        return false;
         }
     }
    },
    {
    type: 'confirm',
    name: 'usageinfo',
    message: 'Would you like to add usage information?'
    },
    {
    type: 'input',
    name: 'Usage',
    message: 'Provide usage information about the project',
    when: ({ usageinfo }) => { if(usageinfo) {
        return true;
    } else {
        return false;
         }
     }
    },
    {
    type: 'confirm',
    name: 'contributionNotes',
    message: 'Would you like to add notes on the contributions to this repo?'
    },
    {
    type: 'input',
    name: 'contribution',
    message: 'Provide contribution guidelines about the project',
    when: ({ contributionNotes }) => { if(contributionNotes) {
        return true;
    } else {
        return false;
         }
     }
    },
    {
    type: 'confirm',
    name: 'testInstructions',
    message: 'Would you like to add any instructions for running tests?'
    },
    {
    type: 'input',
    name: 'testGuide',
    message: 'Provide some test instructions about the project',
    when: ({ testInstructions }) => { if(testInstructions) {
        return true;
    } else {
        return false;
         }
     }
    },
    {
    type: 'rawlist',
    name: 'Licenses',
    message: 'choose a license',
    choices: ['MIT', 'The Unlicense', 'Mozilla Public License 2.0', 'Apache License', 'EPL-2.0', 'GPL-2.0', 'EPL-2.0']
    }
]);
};


// const promptContent = () => {
// return inquirer.prompt([
    
// ]);
// };

const addCredits = creditData => {
    console.log(`
    =================
    Add credits
    =================
    `);
    // If no credit data then make new credit data array
    if (!creditData.credits) {
        creditData.credits = [];
    }

return inquirer.prompt([
{
    type: 'confirm',
    name: 'creditConfirm',
    message: 'Would you like to include some credits to the repo?'
},
{
    type: 'input',
    name: 'credits',
    message: 'Provide some credits for the project',
    when: ({ creditConfirm }) => { if(creditConfirm) {
        return true;
    } else {
        return false;
         }
     }
},
{
    type: 'confirm',
    name: 'confirmAddCredit',
    message: 'Would you like to enter another credit?',
    default: false
}
])
.then(AddCreditData => {
    creditData.credits.push(AddCreditData);
    if (AddCreditData.confirmAddCredit) {
        return addCredits(creditData);
    } else {
        return creditData;
    }
});

};


promptUser()
.then(addCredits)
    .then(creditData => {
        const readmePage = generatePage(creditData);
        fs.writeFile('README.md', readmePage, err => {
            if(err) throw new Error(err);
            console.log('ReadMe created! check it out!');
        });
    });






// const profileDataArgs = process.argv.slice(2, process.argv.length);


// const [projectTitle, description] = profileDataArgs;

// fs.writeFile('README.md', generatePage(projectTitle, description), err => {
//     if(err) throw err;
//     console.log('Done, checkout the readme file');
// });


