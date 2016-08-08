;(function() {
  'use strict';
  angular
  .module('nyanmatrix')
  .directive('pixcont', pixcontdirve);

  function pixcont() {
    return {
      scope: {
      },
      controller: 'pix',
      templateUrl: 'pix.html'
    };
  }
})();
