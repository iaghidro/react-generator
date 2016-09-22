
(function() {
  'use strict';

  angular
    .module('<%= moduleName %>')
    .run(onLoad);

  onLoad.$inject = ['$rootScope'];
  function onLoad($rootScope) {

    $rootScope.$on('<%= moduleName %>Event', function(e, data) {
      console.log('<%= moduleName %> event hit!');
    });

  }

})()
