(function () {
  'use strict';

  angular.module('MsgApp', []).controller('MsgController', MsgController);

  MsgController.$inject = ['$scope', '$filter'];

  function MsgController($scope, $filter) {
    $scope.name = 'Yaakov';
    $scope.stateOfBeing = 'hungry';
    $scope.cookieCost = .45;

    $scope.sayMessage = function () {
      let msg = 'Yaakov likes to eat healthy snacks at night!';
      const output = $filter('uppercase')(msg);

      return output;
    };

    $scope.feedYaakov = function () {
      $scope.stateOfBeing = 'fed';
    };
  }
})();
