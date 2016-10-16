(function() {
  'use strict';

  angular
    .module('<%= fileName %>')
    .service('<%= fileName %>Service', <%= fileName %>Service);

  <%= fileName %>Service.$inject = [];
  
  function <%= fileName %>Service () {
      
    var self = this;
    
    self.firstFunction = function() {
        
    };
    
  }

})();
