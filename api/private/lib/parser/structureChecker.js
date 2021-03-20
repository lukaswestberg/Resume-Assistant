function evaluateStructure(resumeObj, output) {
    if (resumeObj.getName()) {
        evaluateStructure.name = resumeObj.getName();
    } else {
        evaluateStructure.name = "No name found.";
    }
}

module.exports = evaluateStructure;