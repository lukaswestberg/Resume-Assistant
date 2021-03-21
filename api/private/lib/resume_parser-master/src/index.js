const Extract = require("./utils/libs/processing");
const {
  parseDictionaryRegular,
  parseDictionaryProfiles,
  parseDictionaryTitles,
  parseDictionaryInline,
} = require("./utils/libs/parser");
const Resume = require("./utils/Resume");

const parser = async (file) => {
  const processing = new Extract(file);
  const preppedFile = await processing.extractTextFile();
  return onFileReady(preppedFile);
};

const onFileReady = (preppedFile) => parseFile(preppedFile);

const parseFile = (preppedFile) => {
  const rawFileData = preppedFile.raw;
  const resume = new Resume();
  let rows = rawFileData.split("\n");

  parseDictionaryRegular(rawFileData, resume);
  rows.forEach((row, i) => {
    row = parseDictionaryProfiles(row, resume);
    parseDictionaryTitles(resume, rows, i);
    parseDictionaryInline(resume, row);
  });

  if(preppedFile.pages != undefined){
    resume.pages = preppedFile.pages;
  }
  else{
    resume.pages = 0;
  }
  

  return resume;
};

module.exports = async (inputFile) => {
  return await parser(inputFile);
};
