(function() {
    'use strict';

    let <%= componentName %>Component = {
        bindings: {
            presence: '='
        },
        controller: <%= componentName %>Controller,
        templateUrl: '<%= cwd %>/<%= fileName %>-component-template.html'
    };

    <%= componentName %>Controller.$inject = [];
    function <%= componentName %>Controller() {
        let vm;

        this.$onInit = function() {
            vm = this;
            vm.foo = 'bar';
            vm.onCancel = onCancel;
            vm.onSubmit = onSubmit;
        };

        function onCancel() {
        }

        function onSubmit() {
        }
    }

    angular.module(moduleName)
      .component('<%= componentName %>', <%= componentName %>Component);
})();
