'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const R = require('ramda');

const helpers = require('../../helpers');
const commonHelper = helpers.common;

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
    this.component = this.config.get('component');

    this.log(yosay(
      'Welcome to the splendid ' + chalk.red('generator-rlreact') + ' generator!'
    ));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your component (lowerCamelCase)?',
        default: 'myComponent'
      },
      {
        type: 'list',
        name: 'type',
        message: 'What type of component are you building?',
        choices: ['FullReduxWithInjectIntoParent', 'SimpleComponent'],
        default: 'FullReduxWithInjectIntoParent'
      }
    ];

    return this.prompt(prompts)
      .then((answers) => {
        Object.assign(this.component, {
          name: answers.name,
          type: answers.type,
          lowerCamelCase: answers.name,
          titleCase: commonHelper.toPlainText(answers.name),
          kebabCase: commonHelper.toKebabCase(answers.name),
          upperCamelCase: commonHelper.toUpperCamelCase(answers.name),
          directory: R.last(this.env.cwd.split('/'))
        });

        this.config.set('component', this.component);
      });
  }

  end() {
    this.fs.delete('.yo-rc.json');

    this.log(yosay(
      `Next steps:
        1) add an api to the model instance located in models/
      `
    ));
  }
};
