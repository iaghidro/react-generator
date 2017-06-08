(function() {
    'use strict';

    let <%= componentName %>Component = {
        bindings: {
            presence: '='
        },
        controller: <%= componentName %>Controller,
        templateUrl: 'template.html'
    };

    <%= componentName %>Controller.$inject = [];
    function <%= componentName %>Controller() {
        let vm;

        this.$onInit = function() {
            vm = this;
            vm.foo = 'bar';
        };
    }

    angular.module(moduleName)
      .component('<%= componentName %>', <%= componentName %>Component);
})();
