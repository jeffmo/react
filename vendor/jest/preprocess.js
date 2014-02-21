"use strict";

var transform = require('jstransform').transform;
var visitors = require('../fbtransform/visitors');

exports.process = function(sourceText, filePath) {
  try {
    var result = transform(visitors.getAllVisitors(), sourceText).code;
  } catch (e) {
    e.message = filePath + ': ' + e.message;
    throw e;
  }
  return result;
};
