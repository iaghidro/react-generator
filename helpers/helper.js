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

var lowerCamelCase = function lowerCamelCase(kebabCaseString) {
    return kebabCaseString
      .toLowerCase()
      .split('-')
      .map(function(p, i) {
          if (i === 0) {
              return p;
          } else {
              return p.substring(0, 1).toUpperCase() + p.slice(1)
          }
      }).join('');
};

var toKebabCase = function toKebabCase(lowerCamelCaseString) {
    var parts = lowerCamelCaseString.split('');
    var insertDashesIndex = [];

    for (var i = 0; i < parts.length; i++) {
        if (parts[i] === parts[i].toUpperCase()){
            insertDashesIndex.push(i)
        }
    }

    insertDashesIndex.forEach(function(i) {
        parts.splice(i, 0, '-');
    });

    return parts.join('').toLowerCase();
};

var getCwd = function getCwd(args){
    var fullCwd = args[0];

    if (fullCwd.indexOf('source/') > -1) {
        return fullCwd.split('source/')[1];
    }

    return '';
};

var printFarewell = function printFarewell(generator) {
  generator.log(asciiArt.farewell + asciiArt.pusheenCat);
};

module.exports = {
  copyPackageJson: copyPackageJson,
  createModuleName: createModuleName,
  getCwd: getCwd,
  lowerCamelCase: lowerCamelCase,
  moduleNameMatchesDirectory: moduleNameMatchesDirectory,
  printFarewell: printFarewell,
  renameDirectoryToMatchModuleName: renameDirectoryToMatchModuleName,
  toKebabCase: toKebabCase
};
