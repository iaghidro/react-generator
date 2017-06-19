var generators = require('yeoman-generator');
var R = require('ramda');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');

var helper = require('../../helpers').common;
var schemaHelper = require('../../helpers').schemaHelper;
var asciiArt = require('../../helpers/asciiArt');

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
              type: 'input',
              name: 'name',
              message: 'Your file name (kebab-case)',
              default: 'file-name'
          }, function (answers) {
              this.fileName = answers.name;
              this.fileNameLowerCase = answers.name.toLowerCase();
              this.fileNameLowerCamelCase = helper.lowerCamelCase(answers.name);

              done();
          }.bind(this));
      },
      type: function () {
          var done = this.async();
          this.prompt({
              type: 'list',
              name: 'type',
              message: 'What type of file are you building',
              choices: ['Node_ES5', 'Angular_ES5', 'Component'],
              default: 'Node_ES5'
          }, function (answers) {
              this.type = answers.type;
              done();
          }.bind(this));
      },
      nodeES5Subtype: function () {
          var done = this.async();
          this.prompt({
              type: 'list',
              name: 'nodeES5Subtype',
              message: 'What type of file are you building',
              choices: ['RPC', 'API_Controller', 'Core_SDK_Test', 'JS_Class'],
              when: this.type == 'Node_ES5',
              default: 'RPC'
          }, function (answers) {
              this.nodeES5Subtype = answers.nodeES5Subtype;
              done();
          }.bind(this));
      },
      angularES5SubType: function () {
          var done = this.async();
          this.prompt({
              type: 'list',
              name: 'angularES5SubType',
              message: 'What type of file are you building',
              choices: ["Controller", "Service"],
              when: this.type == 'Angular_ES5',
              default: 'Angular_Controller'
          }, function (answers) {
              this.angularES5SubType = answers.angularES5SubType;
              done();
          }.bind(this));
      },
      schema: function () {
          var done = this.async();
          this.prompt({
              type: 'input',
              name: 'schema',
              message: 'Paste your JSON schema (array with lowerCamelCase strings)',
              when: this.type === 'Component'
          }, function (answers) {
              this.schemaData = schemaHelper.parse(answers.schema);
              done();
          }.bind(this));
      },
      className: function () {
          var done = this.async();
          this.prompt({
              type: 'input',
              name: 'className',
              message: 'What is your Block (BEM) name?',
              when: this.type === 'Component',
              default: this.fileName
          }, function (answers) {
              this.className = answers.className;
              done();
          }.bind(this));
      },
  },
  writing: function() {

    if (this.type === 'Angular_ES5') {

        if (this.angularES5SubType === 'Controller') {
          this.fs.copyTpl(
            this.templatePath('src/js/angular/es5/controllers/index.tpl.js'),
            this.destinationPath(`${this.fileName}-controller.js`), {
              fileName: this.fileName,
            }
          );
        }

        if (this.angularES5SubType === 'Service') {
          this.fs.copyTpl(
            this.templatePath('src/js/angular/es5/services/index.tpl.js'),
            this.destinationPath(`${this.fileName}-service.js`), {
              fileName: this.fileName,
            }
          );
        }
    }

    if (this.type === 'Node_ES5') {

        if (this.nodeES5Subtype === 'RPC') {
          this.fs.copyTpl(
            this.templatePath('src/js/node/es5/rpc/index.tpl.js'),
            this.destinationPath(`index.js`), {
              fileName: this.fileName
            }
          );
        }

        if (this.nodeES5Subtype === 'API_Controller') {
          this.fs.copyTpl(
            this.templatePath('src/js/node/es5/controllers/index.tpl.js'),
            this.destinationPath(`${this.fileName}.js`), {
              fileName: this.fileName,
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

        if (this.nodeES5Subtype === 'JS_Class') {
          this.fs.copyTpl(
            this.templatePath('src/js/node/es5/js-class/index.tpl.js'),
            this.destinationPath(`${this.fileName}.js`), {
              fileName: this.fileName
            }
          );
        }
    }

    if (this.type === 'Component') {
        console.log('writing component');

        this.fs.copyTpl(
          this.templatePath('src/js/angular/es6/component/template.html'),
          this.destinationPath(`${this.fileName}-component-template.html`), {
              className: this.className,
              schema: this.schemaData.schema,
              fileNameLowerCamelCase: this.fileNameLowerCamelCase
          }
        );

        this.fs.copyTpl(
          this.templatePath('src/js/angular/es6/component/styles.scss'),
          this.destinationPath(`_${this.fileName}-component.scss`), {
              className: this.className,
              schema: this.schemaData.schema
          }
        );

       this.fs.copyTpl(
          this.templatePath('src/js/angular/es6/component/component.es6'),
          this.destinationPath(`${this.fileName}-component.es6`), {
              componentName: helper.lowerCamelCase(this.fileName),
              fileName: this.fileName,
              cwd: helper.getCwd(this.arguments)
          }
        );
    }
  },
  end: function(){
    helper.printFarewell(this);
  }
});
