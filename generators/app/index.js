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
      this.component = {};
      this.prompt({
        type    : 'input',
        name    : 'name',
        message : 'Your component name',
        default : 'MyComponent'
      }, function (answers) {

        this.component.name = answers.name;
        done();
      }.bind(this));
    }
  },
  writing: function() {
      console.log('writing component');
      console.dir(this.component)

      try {
          this.fs.copyTpl(
              this.templatePath('src/js/react/component/MyComponent.tpl.js'),
              this.destinationPath(`${this.component.name}.js`, {
                  foo: "bar"
              })
          );
      } catch (e) {
        console.dir(e)
      }

  },
  end: function(){
    helper.printFarewell(this);
  }
});
