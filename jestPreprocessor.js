var ReactTools = require('./main');

exports.process = function(sourceText, sourcePath) {
  return ReactTools.transform(sourceText);
};
