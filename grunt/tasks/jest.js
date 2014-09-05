"use strict";

var child_process = require('child_process');
var os = require('os');
var path = require('path');

var REPO_ROOT = path.resolve(__dirname, '..', '..');
var CONFIG_FILE = path.resolve(REPO_ROOT, 'vendor', 'jest', 'config.json');

module.exports = function(grunt) {
  var onComplete = this.async();

  var command = [
    process.execPath,
    './node_modules/.bin/jest'
  ].concat(args);

  var child = child_process.exec(command.join(' '));
  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);
  child.on('exit', function(code) {
    onComplete(code === 0);
  });
};
