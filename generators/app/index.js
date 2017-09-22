'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const R = require('ramda');

const helpers = require('../../helpers');
const commonHelper = helpers.common;

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
          upperCamelCase: commonHelper.toUpperCamelCase(answers.name),
          directory: R.last(this.env.cwd.split('/'))
        });
      });
  }

  writing() {
    //component
    this.fs.copyTpl(
      this.templatePath('component/MyComponent.js'),
      this.destinationPath(`${this.component.upperCamelCase}.js`),
      this.component
    );

    //component types
    this.fs.copyTpl(
      this.templatePath('component/my-component-types.js'),
      this.destinationPath(`${this.component.kebabCase}-types.js`),
      this.component
    );

    //component unit test
    this.fs.copyTpl(
      this.templatePath('component/MyComponent.test.js'),
      this.destinationPath(`${this.component.upperCamelCase}.test.js`),
      this.component
    );

    //reducer
    this.fs.copyTpl(
      this.templatePath('component/reducers/my-reducer.js'),
      this.destinationPath(`reducers/${this.component.kebabCase}.js`),
      this.component
    );

    //reducer unit test
    this.fs.copyTpl(
      this.templatePath('component/reducers/my-reducer.test.js'),
      this.destinationPath(`reducers/${this.component.kebabCase}.test.js`),
      this.component
    );

    //actions
    this.fs.copyTpl(
      this.templatePath('component/actions/my-action.js'),
      this.destinationPath(`actions/${this.component.kebabCase}.js`),
      this.component
    );

    //actions unit test
    this.fs.copyTpl(
      this.templatePath('component/actions/my-action.test.js'),
      this.destinationPath(`actions/${this.component.kebabCase}.test.js`),
      this.component
    );

    //models
    this.fs.copyTpl(
      this.templatePath('component/models/MyModel.js'),
      this.destinationPath(`models/${this.component.upperCamelCase}.js`),
      this.component
    );

    //model instance
    this.fs.copyTpl(
      this.templatePath('component/myModelInstance.js'),
      this.destinationPath(`${this.component.lowerCamelCase}Instance.js`),
      this.component
    );

    //state selectors
    this.fs.copyTpl(
      this.templatePath('component/state-selectors/my-selector.js'),
      this.destinationPath(`state-selectors/${this.component.kebabCase}.js`),
      this.component
    );

    //state selectors unit test
    this.fs.copyTpl(
      this.templatePath('component/state-selectors/my-selector.test.js'),
      this.destinationPath(`state-selectors/${this.component.kebabCase}.test.js`),
      this.component
    );

    //inject component into React barrel file
    commonHelper.insertLineBeforeLineContainingString.call(
      this,
      '//inject-yeoman-components',
      '../../index.js',
      `window.angular.module(moduleName).value('${this.component.upperCamelCase}', wrapComponentWithRootView(${this.component.upperCamelCase}, store));`
    );

    //inject reducer into store
    commonHelper.insertLineBeforeLineContainingString.call(
      this,
      '//inject-yeoman-reducers-import',
      '../../reducers/index.js',
      `import ${ this.component.lowerCamelCase } from '../components/${ this.component.directory }/reducers/${ this.component.kebabCase }'`
    );

    commonHelper.insertLineBeforeLineContainingString.call(
      this,
      '//inject-yeoman-reducers-combine',
      '../../reducers/index.js',
      `${ this.component.lowerCamelCase }: ${ this.component.lowerCamelCase }`
    );
  }

  end() {
    this.log(yosay(
      `Next steps:
        1) add an api to the model instance located in models/
      `
    ));
  }
};
