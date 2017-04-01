'use strict';

/**
 * @ngdoc function
 * @name yoApplicationApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the yoApplicationApp
 */
angular.module('yoApplicationApp')
  .controller('GoalsCtrl', function ($rootScope, $scope, playerService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.headText = "These are all of the players goals!";
    $scope.extraFilter = "";


    $scope.categories = ["Groceries", "Work", "School", "Lunch"];

    $scope.playerList = playerService.allPlayers();

    $scope.newItems = [];
    $scope.playerList.forEach(function(e, i) {
      if(e.goals === undefined) {
        e.goals = [];
      }

      e.goals.forEach(function(f){
          f.player = e.name;
          f.playerEmail = e.email;
          $scope.newItems.push(f);

      })
    })

  	$scope.deleteItem = function(item) {

  		var deleteIndex = -1;
  		$scope.newItems.forEach(function(e, i) {
  			if(e.name === item.name && item.category === e.category && item.player === e.player) {
  				deleteIndex = i;
  			}
  		});
  		$scope.newItems.splice(deleteIndex, 1);

      var deleteIndex=-1;
      $scope.playerList.forEach(function(e, i) {
        e.goals.forEach(function(f, i) {
    			if(f.name === item.name) {
    				deleteIndex = i;
            e.goals.splice(deleteIndex, 1);
    			}
    		});
  		});

  		playerService.savePlayers($scope.playerList);
  	};

  	$scope.saveNewItem = function() {

      $scope.playerList.forEach(function(e, i) {

        if(e.email === $scope.selectedPlayerEmail && $scope.newItem.name != undefined)
        {
          $scope.itemToAdd = {
      			name: $scope.newItem.name,
      			category: $scope.newItem.category,
      			checked: false,
            player: e.name,
            playerEmail : e.email
      		}

          if(e.goals === undefined) {
              e.goals = [$scope.itemToAdd];
          }
          else {
            e.goals.push($scope.itemToAdd);
          }
          $scope.newItems.push($scope.itemToAdd);


      		$scope.newItem = {};

          playerService.savePlayers($scope.playerList);
        }
      })
  	};

    $scope.addItemToPlayer = function(email, item)
    {
      if(email!==undefined)
      {
        $scope.playerList.forEach(function(e, i) {
          if(e.email === email)
    			   e.goals.push(item);
    		})
      }
      playerService.savePlayers($scope.playerList);
    }

    $scope.saveItems = function()
    {
      playerService.savePlayers($scope.playerList);
    }

    $scope.itemTracker= function(item) {
      return item.name + item.category + item.playerEmail;
    }

  });
