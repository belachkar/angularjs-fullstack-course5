(function () {
  'use strict';

  angular.module('CounterApp', []).controller('CounterController', CounterController);
  CounterController.$inject = ['$scope'];

  function CounterController($scope) {
    $scope.onceCounter = 0;
    $scope.counter = 0;

    $scope.showNumberOfWatchers = function () {
      console.log('# of watcheres:', $scope.$$watchersCount);
    };

    $scope.countOnce = () => {
      $scope.onceCounter = 1;
    };

    $scope.upCount = () => {
      $scope.counter++;
    };

    // Manule watchers
    $scope.$watch('onceCounter', (newValue, oldValue) => {
      console.log('onceCounter old Value:', oldValue);
      console.log('onceCounter new Value:', newValue);
    });

    $scope.$watch('counter', (newValue, oldValue) => {
      console.log('counter old Value:', oldValue);
      console.log('counter new Value:', newValue);
    });
  }
})();
