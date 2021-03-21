// Express requires
var express = require('express');
var router = express.Router();

// Required libraries and config
var appRoot = require('app-root-path');
const path = require('path');
const config = require(path.join(appRoot.path,'private/config/config'));

// Required helper functions from config
const resumeChecker = require(config.libraryPaths.resumeChecker);


router.post('/', function(req, res, next) {
    // Create response
    let response = {};
    
    // validate file
    let file = req.files[0];

    // Check if file is pdf type
    if(file.mimetype == 'application/pdf'){
        response.message = "Please wait while your file is processed.";
        response.doctype = "pdf";
        response.valid = true;
    }
    // Check if file is word document type
    else if(file.mimetype == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'){
        response.message = "Please wait while your file is processed."
        response.doctype = "docx";
        response.valid = true;
    }
    // If no valid type is supplied return invalid type
    else{
        response.message = "Invalid file format. Please try uploading a PDF or word document."
        response.valid = false;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    }

    // Create the filepath string to pass to helper functions
    let uploadedFilePath = path.join(config.filePaths.uploadPath,req.files[0].filename);

    // Run the resume checker
    resumeChecker(uploadedFilePath,response.doctype).then(evaluation => {
        response.evaluation = evaluation;

        // End Request
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    })
});

module.exports = router;