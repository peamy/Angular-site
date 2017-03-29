'use strict';

/**
 * @ngdoc function
 * @name yoApplicationApp.controller:PlayersCtrl
 * @description
 * # PlayersCtrl
 * Controller of the yoApplicationApp
 */
angular.module('yoApplicationApp')
  .controller('PlayersCtrl', function ($rootScope, $scope, playerService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.title = "Players"

    $scope.playerList = playerService.allPlayers();

    $scope.deletePlayer = function(player) {
      playerService.deletePlayer(player);
  	};

    $scope.saveNewPlayer = function()
    {
      if($scope.newPlayer!=undefined && $scope.newPlayer.name!=undefined && $scope.newPlayer.email!=undefined && $scope.newPlayer.age!=undefined) {

        $scope.playerList = playerService.addPlayer({
          name: $scope.newPlayer.name,
          age: $scope.newPlayer.age,
          email: $scope.newPlayer.email
        })
        $scope.newPlayer = {};
      }

    }

    $scope.savePlayers = function(){
      playerService.savePlayers($scope.playerList);
    }



  });
