

const generatebadge = (Licenses) => {
    if(Licenses === 'MIT') {
return `
[![License](https://img.shields.io/badge/License-MIT-orange.svg)](https://opensource.org/licenses/MIT)`;}

else if (Licenses === 'The Unlicense') {
return `
[![License](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://opensource.org/licenses/unlicense)
`;}

else if (Licenses === 'Mozilla Public License 2.0') {
return `
[![License](https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-blueviolet.svg)](https://opensource.org/licenses/MPL-2.0)
`;}

else if (Licenses === 'Apache License') {
return `
[![License](https://img.shields.io/badge/License-Apache--2.0-red.svg)](https://opensource.org/licenses/unlicense)
`;
}

else if (Licenses === 'EPL-2.0') {
return `
[![License](https://img.shields.io/badge/License-EPL--2.0-yellowgreen.svg)](https://opensource.org/licenses/EPL-2.0)
`;}

else if (Licenses === 'GPL-2.0') {
return `
[![License](https://img.shields.io/badge/License-GPL--2.0-critical.svg)](https://opensource.org/licenses/GPL-2.0)
`;}

else if (Licenses === 'EPL-2.0') {
return `
[![License](https://img.shields.io/badge/License-EPL--2.0-important.svg)](https://opensource.org/licenses/EPL-2.0)`;
}
};

const genInstallation = (Installation) => {
if (!Installation) {
return '';
}
{return`
        ${Installation}
`;
}
};

const genUsage = (Usage) => {
if (!Usage) {
return '';
}
{return`
        ${Usage}
`;
}
};

const genDescription = (description) => {
if (!description) {
return '';
}
{return`
        ${description}
`;
}
};

const genContribution = (contribution) => {
 if (!contribution) {
 return '';
}
{return`
        ${contribution}
`;
}
};
const genTestInstructions = (instructions) => {
if (!instructions) {
return '';
}
{return`
        ${instructions}`;
}
};
const genCredits = (credits) => {
if (!credits) {
return '';}
{return`${credits.map(({credits}) => {
return `
        ${credits}`;
})}`;}
};
const genLicense = (license) => {
if (!license) {
return '';}
{return`
        Licensed under the ${license} License.`;}
        };
    


module.exports = templateData => {
    console.log(templateData);
const {title, githubUsername, email, description, InstallationInstructions, Licenses, Usage, contribution, testGuide, ...credits} = templateData;

return `# Title
${title}
---
 ${generatebadge(Licenses)}
## Table of Contents
---
1. [DESCRIPTION](#description)
2. [LICENSE](#licenses)
3. [INSTALLATION](#installation-instructions)
4. [USAGE](#usage-information)
5. [CONTRIBUTION GUIDELINES](#contribution-guidelines)
6. [TEST INSTRUCTIONS](#test-instructions)
7. [CREDITS](#credits)
8. [QUESTIONS](#questions)
---

 ## DESCRIPTION
 ${genDescription(description)}
 ---

 ## LICENSES
 
 ${genLicense(Licenses)}
 ---

 ## INSTALLATION INSTRUCTIONS
 ${genInstallation(InstallationInstructions)}
 ---

 ## USAGE INFORMATION
 ${genUsage(Usage)}
 ---

## CONTRIBUTION GUIDELINES

${genContribution(contribution)}
---

## TEST INSTRUCTIONS

${genTestInstructions(testGuide)}
---


## CREDITS
${genCredits(credits.credits)}
---


---
## Questions

For any questions 
- Email: [${email}](mailto:${email})
- Gihtub: [${githubUsername}](https://github.com/${githubUsername})
 `;
};

