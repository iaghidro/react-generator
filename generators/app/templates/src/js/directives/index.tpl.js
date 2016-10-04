
(function (){
  'use strict';

  angular
    .module('<%= moduleName %>')
    .directive('<%= moduleName %>Directive', <%= moduleName %>Directive)

  <%= moduleName %>Directive.$inject = [];
  function <%= moduleName %>Directive () {

    var directive = {
      restrict: 'EA',
      templateUrl: '<%= moduleName %>.html',
      link: link,
      controller: <%= moduleName %>Controller,
      controllerAs: 'vm',
      bindToController: true
    }

    return  directive

    ////////////////////////////////////////////////////////////////////////////

    function link (scope, elem, attrs) {
      // Code goes here :)
    }


    function <%= moduleName %>Controller () {
      var vm = this;
      // Code goes here :)
    }

  }

})()
