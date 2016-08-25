'use strict';
angular.module('nyanmatrix').controller('matrixcontrol', ['$scope', matrixcontrol]);
var curcol = "pinkb";
var index;
var clear;
var save;
var cansize;
var cancol;
var hist;
var lastMove;
var stepLine;
var step = 0;
var brushArr;
var mode = "brush1";
function matrixcontrol($scope) {
  $scope.line = [];
  hist = [];
  $scope.saveling = true;
  $scope.loading = true;
  $scope.sethide = true;
  $scope.brushSizer = true;
  $scope.ermode = true;
  $scope.ySize = 40;
  $scope.brushmode = "1px";
  $scope.selectBg = "white";
  $scope.bgcolors = ["white", "black","blue", "nyanspace"];
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
    if (mode == "brush4") {
      brushArr = [0, 1, -80, -79];
      for ( brushArr; brushArr.length != 0 ; brushArr.pop()) {
        $scope.line[index + brushArr[brushArr.length - 1]]['col'] = $scope.curcol;
     };
    };
    if (mode == "brush5") {
      brushArr = [0, 1, -1, -80, 80];
      for ( brushArr; brushArr.length != 0 ; brushArr.pop()) {
        $scope.line[index + brushArr[brushArr.length - 1]]['col'] = $scope.curcol;
     };
    };
    if (mode == "brush9") {
      brushArr = [0, 1, 79, 80, 81, -1, -79, -80, -81];
      for ( brushArr; brushArr.length != 0 ; brushArr.pop()) {
        $scope.line[index + brushArr[brushArr.length - 1]]['col'] = $scope.curcol;
     };
    };
    if (mode == "brush13") {
      brushArr = [0, 1, 2, 79, 80, 81, 160, -1, -2, -79, -80, -81, -160];
      for ( brushArr ;brushArr.length != 0 ; brushArr.pop()) {
        $scope.line[index + brushArr[brushArr.length - 1]]['col'] = $scope.curcol;
     };
    };
    if (mode == "brush22") {
      brushArr = [0, 1, 2, 78, 79, 80, 81, 82, 158, 159, 160, 161, 162, -1, -2, -78, -79, -80, -81, -82, -158, -159, -160, -161, -162];
      for ( brushArr; brushArr.length != 0 ; brushArr.pop()) {
        $scope.line[index + brushArr[brushArr.length - 1]]['col'] = $scope.curcol;
     };
    };
    lastMove = JSON.stringify($scope.line);
    // if (step != 4) {
    //   step++;
    //   console.log(step);
    //     for (i = 4; i != step ; i--) {
    //       hist.pop();
    //       console.log(hist);
    //     };
    //     hist.push(lastMove);
    //     console.log(hist);
    //   }
    //   else {
    //     hist.shift();
    //     hist.push(lastMove);
    //   };
    if (step != 4) {
      step++;
      if  (hist.length == 5) {
        stepLine = hist.length;
        for ( i = step ; i != stepLine; i++) {
          hist.pop();
        };
        hist.push(lastMove);
      }
      else {
        hist.push(lastMove);
        };
      }
     else {
      if (hist.length == 5) {
        hist.shift();
        hist.push(lastMove);
        }
      else {
        hist.push(lastMove);
        };
      };
      // console.log(hist);
      // console.log(hist.length);
      // console.log("You on step " + step + "/4 now...");
     };
  $scope.undo = function() {
    if ( step > 0 ) {
      step--;
    };
    function switchStep() {
      switch (step) {
        case 0:
        $scope.line = JSON.parse(hist[0]);
        // console.log("You on step " + step + "/4 now...");
          break;
        case 1:
        $scope.line = JSON.parse(hist[1]);
        // console.log("You on step " + step + "/4 now...");
          break;
        case 2:
        $scope.line = JSON.parse(hist[2]);
        // console.log("You on step " + step + "/4 now...");
          break;
        case 3:
        $scope.line = JSON.parse(hist[3]);
        // console.log("You on step " + step + "/4 now...");
          break;
        case 4:
        $scope.line = JSON.parse(hist[4]);
        // console.log("You on step " + step + "/4 now...");
          break;
      };
    };
    switchStep();
  };
  $scope.redo = function() {
    if ( step < 4 ) {
      step++;
      // console.log("step " + step);
    };
    function switchStep() {
      switch (step) {
        case 0:
        $scope.line = JSON.parse(hist[0]);
        // console.log("You on step " + step + "/4 now...");
          break;
        case 1:
        $scope.line = JSON.parse(hist[1]);
        // console.log("You on step " + step + "/4 now...");
          break;
        case 2:
        $scope.line = JSON.parse(hist[2]);
        // console.log("You on step " + step + "/4 now...");
          break;
        case 3:
        $scope.line = JSON.parse(hist[3]);
        // console.log("You on step " + step + "/4 now...");
          break;
        case 4:
        $scope.line = JSON.parse(hist[4]);
        // console.log("You on step " + step + "/4 now...");
          break;
      };
    };
    switchStep();
    // console.log(hist);
  };
  $scope.clear = function() {
    $scope.line = [];
     if ($scope.xSize = "") {
       for (var i = 0; i < cansize ; i++) {
         $scope.line.push({col: "none"});
       };
      }
    else {
       for (var i = 0; i < cansize ; i++) {
         $scope.line.push({col: "none"});
       };
     };
     if  (hist.length == 5) {
       for ( i = 4 ; i > step; i--) {
         hist.pop();
       };
     };
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
    if ($scope.loader != null) {
      save = JSON.parse($scope.loader);
      $scope.line = save;
      // hist = [];
      // lastMove.push($scope.line);
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
     lastMove = JSON.stringify($scope.line);
     hist.push(lastMove);
    //  console.log(hist);
  };
};
