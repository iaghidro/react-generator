
(function() {
  'use strict';

  angular
    .module('<%= fileName %>')
    .factory('<%= fileName %>Factory', <%= fileName %>Factory)


  <%= fileName %>Factory.$inject = [];
  
  function <%= fileName %>Factory () {
    class <%= fileName %>Class {
      method() {

      }
    }

    return new <%= fileName %>Class();
  }

})()
