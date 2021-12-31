

const fs = require("fs");
const generatePage = require('./src/page-template');
const profileDataArgs = process.argv.slice(2, process.argv.length);


const [projectTitle, description] = profileDataArgs;

fs.writeFile('README.md', generatePage(projectTitle, description), err => {
    if(err) throw err;
    console.log('Done, checkout the readme file');
});


