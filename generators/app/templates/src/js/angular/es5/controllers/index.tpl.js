(function (){
  'use strict';

  angular
    .module('<%= fileName %>')
    .controller('<%= fileName %>Controller', <%= fileName %>Controller);

  <%= fileName %>Controller.$inject = [];
  
  function <%= fileName %>Controller () {
      
    var self = this;
    
    self.init = function() {
        
    };
    
  }

})();
