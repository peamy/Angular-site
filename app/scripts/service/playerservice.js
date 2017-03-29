angular.module('yoApplicationApp').service('playerService', function() {

  this.hello = function()
  {
    return "hello all!";
  }

  var localPlayers;

  this.allPlayers = function()
  {
    localPlayers = JSON.parse(localStorage.getItem("players"));
    if(localPlayers != undefined && localPlayers.length>0) {
      return localPlayers;
    }
    else {
    localPlayers = [
  			{name:"Bob", age:18, email:"bob@bob.nl", goals : [
          {name: "kaas", category:"Groceries",checked:false},
          {name: "Banaan", category:"Groceries",checked:false}
        ]},
  			{name:"Betty", age:22, email:"betty@betty.bet", goals : [
          {name: "Huiswerk", category:"School",checked:false},
          {name: "API maken", category:"Work",checked:false}
        ]}
  		];
      localStorage.setItem("players", JSON.stringify(localPlayers));
      return localPlayers;
    }
  }

  this.addPlayer = function(player)
  {
    localPlayers = JSON.parse(localStorage.getItem("players"));
    localPlayers.push(player);
    localStorage.setItem("players", JSON.stringify(localPlayers));
    return localPlayers;
  }

  this.deletePlayer = function(player)
  {
    var deleteIndex = -1;
    localPlayers.forEach(function(e, i) {
      if(e.email === player.email) {
        deleteIndex = i;
      }
    });

    localPlayers.splice(deleteIndex, 1);
    localStorage.setItem("players", JSON.stringify(localPlayers));
  }

  this.savePlayers = function(players)
  {
    localStorage.setItem("players", JSON.stringify(players));
  }

  this.addFriend = function(player1, player2)
  {
    if(player1.friends === undefined) {
      player1.friends = [];}
    if(player2.friends === undefined) {
      player2.friends = [];}

      var alreadyfriends = false;
    player1.friends.forEach(function(e, i) {
      if(e.email === player2.email) {
        alreadyfriends = true;
      }
    });
    if(!alreadyfriends) {
      player1.friends.push({email:player2.email});
      player2.friends.push({email:player1.email});

      localStorage.setItem("players", JSON.stringify(localPlayers));
    }
  }

  this.removeFriend = function(player1, player2)
  {
    var deleteIndex = -1;
    player1.friends.forEach(function(e, i) {
      if(e.email === player2.email) {
        deleteIndex = i;
      }
    });
    player1.friends.splice(deleteIndex, 1);

    deleteIndex = -1;
    player2.friends.forEach(function(e, i) {
      if(e.email === player1.email) {
        deleteIndex = i;
      }
    });
    player2.friends.splice(deleteIndex, 1);
    localStorage.setItem("players", JSON.stringify(localPlayers));
  }

  this.addScore = function(player, score)
  {
    if(player.scores === undefined)
    {
      player.scores = [];
    }
    player.scores.push(score);
    localStorage.setItem("players", JSON.stringify(localPlayers));
  }

  this.clearScores = function(player)
  {
      player.scores = [];
      localStorage.setItem("players", JSON.stringify(localPlayers));
  }

});
