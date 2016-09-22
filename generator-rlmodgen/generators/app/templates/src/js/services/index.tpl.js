
(function() {
  'use strict';

  angular
    .module('<%= moduleName %>')
    .factory('<%= moduleName %>Factory', <%= moduleName %>Factory)


  <%= moduleName %>Factory.$inject = [];
  function <%= moduleName %>Factory () {
    class <%= moduleName %>Class {
      method() {

      }
    }

    return new <%= moduleName %>Class();
  }

})()
