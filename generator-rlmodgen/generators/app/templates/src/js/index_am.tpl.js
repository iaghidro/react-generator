'use strict';

(function() {
  angular.module('<%= moduleName %>', ['material.core']);
  <% if (includeDirective) { %> require('./<%= moduleName %>.directive.js'); <% } %>
  <% if (includeService) { %> require('./<%= moduleName %>.factory.js'); <% } %>
  <% if (includeController) { %> require('./<%= moduleName %>.controller.js'); <% } %>
  <% if (includeRun) { %> require('./<%= moduleName %>.run.js'); <% } %>
  <% if (includeValue) { %> require('./<%= moduleName %>.value.js'); <% } %>
  <% if (includeRoute) { %> require('./<%= moduleName %>.route.js'); <% } %>
})()
