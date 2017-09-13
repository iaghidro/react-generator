const helpers = require('../../helpers');

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
      message: 'What is the name of your component?',
      default: 'MyComponent'
    }];

    return this.prompt(prompts)
      .then((prompts) => {
        this.component.name = prompts.name;
      });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('component/MyComponent.js'),
      this.destinationPath(`${this.component.name}.js`),
      this.component
    );
  }

  end() {
    this.log(yosay(
      'Goodbye!'
    ));
  }
};
