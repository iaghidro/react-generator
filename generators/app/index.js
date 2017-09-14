const helpers = require('../../helpers');
const commonHelper = helpers.common;

'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.component = {}
  }
  prompting() {
    this.log(yosay(
      'Welcome to the splendid ' + chalk.red('generator-rlreact') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'name',
      message: 'What is the name of your component (lowerCamelCase)?',
      default: 'myComponent'
    }];

    return this.prompt(prompts)
      .then((answers) => {
        Object.assign(this.component, {
          name: answers.name,
          lowerCamelCase: answers.name,          
          titleCase: commonHelper.toPlainText(answers.name),
          kebabCase: commonHelper.toKebabCase(answers.name),          
          upperCamelCase: commonHelper.toUpperCamelCase(answers.name)          
        });
      });
  }

  writing() {
    console.dir(this.component);

    //component
    this.fs.copyTpl(
      this.templatePath('component/MyComponent.js'),
      this.destinationPath(`${this.component.name}.js`),
      this.component
    );

    //component unit test
    this.fs.copyTpl(
      this.templatePath('component/MyComponent.test.js'),
      this.destinationPath(`${this.component.name}.test.js`),
      this.component
    );
  }

  end() {
    this.log(yosay(
      'Goodbye!'
    ));
  }
};
