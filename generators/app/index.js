'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.config.set('component', {});
  }

  initializing() {
    this.composeWith(require.resolve('./full-redux-component-inject-to-parent'));
    this.composeWith(require.resolve('./simple-component'));
  }

  prompting() {
    this.log(yosay(
      'Welcome to the splendid ' + chalk.red('generator-rlreact') + ' generator!'
    ));
  }

  end() {
    this.log(yosay(
      `Next steps:
        1) add an api to the model instance located in models/
      `
    ));
  }
};
