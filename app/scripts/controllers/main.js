'use strict';

/**
 * @ngdoc function
 * @name yoApplicationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApplicationApp
 */
angular.module('yoApplicationApp')
  .controller('MainCtrl', function ($rootScope, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.hello = "hello all!";//playerService.hello();
  });
