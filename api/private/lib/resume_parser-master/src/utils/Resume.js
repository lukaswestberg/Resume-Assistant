const _ = require("underscore");

class Resume {
  constructor() {
    this.parts = {};
  }

  addKey = (key, value) => {
    value = value || "";
    value = value.trim();
    if (value) {
      if (_.has(this.parts, key)) {
        value = this.parts[key] + value;
      }

      this.parts[key] = value;
    }
  };

  addObject = (key, options) => {
    var self = this;

    if (!_.has(this.parts, key)) {
      this.parts[key] = {};
    }

    _.forEach(options, function(optionVal, optionName) {
      if (optionVal) {
        self.parts[key][optionName] = optionVal;
      }
    });
  };

  jsoned = () => {
    return JSON.stringify(this.parts);
  };

  getName = () => {
    console.log(this.parts);
    return this.parts.name;
  };

  getEmail = () => {
    return this.parts.email;
  };

  getProfile = () => {
    return this.parts.profiles;
  };

  getSkills = () => {
    return this.parts.skills && this.parts.skills.split(" ");
  };

  getEducation = () => {
    return this.parts.education;
  };

  getExperience = () => {
    return this.parts.experience;
  };

  getSummary = () => {
    return this.parts.objective;
  };

  getAwards = () => {
    return this.parts.awards;
  };

  getVoluteering = () => {
    return this.parts.volunteering;
  };
}

module.exports = function() {
  return new Resume();
};
