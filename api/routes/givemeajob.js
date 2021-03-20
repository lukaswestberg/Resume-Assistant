var express = require('express');
var router = express.Router();
var pdfparse = require('../private/lib/pdfparse/pdfparser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Give Me a Job' });
});

// https://www.givemeajob.com/givemeajob/

router.post('/', function(req, res, next) {
    // Create response
    let response = {};
    
    // validate file
    let file = req.files[0];
    if(file.mimetype != 'application/pdf'){
        response.message = "Invalid file format. Please try uploading a PDF or word document."
        response.valid = false;
    }
    else{
        response.message = "Please wait while your file is processed."
        response.valid = true;
        // TODO - Delete invalid files
    }

    // depending on the type of file, parse it accordingly



    // End Request
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
});

module.exports = router;