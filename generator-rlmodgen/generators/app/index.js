var generators = require('yeoman-generator');
var R = require('ramda');
var helper = require('../../helpers').common;
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
    this.argument('path', { type: String, required: true });
    this.log(yosay(
      'Welcome to the kickass ' + chalk.red('rlmodgen') + ' generator!'
    ));
    this.log(`Creating a new module in: ${this.path}`);
    this.log(`Make sure you are in a directory with the same name as the module. ie: sfValidate directory for module named sfValidate. Pretty simple huh?`);
  },
  prompting: {
    name: function () {
      var done = this.async();
      this.prompt({
        type    : 'input',
        name    : 'name',
        message : 'Your module name',
        default : 'rlYourModuleName'
      }, function (answers) {
        this.moduleName = answers.name;
        this.moduleNameLowerCase = answers.name.toLowerCase();
        done();
      }.bind(this));
    },
    type: function () {
      var done = this.async();
      this.prompt({
        type    : 'list',
        name    : 'type',
        message : 'What type of module are you building',
        choices: ['ui', 'node'],
        default : 'ui'
      }, function (answers) {
        this.type = answers.type;
        done();
      }.bind(this));
    },
    angularMaterial: function () {
      var done = this.async();
      this.prompt({
        type    : 'confirm',
        name    : 'requiresAngularMaterial',
        message : 'Do you need angular material support in your module?',
        when    : this.type === 'ui',
        default : false
      }, function (answers) {
        this.requiresAngularMaterial = answers.requiresAngularMaterial;
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
    },
    components: function () {
      var done = this.async();
      this.prompt({
        type    : 'checkbox',
        name    : 'components',
        choices: ['directive', 'controller', 'service', 'route', 'run', 'value'],
        message : 'Please choose the components you need for this module',
        when: this.type == 'ui',
        default : ''
      }, function (answers) {
        this.components = answers.components;
        done();
      }.bind(this));
    }
  },
  writing: function() {
    //copy package.json
    if (!helper.moduleNameMatchesDirectory(this.moduleName, this.path)) {
      var done = this.async();
      var choices = [this.moduleName, R.last(this.path.split('/'))];
      this.prompt({
        type    : 'list',
        name    : 'moduleNameConflict',
        choices: choices,
        message : 'The module name provided doesn\'t match your current directory. Which would you prefer?',
        default : ''
      }, function (answers) {
        this.moduleName = answers.moduleNameConflict;
        //they want the name to match the what they entered in first prompt
        if (answers.moduleNameConflict === choices[0]) {
          this.renameDirectory = true;
        }
        helper.copyPackageJson(this);
        done();
      }.bind(this));
    } else {
      helper.copyPackageJson(this);
    }

    //specific files for ui type modules
    if (this.type === 'ui') {
      //copy gulpfile.js
      this.fs.copyTpl(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );

      //copy styles
      this.fs.copyTpl(
        this.templatePath('src/styles'),
        this.destinationPath('src/styles')
      );

      //copy module entry point index.js
      this.fs.copyTpl(
        this.templatePath('index.tpl.js'),
        this.destinationPath('index.js')
      );

      //copy source index.js file
      this.fs.copyTpl(
        this.templatePath(this.requiresAngularMaterial ?
          'src/js/index_am.tpl.js' :
          'src/js/index.tpl.js'
        ),
        this.destinationPath('src/js/index.js'), {
          moduleName: this.moduleName,
          includeDirective: R.contains('directive', this.components),
          includeService: R.contains('service', this.components),
          includeController: R.contains('controller', this.components),
          includeRun: R.contains('run', this.components),
          includeValue: R.contains('value', this.components),
          includeRoute: R.contains('route', this.components)
        }
      );

      //copy .gitignore
      this.fs.copyTpl(
        this.templatePath('gitignore.tpl'),
        this.destinationPath('.gitignore')
      );

      //copy .npmignore
      this.fs.copyTpl(
        this.templatePath('npmignore.tpl'),
        this.destinationPath('.npmignore')
      );
    }

    //set directive and copy
    if (this.type === 'ui' && R.contains('directive', this.components)) {
      this.fs.copyTpl(
        this.templatePath('src/js/directives/index.tpl.js'),
        this.destinationPath(`src/js/${this.moduleNameLowerCase}.directive.js`), {
          moduleName: this.moduleName
        }
      );

      //copy html template
      this.fs.copyTpl(
        this.templatePath('src/templates/index.jade'),
        this.destinationPath(`src/templates/${this.moduleNameLowerCase}.jade`)
      );
    }

    //set service and copy
    if (this.type === 'ui' && R.contains('service', this.components)) {
      this.fs.copyTpl(
        this.templatePath('src/js/services/index.tpl.js'),
        this.destinationPath(`src/js/${this.moduleNameLowerCase}.factory.js`), {
          moduleName: this.moduleName
        }
      );
    }

    if (this.type === 'ui' && R.contains('run', this.components)) {
      this.fs.copyTpl(
        this.templatePath('src/js/runs/index.tpl.js'),
        this.destinationPath(`src/js/${this.moduleNameLowerCase}.run.js`), {
          moduleName: this.moduleName
        }
      );
    }

    if (this.type === 'ui' && R.contains('value', this.components)) {
      this.fs.copyTpl(
        this.templatePath('src/js/values/index.tpl.js'),
        this.destinationPath(`src/js/${this.moduleNameLowerCase}.value.js`), {
          moduleName: this.moduleName
        }
      );
    }

    if (this.type === 'ui' && R.contains('controller', this.components)) {
      this.fs.copyTpl(
        this.templatePath('src/js/controllers/index.tpl.js'),
        this.destinationPath(`src/js/${this.moduleNameLowerCase}.controller.js`), {
          moduleName: this.moduleName
        }
      );
    }

    //set directive and copy
    if (this.type === 'ui' && R.contains('route', this.components)) {
      this.fs.copyTpl(
        this.templatePath('src/js/routes/index.tpl.js'),
        this.destinationPath(`src/js/${this.moduleNameLowerCase}.route.js`), {
          moduleName: this.moduleName
        }
      );
    }


    //copy tests into place
    this.fs.copyTpl(
      this.templatePath('tests'),
      this.destinationPath('tests'), {
        moduleName: this.moduleName
      }
    );
  },
  install: function () {
    var done = this.async();
    this.prompt({
      type    : 'confirm',
      name    : 'performNpmInstall',
      message : 'Do you want to perform an NPM install?',
      default : false
    }, function (answers) {
      if (answers.performNpmInstall) {
        this.npmInstall();
      }
      done();
    }.bind(this));
  },
  end: function(){
    if (this.renameDirectory) {
      fs.rename(this.path, helper.renameDirectoryToMatchModuleName(this.moduleNameLowerCase, this.path), () => {
        helper.printFarewell(this);
      });
    } else {
        helper.printFarewell(this);
    }
  }
});
