'use strict';
var R = require('ramda');
var asciiArt = require('./asciiArt');

var createModuleName = function createModuleName(name, path) {
  var finalName = '@rocketloans';
  var fixedPath = path.toLowerCase().replace(/\//g, '.');
  var startingIndex = fixedPath.indexOf('ui-sdk');
  var pathSubString = fixedPath.substring(startingIndex);
  var parts = pathSubString.split('.');
  var finalPath = parts.slice(0, parts.length - 1).join('.');
  finalName = `${finalName}/${finalPath}.${name}`;
  return finalName;
};

var moduleNameMatchesDirectory = function moduleNameMatchesDirectory(name, path) {
  var directory = R.last(path.split('/'));

  return directory.toLowerCase() === name.toLowerCase();
};

var renameDirectoryToMatchModuleName = function renameDirectoryToMatchModuleName(name, path) {
  var parts = path.split('/');
  return parts.slice(0, parts.length - 1).join('/') + '/' + name.toLowerCase();
};

var copyPackageJson = function copyPackageJson(generator) {
  generator.fs.copyTpl(
    generator.templatePath(`package.${generator.type}.json`),
    generator.destinationPath('package.json'), {
      moduleName: createModuleName(generator.moduleNameLowerCase, generator.path),
      description: generator.description
    }
  );
};


var printFarewell = function printFarewell(generator) {
  generator.log(asciiArt.farewell + asciiArt.pusheenCat);
};

module.exports = {
  createModuleName: createModuleName,
  moduleNameMatchesDirectory: moduleNameMatchesDirectory,
  renameDirectoryToMatchModuleName: renameDirectoryToMatchModuleName,
  copyPackageJson: copyPackageJson,
  printFarewell: printFarewell
};
