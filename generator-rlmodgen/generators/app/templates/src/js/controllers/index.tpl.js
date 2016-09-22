
(function (){
  'use strict';

  angular
    .module('<%= moduleName %>')
    .controller('<%= moduleName %>Controller', <%= moduleName %>Controller)

  <%= moduleName %>Controller.$inject = [];
  function <%= moduleName %>Controller () {
    var vm = this;
    // Code goes here :)
  }

})()
