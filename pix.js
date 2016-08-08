;(function() {
  'use strict';
  angular
  .module('nyanmatrix')
  .controller('pix', ['$scope', pix]);

  function pix($scope) {
    $scope.fill = function() {
      index =$scope.$index;
      };
    };
})();
