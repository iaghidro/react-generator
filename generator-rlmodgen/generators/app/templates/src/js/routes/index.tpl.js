
(function() {
  'use strict';

  angular
    .module('<%= moduleName %>')
    .config(config);

  config.$inject = ['$stateProvider'];
  function config($stateProvider) {
    $stateProvider
      .state('main.<%= moduleName %>', {
        url: '/<%= moduleName %>',
        templateUrl: '<%= moduleName.toLowerCase() %>.html',
        abstract: true,
        controller: '<%= moduleName %>Controller',
        controllerAs: 'vm',
        resolve: <%= moduleName %>Resolve
      })
  }

  function <%= moduleName %>Resolve () {
      return 'hello world';
  }

})()
