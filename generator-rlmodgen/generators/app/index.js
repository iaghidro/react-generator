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
        choices: ['RPC', 'Node_Controller', "JS_Class", "Angular_Controller", "Angular_Service"],
        default : 'Angular_Controller'
      }, function (answers) {
        this.type = answers.type;
        done();
      }.bind(this));
    },
    description: function () {
      var done = this.async();
      this.prompt({
        type    : 'input',
        name    : 'description',
        message : 'Please provide a description for the module',
        default : ''
      }, function (answers) {
        this.description = answers.description;
        done();
      }.bind(this));
    }
  },
  writing: function() {
      
    // build Angular_Controller file
    if (this.type === 'Angular_Controller') {
      this.fs.copyTpl(
        this.templatePath('src/js/controllers/index.tpl.js'),
        this.destinationPath(`${this.fileNameLowerCase}-controller.js`), {
          fileName: this.fileName
        }
      );
    }
    
    // build Angular_Service file
    if (this.type === 'Angular_Service') {
      this.fs.copyTpl(
        this.templatePath('src/js/services/index.tpl.js'),
        this.destinationPath(`${this.fileNameLowerCase}-service.js`), {
          fileName: this.fileName
        }
      );
    }
    
    // build a node controller
    if (this.type === 'Node_Controller') {
      this.fs.copyTpl(
        this.templatePath('src/js/node/controllers/index.tpl.js'),
        this.destinationPath(`${this.fileNameLowerCase}.js`), {
          fileName: this.fileName
        }
      );
    }
   
    //copy tests into place
    this.fs.copyTpl(
      this.templatePath('tests'),
      this.destinationPath('tests'), {
        fileName: this.fileName
  }
    );
  },
  end: function(){
    helper.printFarewell(this);
  }
});
