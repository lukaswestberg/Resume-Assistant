function evaluateStructure(resumeObj, output) {
    // Build the output
    output.pages = resumeObj.pages;
    output.email = resumeObj.getEmail();
    output.name = resumeObj.getName();   
    output.profiles = resumeObj.getProfile();
}

module.exports = evaluateStructure;