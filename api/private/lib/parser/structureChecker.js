function evaluateStructure(resumeObj, output) {
    
    // Personal information
    if (resumeObj.getName()) {
        output.name = resumeObj.getName();
    } else {
        output.name = "No name found.";
    }

    if (resumeObj.getEmail()) {
        output.email = resumeObj.getEmail();
    } else {
        output.email = "No email found."
    }

    // Detailed information
    if (resumeObj.getSkills()) {
        output.skills = resumeObj.parts.skills;
    } else {
       output.skills = "No skills found.";
    }

    if(resumeObj.getEducation()){
        output.education = resumeObj.parts.education;
    } else {
        output.education = "No education found."
    }

    if(resumeObj.getExperience()){
        output.experience = resumeObj.parts.experience;
    } else {
        output.experience = "No experience found."
    }

    if(resumeObj.getSummary()){
        output.summary = resumeObj.parts.summary;
    } else {
        output.summary = "No summary found."
    }

    if(resumeObj.getAwards()){
        output.awards = resumeObj.parts.awards;
    } else {
        output.awards = "No awards found."
    }

    if(resumeObj.getVoluteering()){
        output.volunteering = resumeObj.parts.volunteering;
    } else {
        output.volunteering = "No volunteering found."
    }

    output.pages = resumeObj.pages;


}

module.exports = evaluateStructure;