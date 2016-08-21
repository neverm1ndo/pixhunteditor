'use strict';
angular.module('nyanmatrix').controller('matrixcontrol', ['$scope', matrixcontrol]);
var curcol = "pinkb";
var index;
var clear;
var save;
var cansize;
var cancol;
var mode = "brush1";
function matrixcontrol($scope) {
  $scope.line = [];
  $scope.saveling = true;
  $scope.loading = true;
  $scope.sethide = true;
  $scope.brushSizer = true;
  $scope.ermode = true;
  $scope.ySize = 40;
  $scope.brushmode = "1px";
  $scope.canfills = [{col: "white"}, {col: "pepe"}];
  for (var i = 0; i < cansize ; i++) {
    $scope.line.push({col: "none"});
  }
  clear = $scope.line;
  $scope.emode = " ";
  $scope.generalClass = 'pinkb';
  $scope.curcol = $scope.generalClass;
$scope.brush = function(e) {
    $scope.generalClass = e.target.getAttribute('class');
    $scope.curcol = $scope.generalClass;
    curcol = $scope.curcol;
    $scope.ermode = true;
  };
  $scope.brushmodel1 = function() {
    mode = "brush1";
    $scope.brushmode = "1px";
  }
  $scope.brushmodel4 = function() {
    mode = "brush4";
    $scope.brushmode = "4px";
  }
  $scope.brushmodel5 = function() {
    mode = "brush5";
    $scope.brushmode = "5px";
  }
  $scope.brushmodel9 = function() {
    mode = "brush9";
    $scope.brushmode = "9px";
  }
  $scope.brushmodel13 = function() {
    mode = "brush13";
    $scope.brushmode = "13px";
  }
  $scope.brushmodel22 = function() {
    mode = "brush22";
    $scope.brushmode = "22px";
  }
  $scope.cleaner = function() {
    $scope.ermode = false;
    $scope.curcol = "cleaner";
    $scope.generalClass = "pinkb"
  };
  $scope.fill = function() {
    if (mode == "brush1"){
    $scope.line[index]['col'] = $scope.curcol;
    //  console.log('pix#' + index + ' filled by ' + $scope.curcol);
  };
    if (mode == "brush4") {  //that brush makes me cry
      $scope.line[index]['col'] = $scope.curcol;
      $scope.line[index + 1]['col'] = $scope.curcol;
      $scope.line[index - 80]['col'] = $scope.curcol;
      $scope.line[index - 79]['col'] = $scope.curcol;
    };
    if (mode == "brush5") {  //that brush makes me cry
      $scope.line[index]['col'] = $scope.curcol;
      $scope.line[index + 1]['col'] = $scope.curcol;
      $scope.line[index - 80]['col'] = $scope.curcol;
      $scope.line[index + 80]['col'] = $scope.curcol;
      $scope.line[index - 1]['col'] = $scope.curcol;
    };
    if (mode == "brush9") { //that brush makes me cry
      $scope.line[index]['col'] = $scope.curcol;
      $scope.line[index + 1]['col'] = $scope.curcol;
      $scope.line[index - 80]['col'] = $scope.curcol;
      $scope.line[index - 81]['col'] = $scope.curcol;
      $scope.line[index - 79]['col'] = $scope.curcol;
      $scope.line[index + 80]['col'] = $scope.curcol;
      $scope.line[index + 81]['col'] = $scope.curcol;
      $scope.line[index + 79]['col'] = $scope.curcol;
      $scope.line[index - 1]['col'] = $scope.curcol;
    };
    if (mode == "brush13") { //that brush makes me cry
      $scope.line[index]['col'] = $scope.curcol;
      $scope.line[index + 1]['col'] = $scope.curcol;
      $scope.line[index + 2]['col'] = $scope.curcol;
      $scope.line[index - 80]['col'] = $scope.curcol;
      $scope.line[index - 160]['col'] = $scope.curcol;
      $scope.line[index - 81]['col'] = $scope.curcol;
      $scope.line[index - 79]['col'] = $scope.curcol;
      $scope.line[index + 80]['col'] = $scope.curcol;
      $scope.line[index + 160]['col'] = $scope.curcol;
      $scope.line[index + 81]['col'] = $scope.curcol;
      $scope.line[index + 79]['col'] = $scope.curcol;
      $scope.line[index - 1]['col'] = $scope.curcol;
      $scope.line[index - 2]['col'] = $scope.curcol;
    };
    if (mode == "brush22") { //that brush makes me cry so much
      $scope.line[index]['col'] = $scope.curcol;
      $scope.line[index + 1]['col'] = $scope.curcol;
      $scope.line[index + 2]['col'] = $scope.curcol;
      $scope.line[index - 80]['col'] = $scope.curcol;
      $scope.line[index - 160]['col'] = $scope.curcol;
      $scope.line[index - 161]['col'] = $scope.curcol;
      $scope.line[index - 162]['col'] = $scope.curcol;
      $scope.line[index - 159]['col'] = $scope.curcol;
      $scope.line[index - 158]['col'] = $scope.curcol;
      $scope.line[index - 81]['col'] = $scope.curcol;
      $scope.line[index - 82]['col'] = $scope.curcol;
      $scope.line[index - 79]['col'] = $scope.curcol;
      $scope.line[index - 78]['col'] = $scope.curcol;
      $scope.line[index + 80]['col'] = $scope.curcol;
      $scope.line[index + 160]['col'] = $scope.curcol;
      $scope.line[index + 161]['col'] = $scope.curcol;
      $scope.line[index + 162]['col'] = $scope.curcol;
      $scope.line[index + 159]['col'] = $scope.curcol;
      $scope.line[index + 158]['col'] = $scope.curcol;
      $scope.line[index + 81]['col'] = $scope.curcol;
      $scope.line[index + 82]['col'] = $scope.curcol;
      $scope.line[index + 79]['col'] = $scope.curcol;
      $scope.line[index + 78]['col'] = $scope.curcol;
      $scope.line[index - 1]['col'] = $scope.curcol;
      $scope.line[index - 2]['col'] = $scope.curcol;
    };
  };
  $scope.clear = function() {
    $scope.line = [];
     if ($scope.xSize = "") {
       for (var i = 0; i < 1920 ; i++) {
         $scope.line.push({col: "none"});
       };
      }
    else {
       for (var i = 0; i < cansize ; i++) {
         $scope.line.push({col: "none"});
       };
      }
  };
  $scope.brushSize = function() {
    if ($scope.brushSizer == true) {
      $scope.brushSizer = false;
    }
    else {
      $scope.brushSizer = true;
    };
  };
  $scope.save = function() {
    $scope.saveling = false;
    save = JSON.stringify($scope.line);
    $scope.savearr = save;
  };
  $scope.load = function() {
    if ($scope.loader != NaN) {
      save = JSON.parse($scope.loader);
      $scope.line = save;
      cansize = $scope.line.length;
      $scope.loading = true;
    }
    else {
      $scope.line = [];
      $scope.loading = true;
    };
  };
  $scope.setconfirm = function() {
    cansize = 80 * $scope.ySize;
    if ($scope.gridShow == true) {
      $scope.grid = "grid";
    }
    else {
      $scope.grid = "none";
    };
    if ($scope.line.length < cansize) {
      for (var i = $scope.line.length ; i < cansize ; i++) {
        $scope.line.push({col: "none"});
        };
    };
    if ($scope.line.length > cansize) {
      for (var i = $scope.line.length ; i > cansize ; i--) {
        $scope.line.pop();
        };
      };
     $scope.sethide = true;
  };
};
