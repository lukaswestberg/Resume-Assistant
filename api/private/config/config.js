var appRoot = require('app-root-path');
var path = require('path');

const config = {
    filePaths: {
        uploadPath: path.join(appRoot.path,'private/uploads/'),
        parsedFilePath: path.join(appRoot.path,'private/parsed/'),
    },
    libraryPaths: {
        resumeParser: path.join(appRoot.path,'private/lib/resume_parser-master/src/'),
        contentChecker: path.join(appRoot.path,'private/lib/parser/contentChecker'),
        structureChecker: path.join(appRoot.path,'private/lib/parser/structureChecker'),
        resumeChecker: path.join(appRoot.path,'private/lib/parser')
    }
}

module.exports = config;