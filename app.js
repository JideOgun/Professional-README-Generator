
const inquirer = require('inquirer');

const promptUser = () => {
    console.log(`
    ====================================================================
    Welcome to the README generator app
    ====================================================================
    `);
return inquirer.prompt([{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
},
{
    type: 'input',
    name: 'githubUsername',
    message: 'What is your github username?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
},
{
    type: 'input',
    name: 'description',
    message: 'Provide some description about the project'
},

]);
};


const promptContent = () => {
return inquirer.prompt([{
    type: 'confirm',
    name: 'Installation',
    message: 'Would you like to add Installation Instructions about this repo?'
},
{
    type: 'input',
    name: 'Installation Instructions',
    message: 'Provide Installation Instructions about this repo'
},
{
    type: 'confirm',
    name: 'usageinfo',
    message: 'Would you like to add usage information?'
},
{
    type: 'input',
    name: 'Usage',
    message: 'Provide usage information about the project'
},
{
    type: 'confirm',
    name: 'contributionnotes',
    message: 'Would you like to add notes on the contributions to this repo?'
},
{
    type: 'input',
    name: 'contribution',
    message: 'Provide contribution guidelines about the project'
},
{
    type: 'confirm',
    name: 'testInstr',
    message: 'Would you like to add any instructions for running tests?'
},
{
    type: 'input',
    name: 'test instructions',
    message: 'Provide some test instructions about the project'
},
{
    type: 'rawlist',
    name: 'Licenses',
    message: 'choose a license',
    choices: ['MIT', 'The Unlicense', 'Mozilla Public License', 'Apache License', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3']
}
]);
};

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
    message: 'Provide some credits for the project'
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


promptUser().then(promptContent)
    .then(addCredits)
    .then(creditData => {
        console.log(creditData);
    });





// const fs = require("fs");
// const generatePage = require('./src/page-template');
// const profileDataArgs = process.argv.slice(2, process.argv.length);


// const [projectTitle, description] = profileDataArgs;

// fs.writeFile('README.md', generatePage(projectTitle, description), err => {
//     if(err) throw err;
//     console.log('Done, checkout the readme file');
// });


