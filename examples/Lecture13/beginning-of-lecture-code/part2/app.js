(function () {
  'use strict';

  angular.module('MsgApp', []).controller('MsgController', MsgController).filter('loves', LovesFilter);

  MsgController.$inject = ['$scope', 'lovesFilter'];

  function MsgController($scope, lovesFilter) {
    const msg = 'Yaakov likes to eat healthy snacks at night!';

    $scope.stateOfBeing = 'hungry';

    $scope.sayMessage = () => msg;
    $scope.sayLovesMessage = () => lovesFilter(msg);

    $scope.feedYaakov = function () {
      $scope.stateOfBeing = 'fed';
    };
  }

  function LovesFilter() {
    return function (input) {
      input = input || '';

      return input.replace('likes', 'loves');
    };
  }
})();
