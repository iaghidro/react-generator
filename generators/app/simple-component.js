'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const R = require('ramda');

const helpers = require('../../helpers');
const commonHelper = helpers.common;

module.exports = class extends Generator {
  writing() {
    this.component = this.config.get('component');

    if (this.component.type !== 'SimpleComponent') {
      return;
    }

    //component
    this.fs.copyTpl(
      this.templatePath('simple-component/MyComponent.js'),
      this.destinationPath(`${this.component.upperCamelCase}.js`),
      this.component
    );

    //component unit test
    this.fs.copyTpl(
      this.templatePath('simple-component/MyComponent.test.js'),
      this.destinationPath(`${this.component.upperCamelCase}.test.js`),
      this.component
    );
  }
};
