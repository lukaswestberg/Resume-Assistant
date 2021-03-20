// Require all libraries
var appRoot = require('app-root-path');
const path = require('path');
const config = require(path.join(appRoot.path,'private/config/config'));

// Helper functions
const resumeParser = require(config.libraryPaths.resumeParser);
const structureEval = "";
const contentEval = "";
const correctEval = "";

async function main(uploadedFilePath){
    // Store json resume
    let resume = await getResumeObj(uploadedFilePath);

    console.log(resume.getName());
    
    // Structure eval
    
    // Content eval

    // Correctness eval
}

// Convert the uploaded file to a json containing the key points of the resume
async function getResumeObj(documentFilePath){
    return new Promise(function(resolve,reject){
        resumeParser(documentFilePath).then((data) => {
            resolve(data);
        })
        .catch((error) => {
            console.log(error);
            reject(error);
        });
    });
    
}

let testFilePath = path.join(appRoot.path,'private/uploads/afc666dd097b19dce4f23e7a90f58653.docx');
main(testFilePath);

module.exports = main;