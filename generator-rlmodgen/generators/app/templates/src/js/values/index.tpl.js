
(function() {
  'use strict';

  angular
    .module('<%= moduleName %>')
    .value('<%= moduleName %>Value', <%= moduleName %>Value)


  <%= moduleName %>Value.$inject = [];
  function <%= moduleName %>Value () {
    var CONSTANT = 123;

    return CONSTANT;
  }

})()
