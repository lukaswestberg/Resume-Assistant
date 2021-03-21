// Require all libraries
var appRoot = require('app-root-path');
var fs = require('fs');
const path = require('path');
const config = require(path.join(appRoot.path,'private/config/config'));

// Helper functions
const resumeParser = require(config.libraryPaths.resumeParser);
const structureEval = require(config.libraryPaths.structureChecker);
const contentEval = require(config.libraryPaths.contentChecker);

async function main(uploadedFilePath, documentExtension){

    // Rename the uploaded file with the proper extension
    uploadedFilePath = await renameFile(uploadedFilePath,documentExtension);

    // Store json resume
    let resume = await getResumeObj(uploadedFilePath);

    let evaluation = {};

    // Structure eval
    structureEval(resume, evaluation);

    // Content eval
    contentEval(resume, evaluation);

    return evaluation;
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

// Rename the uploaded file to the proper file format
async function renameFile(uploadedFilePath, documentExtension){
    return new Promise(function(resolve, reject){
        fs.rename(uploadedFilePath, uploadedFilePath + '.' + documentExtension, function(err) {
            if (err){
                console.log(err);
                resolve(false);
            }
            else{
                resolve(uploadedFilePath + '.' + documentExtension);
            }
        });
    })
}

 let testFilePath = path.join(appRoot.path,'private/uploads/afc666dd097b19dce4f23e7a90f58653');
 main(testFilePath, "docx");

module.exports = main;