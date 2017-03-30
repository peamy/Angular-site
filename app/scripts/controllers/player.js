angular.module('yoApplicationApp')
  .controller('PlayerCtrl', function ($rootScope, $scope, $routeParams, playerService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.playerList = playerService.allPlayers();

    $scope.playerList.forEach(function(e) {
      if(e.email === $routeParams.playerEmail) {
        $scope.selectedPlayer = e;
      }
    });

    $scope.playerInfoSelected = function(){
        $scope.playerList.forEach(function(e, i) {
          if(e.email === $scope.selectedPlayerEmail)
             $scope.selectedPlayer = e;
        })
        $scope.calculateFriendList();
      }

      $scope.addFriend = function(player1, player2)
      {
        playerService.addFriend(player1, player2);
        $scope.calculateFriendList();
      }

      $scope.removeFriend = function(player1, player2)
      {
        playerService.removeFriend(player1, player2);
        $scope.calculateFriendList();
      }

        $scope.newFriendInfoSelected = function () {
          $scope.playerList.forEach(function(e, i) {
            if(e.email === $scope.selectedPlayerFriendlistEmail)
            {
              $scope.selectedPlayerFriendlist = e;
             }
          })
        }

        $scope.calculateFriendList = function()
        {
          $scope.friendList = [];
          if($scope.selectedPlayer !== undefined && $scope.selectedPlayer.friends != undefined)
          {
          $scope.selectedPlayer.friends.forEach(function(e, i) {
            $scope.playerList.forEach(function(f, i) {
              if(f.email === e.email)
              {
                $scope.friendList.push(f);
              }
            });
            });
          }
        }

        $scope.clearScore = function(player)
        {
          playerService.clearScores(player);
        }

        $scope.savePlayers = function(){
          playerService.savePlayers($scope.playerList);
        }

        $scope.calculateFriendList();


  })
