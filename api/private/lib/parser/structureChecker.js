function evaluateStructure(resumeObj, output) {
    if (resumeObj.getName()) {
        evaluateStructure.name = resumeObj.getName();
    } else {
        evaluateStructure.name = "";
    }

    if (resumeObj.getEmail()) {
        evaluateStructure.email = resumeObj.getEmail();
    } else {
        evaluateStructure.email = "No name found.";
    }


}

module.exports = evaluateStructure;