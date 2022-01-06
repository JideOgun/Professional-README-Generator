const fs = require('fs');
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            // if there's an error reject promise and send the error to the promises catch method
            if(err) {
                reject(err);
                // return out of the function herer to make sure promise doesnt exedcute resolve function as well
                return;
            }
    // if everything went well resolver the promoise and send the successful data to the .then method
    resolve({
        ok: true,
        message: 'File Created! Check it out the dist folder!'
    });
        });
    });
};
module.exports = { writeFile};