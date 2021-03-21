const path = require("path");
const textract = require("textract");
const mime = require("mime-types");
const promisify = require("../");
const docProp = require("office-document-properties");
const pdfPages = require("pdf-page-counter");
const fs = require("fs");

class Extract {
  constructor(file) {
    this.path = file;
    this.mime = mime.lookup(file);
    this.ext = mime.extension(this.mime);
    this.raw = "";
    this.name = path.basename(file);
    this.pages = 0;
  }

  extractTextFile = async () => {
    const data = await promisify(textract.fromFileWithPath, this.path, {
      preserveLineBreaks: true,
    });

    if (this.mime == "application/pdf") {
      this.pages = await this.getPagesPDF();
    } else if (this.mime == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      this.pages = await this.getPagesWord();
    } else {
      console.log("THIS SHOULD NOT HAVE HAPPPENED INVALID FILE TO EXTRACT");
    }

    const cleaned = this.cleanTextByRows(data);
    this.raw = cleaned;
    return this;
  };

  // what the fuckkk
  getPagesWord = async () => {
      var that = this;
      return new Promise(function (resolve, reject) {
        docProp.fromFilePath(that.path, function (err, data) {
          if (err) throw err;
          resolve(data.pages);
        });
      });
  };

  getPagesPDF = async () => {
    var pageBuffer = fs.readFileSync(this.path);
    return new Promise(function (resolve, reject) {
      pdfPages(pageBuffer).then(function(data) {
        resolve(data.numpages)
      });
    });
  };

  cleanTextByRows = (data) => {
    const result =
      data
        .split("\n")
        .map((row) => row.replace(/\r?\n|\r|\t|\n/g, "").trim())
        .join("\n") + "\n{end}";

    return result;
  };
}

module.exports = Extract;
