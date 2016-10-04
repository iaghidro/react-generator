
(function (){
  'use strict';

  angular
    .module('<%= fileName %>')
    .controller('<%= fileName %>Controller', <%= fileName %>Controller)

  <%= fileName %>Controller.$inject = [];
  
  function <%= fileName %>Controller () {
    var vm = this;
    // Code goes here :)
  }

})();
