function evaluateStructure(resumeObj, output) {
    
    if (resumeObj.getName()) {
        output.name = resumeObj.getName();
    } else {
        output.name = "";
    }

    if (resumeObj.getEmail()) {
        output.email = resumeObj.getEmail();
    } else {
        output.email = "No name found.";
    }


}

module.exports = evaluateStructure;