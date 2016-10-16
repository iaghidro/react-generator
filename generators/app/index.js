var generators = require('yeoman-generator');
var R = require('ramda');
var helper = require('../../helpers').common;
var asciiArt = require('../../helpers/asciiArt');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
    this.argument('path', { type: String, required: true });
    this.log(asciiArt.happyMeme + asciiArt.introText);
    this.log(`Creating a new file in: ${this.path}`);
    this.log(`Make sure you are in a directory in which you'd like your file(s) generated. Pretty simple huh?`);
  },
  prompting: {
    name: function () {
      var done = this.async();
      this.prompt({
        type    : 'input',
        name    : 'name',
        message : 'Your file name',
        default : 'file_name'
      }, function (answers) {
        this.fileName = answers.name;
        this.fileNameLowerCase = answers.name.toLowerCase();
        done();
      }.bind(this));
    }, 
    type: function () {
      var done = this.async();
      this.prompt({
        type    : 'list',
        name    : 'type',
        message : 'What type of file are you building',
        choices: ['Node_ES5', 'Angular_ES5'],
        default : 'Node_ES5'
      }, function (answers) {
        this.type = answers.type;
        done();
      }.bind(this));
    },
    nodeES5Subtype: function () {
      var done = this.async();
      this.prompt({
        type    : 'list',
        name    : 'nodeES5Subtype',
        message : 'What type of file are you building',
        choices: ['RPC', 'API_Controller', 'Core_SDK_Test', 'JS_Class'],
        when    : this.type == 'Node_ES5',
        default : 'RPC'
      }, function (answers) {
        this.nodeES5Subtype = answers.nodeES5Subtype;
        done();
      }.bind(this));
    },
    angularES5SubType: function () {
      var done = this.async();
      this.prompt({
        type    : 'list',
        name    : 'angularES5SubType',
        message : 'What type of file are you building',
        choices: ["Controller", "Service"],
        when    : this.type == 'Angular_ES5',
        default : 'Angular_Controller'
      }, function (answers) {
        this.angularES5SubType = answers.angularES5SubType;
        done();
      }.bind(this));
    },
//    description: function () {
//      var done = this.async();
//      this.prompt({
//        type    : 'input',
//        name    : 'description',
//        message : 'Please provide a description for the file',
//        default : '',
//      }, function (answers) {
//        this.description = answers.description;
//        done();
//      }.bind(this));
//    }
  },
  writing: function() {
      
    if (this.type === 'Angular_ES5') {
        
        if (this.angularES5SubType === 'Controller') {
          this.fs.copyTpl(
            this.templatePath('src/js/angular/es5/controllers/index.tpl.js'),
            this.destinationPath(`${this.fileName}-controller.js`), {
              fileName: this.fileName,
//              description: this.description
            }
          );
        }

        if (this.angularES5SubType === 'Service') {
          this.fs.copyTpl(
            this.templatePath('src/js/angular/es5/services/index.tpl.js'),
            this.destinationPath(`${this.fileName}-service.js`), {
              fileName: this.fileName,
//              description: this.description
            }
          );
        }
    }
    
    if (this.type === 'Node_ES5') {
        
        if (this.nodeES5Subtype === 'API_Controller') {
          this.fs.copyTpl(
            this.templatePath('src/js/node/es5/controllers/index.tpl.js'),
            this.destinationPath(`${this.fileName}.js`), {
              fileName: this.fileName,
//              description: this.description
            }
          );
        }

        if (this.nodeES5Subtype === 'Core_SDK_Test') {
          this.fs.copyTpl(
            this.templatePath('src/js/node/es5/testSuite/index.tpl.js'),
            this.destinationPath(`${this.fileName}Test.js`), {
              fileName: this.fileName
            }
          );
        }
    }
    
  },
  end: function(){
    helper.printFarewell(this);
  }
});
